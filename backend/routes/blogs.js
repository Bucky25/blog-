const express = require('express');
const router = express.Router()

let Blog = require('../models/blog');


router.get('/', (req, res) => {
    Blog.find()
        .then(blogs => res.json(blogs))
        .catch(err => console.log(err))
});



router.post('/', async (req, res) => {
    try{
        
        const newblog = new Blog();
        newblog.title = req.body.title;
        newblog.subheader = req.body.subheader;
        newblog.imageLink = req.body.imageLink;
        newblog.content = req.body.content;
        
        await newblog.save()
        if(!newblog){
          return res.status(200).send({
          status: 404,
          message: 'No data found'
        })
     }
     res.status(200).send({
        status: 200,
        message: 'Data Save Successfully'
     })
     } catch(error){
        console.log(error)
        return res.status(400).send({
          message:'Unable to insert data',
          errors: error,
          status: 400
        })
     }
});


module.exports = router ;