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

const personne = {
    nom: 'Ravida',
    prenom: 'Lélyan',
    age: 19,
    ville: 'Moult-Chicheboville'
}

console.log(personne.age)
console.log(personne.nom)
console.log(personne.prenom)
console.log(personne.ville)

const personnes = [
    {prenom: "John", nom: "Doe", age: 25, ville: "Rouen"},
    {prenom: "Jane", nom: "Doe", age: 30, ville: "Paris"},
    {prenom: "Jim", nom: "Doe", age: 35, ville: "Caen"}
]

console.table(personnes[1])

console.log(personnes)


personnes.push({prenom: " Marc", nom: "Doe", age: 32, ville: "Marseille"})
console.table(personnes)

personnes[0].prenom = "Jean"
console.table(personnes)

personnes.splice(1,1)
console.table(personnes)

const tab = [1,2,3,4,5,6,7,8,9,10]

console.log(tab[0])
console.log(tab[9])
console.log(tab.length)

const tableau = [10,20,30,40,50,60,70,80,90,100]
console.log(tableau)
tableau.reverse()
console.log(tableau)*/


const numbers = [ 2, 5, 1, 9, 0, 3, 7, 4, 6, 8 ]
console.log(numbers)
numbers.sort()
console.log(numbers)


numbers.push(11)
console.log(numbers)
numbers.unshift(0)
console.log(numbers)
numbers.pop()
console.log(numbers)
