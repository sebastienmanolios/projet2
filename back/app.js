const express = require("express");
const routes = require("./routes/car");
const cors = require("cors");
const connectDB = require("./config/db");
const colors = require("colors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user");
const carsRoutes = require("./routes/car");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const protect = require("./middleware/authMiddleware");

const app = express();

dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/cars", carsRoutes);
app.use("cars/car", protect);
app.use("/users", userRoutes);
app.use(errorHandler);
app.use(notFound);

const listener = app.listen(process.env.PORT || 5500, () => {
  console.log(
    `App is listening on port ${listener.address().port}`.yellow.bold
  );
});
