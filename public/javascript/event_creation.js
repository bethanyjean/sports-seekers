async function addEventFormHandler(event) {
    event.preventDefault();

    function show_list() {
        var sports = document.getElementById("sports_id");

        if (sports.style.display == "block") {
            sports.style.display = "none";
        } else {
            sports.style.display = "block";
        }
    }
    window.onclick = function (event) {
        if (!event.target.matches('.dropdown_button')) {
            document.getElementById('sports_id')
                .style.display = "none";
        }
    }   
    
    function getOption() {
        selectElement = document.querySelector('#select1');
        output = selectElement.value;
        document.querySelector('.output').textContent = output;
    }

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
