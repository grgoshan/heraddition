const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/user');
//const bcrypt = require('bcrypt')
const auth =  require('./auth');
const  jwt = require('jsonwebtoken');
router.get('/test', (req, res) => {
    res.status(200).json({
        status: 200,
        result: 'success'
    })
});

router.post('/auth/signup', (req, res , next)=>{
  User.find({
email: req.body.email
  }).exec().then(user =>{
    if(user.length >=1){
      return res.status(422).json({
        message:"This email exist"
      })
    }else{
      const  user = new User({
        _id: new mongoose.Types.ObjectId(),
        firstname: req.body.firstname,
        lastname: req.body.firstname,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
      });

      user.save().then((result =>{
        res.status(200).json({
          message: "User regestered"
        })
      }));

    }
  })

});

router.post('/auth/signin', (req,res, next)=>{
  User.find({
    email: req.body.email
  }).exec().then(user =>{
    if(user.length < 1) {
      return res.status(404).json({
        message: "invalid email or password"
      })
    }else{
      if(user[0].email === req.body.email && user[0].password === req.body.password) {
        const token = jwt.sign({
            email: user[0].email,
            userId: user[0]._id
          },'secret'

          , {
            expiresIn: "2h"
          })
        return res.status(200).json({
          message: ' auth success',
          user: user[0].firstname,
          token : token
        })
      }else{
        return res.status(401).json({
          message: 'auth fail',
          reason: "invalid email or password"
        })


      }
    }
  })
})

module.exports = router;
