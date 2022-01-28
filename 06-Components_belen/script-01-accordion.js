console.log("js works");

//1. Add event listener to common parent element
//2. Determine what element originated the event

//Accordion component
const accordionContainer = document.querySelector(".accordion");
console.log(accordionContainer);
const items = document.querySelectorAll(".item");

accordionContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".item");
  console.log(clicked);

  //Guard close
  if (!clicked) return;

  //One item visible at a time
  // items.forEach((c) => c.classList.remove("open"));
  // clicked.classList.add("open");

  //Several items visible at the same time
  clicked.classList.toggle("open");
});
