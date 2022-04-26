//Module stops selected instance (selected instances)
import {StopInstancesCommand} from "@aws-sdk/client-ec2";
import ec2Client from "./libs/ec2Client.js";
// Function requires an object "params", which has to contain "instanceIDs" array
const stopInstance = async (params) => {
        try {
            return await ec2Client.send(new StopInstancesCommand(params));
        } catch (err) {
            console.log("Error", err);
        }
};
export default stopInstance;