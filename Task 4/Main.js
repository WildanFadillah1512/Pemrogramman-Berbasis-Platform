let studentGrades = [
    {
        name: "andi",
        score: 90
    },
    {
        name: "Rudi",
        score: 80
    },
    {
        name: "Dira",
        score: 100
    }
];
let highestScore = 0;
let topStudent = '';

for (let student of studentGrades) {
    if (student.score > highestScore) {
        highestScore = student.score;
        topStudent = student.name;
    }
}
console.log("");

console.log(`The top student is ${topStudent} with a score of ${highestScore}`);
console.log("");
