let colorSing = document.getElementById("colorSing");
let button = document.getElementById("btn-generate");
let buttonSave = document.getElementById("btn-save");
let buttonExport = document.getElementById("btn-export");
let buttonReset = document.getElementById("reset");
let previous = document.getElementById("back");
let next = document.getElementById("forward");
var hexa;
var j = -1;
let memory = [];
var exported = false;
var duplicates = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};