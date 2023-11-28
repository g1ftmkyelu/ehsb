const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema(
  {

    appointmentTitle: {
      type: String,
      required: true
    },
    visionIssues: [{
      type: String,
      required: true
    }],
    eyeCondition: {
      type: String,
      required: true
    },
    prescribedGlasses: {
      type: String,
      default: 'None'
    },
    treatmentPlan: String,

  },
  {
    timestamps: true,
  }
);

module.exports = { name: "AppointmentReport", endpoint: 'appointment-reports', schema: mySchema };
