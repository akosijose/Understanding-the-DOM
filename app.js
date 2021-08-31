const bookList = document.querySelector("#book-list");

// log the next siblings
console.log("book-list next sibling is:", bookList.nextSibling);
console.log("book-list next element sibling is:", bookList.nextElementSibling);
// log the previous siblings
console.log("book-list previous sibling is:", bookList.previousSibling);
console.log(
  "book-list previous element sibling is:",
  bookList.previousElementSibling
);

// example of complex how to navigate previous element and access it
bookList.previousElementSibling.querySelector("p").innerHTML +=
  "<br /> Hello previous sibling";
