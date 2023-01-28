const imgEl = document.querySelector("img");
const btnEl = document.querySelector("button");

function spin(){
    imgEl.style.transform = "rotate(" + Math.random()*100 + "rad)";
}

btnEl.addEventListener("click", spin);