const express = require("express");
const patientHistory = require("../models/patientHistory");

const router = express.Router();

router.get("/gethistory/:pname", (req, res, next) => {
    var string = req.params.pname;
    var regex = new RegExp(["^", string, "$"].join(""), "i");

    patientHistory.find({"pname" : regex}).then(patienthistory => {
        if(patienthistory) {
            res.status(200).json(patienthistory);
        } else {
            res.status(404).json({ message: "Patient not found" });
        }
    });
});


router.post('/history', (req, res, next) => {
    const history = new patientHistory({
        drugs:   req.body.drugs,
        date:   req.body.date,
        pname:   req.body.pname,
        user:   req.body.user
    });
    history.save()
        .then(result => {
            res.status(201).json({
                message : 'History added successfully',
                result: result
            });
        })
        .catch(err => {
            res.status(400).json({
                message: "Unable to add patient history"
            });
        });
});

module.exports = router;