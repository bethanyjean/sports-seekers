async function signupEventFormHandler(event) {
    event.preventDefault();
    console.log("===================");
console.log("inside the signupEvent Fromathanlder");

//     // const username = document.querySelector('#').value.trim();
//     // const email = document.querySelector('#email-signup').value.trim();
//     // const password = document.querySelector('#password-signup').value.trim();
    const username = "abcd";
    const email = "abcd@gmail.com"
    const password = "1234abcd"

    if (username && email && password) {
        const response = await fetch('/api/user/'+email, {
            method: 'get',
            // params: JSON.stringify({
            //     username,
            //     email,
            //     password
            // }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
           
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}
console.log("inside the eveent sign up form");

document.querySelector('.event-signup').addEventListener('submit', signupEventFormHandler);