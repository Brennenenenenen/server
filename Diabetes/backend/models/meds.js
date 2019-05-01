const mongoose = require('mongoose');

const medsSchema = mongoose.Schema({
    Brand: { type: String },
    Class: { type: String },
    Generic: { type: String }, 
    dqp: { type: String },
    link: { type: String},
    action: { type: String }
    
});

module.exports = mongoose.model('Meds', medsSchema, 'WebCrawlerFilled');