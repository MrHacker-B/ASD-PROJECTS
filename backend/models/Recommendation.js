const mongoose = require("mongoose");

const RecommendationSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    recommendedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }],

    generatedAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Recommendation", RecommendationSchema);