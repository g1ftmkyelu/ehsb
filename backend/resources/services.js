const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: String,
        cost: Number,
    },
    {
        timestamps: true,
    }
);

module.exports = { name: "Service", endpoint: 'services', schema: serviceSchema };
