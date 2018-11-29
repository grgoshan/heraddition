const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String, required: true
  },
  price: {type:Number, required:true},
  description: {type: String, required: true},
  category: {type: String, required: true},
  tag: {type: String, required: false},
  productFiles: [{type: String, required: false}]
});

module.exports = mongoose.model('ProductModel', productSchema);

