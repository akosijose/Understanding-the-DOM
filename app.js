const list = document.querySelector("#book-list ul");

// delete books
list.addEventListener("click", (e) => {
  if (e.target.className === "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

// add book list
const addForm = document.forms["add-book"];

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  // create elements
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  // add content
  deleteBtn.textContent = "delete";
  bookName.textContent = value;

  // add classes
  bookName.classList.add("name");
  deleteBtn.classList.add("delete");

  // appeend to document inside the LI element
  li.appendChild(bookName);
  li.appendChild(deleteBtn);

  // append the LI to the DOM
  list.appendChild(li);
});

// hide books
const hideBox = document.querySelector("#hide");
hideBox.addEventListener("click", (e) => {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

// filter books / search books
const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", (e) => {
  // first grab the search term
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName("li"); // this is HTML collection
  Array.from(books).forEach((book) => {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});

// tabbed content
const tabs = document.querySelector(".tabs");
const panels = document.querySelectorAll(".panel");
tabs.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if (panel == targetPanel) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }
});
