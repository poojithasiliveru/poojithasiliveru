const mongoose= require('mongoose');
const authorSchema=mongoose.Schema({
    _id:{
        type:String,
        require:true
    },
    name:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:true,
    },
    totalBooks:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true, 
}})
//covert this into mongo schema
module.exports=mongoose.model('Author',authorSchema);