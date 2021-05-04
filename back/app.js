const express = require("express");
const routes = require("./routes/car");
const cors = require("cors");
const connectDB = require("./config/db");
const colors = require("colors");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use("/", routes);

const listener = app.listen(process.env.PORT || 5500, () => {
  console.log(
    `App is listening on port ${listener.address().port}`.yellow.bold
  );
});
