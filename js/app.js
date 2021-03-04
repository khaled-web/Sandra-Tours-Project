// ********** set date ************
// select span
document.getElementById("date").innerHTML = new Date().getFullYear();

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
 links.classList.toggle("show-links");
});

// ********** nav toggle ************
// const clearField = () => {
//  let field, fieldArr;
//  field = document.querySelectorAll('.form-control');
//  fieldArr = Array.from(field);
//  fieldArr.forEach((el) => el.value = '');
// }

document.querySelector('.btn-submit').addEventListener('click', clearField);

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
 link.addEventListener("click", e => {
  // prevent default
  e.preventDefault();
  links.classList.remove("show-links");

  const id = e.target.getAttribute("href").slice(1);
  const element = document.getElementById(id);
  //
  let position = element.offsetTop - 62;

  window.scrollTo({
   left: 0,
   // top: element.offsetTop,
   top: position,
   behavior: "smooth"
  });
 });
});
