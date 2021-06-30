const History = require("../models/history");
const Book = require("../models/book");

exports.saveHistory = async (req, res) => {
  const { book, member, type } = req.body;

  try {
    const book = await Book.findById(book);
    console.log(book);
    if (type == "Borrow") {
      if (book.status == true) {
        const history = new History({ member, book, type });
        const savedHistory = await history.save();
        book.status == false;
        const savedBook = await book.save();
        res.json({
          message: "History Saved",
          history: savedHistory,
        });
      } else {
        res.json({
          message: "Book is already Borrowed",
        });
      }
    } else {
      //book return

      if (book.status == false) {
        const history = new History({ member, book, type });
        const savedHistory = await history.save();
        book.status == true;
        const savedBook = await book.save();
        res.json({
          message: "History Saved",
          history: savedHistory,
        });
      } else {
        res.json({
          message: "Book already returned",
        });
      }
    }
  } catch (err) {
    res.json({
      error: err,
    });
  }
};
