// Your task: Add two methods to this class:
//
// add(item: T): void → pushes item into this.items
// getAll(): T[] → returns this.items
interface Book{
    id:string;
    title:string;
    author:string;
    pages:number;
    isRead:boolean;
}


class Collection <T> {
    private Array: T[]  = [];

    // books -> books + book
    add(obj:T){
        this.Array.push(obj)
    }
    getAll(){
        return(
            this.Array
        )
    }
}

let Books = new Collection<Book>();

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
let Movies = new Collection<string>();

Movies.add('movie1');
Movies.add('movie2');
Movies.add('movie3');
Movies.add('movie4');

console.log(Movies.getAll());

