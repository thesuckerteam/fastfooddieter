require("dotenv").config();
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const router = express.Router();

router.get('/test-food', async (req, res) => {
    const tmp = await loadFoods("foods");
    res.send(await tmp.find({}).toArray());
});

async function loadFoods(collection) {
    const uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + process.env.DB_URL;
    const client = await MongoClient.connect(uri,{useNewUrlParser: true}
  );
  return client.db(process.env.DB_NAME).collection(collection);
}







module.exports = router;