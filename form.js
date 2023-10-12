/* 
 * Validation du formulaire au submit
 */

let regexName = new RegExp("[a-z A-Z à-ÿ À-Ý]*");
let regexMail = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+.[a-z]{2,20}$");
let regexBirthday = new RegExp("^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)$");
let regexNumberTournois = new RegExp ("[1-9]*$");
let valid = true;

//On récupère notre formulaire
const form = document.querySelector('form');
let inputDataEnter = form.querySelectorAll(".formData input[data-enter]");


// On teste nos valeurs entrées.
let firstName = regexName.test(inputDataEnter[0].value.trim());
let last = regexName.test(inputDataEnter[1].value.trim());
let email = regexMail.test(inputDataEnter[2].value.trim());
let birthday = regexBirthday.test(inputDataEnter[3].value.trim());
let tournois = regexNumberTournois.test(inputDataEnter[4].value.trim());
 console.log(inputDataEnter[0].id);

// On écoute le submit sur le formulaire
form.addEventListener("submit", (e) => {
    // On empêche le comportement par défaut pour éviter le rechargement de la page.
    e.preventDefault();
    


        if((!firstName) && (inputDataEnter[0].id)){
            console.log("Non valide");
        }

        if(!last){
         
        } 
         if(!email){
        
        }
 

        
 

        if(valid){
            valid &= form.reportValidity();
            console.log("Votre message a bien été envoyé");
            // form.reset();
        }

});





