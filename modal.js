// DOM Elements
const btnClose = document.querySelector(".close");
const getForm = document.querySelector("form");
const getFormOnsubmit = getForm.querySelector("onsubmit");
const icon = document.querySelector(".icon");
const mainNavbarResponsive = document.querySelector(" #myTopnav .main-navbar").firstElementChild;
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalConfirmSending = document.querySelector(".modalConfirmSending");
const modalConfirmSendingBtn = document.querySelector(".modalConfirmSending__btn");
const modalConfirmSendingClose = document.querySelector(".modalConfirmSending-close");
const heroSection = document.querySelector("div.hero-section");
const bgroundHeroSection = document.querySelector(".bground");


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

// add margin-top on menu responsive
icon.addEventListener("click", () =>{
  mainNavbarResponsive.classList.add("main-navbarResponsive");
});


//Closing form
btnClose.addEventListener("click", () =>{
  modalbg.style.display = "none";
});




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


function confirmSendingForm(){
  modalConfirmSending.style.display = "flex";
  heroSection.style.display = "none";
  bgroundHeroSection.style.display = "none";
  getForm.reset();
}

// Closing sending confirmation
modalConfirmSendingClose.addEventListener("click", () =>{
  modalConfirmSending.style.display = "none";
  heroSection.style.display = "block";
  bgroundHeroSection.style.visibility = "block";
  modalbg.style.display = "none";
});

// Closing sending confirmation with button close
modalConfirmSendingBtn.addEventListener("click", () =>{
  modalConfirmSending.style.display = "none";
  heroSection.style.display = "block";
  bgroundHeroSection.style.display = "block";
  modalbg.style.display = "none";
});


// getForm.addEventListener("submit", confirmSendingForm());
// Showing registration confirmation upon form submission