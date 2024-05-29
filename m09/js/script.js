var mybutton = document.querySelector("button");
var colorSelect = document.getElementById("color");
var sizeSelect = document.getElementById("size");

var color = "#0000FF";
var size = "8px";

mybutton.addEventListener("click", function(event) {
    var element = document.getElementsByTagName("div");
    for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
    }
    // Let us stop the propagation of events
    event.stopPropagation();
});

addEventListener("click", function(event) {
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    dot.style.background = color;
    dot.style.width = size;
    dot.style.height = size;
    document.body.appendChild(dot);
});

colorSelect.addEventListener("change", function(event) {
    color = event.target.value;
})

sizeSelect.addEventListener("change", function(event) {
    size = event.target.value + "px";
})
