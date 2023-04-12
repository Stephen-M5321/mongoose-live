require("dotenv").config();
require("./db/connection");
// console.log(process.env.MONGO_URI);   (used for testing)

const express = require("express");

const app = express();

app.use(express.json());

// app.get("/books", (req, res) => {
//     res.send("Hello world")
// });
// used for test on thunderclient

app.listen(5001, () => console.log("server is listening"));