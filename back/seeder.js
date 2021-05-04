const connectDB = require("./config/db");
const dotenv = require("dotenv");
const Car = require("./models/carModel.js");
const cars = require("./data/cars");
const colors = require("colors");

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Car.deleteMany();
    await Car.insertMany(cars);
    console.log(`Data imported !`.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error at ${error.message}`.red.underline.bold);
  }
};

importData();
