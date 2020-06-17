// ----- zła nazwa pliku
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// const placeSchema = new Schema({
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     image: { type: String, required: true },
//     address: { type: String, required: true },
//     location: {
//         lat: { type: Number, required: true },
//         lng: { type: Number, required: true },
//     },
//     creator: { type: mongoose.Types.ObjectId, required:true, ref: 'User'}
// });

const candidateSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true, unique: true },
    candidateId: { type: String, required: true, unique: true },
    poll: { type: mongoose.Types.ObjectId, required: true } // ----- to nie jest potrzebne
});

module.exports = mongoose.model('Candidate', candidateSchema);
