//Module gets the AMI ID by product code
import {DescribeImagesCommand} from "@aws-sdk/client-ec2";
import ec2Client from "./libs/ec2Client.js";
// Function returns AMI ID
const describeAMI = async () => {
    const params = {
        Filters: [
            {
                Name: 'product-code',
                Values: [
                    'e4db8sityo6vmgym1ewplwmzj'
                ]
            },
        ]
    };
    const data = await ec2Client.send(new DescribeImagesCommand(params));
    return(data.Images[2].ImageId);
}

export default describeAMI;