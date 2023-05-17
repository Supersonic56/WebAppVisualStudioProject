let angle = 0,
    img = document.getElementById('img_container');
document.getElementById('button').onclick = function () {
    angle = (angle + 90) % 360;
    img.className = "rotate" + angle;
}

var id = null;
function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
