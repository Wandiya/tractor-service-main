const phoneNumber = document.getElementById("phone_no");
const fName = document.getElementById("Fname");
const lName = document.getElementById("Lname");
const password = document.getElementById("hide_ps");
const showPword = document.getElementById("show_ps")
const role = document.getElementById("select");
const email = document.getElementById("email");

function handleRegister() {
    const names = `${fName.value} ${lName.value}`;
    console.log(
        names,
        email.value,
        password.value,
        phoneNumber.value,
        role.value
    );
    console.log(typeof(phoneNumber.value))
    if (password.value !== showPword.value) {
        alert("Passwords did not match");
    } else {

        fetch("https://tractorlinks.onrender.com/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: names,
                    phoneNumber: (phoneNumber.value),
                    email: email.value,
                    role: role.value,
                    password: password.value,
                }),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                window.location.href = 'login.html';
            })
            .catch((err) => console.log(err));
    }
}