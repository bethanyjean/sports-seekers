
var swanson = function() {
    var swansonUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

    fetch(swansonUrl).then(function(response) {

        response.json().then(function(data) {
          console.log(data);
          $("#swanson").append(data);
        });
    });
};
// swanson();

var calendarScheduledEvents = [];
var evoCalendarEvents = [];

        // initialize your calendar, once the page's DOM is ready
$(document).ready(function () {
  fetch('/api/scheduledEvents', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(function (response) {
    return response.json()
  }).then(function (data) {
    console.log("data", data)
    evoCalendarEvents = data.map(data => ({
      id: data.id,
      name: data.location.name,
      date: data.date,
      type: data.sport.name
    }))
  }).then(function() {
  console.log("calendar", evoCalendarEvents);
  console.log("bethany");
  // console.log("scheduleCalendar", calendarScheduledEvents[0].id)
  $("#calendar").evoCalendar({
    theme: "Royal Navy",
  })
}).then(function(){
  /* $("#calendar").evoCalendar('addCalendarEvent', [
    {
      id: '09nk7Ts',
      name: "My Birthday",
      date: "February/15/2020",
      type: "birthday",
      everyYear: true
    }
  ]); 
*/
  // $("#calendar").evoCalendar('addCalendarEvent', calendarScheduledEvents);
  // $("#calendar").evoCalendar('addCalendarEvent', [
  //     {
  //       id: 'bHay68s', // Event's ID (required)
  //       name: "New Year", // Event name (required)
  //       date: "January/1/2020", // Event date (required)
  //       type: "holiday", // Event type (required)
  //       everyYear: true // Same event every year (optional)
  //     },
  //     {
  //       name: "Vacation Leave",
  //       badge: "02/13 - 02/15", // Event badge (optional)
  //       date: ["February/13/2020", "February/15/2020"], // Date range
  //       description: "Vacation leave for 3 days.", // Event description (optional)
  //       type: "event",
  //       color: "#63d867" // Event custom color (optional)
  //     }
  //   ]
  // );

  $.each(evoCalendarEvents, function (index, event1) {
    $("#calendar").evoCalendar("addCalendarEvent", event1);
  })
})
});


 




