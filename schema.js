const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    price: {
        type: Number,
        required: true,
    },
});



const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,

    },
    items: {
        type: [itemSchema]
    },
});


module.exports = mongoose.model('Restaurant',restaurantSchema)