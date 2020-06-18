const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const candidateSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true, unique: true },
    candidateId: { type: String, required: true, unique: true },
    poll: { type: mongoose.Types.ObjectId, required: true, ref:'User' }
});

module.exports = mongoose.model('Candidate', candidateSchema);