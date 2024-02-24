const div = document.querySelector("div");

const counter = setInterval(() => {
  div.textContent--;

  if (div.textContent === "5") {
    window.open("https://elzero.org", "_blank", "width=400,height=400");
  } else {
    if (div.textContent === "0") {
      clearInterval(counter);
      window.open("https://elzero.org", "_self");
    }
  }
}, 1000);
