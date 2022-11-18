

let myLibrary = [
    {
        name: 'Half of yellow son',
        author: 'Chimamanda',
    },

    {
        name:'Purple Hibiscus',
        author: 'Chimamanda',
    },

    {
        name: 'Men behind the Mask',
        author: 'Prof. Orabueze',
    }
];

function Book(name, author){
    this.book = book;
    this.author = author;

}

// let book1 = new Book('Half of yellow son', 'Chimamanda');
// let book2 = new Book('Purple Hibiscus', 'Chimamanda')


function addBookToLibrary(){
    for(let bookDetails of myLibrary){
        console.log(bookDetails.name);
    }


}


addBookToLibrary()