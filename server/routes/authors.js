const express = require('express')
const router = express.Router()
const author= require('../model/authorSchema')
//import the schema in routes
//POST
router.post('/',(req,res)=>{
    try{
    const {_id,name,age,totalBooks,description} = req.body;

    const authorQuery= new author(
        {_id,name,age,totalBooks,description});
        //after our query is created
        //we can save it to the database
        authorQuery.save();
        res.status(201).send(
            {message:"Author Created"}
        );
    }catch(err){
        res.status(500).send(
            {message:err.message}
        );
    } 
})
//GET
router.get('/',async (req,res)=>{
    try{
        const author = await author.find();
        res.status(200).send(author);
    }catch(err){
        res.status(500).send(err.message)
    }
})

module.exports=router;