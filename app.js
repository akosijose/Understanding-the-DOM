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
