const Car = require("../models/carModel");
// newCar function for post car route
// const newCar = (req, res, next) => {
//   res.json({ message: "POST new car" });
// };

const newCar = (req, res) => {
    Car.findOne({ modele: req.body.modele}, (data) =>{
        if(data === null){
            const newCar = new Car({
                marque: req.body.marque,
                modele: req.body.modele,
                annee: req.body.annee,
                carburant: req.body.carburant
            })
            //on enregistre dans db
            newCar.save((err, data) =>{
                if(err){
                    console.log(req.body);
                    return res.json({message: "erreur "+ err});
                } else {
                    return res.json(data);
                }     
            })
        } else {
            return res.json({message: "this Car already in db"})
        }
    })
};

// @desc Fetch all cars
// @route GET /cars
// @access Public
const getCars = async (req, res) => {
  const cars = await Car.find({});
  res.json(cars);
};

// const getCars = (req, res) => {
//     Car.find({}, (err, data) =>{
//         if(err) {
//              return res.json({message: "erreur "+ err})
//         }
//         console.log(data);
//         return res.json(data); 
//     })
// };

module.exports = { newCar, getCars };
