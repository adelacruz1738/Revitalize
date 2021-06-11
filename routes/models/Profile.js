const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    mood: {
        type: String
    },
    meditation: {
        type: String
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);