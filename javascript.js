const table = document.querySelector('table');
const tableBody = document.querySelector('table > tbody');
const addButton = document.querySelector('#add-btn');
const submiter = document.querySelector('#submit');
const deleteButton = document.querySelector('.delete');




let myLibrary =[];

function Book(name, author){
    this.book = book;
    this.author = author;

}






addButton.addEventListener('click', () =>{
    document.querySelector('form').style.display = 'block';
})


submiter.addEventListener('click',submitActions)

// actions to be perfomed when submit button is clicked
function submitActions(){
    const bookName = document.querySelector('#bookName');
    const author = document.querySelector('#author');
    
    if(bookName.value != '' && author.value != ''){
        
        myLibrary.push({name:bookName.value, author: author.value});
        addBookToLibrary();
       
        document.querySelector('form').style.display = 'none';
        bookName.value = ''; author.value='';
        event.preventDefault();
    }

}



// loops through myLibrary array and display it in table. It first clears the table leaving only the heading.

function addBookToLibrary(){

    while(table.rows.length > 1) {
        table.deleteRow(1);
      }

    
    for(let eachBookDetail of myLibrary){

        const row = table.insertRow(1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.innerHTML =eachBookDetail.name ;
        cell2.innerHTML = eachBookDetail.author;
        cell3.innerHTML = '<button class="delete" onClick="deleting(this)"> DELETE</button>';
    }
    
    
}

// delete button execution
function  deleting(rowToDelete) {
    let rowIndexOfButton = rowToDelete.parentNode.parentNode.rowIndex;
    
    myLibrary.splice( rowIndexOfButton-1, 1);
    addBookToLibrary();

    console.log(`row index is ${rowIndexOfButton}`);
    
}


