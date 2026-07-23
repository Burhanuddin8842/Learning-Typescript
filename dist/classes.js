"use strict";
// Step 1: Define what a Book looks like
//
// Before writing any logic, we need to agree on the shape of the data — same as we did with Todo.
//
//     Your task: write an interface Book with these fields:
//
//     id — text
// title — text
// author — text
// pages — a number
// isRead — true/false
Object.defineProperty(exports, "__esModule", { value: true });
// Your task — write a class Library with:
//
// A private property called books, typed as Book[], starting as an empty array
// A method called addBook(book: Book) that pushes the new book into books
// A method called getAllBooks(): Book[] that returns the current books array
class BookLibrary {
    books = [];
    // books -> books + book
    addBook(book) {
        this.books.push(book);
    }
    getAllBooks() {
        return (this.books);
    }
    markRead(BookName) {
        this.books.map((items) => {
            if (items.title === BookName) {
                items.isRead = true;
            }
        });
    }
}
let bookLibrary = new BookLibrary();
bookLibrary.addBook({
    id: crypto.randomUUID(),
    title: 'Book1',
    author: 'author1',
    pages: 295,
    isRead: false
});
bookLibrary.addBook({
    id: crypto.randomUUID(),
    title: 'Book2',
    author: 'author2',
    pages: 295,
    isRead: false
});
bookLibrary.addBook({
    id: crypto.randomUUID(),
    title: 'Book3',
    author: 'author3',
    pages: 295,
    isRead: false
});
bookLibrary.addBook({
    id: crypto.randomUUID(),
    title: 'Book4',
    author: 'author4',
    pages: 295,
    isRead: false
});
console.log(bookLibrary.getAllBooks());
bookLibrary.markRead('Book1');
console.log(bookLibrary.getAllBooks());
//# sourceMappingURL=classes.js.map