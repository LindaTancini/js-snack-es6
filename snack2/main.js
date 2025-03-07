// CREO ARRAY CON OGGETTI
const footballTeam = [
  { nome: "Dynamo Tigers", punti: 0, falli: 0 },
  { nome: "Falcon United", punti: 0, falli: 0 },
  { nome: "Thunder Strikers", punti: 0, falli: 0 },
  { nome: "Shadow Warriors", punti: 0, falli: 0 },
];
console.log(footballTeam); // Vedo il contenuto dell'Array
console.log(footballTeam[1].nome); // esce il nome della squadra Falcon United, se era 0 usciva Dynamo Tigers ecc...
console.log(footballTeam[1].punti); // escono i punti della squadra Falcon United, se era 0 uscivano quelli di Dynamo Tigers ecc...
console.log(footballTeam[1].falli); // escono i falli della squadra Falcon United, se era 0 uscivano quelli di Dynamo Tigers ecc...

// NUMERI RANDOMICI CON MATHFLOOR
let randomNumber = Math.floor(Math.random() * 10) + 1; // numeri da 1 a 10
console.log(randomNumber);
