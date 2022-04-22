let textFeld = document.getElementById('textfeld');
let div = document.getElementById('div');

function dankeFenster() {
    console.log(textFeld.value);
    div.style.visibility = "visible";
}

function fensterZu() {
    div.style.visibility = "hidden";
}
