const express = require("express");
const Meds = require("../models/meds");

const router = express.Router();

router.get("/allmeds", (req, res, next) => {
    Meds.find({}).then(meds => {
        if(meds) {
            res.status(200).json(meds);
        } else {
            res.status(404).json({ message: "Drugs not found" });
        }
    });
});

module.exports = router;