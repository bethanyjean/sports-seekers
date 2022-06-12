//Swanson inspiration for when you check the console
var swanson = function() {
    var swansonUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

    fetch(swansonUrl).then(function(response) {

        response.json().then(function(data) {
          console.log(data);
          $("#swanson").append(data);
        });
    });
};
swanson();

var evoCalendarEvents = [];

// initialize your calendar, once the page's DOM is ready
$(document).ready(function () {
  //get all the event data from the api call
  fetch('/api/scheduledEvents', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(function (response) {
    return response.json()
    //map the data into the proper form for evoCalendar
  }).then(function (data) {
    evoCalendarEvents = data.map(data => ({
      id: data.id,
      description: data.location.name,
      date: data.date,
      name: data.sport.name
    }))
  // initialize your calendar
  }).then(function() {
  $("#calendar").evoCalendar({
    theme: "Royal Navy",
  })
  //loop over the array and add it to the calendar
}).then(function(){
  $.each(evoCalendarEvents, function (index, event1) {
    $("#calendar").evoCalendar("addCalendarEvent", event1);
  })
})
});


 




