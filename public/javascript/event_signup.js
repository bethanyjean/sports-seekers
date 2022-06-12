async function signupEvent(id) {
    console.log(id)
const response = await fetch('/api/scheduledParticipants', {
    method: 'post',
    body:JSON.stringify({
        user_id: session.user_id,
        event_id: sport_events.id
    }),
    headers: {"Content-Type": 'application/json'}
});
    if (response.ok) {
        window.alert("You've Successfully Signed Up for an Event. Seek you There!")
        location.reload()
    } else {
        alert(response.statusText);
    }

  }


document.querySelectorAll('.event-signup').forEach(item=> {
    item.addEventListener('click', 
    function (getID) {
        var index = getID.target.id.slice(-1);
        signupEvent(index);
    })
})