//Variables
var questionNumber= 0;
const questionImg= document.getElementById('questionImg');
const questionTxt= document.getElementById('questionTxt');
const questions=[
    "Quelle est la capitale de la France ?",
    "Quelle est la capitale de l'Espagne ?",
    "Quelle est la capitale de l'Italie ?",
    "Quelle est la capitale de l'Allemagne ?"
]
const images=[
    "assets/questions/1.png",
    "assets/questions/2.png",
    "assets/questions/3.png",
    "assets/questions/4.png"
]

//Fonctions
document.addEventListener('DOMContentLoaded', (event) => {
    const playerPseudo = sessionStorage.getItem("playerPseudo");
    if (playerPseudo === null || playerPseudo === '') {
        document.getElementById('status').innerHTML = "❌ <i>Erreur de connexion</i>";
    } else {
        document.getElementById('status').innerHTML = "✅ <i>Connecté en tant que :  " + playerPseudo + "</i>";
    }
    showQuestion();
});

//listener
document.getElementById('sendButton').addEventListener('click', function() {
    nextQuestion();
    showQuestion();
});

function nextQuestion() {
    questionNumber++;
}

function showQuestion() {
    questionTxt.innerHTML = questions[questionNumber];
    questionImg.src = images[questionNumber];
}