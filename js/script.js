const slider = document.querySelector('.price-card__slider-bar');
const customToggle = document.querySelector('.slider')
const price = document.querySelector(".price-card__cost span");
const price2 = document.querySelector(".price-card__cost-mobile span");
const toggleCheckbox = document.querySelector("#cb")
let view = document.getElementById("pageView");
let pageViews = ["10K", "50K", "100K", "500K", "1M"];
let  monthlyCost = [8, 12, 16, 24, 36];
let isYearly = false;

price.innerHTML = "$" + monthlyCost[slider.value];
price2.innerHTML = "$" + monthlyCost[slider.value];



toggleCheckbox.addEventListener("change", function () {
  if (isYearly == false) {
    isYearly = true;
  } else {
    isYearly = false;
  }
  updatePrice();
});

function updatePrice(){
  if(isYearly == true){
    price.innerHTML = "$" + monthlyCost[slider.value] * 0.75;
    price2.innerHTML = "$" + monthlyCost[slider.value] * 0.75;
  }else{
    price.innerHTML = "$" + monthlyCost[slider.value];
    price2.innerHTML = "$" + monthlyCost[slider.value]
  }
}

slider.oninput = function() {
  price.innerHTML =  "$" + monthlyCost[slider.value];
  price2.innerHTML =  "$" + monthlyCost[slider.value];
  view.innerHTML = pageViews[slider.value];
  updatePrice();
  let bar = this.value * 25;

  this.style.background = `linear-gradient(to right,
            hsl(174, 77%, 80%) 0%,
            hsl(174, 77%, 80%) ${bar}%,
            hsl(224, 65%, 95%) 0%,
            hsl(224, 65%, 95%) 100%)`;
}


