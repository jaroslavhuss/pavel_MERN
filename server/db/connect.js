const mongoose = require('mongoose');

const DB_LINK = process.env.DB_LINK || "PAVLE TADY SI TO UPRAV";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB_LINK, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true // If using Mongoose < 6.0
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;