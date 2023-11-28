// db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://listing:listing123@cluster0.7eaxxrc.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB");
  } catch (err) {
    console.error("Error while connecting to the server", err.message);
    process.exit(1); // Exit the process on connection error
  }
};

module.exports = connectDB;
