const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
  { id: 1, author: "Howard Lovecraft", name: "Call of Cthulhu", booksQuantity: 2 },
  { id: 2, author: "Jerome Salinger", name: "Catcher in the Rye", booksQuantity: 12 },
  { id: 3, author: "Joanne Rowling", name: "Harry Potter", booksQuantity: 1 },
  { id: 4, author: "John Tolkien", name: "Silmarillion", booksQuantity: 4 },
  { id: 5, author: "Robert Heinlein", name: "Starship Troopers", booksQuantity: 0 },
];

function library() {
    let action = (prompt("What action do you want to do? You can take, restore or add book.")).trim().toLowerCase();
    switch (action) {
        case "take":
            take();
            console.log(books);
            break;
        case "restore":
            restore();
            console.log(books);
            break;
        case "add":
            add();
            console.log(books);
            break;
        default:
            alert("Select the required action!");
    }
}

const take = () => {
    let askedBook = prompt((`You can take one of the next books:\n${books.filter((book) => book.booksQuantity > 0)
    .reduce((acc, book) => acc += ("- " + book.author + " : " + book.name + "\n"), "")}You must enter book name or author.`));
    if (askedBook) {
        askedBook = askedBook.trim().toLowerCase();//trim и toLowerCase применяю здесь, так как при попадании к ним null (при нажатии отмены) в консоли появляется ошибка.
    } else {
        alert("You don't entered any book name!");
        return;
    }
    if (books.some((book) => ((book.name.toLowerCase() === askedBook) || (book.author.toLowerCase() === askedBook)) && book.booksQuantity > 0)) {
        let idBook = 0;
        for (let book of books) {
            if ((book.name.toLowerCase() === askedBook) || book.author.toLowerCase() === askedBook) {
                idBook += book.id;//Наверное не лучший способ найти нужное ID, подумаю как можно написать лучше, наверное через array.find() 
                book.booksQuantity--;
            }
        } 
        alert(`You can take your book! Your id is ${idBook}`);
    } else if (books.some((book) => ((book.name.toLowerCase() === askedBook) || (book.author.toLowerCase() === askedBook)) && book.booksQuantity <= 0)) {
        alert("Someone else is reading your book now, please try again later.");
    } else {
        alert("You entered wrong book name.");
    }
}

const restore = () => {
    let restoreBook = prompt("Please enter id your book.");
    let indicator = 0;
    for (let book of books) {
        if (!restoreBook) {
            alert("You don't entered any id!");
            break;
        } else if (book.id == restoreBook) {
            alert("You have successfully returned the book.");
            book.booksQuantity++;
            break;
        } else {
            indicator++;
        }
    }
    if (indicator === books.length) {
        alert("You entered wrong id!");//Уведомление появляется на последней итерации цикла, если ранее он не прервался после обнаружения правильного ID
    }
}

const add = () => {
    let authorBook = prompt("Please enter the author of book.");
    let nameBook = prompt("Please enter the name of book.");
    let idBook;
    if (!authorBook || !nameBook) {
        alert("You don't entered needed information!");
    } else {
        authorBook = authorBook.trim().toLowerCase();
        nameBook = nameBook.trim().toLowerCase();
        let temporaryIDBook = Math.round(Math.random() * 100);
        if (temporaryIDBook !== books.find((book) => book.id)) {
        idBook = temporaryIDBook;
        }
        for (let book of books) {
            if (book.name.toLowerCase() === nameBook && book.author.toLowerCase() === authorBook) {
                book.booksQuantity++;
                alert("Library already has such a book. The number of available books has been increased.");
                break;
            } else {
                authorBook = authorBook.slice(0,1).toUpperCase() + authorBook.slice(1);
                nameBook = nameBook.slice(0,1).toUpperCase() + nameBook.slice(1);
                const newBook = {id: idBook, author: authorBook, name:nameBook, booksQuantity: 1};
                books.push(newBook);
                alert(`You have successfully added the book to the library! Your ID is ${idBook}`);
                break;
            }
        }
    }
}