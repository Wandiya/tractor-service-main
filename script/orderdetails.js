const locate = document.getElementById('location')
const contact = document.getElementById('contact')
const timeOk = document.getElementById('time')
const date = document.getElementById('date')
const order = localStorage.getItem('order')
const orderPerson = JSON.parse(order)
console.log(orderPerson);

locate.innerHTML = `   <p id="location"><b>Location: </b>${orderPerson.location}</p>`
contact.innerHTML = `  <p id="contact"><b>Contact Line: </b>${orderPerson.contact}</p>`
date.innerHTML = `<p id="date"><b>Date </b>${ orderPerson.date}</p>`
timeOk.innerHTML = `   <p id="time"><b>Time: </b>${orderPerson.time}</p>`
order.innerHTML = `   <p id="location"><b>Location:</b>${orderPerson.location}</p>`