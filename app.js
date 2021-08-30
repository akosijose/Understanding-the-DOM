let titles = document.getElementsByClassName("title");

// check if array or not
// console.log(Array.isArray(titles)); // should return FALSE

// convert a non array to array
// console.log(Array.isArray(Array.from(titles))); // should return TRUE

Array.from(titles).forEach((item) => {
  console.log(item);
});
