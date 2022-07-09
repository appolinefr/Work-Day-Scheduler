$(document).ready(function () {
  var savedContent9 = localStorage.getItem("hour9");
  $("#content9").textContent = savedContent9;
});
// I need to display the date using moment.js

var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

const content = $(".content");
let currentHour = moment().hour();

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

var contentHour9 = $("#content9").value;
var saveBtn9 = $("#saveBtn9");

saveBtn9.on("click", function () {
  localStorage.setItem("content9", contentHour9);
});
