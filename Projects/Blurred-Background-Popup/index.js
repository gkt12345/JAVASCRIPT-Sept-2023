const joinbtnEl = document.querySelector(".btn");
const popupjoinBtnEl = document.querySelector(".popup-btn");
const closeIconEl = document.querySelector("i");

const containerEl = document.querySelector(".container");
const popupContainerEl = document.querySelector(".popup-container");


joinbtnEl.addEventListener("click", ()=>{
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
})

closeIconEl.addEventListener("click", ()=>{
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
})


