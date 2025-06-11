/*
🎯 BONUS
Se è null: stampa “Il dato è vuoto”
Se è un array: stampa la sua lunghezza
Se è una Promise: attendi che si risolva e stampa il valore del resolve.
*/

let valore : unknown = null;
if(typeof valore === "string"){
  console.log(valore.toUpperCase())
}else if(typeof valore === "number"){
  console.log(valore * 2)
} else if(typeof valore === "boolean"){
  console.log(valore)
} else if(valore === null){
  console.log("Il dato è vuoto")
}else if(Array.isArray(valore)){
  console.log("lunghezza", valore.length, "è un array")
} else if(valore instanceof Promise){
 valore.then((msg) => console.log(msg))
}else{
  console.log("Tipo non supportato")
}