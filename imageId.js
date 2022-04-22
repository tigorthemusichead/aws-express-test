import {DescribeImagesCommand} from "@aws-sdk/client-ec2";
import ec2Client from "./libs/ec2Client.js";

// get the current Amazon Linux 2 AMIs
export async function describeAMI(){
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
