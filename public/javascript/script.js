
var swanson = function() {
    var swansonUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

    fetch(swansonUrl).then(function(response) {
        console.log(response);
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
  // fetch('/api/scheduledEvents', {
  //   method: 'get',
  //   headers: { 'Content-Type': 'application/json' }
  // }).then(function (response) {
  //   response.json()
  // }).then(function (data) {
  //     calendarScheduledEvents = data.map((event1) => event1.get({ plain:true }))
  // })
  // var tempArray = calendarScheduledEvents.map(calendarScheduledEvents => ({
  //   id: calendarScheduledEvents.id,
  //   name: calendarScheduledEvents.location.name,
  //   date: calendarScheduledEvents.date,
  //   type: calendarScheduledEvents.sports.name
  // }))       
$('#calendar').evoCalendar({
  theme: "Royal Navy",
  // calendarEvents: tempArray
})
});

