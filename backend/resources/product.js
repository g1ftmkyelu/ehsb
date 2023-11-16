const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        unitsAvailable: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            enum: ['Glasses', 'Lenses', 'Contact Lenses'],
            required: true,
        },
        image: {
            type: String,
            required: true, 
        },
    },
    {
        timestamps: true,
    }
);

module.exports = { name: "Product", endpoint: 'products', schema: productSchema };
