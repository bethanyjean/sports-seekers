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

<<<<<<< HEAD
    if (username && email && password) {
        const response = await fetch('/api/user/'+email, {
            method: 'get',
            // params: JSON.stringify({
            //     username,
            //     email,
            //     password
            // }),
=======
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
>>>>>>> ce7fddf36d6108d2407c75cf5a34eac8a1272278
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
           
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
<<<<<<< HEAD
}
console.log("inside the eveent sign up form");
=======

>>>>>>> ce7fddf36d6108d2407c75cf5a34eac8a1272278


// $(".event-signup").on("click", "btn", function() {
//     // get current text of p element
    
//   });