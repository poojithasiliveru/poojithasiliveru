const mongoose= require('mongoose');
const bookSchema=mongoose.Schema({
    _id:{
        type:String,
        require:true
    },
    name:{
        type:String,
        required:true,
    },
    publisher:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
   authorId:{
        type:String,
        required:true, 
}})
//covert this into mongo schema
module.exports=mongoose.model('Book',bookSchema);