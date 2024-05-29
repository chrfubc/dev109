var myImages = ["images/baa.jpg", "images/Jorunna-parva.jpg","images/loaf.png","images/slug.jpg","images/unit.jpg"];

var captionImages =["Sheep baa","Jorunna parva (aka sea bunny)","Loaf of bread","Sea slug","Very round bear"];

var index = 0;

function autoSlide() {
    if (document.getElementById("auto").checked) next(); 
}

var interval = setInterval(autoSlide, 2000); // Next

 function updateImage() {
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt= captionImages[index];
    document.getElementById("caption").textContent = captionImages[index]; 
} 

function next() {
    if (myImages.length == index + 1) {
        index = 0;
    } else {
        index++;
    }
    updateImage();
    clearInterval(interval);
    interval = setInterval(autoSlide, 2000);
}

function back() {
    if (index == 0) {
        index = myImages.length-1;
    }
    else {
        index--;
    }
    updateImage();
    clearInterval(interval);
    interval = setInterval(autoSlide, 2000);
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click", back, false);
nextButton.addEventListener("click", next, false);

    