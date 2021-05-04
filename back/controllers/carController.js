// newCar function for post car route
const newCar = (req, res, next) => {
    res.json({message: "POST new car"}); 
};

module.exports = {newCar};