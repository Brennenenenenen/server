const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    FirstN: { type: String },
    LastN: { type: String },
    MiddleN: { type: String },
    DoB: { type: Date },
    SSN: { type: String },
    Phone: { type: String },
    Height: { type: Number },
    Weight: { type: Number },
    Gender: { type: String },
    user: { type: String },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true}
});

module.exports = mongoose.model('Patient', patientSchema);
