console.log("Ciao Linda");

// CREO ARRAY CON OGGETTI

const bicycle = [
  { nome: "Matteo", peso: 2.35 },
  { nome: "Aurora", peso: 1.89 },
  { nome: "Luigi", peso: 3.12 },
  { nome: "Sofia", peso: 2.78 },
];
console.log(bicycle); // Vedo il contenuto dell'Array
console.log(bicycle[1].nome); // esce Aurora, se era 0 usciva Matteo ecc...
console.log(bicycle[1].peso); // esce peso di Aurora, se era 0 usciva quello di Matteo ecc...
