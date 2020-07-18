const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongodb").MongoClient;

const items = require("./routes/api/items");
const url =
  "mongodb://srv-captain--docker-final-db/mydatabase?authSource=admin";

const dbName = "myproject";
const client = new MongoClient(url);

const app = express();
app.use(bodyParser.json());

// Use connect method to connect to the Server
client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
});

app.use("/api/items", items);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
