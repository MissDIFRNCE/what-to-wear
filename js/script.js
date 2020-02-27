var tops = []
var bottoms = []
//deze twee worden weer gebruikt in de functie getOutfit om de filteren in de json's die hieronder gelinkt zijn

axios.get('./tops.json').then((response) => {
	tops = response.data
})
//het ophalen van de json bestanden waar alle kledingstukken in staan opgeslagen
axios.get('./bottoms.json').then((response) => {
	bottoms = response.data
})
//het ophalen van de json bestanden waar alle kledingstukken in staan opgeslagen


function filter() {
	var givenTemp = +document.querySelector('#temperatuur-selectie').value;
	//de ingegeven temperatuur
	var givenComf = +document.querySelector('#comfort-selectie').value;
	//het ingegeven comfort
	console.log(givenTemp, givenComf);


	var getOutfit = function (temperature, comfort) {
	//temperature en comfort slaan op wat is ingegeven op regel ...
		var chosenTop = tops.filter((clothingPiece) => {
			return clothingPiece.temperature === temperature && clothingPiece.comfort === comfort
			//dit zorgt ervoor dat de ingegeven waardes worden gematched aan de var chosenTop
		})[0]//lege array

		var chosenBottom = bottoms.filter((clothingPiece) => {
			return clothingPiece.temperature === temperature && clothingPiece.comfort === comfort
			//dit zorgt ervoor dat de ingegeven waardes worden gematched aan de var chosenBottom
		})[0]//lege array

		document.querySelector('#top').src = `images/kleding/${chosenTop.img}`
		document.querySelector('#bottom').src = `images/kleding/${chosenBottom.img}`
		//deze twee veranderen de afbeeldingen a.d.h.v de chosenTop en chosenBottom

		document.querySelector('#information>p:first-of-type').innerHTML = chosenTop.type;
		document.querySelector('#information>p:last-of-type').innerHTML = chosenBottom.type;
		//deze twee veranderen de titels naast de kledingstukken

		return {top: chosenTop, bottom: chosenBottom}
		//return betekend einde functie. Top is nu chosenTop en bottom is nu chosenBottom
	}
	console.log(getOutfit(givenTemp, givenComf))
	//logt de gegeven waardes
};

document.querySelector('#start').addEventListener("click", filter);
//triggert de functie filter wanneer je op de knop klikt
