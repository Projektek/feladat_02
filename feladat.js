"use strict";

let vitamin = [
  "A-vitamin",
  "B1-vitamin",
  "B2-vitamin",
  "B12-vitamin",
  "C-vitamin",
  "D-vitamin",
  "E-vitamin",
  "K-vitamin",
];

let napi = [];

let aVitamin = +document.getElementById("a-napi").innerText;
napi.push(aVitamin);
let b1Vitamin = +document.getElementById("b1-napi").innerText;
napi.push(b1Vitamin);
let b2Vitamin = +document.getElementById("b2-napi").innerText;
napi.push(b2Vitamin);
let b12Vitamin = +document.getElementById("b12-napi").innerText;
napi.push(b12Vitamin);
let cVitamin = +document.getElementById("c-napi").innerText;
napi.push(cVitamin);
let dVitamin = +document.getElementById("d-napi").innerText;
napi.push(dVitamin);
let eVitamin = +document.getElementById("e-napi").innerText;
napi.push(eVitamin);
let kVitamin = +document.getElementById("k-napi").innerText;
napi.push(kVitamin);

function kiertekel() {
  let info = document.getElementById("info");
  info.style.visibility = "visible";
  let ertekel = document.getElementById("szamitas").options.selectedIndex;
  console.log(napi);

  if (ertekel == 1) {
    let legkevesebbVitamin = "";
    let minVitamin = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < napi.length; i++) {
      if (napi[i] <= minVitamin) {
        minVitamin = napi[i];
        legkevesebbVitamin = vitamin[i];
      }
    }

    info.innerText =
      "A legkevesebb napi ajánlott mennyiségű vitamin: " + legkevesebbVitamin;
  }

  if (ertekel == 2) {
    let legtobbVitamin = "";
    let maxVitamin = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < napi.length; i++) {
      if (maxVitamin <= napi[i]) {
        maxVitamin = napi[i];
        legtobbVitamin = vitamin[i];
      }
    }

    info.innerText =
      "A legtöbb napi ajánlott mennyiségű vitamin: " + legtobbVitamin;
  }

  if (ertekel == 3) {
    let osszVitamin = 0;

    for (let i = 0; i < napi.length; i++) {
      osszVitamin += napi[i];
    }

    info.innerText =
      "Az összes napi ajánlott mennyiségű vitamin: " +
      osszVitamin.toFixed(2) +
      "mg";
  }
}
