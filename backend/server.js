const express = require("express");
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require("cors");
const { errorHandler } = require('./middleware/errorMiddleware')

const connectDB = require('./config/db.config')
connectDB()

const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
require('./routes/goalRoutes')(app);

//middleware
app.use(errorHandler)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});