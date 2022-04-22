import express from "express"
import startInstance from "./start.js";
import stopInstance from "./stop.js";
import createInstance from "./create.js"
import describeInstance from "./describe.js"
import {describeAMI} from "./imageId.js"

const PORT = process.env.PORT || 3001;

const app = express();

const params = {InstanceIds: ["i-00000000000000000"], amiID: await describeAMI()}

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get("/start", (req, res) =>{
    res.json({message: "Instance is started"});
    startInstance(params)
        .then(() => console.log('start'));
});

app.get("/stop", (req, res) => {
    res.json({message: "Instance is stopped"});
    stopInstance(params)
        .then(() => console.log('stop'));
});

app.get("/create", async (req, res) =>{
    params.InstanceIds[0] = await createInstance("Test-Instance-AMI", params.amiID); //<INSTANCE NAME>
    //console.log(params.InstanceIds[0]+" - instance id");
    res.json({message: "Instance is created", instanceId: params.InstanceIds[0]});
})

app.get("/describe", async (req, res) => {

    res.json(await describeInstance());
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

