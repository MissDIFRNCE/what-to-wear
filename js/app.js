var tops = [
	{
		id: 1,
		type: "t-shirt",
		temperature: 20,
		comfort: 75,
		img: "tee1.png"
	},
	{
		id: 2,
		type: "t-shirt",
		temperature: 20,
		comfort: 100,
		img: "tee2.png"
	},
	{
		id: 3,
		type: "t-shirt",
		temperature: 20,
		comfort: 75,
		img: "tee3.png"
	},
	{
		id: 4,
		type: "sweater",
		temperature: 10,
		comfort: 50,
		img: "trui1.png"
	}
];

var bottoms = [
	{
		id: 1,
		type: "jeans",
		temperature: 10,
		comfort: 25,
		img: "pants1.png"		
	},
	{
		id: 2,
		type: "jeans",
		temperature: 15,
		comfort: 75,
		img: "pants2.png"
	},
	{
		id: 3,
		type: "shorts",
		temperature: 20,
		comfort: 100,
		img: "shorts1.png"
	},
	{
		id: 4,
		type: "shorts",
		temperature: 20,
		comfort: 75,
		img: "shorts2.png"
	},
	{
		id: 5,
		type: "skirt",
		temperature: 15,
		comfort: 100,
		img: "skirt1.png"
	}
];

var givenTemp = 22
console.log(givenTemp + ' graden Celcius');

var givenComf = 100
console.log(givenComf + '% comfort');

var getOutfit = function (comfort, temperature) {
	console.log(comfort, temperature)
}

getOutfit(50,15)

if (givenComf > 0 && givenComf <= 24) {
	console.log('geen comfort')
	var selectedTop = tops.filter(function (top) {
		return top.comfort === 0;
	})
	// console.log(selectedTop)
} 
else if (givenComf > 24 && givenComf <= 49) {
	// console.log('weinig comfort')
} 
else if (givenComf > 49 && givenComf <= 74) {
	// console.log('comfortabel')
} 
else {
	// console.log('super chill')
};

var exclude = document.querySelector('#uitsluit-selectie').value;

if (exclude === 'dress') {
	// console.log('je wilt geen jurk aan');
} 
else if (exclude === 'skirt') {
	// console.log('je wilt geen rokje aan');
} 
else if (exclude === 'shirt') {
	// console.log('je wilt geen overhemd aan');
} 
else if (exclude === 'jeans') {
	// console.log('je wilt geen spijkerbroek aan');
} 
else if (exclude === 'sweater') {
	// console.log('je wilt geen trui aan');
} 
else {
	// console.log('je vind alles prima');
}

















