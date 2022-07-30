const button = document.getElementById("button");
button.addEventListener("click", () => toggleTipDisplay());

let tip;
let coords;

const createTooltip = (element, text) => {
    tip = document.createElement("p");
    tip.innerHTML = text;
    element.parentNode.append(tip);
    tip.classList.add("tip-none");
    getCoordsElem(element);
}

const getCoordsElem = (element) => {
    coords = element.getBoundingClientRect();
    return coords;
}

const toggleTipDisplay = () => {
    tip.classList.toggle("tip-style");
    tip.style.top = (coords.top * 0.75) + "px";
    tip.style.left = (coords.left - ((tip.getBoundingClientRect().width)/2) + (coords.width / 2) + "px");
} 
createTooltip(button, "It's a great choice, I hope you like it!");