const containerEl = document.querySelector(".container");
const genRatorButton = document.getElementById("btn");

genRatorButton.addEventListener('click', ()=>{
    generateColors();
})

for(let i=0; i<30; i++){
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors (){
    colorContainerEls.forEach((el)=>{
        const newColorCode = randomColor();   
        // console.log("#"+newColorCode);
        el.style.backgroundColor = "#"+newColorCode;
        el.innerText = '#'+newColorCode;
    });
}


function randomColor (){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";

    for(let index=0; index<colorCodeLength; index++){
        const randomNum = Math.floor(Math.random()*chars.length);
        // substring method extract charactor from start to end and not change orignel string
                                // (start,      end)
        colorCode += chars.substring(randomNum, randomNum+1);
        // console.log(randomNum, colorCode);
    }
    return colorCode;
}

