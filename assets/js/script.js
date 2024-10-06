let ele = document.getElementById("ele1");
ele.addEventListener("click", function() {pintar("yellow")});
let color = "blue";
function pintar(color) {
    ele.style.backgroundColor = color;
};
