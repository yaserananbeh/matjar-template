'use strict';

/***************************************************** */
/**************start code the to top button***************** */
/***************************************************** */
//Get the button
let mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/***************************************************************** */
/**********************Sign in Bottun click event************************* */
/***************************************************************** */
const signInBtn = document.getElementById('signInBtn');
const bodySelector = document.getElementsByTagName('body')[0];
const loginForm = document.getElementById('loginForm');
const closeFormBtn = document.getElementById('closeFormBtn');
signInBtn.addEventListener('click', showForm);
function showForm() {
  // bodySelector.style.opacity=0.75;
  loginForm.style.display = 'block';
  closeFormBtn.addEventListener('click', closeForm);
}
function closeForm(event) {
  loginForm.style.display = 'none';
  // bodySelector.style.opacity=1;
  closeFormBtn.removeEventListener('click', closeForm);
}

