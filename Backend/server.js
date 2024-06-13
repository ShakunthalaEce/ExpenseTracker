let express = require("express");
let bodyParser = require("body-parser");
let mongoose=require("mongoose");
let router=require("./router");
let cors = require('cors');
const PORT=5000;

let app=express();
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use(router);//middle ware

mongoose.connect("mongodb://127.0.0.1:27017/expense_tracker",{
    useUnifiedTopology:true,
    useNewUrlParser:true,
})
.then(()=>console.log("Connected to DB"));
//object relational mapping(orm)-->mongoose-npm pacakge
//At the end of the file-->app.listen()


app.listen(PORT,callBack);
 function callBack()
{
    console.log("Connected to the port"+PORT);
}