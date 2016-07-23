var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var colorcycle = false;

function Resize() {
	context.canvas.width = window.innerWidth;
	context.canvas.height = window.innerHeight;
}
Resize();

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
	if (!colorcycle) {
		canvas.style.backgroundColor = "hsl(" + (360 * widthPercent) + ',50%,' + (100 * heightPercent) + '%)';		
	}
	context.beginPath();
	context.arc(mousePos.x, mousePos.y, 64, 0, 2 * Math.PI, false);
	context.fillStyle = 'hsl(' + (360 * widthPercent - 180) + ',50%,' + ((-100 * heightPercent) + 100) + '%)';
	context.fill();
	context.stroke();
}, false);

canvas.addEventListener('click', function () {
	if (colorcycle) {
		colorcycle = false;
	} else {
		colorcycle = true;
	}
});

function Draw() {
	for (var j = 0; j < 50; j++) {
		var randHeight = Math.floor(Math.random() * (window.innerHeight - 0 + 1) + 0);
		var randWidth = Math.floor(Math.random() * (window.innerWidth - 0 + 1) + 0);
		var randColors = [3];

		context.beginPath();
		context.moveTo((window.innerWidth/2), randHeight);
		context.lineTo(randWidth, (window.innerHeight/2));
		context.lineWidth = 3;
		for (var i = 0; i < 3; i++) {
			randColors[i] = Math.floor(Math.random() * (255 - 0 + 1) + 0);
		}
		context.strokeStyle = 'rgb(0,' + Math.floor(255-5*j) + ',' + Math.floor(255-5*j) + ')';
		context.stroke();
	}
}

// window.setInterval(function(){
// 	Draw();
// }, 500);


// Draw();