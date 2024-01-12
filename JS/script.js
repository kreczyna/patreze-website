"use strict";


// SMOOTH SCORLLING

document
  .querySelector(".main-nav-list")
  .addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

document.querySelectorAll(".footer-list-scroll").forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.preventDefault();

    console.log(e);
    if (e.target.classList.contains("scroll-back")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
});



// Input button

const inputName = document.querySelector('.input_name');
const inputEmail = document.querySelector('.input_email');
const submitButton = document.querySelector('.submit-btn')




const checkInputs = function() {
      const nameValue = inputName.value.trim();
      const emailValue = inputEmail.value.trim();

      if (nameValue !=='' && emailValue !==''){
            submitButton.classList.remove('submit-btn-notrdy');
            submitButton.classList.add('submit-btn-rdy');
            console.log(submitButton.classList);
            
      } else {
            submitButton.classList.remove('submit-btn-rdy');
            submitButton.classList.add('submit-btn-notrdy');

      }
}


inputName.addEventListener('input', checkInputs);
inputEmail.addEventListener('input', checkInputs);


// sticky Nav

const header = document.getElementById('section--hero');
const nav = document.querySelector('.sticky-test');

const stickyNav = function(entries) {

  const [entry]= entries


  if (!entry.isIntersecting){
    nav.classList.add('sticky')
  } else {
    nav.classList.remove('sticky')
  }

}
  


const headerObserver = new IntersectionObserver(stickyNav, {
  root:null,
  threshold: 0,
  rootMargin: '0px',
});

headerObserver.observe(header);