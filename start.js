// Module starts a selected instance (selected instances)
import ec2Client from "./libs/ec2Client.js";
import {StartInstancesCommand} from "@aws-sdk/client-ec2";
// Function requires an object "params", which has to contain "instanceIDs" array
const startInstance = async (params) => {
    try {
        return await ec2Client.send(new StartInstancesCommand(params));
    } catch (err) {
        console.log("Error2", err);
    }
};

export default startInstance;
