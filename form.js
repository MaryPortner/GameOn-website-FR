/* 
 * Validation du formulaire au submit
 */

// Récupérer le bouton d'envoi du formulaire
// On lui ajoute un écouteur d'évènement au clic avec une fonction
let buttonSubmit = document.querySelector('input[type="submit"]');
buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    var valid = true; 
// Quand la fonction se déclenche, on va parcourir tous les inputs
    for(let input of document.querySelectorAll(".formData input")){
        // Avec la méthode de l'API de validation on vérifie si les contraintes sont valides. Elle retourne un booléen.
        valid &= input.reportValidity(); // Les deux conditions doivent être true
        // on peut aussi utiliser checkVisibility(); qui est identique mais elle ne va PAS AJOUTER SUR LE NAVIGATEUR quel champ est incorrect. 
        if(!valid){
            break; // si ce n'est pas valid, on arrête le script ici 
        }
    }
    if(valid){
        console.log("Votre message a bien été envoyé");
    }
});