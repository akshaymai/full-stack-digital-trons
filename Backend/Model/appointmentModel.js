const { mongoose } = require("../DB/connection");
const { Slot } = require("../Model/slotModel");

const appointmentSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: Number,
    sloats: { type: mongoose.Schema.Types.ObjectId, ref: "Slot" },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = { Appointment };
