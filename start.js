import ec2Client from "./libs/ec2Client.js";

import {StartInstancesCommand} from "@aws-sdk/client-ec2";

// Set the parameters
//const params = { InstanceIds: ["i-0c22e97fe70c5d842"] }; // Array of INSTANCE_IDs

const startInstance = async (params) => {
    try {
        const data = await ec2Client.send(new StartInstancesCommand(params));
        console.log("Success", data.StartingInstances);
        return data;
    } catch (err) {
        console.log("Error2", err);
    }
};

export default startInstance
