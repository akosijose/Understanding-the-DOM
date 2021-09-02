var btns = document.querySelectorAll("#book-list .delete");

// btns.addEventListener // we can't do that - we need to loop that element
// transfer this element to an Array.from

Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // navigate outward to the parent element to grab that LI
    console.log(e);
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  });
});

// prevent default method
const link = document.querySelector("#page-banner a");
link.addEventListener("click", (e) => {
  e.preventDefault();
  // alert(`navigate to ${e.target.textContent} was prevented`); // pwede rin console dito
});
