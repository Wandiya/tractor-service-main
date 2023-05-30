var currentIndex = 0;
var contents = document.querySelectorAll('.slider-content');
var maxIndex = contents.length - 1;

function nextImage() {
    currentIndex++;

    if (currentIndex > maxIndex) {
        currentIndex = 0;
    }

    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    contents[currentIndex].classList.add('active');
}


setInterval(nextImage, 3000);