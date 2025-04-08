/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const lettera = "A";

// Dichiara la funzione qui.

function search(listaNomi, check) {
  let iniziali = [];
  for (let i = 0; i < listaNomi.length; i++) {
    const nomi = listaNomi[i];
    console.log(nomi);
    if (nomi[0] === check) {
      iniziali.push(nomi);
    }
  }

  return iniziali;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(search(names, lettera));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
