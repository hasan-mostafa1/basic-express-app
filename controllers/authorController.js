// controllers/authorController.js

const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getAllAuthors(req, res, next) {
  const authors = await db.getAllAuthors();

  res.send(authors);
}

async function getAuthorById(req, res, next) {
  const { authorId } = req.params;

  //   try {
  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new CustomNotFoundError("Author not found");
  }

  res.send(`Author Name: ${author.name}`);
  //   } catch (error) {
  // console.error("Error retrieving author:", error);
  // next(error);
  // res.status(500).send("Internal Server Error");
  //   }
}

module.exports = { getAuthorById, getAllAuthors };
