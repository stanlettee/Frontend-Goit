const image = document.getElementById("hero-image");
const button_right = document.getElementById("hero-right");
const button_left = document.getElementById("hero-left")

let isFirstImage = true;
let isSecondImage = false
let isThirdImage = false

button_right.addEventListener("click", function() {
  if (isFirstImage) {
    image.src = "./img/hero-image2.png";
    isFirstImage = false;
    isSecondImage = true;
  }
  else if (isSecondImage){
    image.src = "./img/hero-image3.png";
    isSecondImage = false;
    isThirdImage = true;
  }
  else{
    image.src = "./img/hero-image.png";
    isThirdImage = false;
    isFirstImage = true;
  }
});

button_left.addEventListener("click", function() {
    if (isFirstImage) {
      image.src = "./img/hero-image3.png";
      isFirstImage = false;
      isThirdImage = true;
    }
    else if (isThirdImage){
      image.src = "./img/hero-image2.png";
      isThirdImage = false;
      isSecondImage = true;
    }
    else{
      image.src = "./img/hero-image.png";
      isSecondImage = false;
      isFirstImage = true;
    }
  });