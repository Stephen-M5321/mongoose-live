require("dotenv").config();
require("./db/connection");
// console.log(process.env.MONGO_URI);   (used for testing)

const express = require("express");

const book = require("./books/model");

const app = express();

app.use(express.json());

app.get("/books/getallbooks", async (req, res) => {
    // res.send("Hello Me Beauty");              (used for testing)
    try {
    const books = await Book.find({});
    console.log("books: ", typeof books, books);
    const successResponse = {
        message: "success",
        books: books,
    };

    res.status(200).json(successResponse)   
  } catch (error) {
    console.log(error);  
    }
});

app.post("/books/addbook", async (req, res) => {
    // res.send("Hello from the book addbooks route");   (used for testing)
    try{     
        
      const newBook =  await Book.create({
        author: req.body.author,
        genre: req.body.genre,
        title: req.body.title,
      });

      const successResponse = {
        messsage: "success",
        newBook: newBook,
      };

      res.status(201).json(successResponse)
    } catch(error) {
      console.log(error);
    }
});



// app.get("/books", (req, res) => {
//     res.send("Hello world")
// });
// used for test on thunderclient

app.listen(5001, () => console.log("server is listening"));