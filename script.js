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

});
