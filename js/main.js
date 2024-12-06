//!-------- typed js libarary --------!//
var typed = new Typed('#element', {
  strings: [' Larry Daniels' , 'Developer' , 'Designer'],
  typeSpeed: 40,
  backSpeed: 40,
  loop: true
});

//!-------- typed js libarary --------!//
AOS.init();

//!-------- display layer --------!//
var allImages = document.querySelectorAll(".card-img-top")
var allIconImage = document.querySelectorAll(".fa-magnifying-glass-plus");
var layer = document.querySelector("#layer");
var inner = document.querySelector("#layer .inner");
var closeBtn = document.querySelector(".fa-xmark");
var nextBtn = document.querySelector(".fa-arrow-right");
var prevBtn = document.querySelector(".fa-arrow-left");

var index;

for(var i = 0 ; i < allIconImage.length ; i++){
  allIconImage[i].addEventListener("click" , function(e){
    layer.classList.remove("d-none");

    var clickedIconIndex = Array.from(allIconImage).indexOf(e.target); 
    var ImageSrc = allImages[clickedIconIndex].getAttribute("src"); 
    inner.style.backgroundImage = `url(${ImageSrc})`;

    
    var clickedImage = allImages[clickedIconIndex]
    var imageIndex = Array.from(allImages).indexOf(clickedImage);
    index = imageIndex;
    
  })
}

function hideLayer() {
  layer.classList.add("d-none");
}

function getNext() {
  index++;
  if(index == 6){
    index = 0;
  }
  var ImageSrc = allImages[index].getAttribute("src"); 
  inner.style.backgroundImage = `url(${ImageSrc})`;

}

function getPrev() {
  index--;
  if(index == -1){
    index = allImages.length - 1;
  }
  var ImageSrc = allImages[index].getAttribute("src"); 
  inner.style.backgroundImage = `url(${ImageSrc})`;

}



document.addEventListener("keyup" , function(e){
  if(e.code == 'ArrowRight'){
    getNext();
  }else if(e.code == 'ArrowLeft'){
    getPrev();
  }else if(e.code == 'Space'){
    hideLayer();
  }
  
})



// layer.addEventListener("click" , function(e){
//   if(e.target != inner){
//     hideLayer();
//   }
// })


closeBtn.addEventListener("click" , hideLayer);
nextBtn.addEventListener("click" , getNext);
prevBtn.addEventListener("click" , getPrev);


