/*let cel = document.getElementById('cel');
let celsius = 56;
let temp = document.getElementById('temp');
function degr(temp){
    let fahr = temp*9/5+32;
    return fahr;
}
cel.textContent=celsius;
temp.textContent=degr(celsius);



let air = document.getElementById('aire');
let long = 5;
let larg = 6;
function aire(long, larg){
    return long * larg
}
air.textContent = aire(long, larg);


let nommage = document.getElementById('nommage');
let prenom = 'Michel';
let nom = 'Pinceteton';
function nommer(prenom, nom){
    return prenom + nom
}
nommage.textContent = nommer(prenom, nom);
*/
let MHT = 52; 
const TVA = 0.2;
console.log(MHT+MHT*TVA);

console.log(((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true));

let poids = 69;
let taille = 1.69;
console.log((poids / (taille * taille)).toFixed(2));

const min = 60
const commande = 60
const frais = 5

console.log(min > commande ? 'Frais de livrasion: '+ frais + ' euros': 'Livraison gratuite')


let val = "1111"
console.log(parseInt(val, 2))