let jerseyNumber = 91;
console.log("");

if (jerseyNumber % 2 === 0) {
    if (jerseyNumber >= 50 && jerseyNumber <= 100) {
        console.log("Jersey Number is: " + jerseyNumber +' then Player can be a target attacker and team captain.');
    } else {
        console.log("Jersey Number is: " + jerseyNumber + ' then Player is a target attacker.');
    }
} else
    if (jerseyNumber > 90) {
        console.log("Jersey Number is: " + jerseyNumber + ' then Player is a Playmaker.');
    
    } else if (jerseyNumber % 3 === 0 && jerseyNumber % 5 === 0) {
        console.log("Jersey Number is: " + jerseyNumber + ' then Player is a Keeper.');
    } else {
        console.log("Jersey Number is: " + jerseyNumber + ' then Player is a Defender.');
}
console.log("");

