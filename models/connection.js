const mongoose = require('mongoose');
require('dotenv').config();

const uri= process.env.MONGO_URI;

async function run() {
  try {
    console.log('Attempting to connect to MongoDB Atlas...');
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Successfully connected to MongoDB Atlas');
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas:', err);
  }
}  

run().catch(console.dir);

module.exports = mongoose;
