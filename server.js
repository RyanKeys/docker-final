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

const items = require("./routes/api/items");

const app = express();
app.use(bodyParser.json());

// Use connect method to connect to the Server

app.use("/api/items", items);
const port = process.env.PORT || 80;

app.listen(port, () => console.log(`Server started on port ${port}`));
