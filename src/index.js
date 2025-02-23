/**
 * Role based auth service
 */

// Dependencies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var bunyan = require('bunyan');
var bunyanRequest = require('bunyan-request');
const routes = require("./routes");
const compression = require("compression");
const validationErrors = require("./middlewares/expressValidationErrors");
const model = require('./models');
// const db = require('./models');


const app = express();

// Set up logging
var logger = bunyan.createLogger({
  name: 'doctor-booking-server',
  streams: [
    {
      level: 'debug',
      stream: process.stdout
    }
  ]
});
var requestLogger = bunyanRequest({
  logger: logger,
  headerName: 'x-request-id'
});
app.use(requestLogger);

/**
 * Middlewares
 */
// Allow external clients to make requests
app.use(cors());
app.use(bodyParser.json());
// Enable http compression
app.use(compression());

// model.sequelize.sync({ force:true }); 

// console.log(routes);
// model.doctor.create({name:"asbh"});
// model.qualification.create({name:"test",doctor_id:1});

// model.doctor.findAll().then(doc => {
//   console.log('test doc',doc.dataValues);
// })

/**
 * Routing middleware
 */
app.use("/api", routes);
app.use(validationErrors);

/**
 * Listen the application to a port
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Service is running on ${PORT}`);
});
