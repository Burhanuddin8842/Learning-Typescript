"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Collection {
    Array = [];
    // books -> books + book
    add(obj) {
        this.Array.push(obj);
    }
    getAll() {
        return (this.Array);
    }
}
let Books = new Collection();
Books.add({
    id: crypto.randomUUID(),
    title: 'Book1',
    author: 'author1',
    pages: 295,
    isRead: false
});
Books.add({
    id: crypto.randomUUID(),
    title: 'Book2',
    author: 'author2',
    pages: 295,
    isRead: false
});
Books.add({
    id: crypto.randomUUID(),
    title: 'Book3',
    author: 'author3',
    pages: 295,
    isRead: false
});
Books.add({
    id: crypto.randomUUID(),
    title: 'Book4',
    author: 'author4',
    pages: 295,
    isRead: false
});
console.log(Books.getAll());
let Movies = new Collection();
Movies.add('movie1');
Movies.add('movie2');
Movies.add('movie3');
Movies.add('movie4');
console.log(Movies.getAll());
//# sourceMappingURL=Generics.js.map