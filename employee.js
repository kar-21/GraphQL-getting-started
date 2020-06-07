const mongoose = require('mongoose');
const employee = new mongoose.Schema({
    "id": Number,
    "name": String,
    "department": String,
    "salary": Number
});

module.exports = mongoose.model('employee', employee);