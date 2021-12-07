const { mongoose } = require("../DB/connection");

const slotSchema = new mongoose.Schema(
  {
    slot_time: {
      type: String,
      required: true,
    },
    slot_date: {
      type: String,
    },
    isBooked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
slotSchema.virtual("appoinment", {
  ref: "Appointment",
  localField: "_id",
  foreignField: "sloats",
});
const Slot = mongoose.model("Slot", slotSchema);

module.exports = { Slot };
