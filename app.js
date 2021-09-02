// var btns = document.querySelectorAll("#book-list .delete");

// // btns.addEventListener // we can't do that - we need to loop that element
// // transfer this element to an Array.from

// Array.from(btns).forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     // navigate outward to the parent element to grab that LI
//     // console.log(e.target.parentElement);
//     const li = e.target.parentElement;
//     li.parentElement.removeChild(li);
//   });
// });

const list = document.querySelector("#book-list ul");

list.addEventListener("click", (e) => {
  if (e.target.className === "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});
