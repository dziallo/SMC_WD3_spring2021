
function drawFrame(){
	ctx.clearRect(0, 0, cWidth, cHeight);

	// draw circle for current frame
	ctx.beginPath();
	ctx.arc(cPosX, cPosY, cRadius, 0, Math.PI*2);
	ctx.fillStyle = colorPallette[currentFillColorIndex];
	ctx.fill();
	ctx.strokeStyle = "black";
	ctx.stroke();
	ctx.closePath(); 

	// specify position and velocity for next frame
	if(cPosX + cRadius >=cWidth || cPosX - cRadius <= 0) {
		cVelX = cVelX * -1; //reverse the horizontal direction
	}

	if(cPosY + cRadius >=cHeight || cPosY - cRadius <= 0) {
		cVelY = cVelY * -1; //reverse the vertical direction
	}

	cPosX = cPosX + cVelX; //change postion by velocity
	cPosY = cPosY + cVelY;

	// request next iteration
	window.requestAnimationFrame(drawFrame);	
}

function circleClicks() {
    let clicks = parseInt(document.getElementById("clicks").innerHTML);
    document.getElementById("clicks").innerHTML = clicks + 1;
};










const colorPallette = [ // javascript array
	"red",
	"orange",
	"yellow",
	"lightgreen",
	"skyblue",
	"darkblue",
	"indigo"
];
const defaultFillColorIndex = 0;

const canvas = document.getElementById("game");
const ctx = canvas.getContext('2d');

let cWidth = canvas.width;
let cHeight = canvas.height;

let cPosX = cWidth/2;  //horizontal center
let cPosY = cHeight/2;  //vertical center

let cVelX = 2;
let cVelY = 1;

let cRadius= 75;
let currentFillColorIndex = defaultFillColorIndex;

drawFrame();

canvas.addEventListener("click", function(event){
	let mouseXp = event.pageX - event.target.offsetLeft;
	let mouseYp = event.pageY - event.target.offsetTop;

	let distX = Math.abs(cPosX - mouseXp);
	let distY = Math.abs(cPosY - mouseYp);

	let dist = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2))

	if(dist < cRadius){
		console.log("HIT!!!");
		cVelX = cVelX * 1.5;
		cVelY = cVelY * 1.5;
		if(currentFillColorIndex === (colorPallette.length - 1)) { 
			currentFillColorIndex = 0;
		} else {
			currentFillColorIndex = currentFillColorIndex + 1;
		}
		circleClicks()
	}
})



