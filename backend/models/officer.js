//include the package
const mongoose = require ('mongoose');
const uniqueValidator = require ('mongoose-unique-validator');

//create a schema - blueprint of the data
const officerSchema = mongoose.Schema({
  testCentreName: {type: String, required: true},
  position: {type: String, required: true},
  fullname: {type: String, required: true},
  password: {type: String, required: true},
  username:{type: String, required: true, unique}
});

officerSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Testkit', officerSchema);
