let books = document.querySelectorAll("#book-list li .name");

Array.from(books).forEach((book) => {
  // should return text content in the console
  // console.log(book.textContent); // grab the text within this HTML element
  // book.textContent = "hello"; // change the text content inside the html element
  // book.textContent += " (book title)"; // append another text
});

// innerHTML
const bookList = document.querySelector("#book-list");
// bookList.innerHTML = "<h2>Hello innerHTML</h2>";
bookList.innerHTML += "<p>Hello innerHTML</p>";
