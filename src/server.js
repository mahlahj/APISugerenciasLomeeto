import express from "express";
import connect from "./database";

const app = express();

//Settings
app.listen(27017, () => console.log("esta mierda no sirve... :C"));

//Routes
app.get("/", async (req, res) => {
    const datab = await connect();
    
    res.send(datab);
});

export default app;