const express = require('express')
const router = express.Router()
const book= require('../model/bookSchema')
//import the schema in routes
//POST
router.post('/',(req,res)=>{
    try{
    const {_id,name,publisher,description,authorId} = req.body;

    const bookQuery= new book(
        {_id,name,publisher,description,authorId});
        //after our query is created
        //we can save it to the database
        bookQuery.save();
        res.status(201).send(
            {message:"Book Created"}
        );
    }catch(err){
        res.status(500).send(
            {message:err.message}
        );
    } 
})

module.exports=router;