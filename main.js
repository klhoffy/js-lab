"use strict";

var wdi_20_names = []

refill()

//console.log(wdi_20_names[0])
//console.log(wdi_20_names[5])

//var i;
//for (i = 0; i < wdi_20_names.length; i++) {
	//console.log(wdi_20_names[i]);
//}

function eachName() {
	//console.log(wdi_20_names[randomName()]);
	if (wdi_20_names.length === 0) {
		refill();
	} else {
		console.log(wdi_20_names.splice(randomNumber(), 1));
	}
}

function randomNumber () {
	var random = Math.floor(Math.random() * wdi_20_names.length);
	return random;
}

function refill () {
	wdi_20_names = ["Alex", "Brandon", "Courtney", "Jessica", "Josh", "Kristin", "Miwa", "Shon", "TJ"];
}

document.querySelectorAll( "#btn" )[0].addEventListener("click" , eachName)