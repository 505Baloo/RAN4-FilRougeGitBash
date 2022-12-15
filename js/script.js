// essai SCROLL EVENT (classe ajoutée, pas d'animation appliquée, à revoir)
document.addEventListener("scroll", function() {
    var marker = document.querySelector("#line3");
    var fadingImg=document.querySelector("#pfp");
    if (window.scrollY > (marker.offsetTop + marker.offsetHeight)) {
        fadingImg.classList.add(".glancing");
    }
  });

// essai GALLERY POP-UP
var popUp=document.querySelector(".test-popup");
var popUpImg=document.querySelector(".popup");
var targetImg=document.querySelector(".gallery-image");
var closeBtn=document.querySelector(".close");

targetImg.addEventListener("click", toggleImagePopUp);
closeBtn.addEventListener("click", toggleClosing);    

function toggleImagePopUp(){
    popUp.style.display="block";
    popUpImg.src=targetImg.src;
    popUpImg.style.animation="fadingPopup 0.5s ease-in-out";
}

function toggleClosing(){
    popUp.style.display="none";
}
