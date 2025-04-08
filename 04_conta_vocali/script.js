/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// function isVowel(lettera) {
//   if (
//     lettera === "a" ||
//     lettera === "e" ||
//     lettera === "i" ||
//     lettera === "o" ||
//     lettera === "u"
//   ) {
//     return true;
//   }
//   return false;
// }

function isVowel(lettera) {
  const vocali = "aeiou";

  const indexOfFirst = vocali.indexOf(lettera);
  if (indexOfFirst >= 0) {
    return true;
  }
  return false;
}

// Dichiara la funzione qui.
function countVowels(searchWord) {
  let vocali = 0;
  for (let i = 0; i < searchWord.length; i++) {
    const lettere = searchWord[i];
    console.log(lettere);
    if (isVowel(lettere)) {
      vocali += 1;
    }
  }
  return vocali;
  console.log(vocali);
}

// Invoca la funzione qui e stampa il risultato in console

console.log(countVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
