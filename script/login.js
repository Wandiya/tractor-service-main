const password = document.getElementById("password");
const email = document.getElementById("email");
const login = document.getElementById("login");
const errorMessage = document.getElementById("errorMessage");

function handleLogin() {
    console.log(password.value, email.value);

    fetch("https://tractorlinks.onrender.com/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email.value, password: password.value }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            if (data.user) {
                localStorage.setItem('userData', JSON.stringify(data))
                window.location.href = 'userDashboard.html';
            } else {
                errorMessage.innerHTML = data
            }
        })
        .catch((err) => console.log(err));
}







// local storage