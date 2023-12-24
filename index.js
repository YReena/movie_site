const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
require('./db/conn');
app.use(require('./Route/route'));

app.use(cors());

app.listen(9000, ()=>{
    console.log("hellow form server side");
})
