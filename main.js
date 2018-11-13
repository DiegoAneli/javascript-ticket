
//DEFINIZIONI ETA' / PREZZO

var eta = prompt ('Quanti anni hai?');
document.getElementById ('eta_utente').innerHTML = "Hai un eta di : " + eta + "anni";

// var eta = 18;
//se hai meno di 18 anni hai lo sconto del 20%
if (eta < 18) {
  document.writeln('Hai uno del sconto del 20%');
}
else {
  // document.writeln('non hai lo sconto');
}
// var eta = 65;
//se hai piu di 65 anni hai lo sconto del 40%
if (eta >= 65) {
  document.writeln('Hai uno sconto del 40%');
}
else {
  // document.writeln('non hai lo sconto');
}

//Possibilità
//dai 19 ai 64 anni di età che paga 0,21 al km
// (se l eta è minore di 18 anni e maggiore o uguale a 64 paga prezzo intero)
if (eta > 18 && eta <=64)  {
  document.writeln('Prezzo Intero')

}

//VARIABILE KILOMETRAGGIO
//calcolo del costo biglietto

var km = prompt('Quanti kilometri devi percorrere?');
document.getElementById('tot_km').innerHTML = "Km da percorrere : " + km + " Km ";

// var prezzo_biglietto = '0,21 euro * km';
//
// if (prezzo_biglietto 0,21 euro al km ) {
//   document.writeln(calcolo totale)
//
// }
var prezzo_del_biglietto = '0.21 euro/km';
document.getElementById('costo_km').innerHTML = "Il prezzo del biglietto e di 0.21 euro al km"


if (prezzo_del_biglietto = 0.21 && eta > 18 && eta <=64) {
  document.writeln('Il prezzo del biglietto e di 0.21 euro al km')


}
//
// else {
//   document.writeln()
// }
