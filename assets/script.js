// I need to display the date using moment.js

var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

let saveBtn = $("#saveBtn");
let content = $(".content");
let timeBlock = document.querySelectorAll(".timeBlock");
let currentHour = moment().hour();
console.log(currentHour);

//function that checks the hour of each timeblock and compares it to current hour
content.each(function () {
  //this will get the integer of the id for each timeblock
  let timeBlock = parseInt($(this).attr("id"));

  //this will add class to each timeblock depending on whether they are in future, past or present
  if (timeBlock > currentHour) {
    $(this).addClass("future");
  } else if (timeBlock === currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("past");
  }
});

// saveableContent = document.getElementById("#content");
// savedContent = saveableContent.value();

// function saveText() {
//   localStorage.setItem("savedContent", savedContent);
// }

// function renderText() {
//   var savedContent = JSON.parse(localStorage.getItem("saveableContent"));

//   if (savedContent !== null) {
//     saveableContent = savedContent;
//   }

//   // need to render saved content into text area
// }

// function initSaveAndRender() {
//   saveText();
//   renderText();
// }

// button.on("click", function (event) {
//   event.preventDefault();
//   initSaveAndRender();
// });

//I need a save button on each line and I need an event listener that will save the event on that line

// I need a function that will manage the color depending on time of day
