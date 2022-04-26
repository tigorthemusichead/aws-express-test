import { EC2Client } from "@aws-sdk/client-ec2";
const REGION = "us-east-1"; // REPLACE WITH YOUR REGION
const ec2Client = new EC2Client({ region: REGION });

export default ec2Client;