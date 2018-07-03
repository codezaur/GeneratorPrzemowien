(function (){

var faceSound = new Audio("picsound.wav"),
	faceToClick = document.querySelectorAll("#faces");

var url = "http://undefined2055.eu/GeneratorPrzemowien/statementsParts.json";
var request = new XMLHttpRequest();
request.onload = requestListener();
request.open("GET", url);
request.send(null);

function requestListener() {
	function makeNiesiolStatement(){
		
		var statements = JSON.parse(request.responseText),
			awesomeStatement = [];
		
		for (var i=0; i< 7; i++){ 

		awesomeStatement += " "+statements.part1[Math.floor(Math.random()*statements.part1.length)];
		awesomeStatement += " "+statements.part2[Math.floor(Math.random()*statements.part2.length)];
		awesomeStatement += " "+statements.part3[Math.floor(Math.random()*statements.part3.length)];
		awesomeStatement += " "+statements.part4[Math.floor(Math.random()*statements.part4.length)];
		
		if(i==2||i==5){
			awesomeStatement += " " +"</p>";
		}	
		}	
		awesomeStatement += " "+"Poza tym kiedyś jedzono szczaw i wszyscy byli najedzeni."

		document.querySelector(".wisdom-container").style.display  = "block";				
		document.getElementById("wisdom").innerHTML = awesomeStatement;
	}

	function makeGomulkaStatement(){
	
		var statements = JSON.parse(request.responseText),
			awesomeStatement = [];
		
		for (var i=0; i< 7; i++){ 

		awesomeStatement += " "+statements.part5[Math.floor(Math.random()*statements.part5.length)];
		awesomeStatement += " "+statements.part6[Math.floor(Math.random()*statements.part6.length)];
		awesomeStatement += " "+statements.part7[Math.floor(Math.random()*statements.part7.length)];
		awesomeStatement += " "+statements.part8[Math.floor(Math.random()*statements.part8.length)];
		
		if(i==2||i==5){
			awesomeStatement += " " +"</p>";
		}
		}
		
		document.querySelector(".wisdom-container").style.display  = "block";
		document.getElementById("wisdom").innerHTML = awesomeStatement;
	}

	function makePISStatement(){

		var statements = JSON.parse(request.responseText),
			awesomeStatement = [];
		
		for (var i=0; i< 7; i++){ 

		awesomeStatement += " "+statements.part9[Math.floor(Math.random()*statements.part9.length)];
		awesomeStatement += " "+statements.part10[Math.floor(Math.random()*statements.part10.length)];
		awesomeStatement += " "+statements.part11[Math.floor(Math.random()*statements.part11.length)];
		awesomeStatement += " "+statements.part12[Math.floor(Math.random()*statements.part12.length)];
		
		if(i==2||i==5){
			awesomeStatement += " " +"</p>";
		}
		}
						
		document.querySelector(".wisdom-container").style.display  = "block";
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

}
})()

// Speech sources: 
// https://mfiles.pl/pl/index.php/Uniwersalny_kod_przem%C3%B3wie%C5%84
// http://bi.gazeta.pl/im/00/9c/12/z19515648P,Tabelka.jpg
// http://joemonster.org/phorum/read.php?f=18&t=561350
