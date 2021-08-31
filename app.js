const bookList = document.querySelector("#book-list");

console.log("the parent node is:", bookList.parentNode); // to show the parent node is
console.log("the parent element is:", bookList.parentElement); // to show the parent elament is
console.log("the parent element is:", bookList.parentElement.parentElement); // parent element and the parent element of this element

// console.log(bookList.childNodes); // show the children element and line break
console.log(bookList.children); // recommended
