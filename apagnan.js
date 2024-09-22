let Pierre = document.getElementById("Pierre")
let Feuille = document.getElementById("Feuille")
let Ciseaux = document.getElementById("Ciseaux")
let jeux = document.getElementById("jeu")

let choixHu = document.getElementById("choixHu")
let choixbo = document.getElementById("choix")
Pierre.addEventListener("click", function() {jeu("Pierre")})
Feuille.addEventListener("click", function() {jeu("Feuille")})
Ciseaux.addEventListener("click", function() {jeu("Ciseaux")})



function jeu(choix){
    let tab = ["Pierre","Feuille","Ciseaux"]
    let bot = Math.floor(Math.random()*3)
    let choixbot = tab[bot] 
    choixbo.textContent = choixbot
    choixHu.textContent = choix
    if(choixbot == tab[0] && choix == "Feuille"){
        jeux.textContent ="t'as gagné"
    }
    else if(choixbot == "Ciseaux" && choix == "Pierre"){
        jeux.textContent = "t'as gagné"
    }
    else if(choixbot == "Feuille" && choix == "Ciseaux"){
        jeux.textContent = "t'as gagné"
    }
    else if(choixbot == choix){
        jeux.textContent = "égalité"
    }
    else{
        jeux.textContent = "t'as perdu" 
    }
}

