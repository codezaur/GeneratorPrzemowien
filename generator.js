(function (){

var faceSound = new Audio("picsound.wav");
var faceToClick = document.querySelectorAll("#faces");

var url = "http://undefined2055.eu/GeneratorPrzemowien/statementsParts.json";
var request = new XMLHttpRequest();
request.open("GET", url);
request.send(null);
// var statements = JSON.parse(request.responseText);

	function makeNiesiolStatement(){
		
		var statements = JSON.parse(request.responseText);
		var part1 = statements.part1;
		var part2 = statements.part2;
		var part3 = statements.part3;
		var part4 = statements.part4;

		var awesomeStatement = [];
		
		for (var i=0; i< 7; i++){ 

		awesomeStatement += " "+part1[Math.floor(Math.random()*part1.length)];
		awesomeStatement += " "+part2[Math.floor(Math.random()*part2.length)];
		awesomeStatement += " "+part3[Math.floor(Math.random()*part3.length)];
		awesomeStatement += " "+part4[Math.floor(Math.random()*part4.length)];
		
		if(i==2||i==5){
			awesomeStatement += " " +"</p>";
		}	
		}	
		awesomeStatement += " "+"Poza tym kiedyś jedzono szczaw i wszyscy byli najedzeni."
						
		document.getElementById("wisdom").innerHTML = awesomeStatement;
	}

	function makeGomulkaStatement(){
	
		var statements = JSON.parse(request.responseText);
		var part1 = statements.part5;
		var part2 = statements.part6;
		var part3 = statements.part7;
		var part4 = statements.part8;

		var awesomeStatement = [];
		
		for (var i=0; i< 7; i++){ 

		awesomeStatement += " "+part1[Math.floor(Math.random()*part1.length)];
		awesomeStatement += " "+part2[Math.floor(Math.random()*part2.length)];
		awesomeStatement += " "+part3[Math.floor(Math.random()*part3.length)];
		awesomeStatement += " "+part4[Math.floor(Math.random()*part4.length)];
		
		if(i==2||i==5){
			awesomeStatement += " " +"</p>";
		}
		}
						
		document.getElementById("wisdom").innerHTML = awesomeStatement;
	}

	function makePISStatement(){

		var statements = JSON.parse(request.responseText);
		var part1 = statements.part9;
		var part2 = statements.part10;
		var part3 = statements.part11;
		var part4 = statements.part12;

		var awesomeStatement = [];
		
		for (var i=0; i< 7; i++){ 

		awesomeStatement += " "+part1[Math.floor(Math.random()*part1.length)];
		awesomeStatement += " "+part2[Math.floor(Math.random()*part2.length)];
		awesomeStatement += " "+part3[Math.floor(Math.random()*part3.length)];
		awesomeStatement += " "+part4[Math.floor(Math.random()*part4.length)];
		
		if(i==2||i==5){
			awesomeStatement += " " +"</p>";
		}
		}
						
		document.getElementById("wisdom").innerHTML = awesomeStatement;
	}

	function soundOnPicture(){
	faceToClick.onmouseover = faceSound.play();
	}

for (var i=0;i<faceToClick.length;i++){
faceToClick[i].addEventListener("mouseover", soundOnPicture);
faceToClick[0].addEventListener("click", makeNiesiolStatement);
faceToClick[1].addEventListener("click", makeGomulkaStatement);
faceToClick[2].addEventListener("click", makePISStatement);
}

})()

// Speech sources: 
// https://mfiles.pl/pl/index.php/Uniwersalny_kod_przem%C3%B3wie%C5%84
// http://bi.gazeta.pl/im/00/9c/12/z19515648P,Tabelka.jpg
// http://joemonster.org/phorum/read.php?f=18&t=561350

/*
review 1 by Kuba:
1. (+ DONE) IIFE (function (){ var a = 10; })()
2. webpack + bootstrap (dependencies management)
3. (+DONE) awesome Statement empty and in loop iterate table 7 times and build string, var a = "", a += "b", a += "c"
4. (+DONE) XML http request (tables in separate file)
*/
