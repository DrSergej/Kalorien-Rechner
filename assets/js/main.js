"use strict";

// console.log("test");

function clearInput(event) {
	event.preventDefault();

	const kcalGU = document.getElementById("kcal-grundumsatz");
	const kJGU = document.getElementById("kJ-grundumsatz");

	const kcalGesammt = document.getElementById("kcal-gesammtumsatz");
	const kJGesammt = document.getElementById("kJ-gesammtumsatz");

	document.querySelector("h2").innerHTML = "";
	document.querySelector("h2").style.color = "";
	document.getElementById("height-id").style.outline = ``;
	document.getElementById("height-id").value = ``;
	document.getElementById("alter-id").style.outline = ``;
	document.getElementById("alter-id").value = ``;
	document.getElementById("gewicht-id").style.outline = ``;
	document.getElementById("gewicht-id").value = ``;
	kcalGU.innerHTML = "";
	kJGU.innerHTML = "";
	kcalGesammt.innerHTML = "";
	kJGesammt.innerHTML = "";
}
function checkIfEmpty(event) {
	event.preventDefault();

	const groesse = document.getElementById("height-id").value;
	const alter = document.getElementById("alter-id").value;
	const gewicht = document.getElementById("gewicht-id").value;

	if (groesse !== "") {
		document.getElementById("height-id").style.outline = ``;
	} else if (alter !== "") {
		document.getElementById("alter-id").style.outline = ``;
	} else if (gewicht !== "") {
		document.getElementById("gewicht-id").style.outline = ``;
	}
}

function kalorienverbrauchBerechnen(event) {
	event.preventDefault();
	// console.log("test");
	const groesse = document.getElementById("height-id").value;
	const alter = document.getElementById("alter-id").value;
	const gewicht = document.getElementById("gewicht-id").value;

	const female = document.getElementById("weiblich-radio").checked;
	const male = document.getElementById("maennlich-radio").checked;
	const aktivitaet = document.getElementById("activity-id").value;

	const kcalGU = document.getElementById("kcal-grundumsatz");
	const kJGU = document.getElementById("kJ-grundumsatz");

	const kcalGesammt = document.getElementById("kcal-gesammtumsatz");
	const kJGesammt = document.getElementById("kJ-gesammtumsatz");

	let ergebnisKcalGU = 0;
	let ergebnisKcalGesammt = 0;
	let ergebnisKJUmsatz = 0;
	let ergebnisKJGesammt = 0;

	if (groesse !== "" && alter !== "" && gewicht !== "") {
		document.querySelector("h2").innerHTML = "";
		document.querySelector("h2").style.color = "";
		document.getElementById("height-id").style.outline = ``;
		document.getElementById("alter-id").style.outline = ``;
		document.getElementById("gewicht-id").style.outline = ``;
		if (male) {
			ergebnisKcalGU = (
				664.7 +
				13.7 * gewicht +
				5 * groesse -
				6.8 * alter
			).toFixed(2);
			ergebnisKcalGesammt = (ergebnisKcalGU * Number(aktivitaet)).toFixed(3);
			ergebnisKJUmsatz = (ergebnisKcalGU * 4.184).toFixed(3);
			ergebnisKJGesammt = (ergebnisKcalGesammt * 4.184).toFixed(3);
			kcalGU.innerHTML = ergebnisKcalGU;
			kcalGesammt.innerHTML = ergebnisKcalGesammt;
			kJGU.innerHTML = ergebnisKJUmsatz;
			kJGesammt.innerHTML = ergebnisKJGesammt;
		} else if (female) {
			ergebnisKcalGU = (
				655.1 +
				9.6 * gewicht +
				1.8 * groesse -
				4.7 * alter
			).toFixed(3);
			ergebnisKcalGesammt = (ergebnisKcalGU * Number(aktivitaet)).toFixed(3);
			ergebnisKJUmsatz = (ergebnisKcalGU * 4.184).toFixed(3);
			ergebnisKJGesammt = (ergebnisKcalGesammt * 4.184).toFixed(3);
			kcalGU.innerHTML = ergebnisKcalGU;
			kcalGesammt.innerHTML = ergebnisKcalGesammt;
			kJGU.innerHTML = ergebnisKJUmsatz;
			kJGesammt.innerHTML = ergebnisKJGesammt;
		}
	} else {
		document.querySelector("h2").innerHTML = "Bitte alle Daten eintragen";
		document.querySelector("h2").style.color = "red";
		document.getElementById("height-id").style.outline = `${2}px solid red`;
		document.getElementById("alter-id").style.outline = `${2}px solid red`;
		document.getElementById("gewicht-id").style.outline = `${2}px solid red`;
	}
}
