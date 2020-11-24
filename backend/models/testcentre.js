//include the package
const mongoose = require ('mongoose');

//create a schema - blueprint of the data
const centreSchema = mongoose.Schema({
  centreName: {type: String, required:true}

});

module.exports = mongoose.model('TestCentre', centreSchema);
