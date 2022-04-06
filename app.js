const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
  //Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", clickFunction);
  }

  //sections active
  allSections.addEventListener("click", (e) => {
    console.log(e);
    const id = e.target.dataset.id;
    console.log(id);
    if (id) {
      //remove seleted from the other btns
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("avtive");

      //hide other section
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

function clickFunction() {
  let currentBtn = document.querySelectorAll(".active-btn");
  currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
  this.className += " active-btn";
}

//Toggle theme
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  let element = document.body;
  element.classList.toggle("light-mode");
});

PageTransitions();
