/*
🎯 BONUS
Definiamo un nuovo type alias Team, che rappresenta un gruppo di lavoro all'interno dell'azienda:

nome → Nome del team (stringa).
progettoAttuale → Nome del progetto su cui lavora il team (può essere null se il team è in attesa di assegnazione).
budget → Importo numerico del budget assegnato al team (sempre presente).
membri → Una tuple in cui il primo elemento è sempre un Project Manager, seguito da uno o più Developers (almeno un developer obbligatorio).
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

type Developer = Dipendente & {
livelloEsperienza : "Junior" | "Mid" | "Senior",
linguaggi? : string[]
certificazioni : string[]
}

type ProjectManager = Dipendente & {
teamSize : number | null,
budgetGestito? : number
stakeholderPrincipali : string[]
}

type Team = {
nome : string,
progettoAttuale : string | null,
budget : number,
membri : [ProjectManager, ...Developer[]]
}