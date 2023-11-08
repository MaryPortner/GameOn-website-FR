// DOM Elements
const body = document.querySelector(".body-main");
const btnClose = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const getForm = document.querySelector("form");
const getFormOnsubmit = getForm.querySelector("onsubmit");
const heroSection = document.querySelector("div.hero-section");
const icon = document.querySelector(".icon");
const mainNavbarResponsive = document.querySelector("#myTopnav .main-navbar").firstElementChild;
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalConfirmSending = document.querySelector(".modalConfirmSending");
const modalConfirmSendingBtn = document.querySelector(".modalConfirmSending__btn");
const modalConfirmSendingClose = document.querySelector(".modalConfirmSending-close");


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Closing form
btnClose.addEventListener("click", () =>{
  modalbg.style.display = "none";
});


// add margin-top on menu responsive
icon.addEventListener("click", () =>{
  mainNavbarResponsive.classList.add("main-navbarResponsive");
});

// Closing sending confirmation with button close
modalConfirmSendingBtn.addEventListener("click", () =>{
  closeModalSendingConfirmation();
});

// Closing sending confirmation
modalConfirmSendingClose.addEventListener("click", () =>{
  closeModalSendingConfirmation();
});



function closeModalSendingConfirmation(){
  modalConfirmSending.style.display = "none";
  heroSection.style.display = "grid";
  modalbg.style.visibility = "block";
  modalbg.style.display = "none";
  body.style.backgroundColor = "";
}

function confirmSendingForm(){
  modalConfirmSending.style.display = "flex";
  modalbg.style.display = "none";
  body.style.backgroundColor = "rgba(26, 39, 156, 0.4)";
  getForm.reset();
  
}