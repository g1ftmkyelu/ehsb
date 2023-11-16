const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoppingCartSchema = new Schema(
    {
        patientId: {
            type: String,
            required: true,
        },
        products: [
            {
                productId: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = { name: "ShoppingCart", endpoint: 'shoppingcarts', schema: shoppingCartSchema };
