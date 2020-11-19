//include the package
const mongoose = require ('mongoose');


//create a schema - blueprint of the data
const testkitSchema = mongoose.Schema({
  testkitName: {type: String, required: true},
  stock: {type: Number, required: true}
});

module.exports = mongoose.model('Testkit', testkitSchema);
