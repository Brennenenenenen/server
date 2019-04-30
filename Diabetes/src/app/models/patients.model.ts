
export class Patients {
    _id: any;
    FirstN: String;
    LastN: String;
    MiddleN: String;
    DOB: Date;
    SSN: String;
    Phone: String;
    Height: Number;
    Weight: Number;
    Age: Number;
    Gender: String;
    user: String;
    creator: String
}


/*
const mongo = require('mongoose');
const Schema = mongo.Schema;

let PatientSchema = new Schema({
    Fname: { type: String },
});

//const pmodel = mongo.model('patients', PatientSchema);

module.exports = mongo.model('Patient', PatientSchema);
*/