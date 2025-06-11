/*

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


type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: "m" | "f",
  anniDiServizio: number[],
  readonly emailAziendale: string,
  contratto: "indeterminato" | "determinato" | "freelance";
}