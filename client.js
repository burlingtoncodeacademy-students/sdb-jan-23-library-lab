require("dotenv").config()
const Library = require("./library")
const DB_URL = process.env.DB_URL

const c = new Library(DB_URL, "library", "books")

// c.test()

// c.addBook({
//     "title": "Data Structures and Algorithms 5th Edition",
//     "author": "Satan Himself",
//     "copies": 666
// })

// c.allBooks().then(d => console.log(d))

// c.findOneBook("63ff69d8cf1465939c26bb4a").then(d => console.log(d))

// c.findManyBooks({
//     $or: [
//         { author: "Satan Himself" },
//         { author: "JK Rowling" }
//     ]
// }).then(d => console.log(d))

// c.changeBook("63ff68881f272ecd81e96d26", {
//     title: "Harry Potter and the Chamber of Secrets",
//     author: "JK Rowling",
//     copies: 5
// })

// c.removeBook("63ff68881f272ecd81e96d26")

