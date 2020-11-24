//include the package
const mongoose = require ('mongoose');

//create a schema - blueprint of the data
const testSchema = mongoose.Schema({
  username: {type:String, required:true},
  testDate: {type:String, required:true},
  status: {type:String, required:true},
  result: {type:String, required:true},
  resultDate: {type:String, required:true},
  tester: {type:String, required:false},
});

module.exports = mongoose.model('Test', testSchema);