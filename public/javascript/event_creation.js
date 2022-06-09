//const { json } = require("express/lib/response");

async function addEventFormHandler(event) {
    event.preventDefault();

    

    const sportcreate = document.getElementById("sportscreate");
    var sport = document.querySelector('#sportscreate').value.trim();
    sport = parseInt(sport);
    var location = document.querySelector('#locationcreate').value.trim();
    location = parseInt(location);
    const date1 = document.querySelector('#dateCreate').value.trim();
    console.log(sport,location, date1)

 

    //const newDate = JSON.stringify({date}) 
        const response = await fetch('/api/scheduledEvents', {
            
            method: 'post',
            body:JSON.stringify({
                sport,
                location, 
                date1
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/#');
        } else {
            alert(response.statusText);
        }
   

    }

document.querySelector('.addEventForm').addEventListener('submit', addEventFormHandler);
