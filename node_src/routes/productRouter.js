const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ProductModel = require('../model/product');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb)=>{
    cb(null, './uploads/')
  },
  filename: (req, file, cb)=>{
    cb(null, new Date().toISOString()+file.originalname)
  },


});

const fileFilter = (req, file, cb)=>
{
  if(file.mimetype=== 'image/jpeg' || file.mimetype === 'image/png'){
    cb(null, true)
  }else{
    cb(null, false)
  }
};

const upload = multer({
    storage: storage,
    limit: {
      fileSize: 1024*1024*5
    },
    fileFilter: fileFilter,
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...');
  },

  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path);
  }

    // fileFilter: fileFilter
  }
).array('image');

router.post('/', (req, res, next) =>{
  try {
    req.body = JSON.parse(Object.keys(req.body)[0])
    console.log("enter here"+req.body);
  } catch (e) {
    req.body = req.body
  }

  const productModel = new ProductModel({
    _id: new mongoose.Types.ObjectId,
    name: req.body.productname,
    price : req.body.price,
    description: req.body.description,
    tag: req.body.tag,
    category: req.body.category,
    productFiles: req.body.image
  });


  productModel.save().then(
    result => {
      res.status(200).json({
        message: 'handling post request to product',
        createProduct: {
          name: result.name,
          price: result.price,
          productFiles: result.productFiles
          // productFiles: result.productFiles

        }
      })
    }
  )


});



router.post('/file', (req, res, next) =>{
  upload(req, res, function (err) {

    if (err) {
      return res.end(err.toString());
    }
    console.log('enter file'+req.files.length);


    try {
      req.body = JSON.parse(Object.keys(req.body)[0])
      console.log("enter here"+req.body);
    } catch (e) {
      req.body = req.body
    }

    var image= [];
    for(var i =0; i< req.files.length; i++){
      image.push(req.files[i].path);
      console.log('console++++++'+req.files[i].path);
      console.log('console+++image+++'+image[i]);
    }

    res.status(200).json({
      body: image[0]
    })


    res.end('File is uploaded');
  });



});

router.get('/', (req, res, next)=> {
console.log(req.query.category);
ProductModel.find({
  category: req.query.category
}).exec().then(docs =>{
  const response = {
    count: docs.length,
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


});


router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  ProductModel.findById(id).exec().then(doc =>{
    if(doc){
      res.status(200).json(doc)
    } else {
      res.status(422).json({
        message: 'product not available'
      })
    }
  }).catch(error =>{
    console.log(error.stack);
    res.status(500).json({error: error})
  })
})
module.exports = router;
