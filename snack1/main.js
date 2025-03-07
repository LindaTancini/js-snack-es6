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

// CALCOLO IL PESO MINORE
let min = 0;
for (let i = 0; i < bicycle.length; i++) {
  console.log(bicycle[i].peso); // con bicycle[i] prendo il peso delle bici
  console.log(bicycle[min].peso); // con bicycle[min].peso prendo il peso della bici meno pesante
  if (bicycle[i].peso < bicycle[min].peso) {
    min = i; // min conterrà ora l'indice della bici più leggera
  }
}

// STAMPO IN CONSOLE
console.log(bicycle[min].peso);
console.log(
  `La bicicletta più leggera è di ${bicycle[min].nome} con un peso di ${bicycle[min].peso}`
);
