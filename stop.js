import {
    StopInstancesCommand
} from "@aws-sdk/client-ec2";
import ec2Client from "./libs/ec2Client.js";

const stopInstance = async (params) => {
        try {
            const data = await ec2Client.send(new StopInstancesCommand(params));
            console.log("Success", data.StoppingInstances);
            return data;
        } catch (err) {
            console.log("Error", err);
        }
};
export default stopInstance;