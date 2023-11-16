const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = require("./services");

const invoicingSchema = new Schema(
  {
    patientId: {
      type: String,
      required: true,
    },
    servicesProvided: [
      {
        type: Schema.Types.ObjectId,
        ref: "Service",
        required: true,
      },
    ], // Reference to the Service schema
    totalCost: Number,
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = {
  name: "Invoicing",
  endpoint: "invoicings",
  schema: invoicingSchema,
};
