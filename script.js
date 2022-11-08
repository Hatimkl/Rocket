const buttonTwo = document.querySelector(".button_two");
const buttonOne = document.querySelector(".button_one");
const leftH1 = document.getElementById("leftH1");
const leftP1 = document.getElementById("leftP1");
const rightH1 = document.getElementById("rightH1");
const rightP1 = document.getElementById("rightP1");
const mdlImg = document.getElementById("mdlImg");

function changeOne() {
  buttonTwo.classList.remove("active");
  buttonOne.classList.add("active");
  leftH1.textContent = "A World Without Limits";
  leftP1.textContent =
    "Direct repair of aneurysm, pseudoaneurysm, or excision (partial or totoal) and graft insertion.";
  rightH1.textContent = "There Are More Than 200 Stars";
  rightH1.style.color = "#ffffff";
  rightP1.textContent =
    "Direct repair of aneurysm, pseudoaneurysm,or excision (partial or totoal) and graft insertion.";
  mdlImg.src = "telescope.png";
}
buttonOne.addEventListener("click", changeOne);

function changeTwo() {
  buttonTwo.classList.add("active");
  buttonOne.classList.remove("active");
  leftH1.textContent = "Explore New Planets";
  leftP1.textContent =
    "Open repair of infraenal aortic aneurysm or dissection,plus repair of associated.";
  rightH1.textContent = "Get The Experience Of Exploring The Universe";
  rightH1.style.color = "#9300cf";
  rightP1.textContent = "";
  mdlImg.src = "helmet.png";
}
buttonTwo.addEventListener("click", changeTwo);
