const express = require("express");
const morgan = require("morgan");
// const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(morgan("tiny"));

app.use(cors());

app.use("/", require("./Router/slotRouter"));
app.use("/", require("./Router/appointmentRouter"));
const port = 5000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
