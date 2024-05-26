const express = require("express");
const db = require("./db");
const Person = require("./Modules/person");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("server live");
});

app.post("/storeData", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const savedPerson = await newPerson.save();
    res.status(200).json(savedPerson);
  } catch (err) {
    res.status(500).json("Error Occured");
  }
});

app.listen(1234, () => {
  console.log("Connection is live");
});
