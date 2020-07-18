const express = require("express");
const router = express.Router();

const Item = require("../../models/item");
const { request } = require("express");

router.get("/", (req, res) => {
  res.send("<h1>Hello World! </h1");
});

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem.save().then((item) => res.json(item));
});

router.delete("/:id", (req, res) => {
  Item.findById(request.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
