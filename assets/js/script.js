const list = document.querySelectorAll(".nav-li");

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

function theFunction() {
  document.querySelector("nav").classList.toggle("trans");
  document.querySelector(".menu").classList.toggle("none");
  document.querySelector(".close").classList.toggle("none");
}
function secondFunction() {
  document.querySelector(".some-space").classList.add("none");
  document.querySelector(".lower-main").classList.add("lowerfix1");
}
function resume() {
  theFunction();
  document.querySelector(".main-1-main").classList.add("none");
  document.querySelector(".main-2-main").classList.remove("none");
  document.querySelector(".main-3-main").classList.add("none");
  document.querySelector(".main-4-main").classList.add("none");

  secondFunction();
}
function projects() {
  theFunction();
  document.querySelector(".main-1-main").classList.add("none");
  document.querySelector(".main-2-main").classList.add("none");
  document.querySelector(".main-3-main").classList.remove("none");
  document.querySelector(".main-4-main").classList.add("none");
  secondFunction();
}

document.querySelector(".mobilenav").addEventListener("click", () => {
  theFunction();
});
document.querySelector(".about").addEventListener("click", () => {
  theFunction();
  document.querySelector(".main-1-main").classList.remove("none");
  document.querySelector(".main-2-main").classList.add("none");
  document.querySelector(".main-3-main").classList.add("none");
  document.querySelector(".main-4-main").classList.add("none");
  document.querySelector(".some-space").classList.remove("none");
  document.querySelector(".lower-main").classList.remove("lowerfix1");
});
document.querySelector(".resume").addEventListener("click", resume);
document.querySelector(".project").addEventListener("click", projects);
document.querySelector(".contact").addEventListener("click", () => {
  theFunction();
  document.querySelector(".main-1-main").classList.add("none");
  document.querySelector(".main-2-main").classList.add("none");
  document.querySelector(".main-3-main").classList.add("none");
  document.querySelector(".main-4-main").classList.remove("none");
  secondFunction();
});
