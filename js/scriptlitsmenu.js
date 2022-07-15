const card = document.querySelector(".card");
const view = document.querySelector(".view");
const close = document.querySelector(".close");
const picture = document.querySelector(".picture");

const card2 = document.querySelector(".card2");
const view2 = document.querySelector(".view2");
const close2 = document.querySelector(".close2");
const picture2 = document.querySelector(".picture2");

function expand() {
  card.classList.remove("preview");
  card.classList.add("expanded");
}


view.addEventListener("click", event => {
  expand();
});

picture.addEventListener("click", event => {
  if (card.classList.contains("preview")) {
    expand();
  }
});

close.addEventListener("click", event => {
  card.classList.remove("expanded");
  card.classList.add("preview");
});

function expand2() {
  card2.classList.remove("preview2");
  card2.classList.add("expanded2");
}


view2.addEventListener("click", event => {
  expand2();
});

picture2.addEventListener("click", event => {
  if (card2.classList.contains("preview2")) {
    expand2();
  }
});

close2.addEventListener("click", event => {
  card2.classList.remove("expanded2");
  card2.classList.add("preview2");
});


