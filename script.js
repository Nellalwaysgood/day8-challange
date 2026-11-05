let students = [
    {name: "M.Keenan.A", score: 70},
    {name: "M.Prabu.T.K", score: 60},
    {name: "Michael.H.P.H", score: 85},
    {name: "Reyvan.F", score: 95},
    {name: "Thaufan.J", score: 80}
]

console.log("\n ----- forEach() -----");
students.forEach((student) => {
    console.log(`name: ${student.name}, score: ${student.score}`);
});

console.log("\n ----- filter() -----")
let filterScore = students.filter((student) => student.score >= 75);
console.log(filterScore);

console.log("\n ----- map() -----")
let studentName = students.map((student) => {
    return student.name
})
console.log(studentName);

console.log("\n ----- find() -----");
let findScore = students.find((student) => student.score >= 90);
console.log(findScore);

console.log("DONE")