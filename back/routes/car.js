const express = require("express");

const router = express.Router();

const { newCar, getCars } = require("../controllers/carController");
const protect = require("../middleware/authMiddleware");

router.route("/car").post(protect, newCar);
router.get("/cars", getCars);

module.exports = router;
