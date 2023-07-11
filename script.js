var container, div;
var MAX_DIVS = 7;
R = Math.random

// zero-pad a number, thx to 140byt.es/users/aemkei 
function pad(a,b){return(1e15+a+"").slice(-b)}

function update() {
	var now = new Date(), seconds, minutes, hours, output;
	seconds = now.getSeconds()
	minutes = now.getMinutes()
	hours   = now.getHours()
	output  = [pad(hours, 2), 
	           pad(minutes, 2), 
	           pad(seconds, 2)].join(':')
	requestAnimationFrame(function () {
		div = document.createElement('div');
		div.textContent = output;
		div.style.color = 'hsl('+((360*R())|0)+',100%, '+(65+(35*R())|0)+'%)'
		window.setTimeout(function() {
			div.setAttribute("class", "blur-out effect-"+(1 + ((R()*4)|0)))
		},100)
		container.appendChild(div)
		var nodes = document.getElementsByTagName('div')
		if (nodes.length > MAX_DIVS) {
			container.removeChild(nodes[0]);
		}
	})
}

document.body.appendChild(container = document.createElement('section'));
update();
window.setInterval(update, 1000);
