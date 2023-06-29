const list = document.querySelectorAll(".nav-li");
const main1 = document.querySelector(".main-1-main");
const main2 = document.querySelector(".main-2-main");
const main3 = document.querySelector(".main-3-main");
const main4 = document.querySelector(".main-4-main");

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
  main1.classList.add("none");
  main2.classList.remove("none");
  main3.classList.add("none");
  main4.classList.add("none");

  secondFunction();
}
function projects() {
  theFunction();
  main1.classList.add("none");
  main2.classList.add("none");
  main3.classList.remove("none");
  main4.classList.add("none");
  secondFunction();
}

document.querySelector(".mobilenav").addEventListener("click", () => {
  theFunction();
});
document.querySelector(".about").addEventListener("click", () => {
  theFunction();
  main1.classList.remove("none");
  main2.classList.add("none");
  main3.classList.add("none");
  main4.classList.add("none");
  document.querySelector(".some-space").classList.remove("none");
  document.querySelector(".lower-main").classList.remove("lowerfix1");
});
document.querySelector(".resume").addEventListener("click", resume);
document.querySelector(".project").addEventListener("click", projects);
document.querySelector(".contact").addEventListener("click", () => {
  theFunction();
  main1.classList.add("none");
  main2.classList.add("none");
  main3.classList.add("none");
  main4.classList.remove("none");
  secondFunction();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const contProj = document.querySelectorAll(".pro-box");
const contRes = document.querySelectorAll(".fix-box");

contProj.forEach((el) => observer.observe(el));
contRes.forEach((el) => observer.observe(el));
