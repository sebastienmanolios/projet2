const Car = require("../models/carModel");
// newCar function for post car route
const newCar = (req, res, next) => {
  res.json({ message: "POST new car" });
};

// @desc Fetch all cars
// @route GET /cars
// @access Public
const getCars = async (req, res) => {
  const cars = await Car.find({});
  res.json(cars);
};

module.exports = { newCar, getCars };
