const express = require('express');
const app = express();

const cors = require('cors');
const dotEnv = require('dotenv');
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json({limit:"50mb"}));

app.use(bodyParser.urlencoded({limit:"50mb",parameterLimit : 100000, extended : true}));

dotEnv.config({path:"./.env"})

const port = process.env.PORT || 5000;

app.get("/hello", (req, res) => {
    res.send("Server response");
})

app.post("/hello2", (req, res) => {
    let {num1,num2} = req.body;
    num1+=1;
    num2+=2;
    res.send({num1: num1, num2: num2});

})

app.post("/hello2/:name/:email",(req, res) => {
    let myname = req.params.name;
    let myemail = req.params.email;
    res.send({myname: myname, myemail: myemail});
})

app.get("/",(req, res) => {
    res.send("Hii");
})

app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})