
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


        // initialize your calendar, once the page's DOM is ready
        $(document).ready(function() {
          var calendarScheduledEvents = [];
          fetch('/api/scheduledEvents', {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        }).then(function(response) {
          response.json().then(function(data) {
          calendarScheduledEvents = data.map(function(event) {
            var scheduledEvent = {}
            scheduledEvent.type = event.sports.name
          })  
          })
        });
          $('#calendar').evoCalendar({
                theme: "Royal Navy",
                calendarEvents: calendarScheduledEvents
            })
        })

