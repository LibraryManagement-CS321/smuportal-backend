const Book = require("../models/Book");
const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']

function bookService() {
    async function getBooks() {
      return Book.find({})
    }

    async function getBooksbyISBN(ISBN){
      return Book.find({ISBN: ISBN})
    }

    async function getBooksByCategory(category) {
      return Book.find({category: category})
     }
  
    async function addBook(Title, Author, description, ISBN, publishDate, pageCount, createdAt, NumberOfCopies,imagePath) {
      return Book.create({Title: Title, Author: Author,ISBN:ISBN, description: description, publishDate: publishDate,pageCount: pageCount, createdAt: createdAt, NumberOfCopies: NumberOfCopies,imagePath:imagePath})
    }
  
    async function deleteBook(isbn) {
      return Book.deleteOne({ISBN: isbn})
    }
    /*async function saveCover(book, coverEncoded) {
      if (coverEncoded == null) return
      const cover = JSON.parse(coverEncoded)
      if (cover != null && imageMimeTypes.includes(cover.type)) {
        book.coverImage = new Buffer.from(cover.data, 'base64')
        book.coverImageType = cover.type
      }
    }*/
    return {
      getBooks,
      addBook,
      deleteBook,
      getBooksByCategory,
      getBooksbyISBN
      //saveCover
    }
  }
  module.exports = bookService;
