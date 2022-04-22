import {CreateTagsCommand, RunInstancesCommand} from "@aws-sdk/client-ec2";
import ec2Client from "./libs/ec2Client.js";

// Set the parameters



async function createInstance(name, imageId){
    let instanceId;
    const instanceParams = {
        ImageId: imageId,
        //InstanceType: "t2.micro",
        InstanceType: "c4.2xlarge",
        KeyName: "instance-test",
        SecurityGroupIds: ["sg-055a74d056302abed"],
        MinCount: 1,
        MaxCount: 1,
    };
    try {
        const data = await ec2Client.send(new RunInstancesCommand(instanceParams));
        console.log(data.Instances[0].InstanceId);
        instanceId = data.Instances[0].InstanceId;
        console.log("Created instance", instanceId);
        // Add tags to the instance
        const tagParams = {
            Resources: [instanceId],
            Tags: [
                {
                    Key: "Name",
                    Value: name,
                },
            ],
        };
        try {
            const data = await ec2Client.send(new CreateTagsCommand(tagParams));
            console.log("Instance tagged");
        } catch (err) {
            console.log("Error", err);
        }
    } catch (err) {
        console.log("Error", err);
    }
    return instanceId;
};

export default createInstance;