var express = require("express");
const { Appointment } = require("../Model/appointmentModel");
var router = express.Router();
var { Slot } = require("../Model/slotModel");

router.get("/list/slots", async (req, res) => {
  Slot.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(200).send(err);
    });
});

router.post("/create/slot", async (req, res) => {
  try {
    const slotes = new Slot({
      ...req.body,
    });
    await slotes.save();
    res.status(201).send(slotes);
  } catch (error) {
    console.log(error);
    res.send(error);
  }

  // var requestBody = req.body;

  // var newslot = new Slot({
  //   slot_time: requestBody.slot_time,
  //   slot_date: requestBody.slot_date,
  // });
  // newslot.save((err, saved) => {
  //   if (err) {
  //     return res.json(err);
  //   }
  //   Slot.findOne({ _id: saved._id }).exec((err, slot) => res.json(slot));
  // });
});

router.get("/get/appoinment/byslot/:id", async (req, res) => {
  // Appointment.find({ slots: req.params.id })
  //   .populate("appoinment")
  //   .then((data) => {
  //     res.status(200).send(data);
  //   })
  //   .catch((err) => {
  //     res.status(500).send(err);
  //   });

  try {
    const slot = await Slot.findById(req.params.id);
    await slot.populate("appoinment");
    res.status(200).send(slot.appoinment);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
