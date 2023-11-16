const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema(
    {
        itemName: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        expirationDate: Date,
    },
    {
        timestamps: true,
    }
);

module.exports = { name: "Inventory", endpoint: 'inventories', schema: inventorySchema };
