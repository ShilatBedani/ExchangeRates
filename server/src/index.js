const cors=require("cors");
const express=require("express");
const bodyparser=require("body-parser");
const app=express();
const apirouter=require("./Router/apiRouter");
const datarouter=require("./Router/dataRouter");

app.use(cors());
app.use(bodyparser.json());

const port=8080;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const ConnectionMongo=require("./mongoDB");
ConnectionMongo();

app.use("/",apirouter);
app.use("/getdata",datarouter);

module.exports = app;