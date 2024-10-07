let name = "Tezo";
let cyanidePowder = true;
let cyanideAmount = 60;
let clearCCTV = true;
let blurryCCTV = false;
let fingerprints = 3;
let suspiciousMovements = true;
let cyanideInPocket = true;
console.log("");

let score = 0;
if (cyanidePowder == true) {
    score += 50;
}
if (cyanideAmount > 50) {
    score += 500;
}
if (clearCCTV == true) {
    score += 250;
}
if (blurryCCTV == true) {
    score += 150;
}
if (fingerprints >= 2) {
    score += 100;
}
if (suspiciousMovements == true) {
    score += 50;
}
if (cyanideInPocket == true) {
    score += 750;
}
if (score > 1300 && clearCCTV && fingerprints) {
    console.log(name + ' it is a murder.');
} else {
    console.log(name + ' the case is inconclusive.');
}
console.log("");

console.log("total poin = " + score);

console.log("");

