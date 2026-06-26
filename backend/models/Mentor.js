const mongoose = require("mongoose");

const MentorSchema = new mongoose.Schema({

    name: String,

    expertise: [String],

    experience: Number,

    email: String

});

module.exports = mongoose.model("Mentor", MentorSchema);