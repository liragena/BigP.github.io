//WEIGHT CONVERSION PROGRAM

const textBox = document.getElementById("textBox");
const toKg = document.getElementById("toKg");
const toLbs = document.getElementById("toLbs");
const result = document.getElementById("result");
const GtoLbs = document.getElementById("GtoLbs");
const LbstoG = document.getElementById("LbstoG");
let weight;

function convert(){
     if(toKg.checked){
        weight = Number(textBox.value);
        weight = weight / 2.2046;
        result.textContent = weight.toFixed(2) + "Kg";
     }
    else if(toLbs.checked){
        weight = Number(textBox.value);
        weight = weight * 2.2046;
        result.textContent = weight.toFixed(2) + "Lbs";
    }
    else if(GtoLbs.checked){
        weight = Number(textBox.value);
        weight = weight * 0.00220462;
        result.textContent = weight.toFixed(3) + "Lbs";
    }
    else if(LbstoG.checked){
        weight = Number(textBox.value);
        weight = weight * 453.592;
        result.textContent = weight.toFixed(2) + "g";
    }
     else{
        result.textContent = "Please select a unit";
     }
}