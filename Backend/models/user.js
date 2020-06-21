/**
 * @const {Object} userSchema - Schema how schould create a user.
 * 
 */

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 3 },
});
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);
