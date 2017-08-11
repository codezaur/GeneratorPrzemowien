(function (){

var faceSound = new Audio("picsound.wav");
var faceToClick = document.querySelectorAll("#faces");

window.onload = function(){
	var url = "http:localhost/statementsParts.json";
	var request = new XMLHttpRequest();
	request.open("GET", url);
	

}

	function makeNiesiolStatement(){
		/*
		var part1 =["Kaczyński", "Ten obrzydliwy, załgany hipokryta", "Hoffman", "Ten kandydat do kliniki psychiatrycznej", "Macierewicz", "Brudziński", "Ziobro", "PIS", "Ten PISowski pachołek", "Ten faszystowski aparatczyk"];
		var part2 =["swoim seansem nienawiści", "podczas tego PiS-owskiego, lizusowskiego spektaklu", "żerując na powszechnych fobiach i ignorancji", "swoimi wymiocinami szkalując lepszych od siebie", "podczas tego obłędnego spędu", "swoim wściekłym ujadaniem", "tam, na Krakowskim Przemieściu",
		"mówiąc te dyrdymały, bzdury i wypociny", "oczerniając i obrzucając błotem premiera", "łamiąc konstytucję"];
		var part3 =["pokazał chamstwo i bezczelność", "sprowadzając do Polski całe to bagno, tę małpiarnię", "dając popis hipokryzji i cynizmu", "tonie w szambie własnej choroby psychicznej", "przekroczył granicę zbydlęcenia", "ujawnił bagno swojej degradacji", "szkodzi dobremu wizerunkowi Polski", "podnosi rękę na demokratyczny rząd", "zachowuje się jak nazista", "pokazał swój rasizm"];
		var part4 =["prowadzi nas do wojny domowej.", "za jego sprawą do władzy dojdą populiści, demagodzy, nacjonaliści i ludzie niezwykle niebezpieczni dla Polski.", "przekroczył granicę podłości.", " -to już obrzydliwe!", "pokazał swe prostactwo moralne.", "pokazał swoje skarłowacenie i zwyrodnienie.", "podpala Polskę i dzieli Polaków.", "-powinien trafić do szpitala psychiatrycznego.", "zszedł poniżej poziomu dna wyznacznonego przez Kępę.", "i jest zagrożeniem dla demokracji."];
		*/

		var awesomeStatement = [];
		
		for (var i=0; i< 7; i++){ 

		awesomeStatement += " "+JSON.parse(part1[Math.floor(Math.random()*part1.length)]);
		awesomeStatement += " "+JSON.parse(part2[Math.floor(Math.random()*part2.length)]);
		awesomeStatement += " "+JSON.parse(part3[Math.floor(Math.random()*part3.length)]);
		awesomeStatement += " "+JSON.parse(part4[Math.floor(Math.random()*part4.length)]);
		
		if(i==2||i==5){
			awesomeStatement += " " +"</p>";
		}	
		}	
		awesomeStatement += " "+"Poza tym kiedyś jedzono szczaw i wszyscy byli najedzeni."
						
		document.getElementById("wisdom").innerHTML = awesomeStatement;
	}

	function makeGomulkaStatement(){
		var part1 =["Koleżanki i koledzy", "Z drugiej strony", "Podobnie", "Nie zapominajmy jednak, że", "W ten sposób", "Praktyka dnia codziennego dowodzi, że", "Wagi i znaczenia tych problemów nie trzeba szerzej uzasadniać, ponieważ", "Różnorakie i bogate doświadczenia", "Troska organizacji, a szczególnie", "Wyższe założenia ideowe, a także"];
		var part2 =["realizacja nakreślonych zadań programowych", "zakres i miejsce szkolenia kadr", "stały wzrost ilości i zakres naszej aktywności", "aktualna struktura organizacji", "nowy model dzialalności organizacyjnej", "dalszy rozwój różnych form działalności", "stałe zabezpieczenie informacyjno-programowe naszej działalności", "wzmacnianie i rozwijanie struktur", "konsultacja z szerokim aktywem", "rozpoczęcie powszechnej akcji kształtowania postaw"];
		var part3 =["zmusza nas do przeanalizowania", "spełnia istotną rolę w kształtowaniu", "wymaga sprecyzowania i określenia", "pomaga w przygotowaniu i realizacji", "zabezpiecza udział szerokiej grupie w kształtowaniu", "spełnia ważne zadania w wypracowaniu", "umożliwia w większym stopniu tworzenie", "powoduje docenianie wagi", "przedstawia interesującą próbę sprawdzenia", "pociaga za sobą proces wdrażania i unowocześnienia"];
		var part4 =["istniejących warunków administracyjno-finansowych.", "dalszych kierunków rozwoju.", "systemu powszechnego uczestnictwa.", "postaw uczestników wobec zadań stawianych przez organizację.", "nowych propozycji.", "kierunków postępowego wychowania.", "systemu szkolenia kadry odpowiadającego potrzebom.", "odpowiednich warunków aktywizacji.", "modelu rozwoju.", "form oddziaływania."];
	
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
		var part1 =["Biało-czerwona drużyno:", "Należy też jasno podkreślić, że", "Sytuacja dojrzała do tego, by powiedzieć wprost:", "Co więcej:", "Minione lata lata w sposób oczywisty wręcz dowiodły, że", "Z drugiej strony:", "Każdy kto interesuje się Polską, wie, że", "Jak na dłoni widać, że naszą głęboką troskę budzi fakt, że", "Z najwyższym zaniepokojeniem obserwujemy, iż", "Niestety,", "Mamy też niezbite dowody, że"];
		var part2 =["koła liberalne,", "wrogie nam ośrodki niemieckie,", "sprzedające się za sowite gratyfikacje środowiska aktorskie,", "Owsiaki i inne glisty ludzkie,", "resortowe dzieci,", "agentury obcych wywiadów", "skompromitowane do szczętu autorytety,", "inspirowane z zewnątrz wiadome grupy interesów,", "gender, homopolityka i walka z chrześcijaństwem,", "kręgi rowerzystów i wegetarian,", "tysiące post-Polaków,", "skompromitowane postkolonialne pseudoelity,"];
		var part3 =["odpowiedzialne za fatalną gospodarkę leśną,", "które zrujnowały kraj,", "z satysfakcją obserwujące upadek rodzimego górnictwa,", "szargające na deskach swoich pseudoteatrzyków wszystko, co cenne,", "suflujące nam ideowo wzorce rodem ze zdemoralizowanego Zachodu,", "pasożytujące na gospodarce narodowej,", "wyprowadzające od lat kapitał za granicę,", "które żyją z podgryzania naszych ideowych korzeni,", "bezpardonowo niszczące rynek nawozów sztucznych,", "które doprowadziły do ruiny polski przemysł stoczniowy,", "które specjalizują się w erozji ideowej,", "płodzące w zaciszu swoich gabinetów aksjologiczne brednie,"];
		var part4 =["odpowiedzą za swoje zbrodnie przed Bogiem i prezesem.", "są tworem porządku pojałtańskiego i mrocznych czasów rewanżyzmu.", "muszą zniknąć z powierzchni polskiego życia publicznego.", "odcięły się od życiodajnych źródeł tradycji, kultury i myśli narodowej.", "straciły mandat do wypowiadania się na istotne dla narodu polskiego tematy.", "mamiły nas wizjami zielonej wyspy i ciepłej wody w kranie.", "powielają porządek targowicy i są ideowymi prawnukami carycy Katarzyny.", "muszą szukać swego miejsca gdzie indziej.", "pozostają póki co bezkarne.", "nie ustają w nagonce na tworzący się nowy ład.", "ulegają podszeptom wichrzycieli oraz kłamliwej propagandy ośrodków zagranicznych.", "pod płaszczykiem modernizacji planują dalsze akty destrukcji."];

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
review by Kuba:
1. (+ DONE) IIFE (function (){ var a = 10; })()
2. webpack + bootstrap (dependencies management)
3. (+DONE) awesome Statement empty and in loop iterate table 7 times and build string, var a = "", a += "b", a += "c"
4. XML http request (tables in separate file)
*/
