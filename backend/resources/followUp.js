const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followUpSchema = new Schema(
    {
        appointmentId: {
            type: String,
            required: true,
        },
        patientId: {
            type: String,
            required: true,
        },
        doctorId: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        notes: String,
    },
    {
        timestamps: true,
    }
);

module.exports = { name: "FollowUp", endpoint: 'followups', schema: followUpSchema };
