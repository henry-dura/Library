const table = document.querySelector('table');
const addButton = document.querySelector('#add-btn');
const submiter = document.querySelector('#submit');
const deleteButton = document.querySelector('.delete');


// const deleteButton = document.createElement('button');

// deleteButton.innerText = 'DELETE';
// deleteButton.classList.add('delete');



let myLibrary = [
    {
        name: 'Half of the yellow son',
        author: 'Chimamanda',
    },

    
  
];

function Book(name, author){
    this.book = book;
    this.author = author;

}






addButton.addEventListener('click', () =>{
    document.querySelector('form').style.display = 'block';
})


submiter.addEventListener('click',submitActions)

function submitActions(){
    const bookName = document.querySelector('#bookName');
    const author = document.querySelector('#author');
    
    if(bookName.value != '' && author.value != ''){
        
        myLibrary.push({name:bookName.value, author: author.value});

        while(table.rows.length > 1) {
            table.deleteRow(1);
          }

        addBookToLibrary();
       
        console.log(bookName.value);
        console.log(author.value);
        document.querySelector('form').style.display = 'none';
        bookName.value = ''; author.value='';
        event.preventDefault();
    }

   

   


}





function addBookToLibrary(){

    for(let eachBookDetail of myLibrary){

        const row = table.insertRow(1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.innerHTML =eachBookDetail.name ;
        cell2.innerHTML = eachBookDetail.author;
        cell3.innerHTML = '<button class="delete" onClick="deleting()"> DELETE</button>';
    }
    
    
}


function deleting(){
    console.log('deleting');
}


addBookToLibrary();
console.log(table.rows.length)