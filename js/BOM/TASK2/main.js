const list = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  exp.style.backgroundColor = window.localStorage.getItem("color");

  list.forEach((li) => {
    li.classList.remove("active");
  });

  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}
list.forEach((li) => {
  li.addEventListener("click", (e) => {
    list.forEach((li) => {
      li.classList.remove("active");
    });

    console.log("e.currentTarget", e.currentTarget);
    e.currentTarget.classList.add("active");

    window.localStorage.setItem("color", e.currentTarget.dataset.color);

    exp.style.backgroundColor = window.localStorage.getItem("color");
  });
});
