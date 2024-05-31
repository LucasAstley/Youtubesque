//Variables
var questionNumber= 0;
var pointsPlayer= 0;
const questionImg= document.getElementById('questionImg');
const questionTxt= document.getElementById('questionTxt');
const questionAnswer= document.getElementById('questionAnswer');
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
const answers = [
    "paris",
    "madrid",
    "rome",
    "berlin"
]

//Listener
document.addEventListener('DOMContentLoaded', (event) => {
    const playerPseudo = sessionStorage.getItem("playerPseudo");
    if (playerPseudo === null || playerPseudo === '') {
        document.getElementById('status').innerHTML = "❌ <i>Erreur de connexion</i>";
    } else {
        document.getElementById('status').innerHTML = "✅ <i>Connecté en tant que :  " + playerPseudo + "</i>";
    }
    showQuestion();
});

document.getElementById('sendButton').addEventListener('click', function() {
    checkAnswer();
    showQuestion();
});

document.getElementById('questionAnswer').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkAnswer();
        showQuestion();
    }
});

//Fonctions
function checkAnswer() {
    let answer= questionAnswer.value;
    answer = answer.toLowerCase();
    answer = answer.replace(/\s/g, '');
    if (answer === answers[questionNumber]) {
        pointsPlayer++;
    }
    nextQuestion();
}

function nextQuestion() {
    if (questionNumber>=questions.length-1) {
        endGame();
    } else {
        questionNumber++;
    }
}

function showQuestion() {
    questionTxt.innerHTML = questions[questionNumber];
    questionImg.src = images[questionNumber];
    questionAnswer.value = '';
}

function endGame() {
    sessionStorage.setItem("playerPoints", pointsPlayer);
    window.location.href = 'end.html';
}