require("dotenv").config();
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const router = express.Router();

router.get('/test-food', async (req, res) => {
    const tmp = await loadFoods("foods");
    res.send(await tmp.find({}).toArray());
});

router.get('/salads', async (req, res) => {
  const collection = await loadFoods("salad");
  res.send(await collection.find({}).toArray());
});

router.get('/chickens', async (req, res) => {
  const collection = await loadFoods("chicken");
  res.send(await collection.find({}).toArray());
});

router.get('/rice', async (req, res) => {
  const collection = await loadFoods("rice");
  res.send(await collection.find({}).toArray());
});

router.get('/burgers', async (req, res) => {
  const collection = await loadFoods("burger");
  res.send(await collection.find({}).toArray());
});

router.get('/salads/limit-calories/:calories', async (req, res) => {
  const collection = await loadFoods("salad");
  res.send(await collection.find({calories : { $lte: req.params.calories }}).toArray());
});

router.get('/chickens/limit-calories/:calories', async (req, res) => {
  const collection = await loadFoods("chicken");
  res.send(await collection.find({calories : { $lte: req.params.calories }}).toArray());
});

router.get('/rice/limit-calories/:calories', async (req, res) => {
  const collection = await loadFoods("rice");
  res.send(await collection.find({calories : { $lte: req.params.calories }}).toArray());
});

router.get('/burgers/limit-calories/:calories', async (req, res) => {
  const collection = await loadFoods("burger");
  res.send(await collection.find({calories : { $lte: req.params.calories }}).toArray());
});

async function loadFoods(collection) {
    const uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + process.env.DB_URL;
    const client = await MongoClient.connect(uri,{useNewUrlParser: true}
  );
  return client.db(process.env.DB_NAME).collection(collection);
}

module.exports = router;