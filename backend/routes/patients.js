const express = require("express");
const Patient = require("../models/patients");

const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.get("/patient", (req, res, next) => {
    Patient.find({}).then(patient => {
        if(patient) {
            res.status(200).json(patient);
        } else {
            res.status(404).json({ message: "Patient not found" });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Fetching patients failed"
        });
    });
});

router.post('/newpatient', checkAuth, (req, res, next) => {
    const patient = new Patient({
        FirstN:   req.body.FirstN,
        LastN:   req.body.LastN,
        MiddleN:   req.body.MiddleN,
        DoB:   req.body.DoB,
        SSN:   req.body.SSN,
        Phone:   req.body.Phone,
        Height:   req.body.Height,
        Weight:   req.body.Weight,
        Gender:   req.body.Gender,
        user:   req.body.user,
        creator: req.userData.userId
    });

    patient.save()
        .then(result => {
            res.status(201).json({
                message : 'Patient added successfully',
                result: result
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to create new patient'
            });
        });
});

router.delete("/:id", (req, res, next) => {
    Patient.deleteOne({ _id : req.params.id }).then(result => {
        console.log(result);
      res.status(200).json({ message: "patient deleted!" });
    });
  });



module.exports = router;