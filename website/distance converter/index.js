//PROGRAM TO CONVERT WEIGHT//

const textBox = document.getElementById("textBox");
const toMeters = document.getElementById("toMeters");
const toFeet = document.getElementById("tofeet");
const toCm = document.getElementById("FtToCm");
const CmToFt = document.getElementById("CmToFt");
const result = document.getElementById("result");
let distance;

function convert(){
    if(toMeters.checked){
        distance = Number(textBox.value);
        distance = distance * 0.3048;
        result.textContent = distance.toFixed(2) + "m";
    }
    else if(tofeet.checked){
        distance = Number(textBox.value);
        distance = distance * 3.28;
        result.textContent = distance.toFixed(2) + "ft";
    }
    
    else if(FtToCm.checked){
        distance = Number(textBox.value);
        distance = distance * 30.48;
        result.textContent = distance.toFixed(2) + "cm";
    }

    else if(CmToFt.checked){
        distance = Number(textBox.value);
        distance = distance * 0.0328;
        result.textContent = distance.toFixed(2) + "ft";
    }
    
    else{
        result.textContent = "Please select a unit";
    }
}
