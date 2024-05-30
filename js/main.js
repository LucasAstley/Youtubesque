function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', (event) => {
    let playerPseudo = '';
    document.getElementById('playButton').addEventListener('click', function() {
        pseudo=document.getElementById('pseudo').value;
        if (pseudo === '') {
            document.getElementById('alert').style.display = 'block';
        } else {
            playerPseudo = document.getElementById('pseudo').value;
            console.log('Pseudo enregistré :', playerPseudo);
            window.location.href = 'questions.html';
            delay(2000).then(() => {
                alert('Bienvenue !');
            });
        }
    });
});
