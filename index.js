const navBar = document.getElementById("nav-bar");
const main = document.getElementById("main");
const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const counterBtns = document.querySelectorAll(".counter button");
const itemCount = document.getElementById("count");
const numberOfItems = document.getElementById("number");
const fullCart = document.querySelector(".full-cart");
const emptyCart = document.querySelector(".empty-cart");
const addToCartBtn = document.getElementById("add-to-cart");
const num = document.getElementById("num");
const total = document.getElementById("total");
const thumbnailImg = document.getElementById("image");
const nextIcon = document.getElementById("next");
const previousIcon = document.getElementById("previous");
const sideImages = document.querySelectorAll(".side-images img");
const lightImages = document.querySelectorAll(".light-images img");
const lightBox = document.querySelector(".lightbox");
const lightBoxThumbnailImage = document.querySelector(".img");
const lightBoxPrevBtn = document.getElementById("li-prev");
const lightBoxNextBtn = document.getElementById("li-next");

let counter = 0;
let currentIndex = 0;

const images = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

function displayFirstImage() {
  thumbnailImg.src = images[currentIndex];
}
window.addEventListener("DOMContentLoaded", displayFirstImage);

function nextImage() {
  currentIndex++;
  for (let i = 0; i < images.length; i++) {
    if (currentIndex === i) {
      thumbnailImg.src = images[currentIndex];
    }
    if (currentIndex > images.length - 1) {
      currentIndex = 0;
      thumbnailImg.src = images[currentIndex];
    }
  }
}

function previousImage() {
  currentIndex--;
  for (let i = 0; i < images.length; i++) {
    if (currentIndex === i) {
      thumbnailImg.src = images[currentIndex];
    }
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
      thumbnailImg.src = images[currentIndex];
    }
  }
}

nextIcon.addEventListener("click", nextImage);
previousIcon.addEventListener("click", previousImage);

function lightBoxNextImage() {
  currentIndex++;
  for (let i = 0; i < images.length; i++) {
    if (currentIndex === i) {
      lightBoxThumbnailImage.src = images[currentIndex];
    }
    if (currentIndex > images.length - 1) {
      currentIndex = 0;
      lightBoxThumbnailImage.src = images[currentIndex];
    }
    activeLightBoxImage();
  }
}

function activeLightBoxImage(){
  for (let i = 0; i < lightImages.length; i++){
    if (lightImages[i].classList.contains('active')){
      lightImages[i].classList.remove('active');
    }
    if (currentIndex === i){
      lightImages[i].classList.add('active');
    }
  }
}

function lightBoxPreviousImage() {
  currentIndex--;
  for (let i = 0; i < images.length; i++) {
    if (currentIndex === i) {
      lightBoxThumbnailImage.src = images[currentIndex];
    }
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
      lightBoxThumbnailImage.src = images[currentIndex];
    }
  }
}

lightBoxNextBtn.addEventListener("click", lightBoxNextImage);
lightBoxPrevBtn.addEventListener("click", lightBoxPreviousImage);

openMenuBtn.addEventListener("click", () => {
  navBar.classList.add("show");
  main.classList.add("show");
});

closeMenuBtn.addEventListener("click", () => {
  navBar.classList.remove("show");
  main.classList.remove("show");
});

counterBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonId = e.target.dataset.id;
    switch (true) {
      case buttonId === "increase":
        counter++;
        itemCount.textContent = counter;
        numberOfItems.textContent = counter;
        num.textContent = counter;
        total.textContent = "$" + counter * 125 + ".00";
        numberOfItems.classList.add("display");
        break;
      default:
        counter--;
        if (counter <= 0) {
          counter = 0;
          itemCount.textContent = "0";
          numberOfItems.textContent = "";
          num.textContent = counter;
          numberOfItems.classList.remove("display");
        } else {
          itemCount.textContent = counter;
          numberOfItems.textContent = counter;
        }
    }
  });
});

addToCartBtn.addEventListener("click", () => {
  switch (true) {
    case counter === 0:
      if (fullCart.classList.contains("show")) {
        fullCart.classList.remove("show");
      }
      emptyCart.classList.toggle("show");
      break;
    default:
      if (emptyCart.classList.contains("show")) {
        emptyCart.classList.remove("show");
      }
      fullCart.classList.toggle("show");
  }
});

for (let i = 0; i < sideImages.length; i++) {
  const image = sideImages[i];
  image.addEventListener("click", () => {
    for (let i = 0; i < sideImages.length; i++) {
      if (sideImages[i].classList.contains("active")) {
        sideImages[i].classList.remove("active");
      }
    }
    image.classList.add("active");
    for (let j = 0; j < images.length; j++) {
      if (i === j) {
        thumbnailImg.src = images[j];
      }
    }
  });
}

thumbnailImg.addEventListener("click", () => {
  lightBox.classList.add("active");
});

lightBoxThumbnailImage.addEventListener("click", () => {
  lightBox.classList.remove("active");
});
