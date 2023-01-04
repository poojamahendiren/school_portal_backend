const mongoose = require('mongoose');                                        

//Schema definition                                                          
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    Gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female']
    },
    DateOfBirth: {
        type: String,
        required: true
    },
    DateOfAdmission: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    grade: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        unique:true,
        required: true
    },
    Status: {
        type: String,
        required: true,
        enum: ['Active', 'Inactive']
    },
});

//Model creation                                                                   
module.exports = mongoose.model('students', studentSchema);