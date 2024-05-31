const text = document.getElementById('tagline');

//Listener
document.addEventListener('DOMContentLoaded', (event) => {
    const playerPoints = sessionStorage.getItem("playerPoints");
    text.innerText = "Vous avez obtenu " + playerPoints + " points !";
});