const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://srv-captain--docker-final-db/mydatabase?authSource=admin",
  {
    useMongoClient: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = express();
app.use(bodyParser.json());

// Use connect method to connect to the Server

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Server started on port ${port}`));
