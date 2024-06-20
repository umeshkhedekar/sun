/**=========img ========== */
const imageSlider = document.getElementById('imageSlider');
const images = [
     'url("./mobile/hipster-man-sitting-floor-with-crossed-arms-3d-rendering.jpg")',
    'url("./mobile/3d-illustration-cartoon-character-with-mechanical-engineering-tools.jpg")',
    'url("./mobile/portrait-young-male-professor-education-day.jpg")',
   
   
];
let currentIndex = 0;

function changeImage() {
    imageSlider.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 3000);

// Initialize the first image
changeImage();