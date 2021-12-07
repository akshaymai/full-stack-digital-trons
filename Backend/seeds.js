const { slots } = require("./Data/data");
const { Slot } = require("./Model/slotModel");

const importData = async () => {
  try {
    await Slot.deleteMany();

    await Slot.insertMany(slots);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Slot.deleteMany();
    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
