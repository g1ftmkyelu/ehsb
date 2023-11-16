const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const medicationSchema = require('./medications');

const prescriptionSchema = new Schema(
    {
        doctorId: {
            type: String,
            required: true,
        },
        patientId: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        medications: [{
            type: Schema.Types.ObjectId,
            ref: "Medication",
            required: true,
          }], // Reference to the Medication schema
        instructions: String,
    },
    {
        timestamps: true,
    }
);

module.exports = { name: "Prescription", endpoint: 'prescriptions', schema: prescriptionSchema };
