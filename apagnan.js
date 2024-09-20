let Pierre = document.getElementById("Pierre")
let Feuille = document.getElementById("Feuille")
let Ciseaux = document.getElementById("Ciseaux")
let jeux = document.getElementById("jeu")
/*const button = document.querySelectorAll("#box button")
console.log(button)*/
Pierre.addEventListener("click",jeu("Pierre"))
Feuille.addEventListener("click",jeu("Feuille"))
Ciseaux.addEventListener("click",jeu("Ciseaux"))

function jeu(choix){
    let tab = ["Pierre","Feuille","Ciseaux"]
    let bot = Math.floor(Math.random()*3)
    let choixbot = tab[bot] 
    if(choixbot == "Pierre" && choix == "Feuille"){
        jeux.textContent("t'as gagné")
    }
    if(choixbot == "Ciseaux" && choix == "Pierre"){
        jeux.textContent("t'as gagné")
    }
    if(choixbot == "Feuille" && choix == "Ciseaux"){
        jeux.textContent("t'as gagné")
    }
    if(choixbot == choix){
        jeux.textContent("égalité")
    }
    else{
        jeux.textContent("t'as perdu")
    }
}

