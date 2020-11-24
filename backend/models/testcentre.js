//include the package
const mongoose = require ('mongoose');

//create a schema - blueprint of the data
const testSchema = mongoose.Schema({
  centreName: {type:String, required:true},

});

module.exports = mongoose.model('Centre', testSchema);
