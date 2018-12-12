const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ProductModel = require('../model/product');

router.get('/new', (req, res, next)=> {
  console.log(req.query.tag);
  console.log(req.query.limit);
  ProductModel.find({
    tag: req.query.tag
  })
    .limit(parseInt(req.query.limit))
    .exec().then( docs => {
    const response = {
      products : docs.map(doc => {
        return {
          id: doc._id,
          name: doc.name,
          price:doc.price,
          tag: doc.tag,
          productFiles: doc.productFiles[0],
          imageList: doc.productFiles
        }
      })
    }

    res.status(200).json(response)
  })
})
router.get('/promo', (req, res, next)=> {
  console.log(req.query.tag);
  console.log(req.query.limit);
  ProductModel.find({
    tag: req.query.tag
  })
    .limit(parseInt(req.query.limit))
    .exec().then( docs => {
    const response = {
      products : docs.map(doc => {
        return {
          id: doc._id,
          name: doc.name,
          price:doc.price,
          tag: doc.tag,
          productFiles: doc.productFiles[0],
          imageList: doc.productFiles
        }
      })
    }

    res.status(200).json(response)
  })
})
module.exports = router;
