// ----- zła nazwa pliku
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const candidateSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true, unique: true },
    candidateId: { type: String, required: true, unique: true },
<<<<<<< HEAD
    poll: { type: mongoose.Types.ObjectId, required: true, ref:'User' }
=======
    poll: { type: mongoose.Types.ObjectId, required: true } // ----- to nie jest potrzebne
>>>>>>> 3654a16f79f12f1d999d8f3d46575512979e5142
});

module.exports = mongoose.model('Candidate', candidateSchema);
