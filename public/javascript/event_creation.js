async function addEventFormHandler(event) {
    event.preventDefault();

    

    const sportcreate = document.getElementById("sportscreate");
    var sport = document.querySelector('#sportscreate').value.trim();
    var location = document.querySelector('#locationcreate').value.trim();
    const date = document.querySelector('#dateCreate').value.trim();
    console.log(sport,location, date)

 

    //const newDate = JSON.stringify({date}) 
        const response = await fetch('/api/scheduledEvents', {
            
            method: 'post',
            body:JSON.stringify({
                sports_id: sport,
                location_id: location, 
                date
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            window.alert("You've Successfully Created an Event for other Seekers to Find.")
        } else {
            alert(response.statusText);
        }
    }

document.querySelector('.addEventForm').addEventListener('submit', addEventFormHandler);
