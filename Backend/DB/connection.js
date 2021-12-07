const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Digital-trons-db", {
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("connected successfully....");
  })
  .catch((err) => {
    console.log("Not connected", err);
  });

module.exports = { mongoose };
