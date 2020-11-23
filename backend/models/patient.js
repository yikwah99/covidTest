//include the package
const mongoose = require ('mongoose');

//create a schema - blueprint of the data
const patientSchema = mongoose.Schema({
  username: {type:String, required:true},
  password: {type:String, required:true},
  fullName: {type:String, required:true},
  idNo: {type:String, required:true},
  sex: {type:String, required:true},
  age: {type:Number, required:true},
  birthday: {type:String, required:true},
  phoneNo: {type:String, required:true},
  address: {type:String, required:true},
  zip: {type:String, required:true},
  city: {type:String, required:true},
  country: {type:String, required:true},
  state: {type:String, required:true}
});

module.exports = mongoose.model('Patient', patientSchema);
