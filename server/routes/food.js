require("dotenv").config();
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const router = express.Router();

router.get('/test-food', async (req, res) => {
    const tmp = await loadFoods("foods");
    res.send(await tmp.find({}).toArray());
});

router.get('/foods/salads', async (req, res) => {
  const collection = await loadFoods("salad");
  res.send(await collection.find({}).toArray());
});

router.get('/foods/chickens', async (req, res) => {
  const collection = await loadFoods("chicken");
  res.send(await collection.find({}).toArray());
});

router.get('/foods/rice', async (req, res) => {
  const collection = await loadFoods("rice");
  res.send(await collection.find({}).toArray());
});

router.get('/foods/burgers', async (req, res) => {
  const collection = await loadFoods("burger");
  res.send(await collection.find({}).toArray());
});

async function loadFoods(collection) {
    const uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + process.env.DB_URL;
    const client = await MongoClient.connect(uri,{useNewUrlParser: true}
  );
  return client.db(process.env.DB_NAME).collection(collection);
}







module.exports = router;