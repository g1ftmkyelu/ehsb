const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicalHistorySchema = new Schema(
    {
        patientId: {
            type: String,
            required: true,
        },
        pastIllnesses: [String],
        surgeries: [String],
        allergies: [String],
        familyMedicalHistory: [String],
    },
    {
        timestamps: true,
    }
);

module.exports = { name: "MedicalHistory", endpoint: 'medicalhistories', schema: medicalHistorySchema };
