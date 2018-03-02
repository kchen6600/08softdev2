var canv = document.getElementById("slate");
var clearb = document.getElementById("clear");
var circleb = document.getElementById("circling");
var bounceb = document.getElementById("bouncing");
var stopb = document.getElementById("stop")
var shapeDrawn = false;
var t;


var radius = 20;
var x = 250;
var y = 250;

var xcor = x;
var ycor = y;
var angle = Math.random()*Math.PI*2;
var xfact;
var yfact;
if( Math.cos(angle) > 0 ){ 
	xfact = 1; 
}
else{ 
	xfact = -1; 
}
if( Math.sin(angle) > 0 ){ 
	yfact = 1; 
}
else{ 
	yfact = -1; 
}

var animate = function(){
	pause();
	clear();
	
	var grow = true;
	var r = 0;
	
	
	var circ = canv.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "circle"));
	circ.setAttribute("cx", 250);
	circ.setAttribute("cy", 250);
	circ.setAttribute("stroke", "#000000");
	circ.setAttribute("fill", "lightsteelblue");
	
	var draw = function() {
		
		circ.setAttribute('r', r)
		
		if (grow){
			r++;
			if (r >= 250){
				grow = false;
			}
		}
		else{
			r--;
			if (r <=1){
				grow = true;
			}
		}
		
	}
	
	t=setInterval(draw, 40);
};

var animate2 = function(){
	
	pause();
	clear();
	
	var circ = canv.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "circle"));
	circ.setAttribute("cx", xcor);
	circ.setAttribute("cy", ycor);
	circ.setAttribute("r", radius);
	circ.setAttribute("stroke", "#000000");
	circ.setAttribute("fill", "lightsteelblue");
	
    var draw2 = function(){
		
		if( xcor-radius < 0 || xcor+radius > 500 ){
			xfact *=-1;
		}
		else if(ycor-radius < 0 || ycor+radius > 500){
	    	yfact *=-1;
		}

		xcor+=Math.cos(angle)*xfact;
		ycor+=Math.sin(angle)*yfact;
		
		circ.setAttribute("cx", xcor);
		circ.setAttribute("cy", ycor);
    }
    t = setInterval(draw2, 40);
}

var clear = function() {
    canv.innerHTML="";
};

var pause = function(){
	clearInterval(t);
	t = null;
}


clearb.addEventListener('click', clear);
stopb.addEventListener('click', pause);
circleb.addEventListener('click', animate);
bounceb.addEventListener('click', animate2);


