var text = "Media";
var i = 0;
var speed = 60;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
onload = typeWriter;
