/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
let iniziali = [];
// Dichiara la funzione qui.
function search(listaNomi) {
  for (let i = 0; i < listaNomi.length; i++) {
    const nomi = listaNomi[i];
    iniziali.push(nomi[0]);
    console.log(nomi);
  }

  return iniziali;
}
console.log(iniziali);
// Invoca la funzione qui e stampa il risultato in console
console.log(search(names));
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
