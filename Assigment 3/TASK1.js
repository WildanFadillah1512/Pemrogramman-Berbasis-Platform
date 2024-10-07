let name = 'Tezo';
let age = 27;
let place_to_live = 'Manhattan';
let savings = 15000000;
console.log("");

if (age > 40 && (place_to_live === 'Nevada' || place_to_live === 'New York' || place_to_live === 'Havana') && savings > 10000000) {
    console.log(name + ' is likely a mafia member with Don rank.');
} else if (age >= 25 && age <= 40 && (place_to_live === 'New Jersey' || place_to_live === 'Manhattan' || place_to_live === 'Nevada') && savings >= 1000000 && savings <= 2000000) {
    console.log(name + ' is likely a mafia member with Underboss rank.');
} else if (age >= 18 && age <= 24 && (place_to_live === 'California' || place_to_live === 'Detroit' || place_to_live === 'Boston') && savings < 1000000) {
    console.log(name + ' is likely a mafia member with Capo rank.');
} else {
    console.log(name + ' is not suspicious.');
}
console.log("");
