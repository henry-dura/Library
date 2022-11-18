
const nameP = document.createElement('p');
const div = document.querySelector('.display');
const addBtn = document.querySelector('#add-btn');
const table = document.querySelector('.table');
const table1 = document.querySelector('.table ');
const deleteButton = document.createElement('button');
deleteButton.innerText = 'DELETE';


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
    myLibrary.forEach((book) =>{
        
        
        let row = table.insertRow(1);
        let nameCell = row.insertCell(0);
        let authorCell = row.insertCell(1);
        let actionCell = row.insertCell(2);
        nameCell.innerHTML = `${book[0]}`;
        authorCell.innerHTML = `${book[1]}`;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'DELETE';
        // deleteButton.classList.add(`${myLibrary.length}`);
        deleteButton.classList.add('delete');
        // deleteButton.setAttribute(`${onclick}`,`${deleteRow(this)}` );
        actionCell.appendChild(deleteButton);

        deleteButton.addEventListener('click', removeRow)

        

        
    })

    
        // let row = table.insertRow(1);
        // let nameCell = row.insertCell(0);
        // let authorCell = row.insertCell(1);
        // let actionCell = row.insertCell(2);
        // nameCell.innerHTML = `${myLibrary.at(-1)[0]}`;
        // authorCell.innerHTML = `${myLibrary.at(-1)[1]}`;

        // const deleteButton = document.createElement('button');
        // deleteButton.innerText = 'DELETE';
        // deleteButton.classList.add(`${myLibrary.length}`);
        // deleteButton.classList.add('delete');
        // actionCell.appendChild(deleteButton);   
        

           
            
        
       
        
}


function deleteRow(r) {
    var i = nameCell.authorCell.row;
    table.deleteRow(i);
  }

  function removeRow(element) {
    $(element).closest('.table').remove();
  }
