let express = require("express");
//let path =require("path");

let router=express.Router();
let Expense=require("./models/expense");
// router.get("/",(req,res)=>{
//     res.send("This is get call method");
// });
//? http://localhost:5000/expense/create POST

// router.get("/login",(req,res)=>{
//     res.sendFile(path.join(__dirname,"index.html"));
// });
router.post("/expense/create",createExpense);
router.get("/expense/get");
router.patch("/expense/edit/:id");
router.delete("expense/delete/:id");

async function createExpense(req,res){
    let body=req.body;
    console.log(body)
    let newExpense=new Expense({
        id: body.id,
        title:body.title,
        amount:body.amount,
        date:body.date,
    });
   await newExpense.save();
   return res.status(201).send("Expense created");
}

module.exports=router;
