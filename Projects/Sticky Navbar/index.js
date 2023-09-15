const navbarEl = document.querySelector(".navbar");
const bottomContainer = document.querySelector(".bottom-container");

// console.log(navbarEl.offsetHeight);
// console.log(bottomContainer.offsetTop);

window.addEventListener("scroll", ()=>{
    // console.log(window.scrollY);
    if(window.scrollY > bottomContainer.offsetTop-navbarEl.offsetHeight-50){
        navbarEl.classList.add("active");
    }
    else{
        navbarEl.classList.remove("active");
    }
});
