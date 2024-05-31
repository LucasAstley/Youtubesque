//Fonctions
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Events
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('body').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            launchgame();
        }
    });
    document.getElementById('playButton').addEventListener('click', function() {
        launchgame();
    });
});

function launchgame() {
    let pseudo=document.getElementById('pseudo').value;
    if (pseudo === '') {
        document.getElementById('alert').style.display = 'block';
    } else {
        sessionStorage.setItem("playerPseudo", pseudo);
        console.log('Pseudo enregistré :', pseudo);
        delay(100).then(() => {
            window.location.href = 'questions.html';
        });
    }
}