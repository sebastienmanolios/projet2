const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    marque: { type: String, required: true },
    modele: { type: String, required: true },
    annee: { type: Number, required: true },
    carburant: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model("Cars", carSchema);
module.exports = Car;
