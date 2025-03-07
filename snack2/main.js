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

// METTO IN DELLE VARIABILI LET I PUNTI E I FALLI CON I NUMERI RANDOMICI
for (let i = 0; i < footballTeam.length; i++) {
  console.log(footballTeam[i]);
  // NUMERI RANDOMICI CON MATHFLOOR
  punti = Math.floor(Math.random() * 10) + 1;
  falli = Math.floor(Math.random() * 10) + 1;
  console.log(punti);
  console.log(falli);
  // ASSEGNO I NUMERI RANDOMICI
  footballTeam[i].punti = punti;
  footballTeam[i].falli = falli;
}
// CREO UN ARRAY VUOTO CHE CONTENTA I NOMI DELLE SQUADRE E I FALLI
const newList = [];
// CREO LA FUNZIONE newArr CHE CONTERRA' I NOMI E I FALLI
function newArr(nome, falli) {
  return { nome, falli }; // RESTITUISCO GLI OGGETTI
}
for (let i = 0; i < footballTeam.length; i++) {
  newList.push(newArr(footballTeam[i].nome, footballTeam[i].falli)); // METTO NELLA NUOVA LISTA I NOMI E I FALLI USANDO LA FUNZIONE
}
console.log(newList); // LISTA CON NOME SQUADRA E FALLI
