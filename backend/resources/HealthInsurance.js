const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Assuming you have an InsuranceProvider schema defined

const healthInsuranceSchema = new Schema(
  {
    patientId: {
      type: String,
      required: true,
    },
    coverageDetails: String,
    policyInformation: String,
    insuranceProvider: {
      type: Schema.Types.ObjectId,
      ref: "InsuranceProvider",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = {
  name: "HealthInsurance",
  endpoint: "healthinsurances",
  schema: healthInsuranceSchema,
};
