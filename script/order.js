const nameInput = document.getElementById("name_size");
const locationInput = document.getElementById("loca_size");
const contactInput = document.getElementById("contact_size");
const dateInput = document.getElementById("date_size");
const lgaInput = document.getElementById("local_size");
const stateInput = document.getElementById("state_size");
const timeInput = document.getElementById("time_size");
const requestInput = document.getElementById("request-header");

function handleOrder() {
    console.log(nameInput.value, stateInput.value, lgaInput.value, locationInput.value, contactInput.value, dateInput.value, timeInput.value, requestInput.value);

    fetch("https://tractorlinks.onrender.com/orders/Fertilisers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: nameInput.value,
                state: stateInput.value,
                LGA: lgaInput.value,
                location: locationInput.value,
                contact: contactInput.value,
                date: dateInput.value,
                time: timeInput.value,
            }),
        })
        .then((order) => {
            console.log(order);
            if (order.ok) {
                return order.json();
            } else {
                throw new Error("Response was not successful.");
            }
        })
        .then((order) => {
            console.log(order);
            localStorage.setItem('order', JSON.stringify(order))
            window.location.href = "orderdetails.html";
        })
        .catch((err) => console.log(err));
}