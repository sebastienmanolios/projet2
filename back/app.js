const express = require("express");
const routes = require('./routes/car');
const app = express();


app.use(express.json());

app.use('/', routes);


const listener = app.listen(process.env.PORT || 5500, () => {
    console.log('App is listening on port ' + listener.address().port)
})