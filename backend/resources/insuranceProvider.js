const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const insuranceProviderSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: String,
        contactNumber: String,
        logo:{
            type: String,
            default:"https://binamehta.com/wp-content/uploads/image-placeholder-300x200.png"
        }
    },
    {
        timestamps: true,
    }
);

module.exports = { name: "InsuranceProvider", endpoint: 'insuranceproviders', schema: insuranceProviderSchema };
