const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/user');
const  jwt = require('jsonwebtoken');

router.post('/signup', (req, res, next)=>{

  const  user = new User({
    _id: new mongoose.Types.ObjectId(),
    firstname: req.body.firstname,
    lastname: req.body.firstname,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password
  })


  user.save().then((result =>{
    res.status(200).json({
      message: "User regestered"
    })
  }));

});

module.exports = router;
