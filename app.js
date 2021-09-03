// changing attributes
var book = document.querySelector("li:first-child .name");
console.log(book);

// check attributes
book.hasAttribute("class"); //shoud return TRUE

// get attributes
book.getAttribute("class"); // should return name
book.getAttribute("id"); // should return null

// set attributes
book.setAttribute("id", "name"); // should return id attribute and set to 'name'
book.setAttribute("class", "name"); // should return class attribute and set to 'name'

// remove attributes
book.removeAttribute("class"); // remove class attribute
book.removeAttribute("id"); // remove id attribute
