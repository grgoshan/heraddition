const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstname: {type: String, require: true},
  lastname: {type:String, require:true},
  phone: {type: Number, require: true},
  email :{ type: String, require: true, unique: true,
  match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},
  password: {type: String, required: true}
})
  module.exports = mongoose.model("users", userSchema)
