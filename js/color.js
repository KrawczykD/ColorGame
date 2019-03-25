
var boxList = document.querySelectorAll(".color");

var mode = 3;
var resoult = 0;
var question = 0;

//random color

function rgbRandom(){
	var r = Math.floor(Math.random()*255+1);
	var g = Math.floor(Math.random()*255+1);
	var b = Math.floor(Math.random()*255+1);

	return "rgb(" + r + ", " + g + ", " + b + ")";
};

//puting random color to each square deppend what game level you choose 3 for easy or 6 for hard

function game(mode){
	for(e=0; e<=mode-1; e++){
		boxList[e].style.backgroundColor = rgbRandom();
		boxList[e].addEventListener("click",function(){

			if(this.style.backgroundColor == question){
				win();
			}

			else{
				this.style.backgroundColor = "#232323";
			}


		});
	}

	//random question color from already existing in boxlist and display that color in rgb on screen

	resoult = Math.floor(Math.random()*mode);
	question = boxList[resoult].style.backgroundColor;
	document.querySelector(".resoult").innerHTML = question;
	/*document.querySelector(".resoult").style.color = question;*/
};

//when you winn change message to "you win" and "play again" and change all squares to correct collors 

function win(){
	for(e=0;e<=mode-1;e++){
		boxList[e].style.backgroundColor = question;
		document.querySelector(".reset").innerHTML = "Play Again?";
		document.querySelector(".resoult").innerHTML = "YOU WIN!!";
	}
};

//when you press restar you start game from beggining

function restart(){
	game(mode);
	document.querySelector(".reset").innerHTML = "RESET";
	if(mode == 3){
		for(e=3;e<6;e++){
		boxList[e].style.backgroundColor = "#232323";
	}
	}
};

//event listener to choose game level


document.querySelector(".reset").addEventListener("click",restart);

document.querySelector(".hard").addEventListener("click",function(){
	mode = 6;
	restart();

});

document.querySelector(".easy").addEventListener("click",function(){
	mode = 3;
	restart();
});

game(mode);