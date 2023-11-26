const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGO_URL);

const userSchema = mongoose.Schema({
  username:String,
  name:String,
  age:Number,
  email:String,
  categories:[String],
  description:String
});



userSchema.plugin(passportLocalMongoose);

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;