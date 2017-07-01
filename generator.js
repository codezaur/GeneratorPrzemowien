var faceSound = new Audio("picsound.wav");
var faceToClick = document.getElementById("faces");

	function makeStatement(){
		var part1 =["Kaczyński", "Hoffman", "Macierewicz", "Brudziński", "Ziobro"];
		var part2 =["swoim seansem nienawiści", "podczas tego obłędnego spędu", "tam, na Krakowskim Przemieściu",
		"mówiąc te dyrdymały, bzdury i wypociny", "oczerniając i obrzucając błotem premiera"];
		var part3 =["pokazał chamstwo i bezczelność", "przekroczył granicę zbydlęcenia", "szkodzi dobremu wizerunkowi Polski", "podnosi rękę na demokratyczny rząd", "zachowuje się jak nazista"];
		var part4 =["prowadząc do wojny domowej.", "pokazując swe prostactwo moralne.", "podpalając Polskę i dzieląc Polaków.", "-powinien trafić do szpitala psychiatrycznego.", "schodząc poniżej poziomu dna wyznacznonego przez Kępę."];
	
		var rand1 = Math.floor(Math.random()*part1.length);
		var rand2 = Math.floor(Math.random()*part2.length);
		var rand3 = Math.floor(Math.random()*part3.length);
		var rand4 = Math.floor(Math.random()*part4.length);

		var awesomeStatement = part1[rand1] +" "+ part2[rand2]+" "+ part3[rand3]+" "+part4[rand4];
		document.getElementById("wisdom").innerHTML = awesomeStatement;

	}
	makeStatement();


	function soundOnPicture(){
		var faceToClick = document.getElementById("faces");
		faceToClick.onmouseover = faceSound.play();
		}
	faceToClick.onmouseover = soundOnPicture;


	// only works on 1st pic and only once (global variable used)
	// 	function soundOnPicture(){
	// 	var faceToClick = document.getElementById("faces");
	// 	faceToClick.onmouseover = faceSound.play();
	// 	}
	// faceToClick.onmouseover = soundOnPicture;

	// this dosnt work
	// function soundOnPicture(){
	// 	var faceToClick = document.getElementById("faces");
	// 	for(var i=0;i<faceToClick.length;i++){
	// 	if(faceToClick[i].id=="faces")
	// 	faceToClick[i].onclick = faceSound.play();
	// 	}
	// 	}
	// faceToClick.onclick = soundOnPicture;

// <!-- add html/onclick/print on page instead of alert
// https://mfiles.pl/pl/index.php/Uniwersalny_kod_przem%C3%B3wie%C5%84
// http://bi.gazeta.pl/im/00/9c/12/z19515648P,Tabelka.jpg
// http://www.lasypolskie.pl/files/thumbs/t_tr1_110.jpg
// http://joemonster.org/phorum/read.php?f=18&t=561350
// http://niezalezna.pl/68262-ty-tez-mozesz-byc-jak-ewa-kopacz-generator-przemowien-premier-robi-furore-w-sieci
// http://grudqowy.salon24.pl/68864,tabelka-do-tworzenia-wypowiedzi-medialnych-dla-politykow-i-zwole
// https://twitter.com/marekborowski/status/690917521571123201
//  -->