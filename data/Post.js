const mongoose = require('mongoose');


const User = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    storeName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Posts', User);