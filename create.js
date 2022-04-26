// Module that creates an Instance
import {CreateTagsCommand, RunInstancesCommand} from "@aws-sdk/client-ec2";
import ec2Client from "./libs/ec2Client.js";
// Function createInstance requires the instance's name and AMI ID (image ID)
// Function returns the created instance's ID
async function createInstance(name, imageId){
    let instanceId;
    const instanceParams = {
        ImageId: imageId,
        InstanceType: "c4.2xlarge", // CHOOSE FROM c4.2xlarge, c4.4xlarge, c4.8xlarge, c5.4xlarge, c5.9xlarge, c5.12xlarge and c5.18xlarge
        KeyName: "instance-test",   // REPLACE WITH YOUR KEY PAIR NAME
        SecurityGroupIds: ["sg-055a74d056302abed"], // REPLACE WITH YOUR SECURITY GROUP ID
        MinCount: 1,
        MaxCount: 1,
    };
    try {
        // Creating instance
        const data = await ec2Client.send(new RunInstancesCommand(instanceParams));
        instanceId = data.Instances[0].InstanceId;
        // Adding tags to the created instance
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
            // Tagging the created instance
            const data = await ec2Client.send(new CreateTagsCommand(tagParams));
        } catch (err) {
            console.log("Error", err);
        }
    } catch (err) {
        console.log("Error", err);
    }
    return instanceId;
}

export default createInstance;