let textFeld = document.getElementById('textfeld');
let div = document.getElementById('div');

function dankeFenster() {
    textFeld.value = true;
    console.log(textFeld.value);
    div.style.visibility = "visible";
}

function fensterZu() {
    div.style.visibility = "hidden";
}
