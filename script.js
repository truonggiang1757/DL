const carousel = document.getElementById("valentineCarousel");
const finalButton = document.getElementById("final-button");
var carousel1 = new bootstrap.Carousel(carousel, {
    interval: false // Disables auto-slide
  });

let buttonShown = false; // Track if the button has already appeared

// Run fade-in on initial page load
document.addEventListener("DOMContentLoaded", applyFadeIn);

// Run fade-in when navigating to a new page
window.addEventListener("pageshow", applyFadeIn);


carousel.addEventListener("slid.bs.carousel", function () {
    const activeSlide = document.querySelector(".carousel-item.active");
    const isLastSlide = activeSlide.nextElementSibling === null; // Check if it's the last slide

    if (isLastSlide && !buttonShown) {
        console.log("yes");
        finalButton.style.opacity = "0"; // Start hidden
        finalButton.style.display = "block"; // Make it visible

        setTimeout(() => {
            finalButton.style.transition = "opacity 0.5s ease-in-out"; // Smooth transition
            finalButton.style.opacity = "1"; // Fade in
        }, 10);

        buttonShown = true; // Prevents fade-in from happening again
    }
});
  

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("valentineCarousel");
    const prevButton = document.querySelector(".carousel-control-prev");
    const nextButton = document.querySelector(".carousel-control-next");

    function updateButtons() {
        const activeIndex = [...carousel.querySelectorAll(".carousel-item")].findIndex(item => item.classList.contains("active"));
        const totalItems = carousel.querySelectorAll(".carousel-item").length;

        // Hide prev on first slide
        prevButton.style.display = activeIndex === 0 ? "none" : "block";

        // Hide next on last slide
        nextButton.style.display = activeIndex === totalItems - 1 ? "none" : "block";
    }

    // Update on slide change
    carousel.addEventListener("slid.bs.carousel", updateButtons);

    // Initial check on page load
    updateButtons();
});


document.getElementById('final-button').addEventListener('click', function() {
    const navbarContainer = document.getElementById('show'); 
    
    console.log('Button pressed'); 
    
    // Toggle a class on the container
    navbarContainer.classList.add('nav-active'); 
});



function smoothScrollTo(element, duration) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function for smooth scrolling
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector("#masonry-grid");
    new Masonry(grid, {
      itemSelector: ".column",
      columnWidth: ".column",
      percentPosition: true,
    });
  });

document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector("#masonry-grid");
    new Masonry(grid, {
        itemSelector: ".column",
        columnWidth: ".column",
        percentPosition: true,
    });
});

function masonry(masonry, paramCols) {
    let cols;
    let currentCol = 0;

    const wrap = masonry;
    const items = masonry.querySelectorAll('img');
    if(paramCols) {
        cols = paramCols
    } else {
        cols = 3
    }

    for (let i=0; i<cols; i++) {
        const newCol = document.createElement('div');
        newCol.className = 'col';
        newCol.style.width = 'calc(100%/' + cols + ')';
        wrap.appendChild(newCol);
    }

    for (let count = 0; count <items.length; count++) {
        masonry.querySelectorAll('.col')[currentCol].appendChild(items[count]);
        if(currentCol < cols - 1) {
            currentCol++;
        } else {
            currentCol = 0;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const masonrys = document.getElementsByClassName('masonry');
    for (let i =0; i< masonrys.length; i++){
        masonry(masonrys[i])
    }
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Get all images and insert the clicked image inside the modal
// Get the content of the image description and insert it inside the modal image caption
var images = document.getElementsByTagName('img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) {
  images[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.nextElementSibling.innerHTML;
  }
}