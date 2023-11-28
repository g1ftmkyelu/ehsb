const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salesSchema = new Schema(
    {
        productName: {
            type: String,
            required: true,
        },
        quantitySold: {
            type: Number,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
       
    },
    {
        timestamps: true,
    }
);

module.exports = { name: "Sales", endpoint: 'sales', schema: salesSchema };
