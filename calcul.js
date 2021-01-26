// Recuperation des classes

let touches = [...document.querySelectorAll(".bouton")];
let listeKeycode = touches.map((touche) => touche.dataset.key);
let ecran = document.querySelector(".ecran");


// Prise en charge des boutons du claviers 
document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString() 
    calculer(valeur);
});

// Prise en charge des boutons à l'écran
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
});

// Création de la fonction calcul 

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case "46":
                ecran.textContent = "";
                break;
            case "8":
                ecran.textContent = ecran.textContent.slice(0, ecran.textContent.length -1)
                break;
            case "80":
                ecran.textContent = 1/ecran.textContent;
            break;
            case "82":
                ecran.textContent = Math.sqrt(ecran.textContent);
            break;
            case "222":
                ecran.textContent = Math.pow(ecran.textContent, 2); 
            break;  
            case "13":
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
};

window.addEventListener('error', (e) => {

    alert("Une erreur est survenue dans votre calcul : " + e.error.message);
})


