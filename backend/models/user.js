var jwt = require('jsonwebtoken');
var crypto = require('crypto');
const mongoose = require ('mongoose');
const uniqueValidator = require ('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  username:{type: String, required:true, unique: true},
  password: {type: String, required: true},
  fullname:{type: String, required:true},
  role:{type: String, required:true},

  hash: String,
  salt: String
});

userSchema.plugin(uniqueValidator);

/*
userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
*/
userSchema.methods.verifyPassword= function(password){
  return bcrypt.compareSync(password, this.password);
}
module.exports = mongoose.model('User',userSchema);
