const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicationSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        dosage: {
            type: String,
            required: true,
        },
    }
);

module.exports = { name: "Medication", endpoint: 'medications', schema: medicationSchema };
