let subMenu = document.getElementById("subMenu");
let toggleMenu = document.querySelector(".user-pic");
const userName = document.getElementById('userName');
const userId = document.getElementById('userId');
const logoutBtn = document.getElementById('logout');

const user = JSON.parse(localStorage.getItem("userData"));

console.log(user);
userName.innerHTML = user.user.name
userId.innerHTML = user.user._id

toggleMenu.addEventListener('click', () => {
        subMenu.classList.toggle('open-menu')
    })
    // Get the necessary elements
const fileInput = document.getElementById('photo');
const userPic = document.querySelector('.user-pic');

// Change profile picture
fileInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        userPic.src = reader.result;
    };

    reader.readAsDataURL(file);
});

function logout() {
    console.log('logoutt');
    localStorage.clear();
    window.location.href = '/index.html';
}
logoutBtn.addEventListener('click', logout)