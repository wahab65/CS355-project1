
const search = document.querySelector('.search')
const btn = document. querySelector('.btn')
const input = document.querySelector('.input')
btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})

const brunchHeading = document.getElementById("brunch");
const bakedGoodsHeading = document.getElementById("bakedGoods");
const beveragesHeading = document.getElementById("beverages");

const bakedSection = document.getElementById("bakedSection");
const beveragesSection = document.getElementById("beveragesSection");
const brunchSection = document.getElementById("brunchSection");


  beveragesHeading.addEventListener("click", function() {
      beveragesSection.scrollIntoView({ behavior: 'smooth' });

  });

bakedGoodsHeading.addEventListener("click", function() {
    bakedSection.scrollIntoView({ behavior: 'smooth' });
  //window.location.hash = bakedSection.id;
  });

brunchHeading.addEventListener("click", function() {
    brunchSection.scrollIntoView({ behavior: 'smooth' });

});
