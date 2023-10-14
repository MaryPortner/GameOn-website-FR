/* 
 * Validation du formulaire au submit
 */


//On récupère notre formulaire
const form = document.querySelector('form');

// On récupère les données du formulaire
const inputDataEnter = form.querySelectorAll(".formData input[data-enter]");

//fonction de validation via les regex pour chaque entrée
function firstNameValidation(e){
    const error = document.querySelector("div.firstName[data-error]");
    const firstName = /^[a-z A-Z à-ÿ À-Ý]{2,}$/.test(inputDataEnter[0].value.trim());
    if(firstName === false){
        e.preventDefault();
        error.setAttribute('data-error-visible', 'true');
        console.log("Le formulaire n'est pas envoyé ! ");
    }else {
        error.setAttribute('data-error-visible', 'false');
        console.log("Le formulaire est envoyé ! ");
    }
}   

function showValidation(){
    
}
    
function lastValidation(e){
    const error = document.querySelector("div.last[data-error]");
    const last = /^[a-z A-Z à-ÿ À-Ý]{2,}$/.test(inputDataEnter[1].value.trim());
    if(last === false){
        e.preventDefault();
        error.setAttribute('data-error-visible', 'true');
        console.log("Le formulaire n'est pas envoyé ! ");
    }else {
        error.setAttribute('data-error-visible', 'false');
        console.log("Le formulaire est envoyé ! ");
    }
}   


function emailValidation(e){
    const error = document.querySelector("div.email[data-error]");
    const email = /^[a-z0-9._-]+@[a-z0-9._-]+.[a-z]{2,20}$/.test(inputDataEnter[2].value.trim());
    if(email === false){
        e.preventDefault();
        error.setAttribute('data-error-visible', 'true');
        console.log("Le formulaire n'est pas envoyé ! ");
        
    }else {
        error.setAttribute('data-error-visible', 'false');
        console.log("Le formulaire est envoyé ! ");
    }
}   


function birthdayValidation(e){
    const error = document.querySelector("div.birthday[data-error]");
    const birthday = /^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)$/.test(inputDataEnter[3].value.trim());
    if(birthday === false){
        e.preventDefault();
        error.setAttribute('data-error-visible', 'true');
        console.log("Le formulaire n'est pas envoyé ! ");
    }else {
        error.setAttribute('data-error-visible', 'false');
        console.log("Le formulaire est envoyé ! ");
    }
}   


function tournoisValidation(e){
    const error = document.querySelector("div.tournois[data-error]");
    const tournois = /^[0-9]*$/.test(inputDataEnter[4].value.trim());
    if(tournois === false){
        e.preventDefault();
        error.setAttribute('data-error-visible', 'true');
        console.log("Le formulaire n'est pas envoyé ! ");
    }else {
        error.setAttribute('data-error-visible', 'false');
        console.log("Le formulaire est envoyé ! ");
    }
}  

// On écoute le submit sur le formulaire
form.addEventListener("submit", (e) => {
    // e.preventDefault();
    firstNameValidation(e);
    lastValidation(e);
    emailValidation(e);
    birthdayValidation(e);
    tournoisValidation(e);

});


