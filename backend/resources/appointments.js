const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema(
    {
        doctor: {
            type: String,
            required: true,
        },
        patient: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: false,
        },
        status: {
            type: String,
            enum: ['Scheduled', 'Confirmed', 'Completed', 'Cancelled'],
            default: 'Scheduled',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = { name: "Appointment", endpoint: 'appointments', schema: appointmentSchema };
