const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
     pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
 });

const elements = document.querySelectorAll('.car_images');
const displayOverlay = document.getElementById('display-overlay');
const displayImage = document.getElementById('display-image');

elements.forEach(function(element) {
  element.addEventListener('click', function(event) {
    const src = event.currentTarget.querySelector("img").src;
    displayImage.src = src;
    displayOverlay.style.display = 'block';
  });
});

displayOverlay.addEventListener('click', function() {
  displayOverlay.style.display = 'none';
});



//  const elements = document.querySelectorAll('.car_images');

// elements.forEach(function(element) {
//   element.addEventListener('click', function(event) {
//     imagElement = document.createElement("img");

//     const sr = event.currentTarget.querySelector("img")
//     imagElement.src = sr.src;
  


//     const window = document.createElement("div");
//     window.className="display-overlay";
//     window.appendChild(imagElement);


    

//   });
// });