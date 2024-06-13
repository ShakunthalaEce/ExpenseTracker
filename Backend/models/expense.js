let mongoose = require("mongoose")

let expenseSchema=mongoose.Schema({
    id:{type: String},
    title:{type:String},
    amount:{type:Number},
    date:{type:String},
});
module.exports=mongoose.model("expenses",expenseSchema);