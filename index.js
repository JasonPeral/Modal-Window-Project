'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// const buttonOpen = document.querySelector('.show-modal');
// console.log(buttonOpen);
//When analyzing this code, there are 3 buttons with this class name and the output
//to the console is only for the first one.

//To get all 3 buttons to be parsed we have to use the document.querySelectorAll

const buttonOpen = document.querySelectorAll('.show-modal');

const open = function () {
  //Just a test case with the button to see if it has been clicked
  console.log('button has been clicked');
  //Here we are removing the hidden class that hides the modal window with css
  //classList has a couple different methods but we use remove for this case
  //At this point we cannot close the modal window as we only have functionallity for removing the hidden windown
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Creating the function outside of the event listeners for ease of
const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//This shows the text content for each of them 1, 2, 3
//We iterate through this array to be able to touch each node in the list and have an event listener
//attached
for (let i = 0; i < buttonOpen.length; i++) {
  //Here we create an EventListener with a click function
  //We say buttonOpen[i] so that it can be either one of the buttons
  buttonOpen[i].addEventListener('click', open);
  btnCloseModal.addEventListener('click', close);
  overlay.addEventListener('click', close);
}
