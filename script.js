const form = document.getElementById("book-form");
const show = document.querySelector('.show');
const button = document.createElement('div');
const remove = document.createElement('button');
const editpages = document.createElement('button');
const collection = document.createElement('div');
let flag = 0;
collection.classList.add('mycollection');

const container2 = document.querySelector('.container-2');

button.classList.add('options');
button.appendChild(remove);
button.appendChild(editpages);
show.addEventListener('click',addit);
const myLibrary = [];
function book(name,author,noofpages)
{
    this.name = name,
    this.author = author,
    this.noofpages = noofpages;
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("book").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById('no-of-pages').value;
  let newbook = new book(name,author,pages);
  myLibrary.push(newbook);
  document.getElementById("book").value = "";
  document.getElementById("author").value = "";
  document.getElementById('no-of-pages').value = "";
if(collection.innerHTML=='OOPS! LOOKS LIKE YOU DONT HAVE ANY BOOKS YET')
{
    collection.innerHTML = "";
}
else if(collection.hasChildNodes())
{
    creatediv(newbook);
}
show.textContent = "SHOW MY COLLECTION"+"("+myLibrary.length +")";


});
function addit()
{
    if(flag==0)
    {
        container2.appendChild(collection);
        flag++;
    }
    if (myLibrary.length==0) 
    {
        collection.innerHTML = 'OOPS! LOOKS LIKE YOU DONT HAVE ANY BOOKS YET';
        return;
    }
    collection.style.border = "8px solid black";

    while (collection.firstChild) 
    {
        collection.removeChild(collection.firstChild);
    }   
    myLibrary.forEach(e=>
    {
        creatediv(e);
    })
}
function creatediv(e)
{
    let bookname = document.createElement('p');
    let authorname = document.createElement('p');
    let noofpages = document.createElement('p');
    bookname.textContent = "Book name: "+e.name;
    authorname.textContent = "Author's name: "+e.author;
    noofpages.textContent = "Total no of pages: "+e.noofpages;
    let about = document.createElement('div');
    about.classList.add('name-display');
    about.appendChild(bookname);
    about.appendChild(authorname);
    about.appendChild(noofpages);
    let box = document.createElement('div');
    box.classList.add('bookcontainer')
    box.classList.add('box'+myLibrary.length);
    let button = document.createElement('div');
    let remove = document.createElement('button');
    let editpages = document.createElement('button');
    remove.addEventListener('click',function(e)
    {
        collection.removeChild(e.target.parentNode.parentNode);
        let element = e.target.parentNode.parentNode.classList[1].toString()[3]-1;
        myLibrary.splice(element,1);
        if(myLibrary.length>0)
        {
            show.textContent = "SHOW MY COLLECTION"+"("+myLibrary.length +")";

        }
        else
        {
            show.textContent = "SHOW MY COLLECTION";
            collection.style.border="none";

        }

        
    })
    remove.textContent = "delete";
    editpages.textContent ="edit"
    button.classList.add('options');
    button.appendChild(remove);
    button.appendChild(editpages);
    box.appendChild(about);
    box.appendChild(button);
    collection.append(box);
}



