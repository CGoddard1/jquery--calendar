//save block that adds an event listener with the save button
$(function () {
  $('.saveBtn').on('click', function () {
    var timeBlockID = $(this).parent().attr('id');
    var userInput = $(this).siblings('.description').val();
    localStorage.setItem(timeBlockId, userInput);
  });
//local storage save for elements in the time block
  $('.time-block').each(function() {
    var timeBlockId = $(this).attr('id');
    var userInput = localStorage.getItem(timeBlockId);
    $(this).find('.description').val(userInput);
//sets current hour and timeblock variables
    var currentHour = dayjs().hour();
    var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);
//tells whether it is the past present or future and adds a class in conjunction with the time
    if (timeBlockHour < currentHour) {
      $(this).addClass('past');
    } else if (timeBlockHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  })
//displays current date and time at the top of the page
var timeInterval = setInterval(function () {
  var today = dayjs();
  $('#currentDay').text(today.format('MMMM D, YYYY, h:mm:ss'));
}, 1000);
});