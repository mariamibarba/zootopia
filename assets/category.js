var minSlider = document.getElementById('min');
var maxSlider = document.getElementById('max');

var outputMin = document.getElementById('min-value');
var outputMax = document.getElementById('max-value');

let filterSection = document.querySelector('.aside-container');
let isShow=true

// function showFilters(){
//     if (isShow){
//         filterSection.style.display ="none";
//         isShow = false;
//     }
//     else{
//         filterSection.style.display ="block";
//         isShow = true;
//     }
// }



outputMin.innerHTML = minSlider.value;
outputMax.innerHTML = maxSlider.value;

minSlider.oninput = function(){
 outputMin.innerHTML=this.value;    
}

maxSlider.oninput = function(){
 outputMax.innerHTML=this.value;    
}


const filter = document.querySelector('.responsives-filter');
const aside = document.querySelector('.aside-container');
const products = document.querySelector('.products-lists');

filter.addEventListener('click', () => {
    aside.classList.toggle('active')
    products.classList.toggle('active')
});