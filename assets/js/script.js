$(document).ready(function () {
  var savedContent9 = localStorage.getItem("content9");
  $("#9").val(savedContent9);

  var savedContent10 = localStorage.getItem("content10");
  $("#10").val(savedContent10);

  var savedContent11 = localStorage.getItem("content11");
  $("#11").val(savedContent11);

  var savedContent12 = localStorage.getItem("content12");
  $("#12").val(savedContent12);

  var savedContent13 = localStorage.getItem("content13");
  $("13").val(savedContent13);

  var savedContent14 = localStorage.getItem("content14");
  $("#14").val(savedContent14);

  var savedContent15 = localStorage.getItem("content15");
  $("#15").val(savedContent15);

  var savedContent16 = localStorage.getItem("content16");
  $("#16").val(savedContent16);

  var savedContent17 = localStorage.getItem("content17");
  $("#17").val(savedContent17);
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

$("#saveBtn9").on("click", function () {
  var contentHour9 = $("#9").val();
  localStorage.setItem("content9", contentHour9);
});

$("#saveBtn10").on("click", function () {
  var contentHour10 = $("#10").val();
  localStorage.setItem("content10", contentHour10);
});

$("#saveBtn11").on("click", function () {
  var contentHour11 = $("#11").val();
  localStorage.setItem("content11", contentHour11);
});

$("#saveBtn12").on("click", function () {
  var contentHour12 = $("#12").val();
  localStorage.setItem("content12", contentHour12);
});

$("#saveBtn13").on("click", function () {
  var contentHour13 = $("#13").val();
  localStorage.setItem("content13", contentHour13);
});

$("#saveBtn14").on("click", function () {
  var contentHour14 = $("#14").val();
  localStorage.setItem("content14", contentHour14);
});

$("#saveBtn15").on("click", function () {
  var contentHour15 = $("#15").val();
  localStorage.setItem("content15", contentHour15);
});

$("#saveBtn16").on("click", function () {
  var contentHour16 = $("#16").val();
  localStorage.setItem("content16", contentHour16);
});

$("#saveBtn17").on("click", function () {
  var contentHour17 = $("#17").val();
  localStorage.setItem("content17", contentHour17);
});

$("#clearBtn").on("click", function () {
  localStorage.clear();
  $("#9").val("");
  $("#10").val("");
  $("#11").val("");
  $("#12").val("");
  $("#13").val("");
  $("#14").val("");
  $("#15").val("");
  $("#16").val("");
  $("#17").val("");
});
