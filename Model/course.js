var mongoose = require('mongoose');
var obj = new mongoose.Schema({
    Title: { type: String },
    Path: { type: String },
    Des: { type: String }
});
module.exports = mongoose.model('CourseCollection', obj);