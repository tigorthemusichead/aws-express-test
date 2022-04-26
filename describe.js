// Module that describes all the instances of your AWS account
import { DescribeInstancesCommand } from "@aws-sdk/client-ec2";
import ec2Client from "./libs/ec2Client.js";
// Function returns an object
const describeInstance = async () => {
    let data;
    try {
        data = await ec2Client.send(new DescribeInstancesCommand({}));
    } catch (err) {
        console.log("Error", err);
    }
    return data;
};
export default describeInstance;