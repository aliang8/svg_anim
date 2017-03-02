var svg = document.getElementById("vimage");
var rect = svg.getBoundingClientRect();
var w = rect.width;
var h = rect.height;
var clrBtn = document.getElementById("clear");
var circBtn = document.getElementById("circle");
var dvdBtn = document.getElementById("dvd");
var stopBtn = document.getElementById("stop");
var rid;

//clear button
var clear = function(){
    while(svg.firstChild){
        svg.removeChild(svg.firstChild);
    }
}; 

clrBtn.addEventListener("click", clear);

//stop button
var pause = function(){
    window.cancelAnimationFrame(rid);
};

stopBtn.addEventListener("click", pause);

//circleAnimation
var circleAnimation = function(){
	  window.cancelAnimationFrame(rid);
	  var x = w / 2;
    var y = h / 2;
    var rate = 1;
    var r = 1;
    var maxRadius = 250;

    var animate = function() {
        clear();
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", r);
        circle.setAttribute("fill", "lightskyblue");
        svg.appendChild(circle);
        rid = window.requestAnimationFrame(animate);
        if (r > maxRadius || r == 0) {
            rate *= -1;
        }
        r += rate;
    };
    animate();
};

circBtn.addEventListener("click", circleAnimation);

var rand = function(a, b) {
    return (b - a) * Math.random() + a;
};

//dvd animation
var dvdAnimation = function() {
    window.cancelAnimationFrame(rid);

    var v_x = rand(1, 2);
    var v_y = rand(1, 2);

    var width = 100;
    var height = 55;

    var maxX = w - width + 10;
    var maxY = h - height;
    var x = rand(0, maxX);
    var y = rand(0, maxY);

    var animate = function() {
        console.log("in animate");
        clear();
        var img = document.createElementNS("http://www.w3.org/2000/svg", "image");
        img.setAttribute("href", "dvd.jpg");
        img.setAttribute("width", "100");
        img.setAttribute("height", "60");
        img.setAttribute("x", x);
        img.setAttribute("y", y);
        svg.appendChild(img);
        rid = window.requestAnimationFrame(animate);
        if (x > maxX || x < 0) {
            v_x *= -1;
        }
        if (y > maxY || y < 0) {
            v_y *= -1;
        }
        x += v_x;
        y += v_y;
    };
    animate();
}

dvdBtn.addEventListener("click", dvdAnimation);

