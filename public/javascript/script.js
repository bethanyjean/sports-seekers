
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
var calendarScheduledEvents = [];

        // initialize your calendar, once the page's DOM is ready
$(document).ready(function () {
  fetch('/api/scheduledEvents', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' } 
  }).then(function (response) {
    console.log("response", response)
    return response.json()
  }).then(function (data) {
  //   calendarScheduledEvents = data.map((event1) => event1.get({ plain:true }))
    console.log("data", data)
  // })
  calendarScheduledEvents = data.map(calendarScheduledEvents => ({
    id: calendarScheduledEvents.id,
    name: calendarScheduledEvents.location.name,
    date: calendarScheduledEvents.date,
    type: calendarScheduledEvents.sport.name
  }))}) 
  $("#calendar").evoCalendar();
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
  $("#calendar").evoCalendar({
    calendarEvents: [
      {
        id: 'bHay68s', // Event's ID (required)
        name: "New Year", // Event name (required)
        date: "January/1/2020", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },
      {
        name: "Vacation Leave",
        badge: "02/13 - 02/15", // Event badge (optional)
        date: ["February/13/2020", "February/15/2020"], // Date range
        description: "Vacation leave for 3 days.", // Event description (optional)
        type: "event",
        color: "#63d867" // Event custom color (optional)
      }
    ]
  });
});


 




