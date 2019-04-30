const mongoose = require('mongoose');

const patientHistorySchema = mongoose.Schema({
    drugs: { type: String },
    date: { type: Date },
    pname: { type: String },
    user: { type: String }
});

module.exports = mongoose.model('patientHistory', patientHistorySchema, 'patientHistory');