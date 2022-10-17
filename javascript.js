
const nameP = document.createElement('p');
const div = document.querySelector('.display');
const addBtn = document.querySelector('#add-btn');
const table = document.querySelector('.table');


let myLibrary = [];

function Book(name,author){
    this.name = name;
    this.author = author;
}

Book.prototype.addToLibrary= function(){
    myLibrary.push([this.name,this.author]);
}

let nameBook;
let authorBook;

addBtn.addEventListener('click', () => {

    nameBook = prompt('Enter name of book: ');
    authorBook = prompt('Enter name of author: ');
    new Book(nameBook,authorBook).addToLibrary();

    display();


})






function display(){
    myLibrary.forEach((book)=>{
        let row = table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = `${book[0]}`;
        cell2.innerHTML = `${book[1]}`;
        
        
    })
}

