const bgImgEl = document.getElementById("bg-image");

function updateImage(){
    bgImgEl.style.opacity = 1 - window.pageYOffset/1500;
    bgImgEl.style.backgroundSize = 140 - window.pageYOffset/15 +"%";
}

window.addEventListener("scroll", ()=>{
        updateImage();
})