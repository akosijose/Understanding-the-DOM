// $('#wrapper') // in jQuery
const wrap = document.querySelector("#book-list li:nth-child(2) .name");
// console.log(wrap);

let book = document.querySelector("#book-list li .name"); // only return one element
// console.log(books);

let books = document.querySelectorAll("#book-list li .name"); // return node list
// console.log(books);

// array method using forEach
Array.from(books).forEach((book) => {
  // return collection of elements
  console.log(book);
});
