var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var colorcycle = true;
var draw = true;

function Resize() {
	context.canvas.width = window.innerWidth;
	context.canvas.height = window.innerHeight;
}
Resize();

window.setTimeout (function Text() {
	document.getElementById('heading').style.display = 'none';
}, 2000);

function GetMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}

canvas.addEventListener('mousemove', function(evt) {
	var mousePos = GetMousePos(canvas, evt);
	var widthPercent = (mousePos.x / window.innerWidth);
	var heightPercent = (mousePos.y / window.innerHeight);
	if (colorcycle) {
		canvas.style.backgroundColor = "hsl(" + (360 * widthPercent) + ',50%,' + (100 * heightPercent) + '%)';		
	}
	if (draw) {
		context.beginPath();
		context.arc(mousePos.x, mousePos.y, 64, 0, 2 * Math.PI, false);
		context.fillStyle = 'hsl(' + (360 * widthPercent - 180) + ',50%,' + ((-100 * heightPercent) + 100) + '%)';
		context.fill();
		context.stroke();
	}
}, false);

canvas.addEventListener('click', function () {
	if (colorcycle) { colorcycle = false; }
	else { colorcycle = true; }
});

canvas.addEventListener('keydown', function () {
	if (draw) { draw = false }
	else { draw = true }
})
