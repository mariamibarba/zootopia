let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


let data= [
  {
      id: 1, 
      imageUrl:'assets/images/3.jfif',
      title: 'image title1',
      url:'google.com'
  },
  {
      id: 2, 
      imageUrl:'assets/images/pedigri.png',
      title: 'image title2',
      url:'google.com'
  },
  {
      id: 3, 
      imageUrl:'assets/images/1.jfif',
      title: 'image title3',
      url:'google.com'
  },
  {
      id: 4, 
      imageUrl:'assets/images/2.jfif',
      title: 'image title4',
      url:'google.com'
  },

]


let arrowLeft = document.getElementById('arrow-left-button');
let arrowRight = document.getElementById('arrow-right-button');
let sliderContent = document.getElementById('slider-content');

let sliderIndex=0;


function createAtag(item){
  let tag =document.createElement('a');
  tag.setAttribute('href',item.url);
  tag.setAttribute('class', 'slide');

  return tag;
}


function createImgtag(item){
  let tagImage = document.createElement('img');
  tagImage.setAttribute('src', item.imageUrl);
  tagImage.setAttribute('alt',item.title);


 
  return tagImage;
}


function createH2tag(item){
  let tagtitle=document.createElement('h2');
  tagtitle.setAttribute('class','title');
  tagtitle.append(item.title);
  


  return tagtitle;

}
function setSlide(){
  sliderContent.innerHTML= ' ';
  let slideItem = createAtag(data[sliderIndex]);
  let h2Tag = createH2tag(data[sliderIndex]);
  let imgTag= createImgtag(data[sliderIndex]);

  slideItem.appendChild(h2Tag);
  slideItem.appendChild(imgTag);

  sliderContent.appendChild(slideItem);



  console.log(slideItem);
}

arrowLeft.addEventListener('click', function() {
  if( sliderIndex <=0) {
      return;

  }

  

  sliderIndex--;
  setSlide();
});

arrowRight.addEventListener('click', function() {

  if (sliderIndex >= data.length - 1){
      return
  }
  sliderIndex++;
  setSlide();

});
setSlide();