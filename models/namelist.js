const mongoose = require('mongoose');

const nameSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    }
});

const Namelist = module.exports = mongoose.model('Namelist', nameSchema);