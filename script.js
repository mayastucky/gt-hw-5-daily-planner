$(document).ready(function () {
  console.log("ready!");

  var dayToday = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").append(dayToday);

  var hour = parseInt(moment().format("HH"));
  console.log(hour);
  console.log(dayToday);

  // SUPER helpful code to help understand for each and how moment.js works: https://github.com/cibellem/dayplanner
  //now we want to compare the time of the user to the time of the text blocks

  //this goes into the tag "textarea" from the HTML and runs a for each loop through it
  $("textarea").each(function () {
    var timeBlock = parseInt($(this).attr("id"));
    if (timeBlock < hour) {
      $(this).addClass("past");
    } else if (timeBlock === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  //save to local storage
  var nine = $("#9");
  var ten = $("#10");
  var eleven = $("#11");
  var twelve = $("#12");
  var one = $("#13");
  var two = $("#14");
  var three = $("#15");
  var four = $("#16");
  var five = $("#17");

  //saves to local storage during a click on each of the buttons
  //key: value
  $("button").on("click", function () {
    localStorage.setItem("9", nine.val());
    localStorage.setItem("10", ten.val());
    localStorage.setItem("11", eleven.val());
    localStorage.setItem("12", twelve.val());
    localStorage.setItem("1", one.val());
    localStorage.setItem("2", two.val());
    localStorage.setItem("3", three.val());
    localStorage.setItem("4", four.val());
    localStorage.setItem("5", five.val());
  });

  //now we need to retrieve that information so it's saved on refresh

  $("#9").append(localStorage.getItem("9"));
  $("#10").append(localStorage.getItem("10"));
  $("#11").append(localStorage.getItem("11"));
  $("#12").append(localStorage.getItem("12"));
  $("#13").append(localStorage.getItem("1"));
  $("#14").append(localStorage.getItem("2"));
  $("#15").append(localStorage.getItem("3"));
  $("#16").append(localStorage.getItem("4"));
  $("#17").append(localStorage.getItem("5"));
});
