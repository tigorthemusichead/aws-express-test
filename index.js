// Main server app
import express from "express"
import startInstance from "./start.js";
import stopInstance from "./stop.js";
import createInstance from "./create.js"
import describeInstance from "./describe.js"
import describeAMI from "./imageId.js"

const PORT = process.env.PORT || 3001;
const app = express();

// Object to pass to stopInstance and startInstance functions
let params = {InstanceIds: [], amiID: await describeAMI()}

app.get("/start", (req, res) =>{
    startInstance(params)
        .then(() => res.json({message: "Instance is started"}));
});

app.get("/stop", (req, res) => {
    stopInstance(params)
        .then(() => res.json({message: "Instance is stopped"}));
});

app.get("/create", async (req, res) =>{
    // REPLACE "Test-Instance" WITH ANY NAME YOU WANT
    params.InstanceIds[0] = await createInstance("Test-Instance", params.amiID);
    res.json({message: "Instance is created", instanceId: params.InstanceIds[0]});
})

app.get("/describe", async (req, res) => {
    res.json(await describeInstance());
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

