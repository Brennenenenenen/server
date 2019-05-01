const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    checkoutdate: { type: Date },
    Drugs: { type: String },
    Price: { type: Number }, 
    Class: { type: String },
    pname: { type: String },
    qty:   { type: Array },
    dose:  { type: Array }
    
});

module.exports = mongoose.model('Cart', cartSchema, 'cart');