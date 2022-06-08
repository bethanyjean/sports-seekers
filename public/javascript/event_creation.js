async function addEventFormHandler(event) {
    event.preventDefault();

    const sport = document.querySelector('#sportNameCreate').value.trim();
    const location = document.querySelector('#locationNameCreate').value.trim();
    const date = document.querySelector('#dateCreate').value.trim();
    console.log(sport,location, date)

        const response = await fetch('/api/scheduledEvents', {
            
            method: 'post',
            body: JSON.stringify({
                sport,
                location,
                date
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