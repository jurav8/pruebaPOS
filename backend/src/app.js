const express = require("express");
const cors = require("cors");
const app = express();

app.set("port", process.env.PORT);

app.use(cors());
app.use(express.json());

//routes
app.use("/api/products", require("./routes/product"));

module.exports = app;
