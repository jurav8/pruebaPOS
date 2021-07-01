const mongoose = require("mongoose");

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is connected");
});
