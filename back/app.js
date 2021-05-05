const express = require("express");
const routes = require("./routes/car");
const cors = require("cors");
const connectDB = require("./config/db");
const colors = require("colors");
const dotenv = require("dotenv");
const swaggerJsDoc = require("swagger-jsdoc"); // il faut installer swagger-jsdoc@6.0.1
const swaggerUI = require("swagger-ui-express");
const userRoutes = require("./routes/user");
const carsRoutes = require("./routes/car");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

const app = express();

const swaggerOptions = {
  swaggerDefinition:{
    components: {},
      info: {
          title: 'CAR API',
          version: '1.0.0',
          description: 'API documenting models of Cars'
      },
      servers: [
          {
              url: "http://localhost:5500",
          },
      ],
  },
  apis: ['routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/cars", carsRoutes);
app.use("/users", userRoutes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(errorHandler);
app.use(notFound);

const listener = app.listen(process.env.PORT || 5500, () => {
  console.log(
    `App is listening on port ${listener.address().port}`.yellow.bold
  );
});
