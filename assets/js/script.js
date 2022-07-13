//getting all elements from storage and displaying them on page
$(document).ready(function () {
  for (let index = 9; index < 18; index++) {
    var savedContent = localStorage.getItem("content" + index);
    $("#" + index).val(savedContent);
  }
});

//displaying date
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

//variable for time that will be used to compare current hour and timeblock
const content = $(".content");
let currentHour = moment().hour();

//function that checks the hour of each timeblock and compares it to current hour
content.each(function () {
  //this will get the integer of the id for each timeblock
  let timeBlock = parseInt($(this).attr("id"));

  //this will add class to each timeblock depending on whether they are in future, past or present
  if (timeBlock > currentHour) {
    $(this).addClass("future");
    $(this).removeClass("past");
    $(this).removeClass("present");
  } else if (timeBlock === currentHour) {
    $(this).addClass("present");
    $(this).removeClass("past");
    $(this).removeClass("future");
  } else {
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
  }
});

$(".custom-button").on("click", function () {
  var contentValue = $(this).siblings(".content").val();
  var contentHour = $(this).siblings(".content").attr("id");

  localStorage.setItem("content" + contentHour, contentValue);
});

//the clear button will clear the local storage
$("#clearBtn").on("click", function () {
  for (let index = 9; index < 18; index++) {
    $("#" + index).val("");
  }
  localStorage.clear();
});
