const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({

    title: String,

    description: String,

    category: String,

    level: String,

    duration: String,

    instructor: String,

    rating: Number

});

module.exports = mongoose.model("Course", CourseSchema);