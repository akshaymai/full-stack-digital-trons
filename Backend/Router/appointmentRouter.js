var express = require("express");
var router = express.Router();
var { Appointment } = require("../Model/appointmentModel");
var { Slot } = require("../Model/slotModel");
router.get("/list/appointment", async (req, res) => {
  Appointment.find({})
    // .populate("sloats")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(200).send(err);
    });
});

router.get("/find/appointment/:id", async (req, res) => {
  // console.log("akshay");
  Appointment.findOne({ sloats: req.params.id })
    // .populate("sloats")
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(200).send(err);
    });
});

router.post("/post/appointment", async (req, res) => {
  const slot = await Slot.findById(req.body.sloats);
  slot.isBooked = true;
  await slot.save();

  const appointment = new Appointment({
    ...req.body,
  });

  appointment
    .save()
    .then((item) => {
      res.status(200).send(item);
    })
    .catch((err) => {
      console.log("wer", err);
      res.status(500).send(err);
    });
});

router.put("/update/appoinment/:id", async (req, res) => {
  const findApp = await Appointment.findOne({
    _id: req.params.id,
  });

  if (!findApp) {
    return res.status(400).send({
      err: "appoinment Not found",
    });
  }

  const updates = Object.keys(req.body);
  const allowfields = ["name", "email", "phone", "sloats"];
  const isValideUpdate = updates.every((update) =>
    allowfields.includes(update)
  );
  if (!isValideUpdate) {
    return res.status(400).send({
      err: "Not valid update",
    });
  }
  try {
    updates.forEach((update) => {
      findApp[update] = req.body[update];
    });
    await findApp.save();
    res.status(200).send(findApp);
  } catch (error) {
    res.status(400).send({
      err: error,
    });
  }
});
module.exports = router;
