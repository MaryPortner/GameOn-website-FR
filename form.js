/* 
 * Validation du formulaire au submit
 */


//On récupère notre formulaire
const form = document.querySelector('form');

// On récupère les données du formulaire
const inputDataEnter = form.querySelectorAll(".formData input[data-enter]");
const clicCheked = form.querySelector("span.checkbox-icon");


//***************/fonctions de validation via les regex pour chaque entrée *************/
function firstNameValidation(e){
    const error = document.querySelector("div.firstName[data-error]");
    const firstName = /^[a-z A-Z à-ÿ À-Ý]{2,}$/.test(inputDataEnter[0].value.trim());
    if(firstName === false){
        e.preventDefault();
        error.setAttribute('data-error-visible', 'true');
        console.log("Le champ n'est pas valide !");
    }else {
        error.setAttribute('data-error-visible', 'false');
        console.log("Le champ est valide ! ");
    }
}   


function lastValidation(e){
    const error = document.querySelector("div.last[data-error]");
    const last = /^[a-z A-Z à-ÿ À-Ý]{2,}$/.test(inputDataEnter[1].value.trim());
    if(last === false){
        e.preventDefault();
        error.setAttribute('data-error-visible', 'true');
        console.log("Le champ n'est pas valide !");
    }else {
        error.setAttribute('data-error-visible', 'false');
        console.log("Le champ est valide ! ");
    }
}   


function emailValidation(e){
    const error = document.querySelector("div.email[data-error]");
    const email = /^[a-z0-9._-]+@[a-z0-9._-]+.[a-z]{2,20}$/.test(inputDataEnter[2].value.trim());
    if(email === false){
        e.preventDefault();
        error.setAttribute('data-error-visible', 'true');
        console.log("Le champ n'est pas valide !");
        
    }else {
        error.setAttribute('data-error-visible', 'false');
        console.log("Le champ est valide !");
    }
}   


function birthdayValidation(e){
    const error = document.querySelector("div.birthday[data-error]");
    const birthday = /^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)$/.test(inputDataEnter[3].value.trim());
    if(birthday === false){
        e.preventDefault();
        error.setAttribute('data-error-visible', 'true');
        console.log("Le champ n'est pas valide !");
    }else {
        error.setAttribute('data-error-visible', 'false');
        console.log("Le champ est valide !")
    }
}   


function tournoisValidation(e){
    const error = document.querySelector("div.tournois[data-error]");
    const tournois = /^[0-9]*$/.test(inputDataEnter[4].value.trim());
    if(tournois === false){
        e.preventDefault();
        error.setAttribute('data-error-visible', 'true');
        console.log("Le champ n'est pas valide !");
    }else {
        error.setAttribute('data-error-visible', 'false');
        console.log("Le champ est valide !");
    }
}  



// On récupére notre SPAN pour vérifier le click
const spanCheckbox = document.querySelector("span.acceptTerm");
// On récupère la div qui affichera le message d'erreur
const error = document.querySelector("div.conditions[data-error]");
// On récupère notre 1er input qui est celui des conditions
const conditionsCheckbox1 = document.querySelector("#checkbox1");
console.log(spanCheckbox);



// const AcceptConditionsCheckbox1 = spanCheckbox.querySelector('[type="checkbox"]:checked');
// console.log(AcceptConditionsCheckbox1);
function acceptTerm(){
    spanCheckbox.addEventListener('input', () => {
        

        if(spanCheckbox.hasAttribute("checked", "checked")){
            error.setAttribute('data-error-visible', 'false');
            console.log("Les conditions sont acceptées!");
        } else{
            error.setAttribute('data-error-visible', 'true');
            console.log("Les conditions ne sont PAS acceptées!");
        }
    });
}


// function acceptTerm(){
//     ConditionsCheckbox1.setAttribute("checked", "checked");

//     console.log(spanCheckbox);

//     if(AcceptConditionsCheckbox1){
//         error.setAttribute('data-error-visible', 'true');
//         console.log("Les conditions ne sont pas acceptées !");
//     }else{
//         error.setAttribute('data-error-visible', 'false');
//         console.log("Les conditions sont acceptées!");
//     }
// }
   






        // if( spanCheckbox.setAttribute("checked", "checked") == spanCheckbox.setAttribute("checked", "checked")){
        //     error.setAttribute('data-error-visible', 'false');
        //     console.log("Les conditions sont acceptées!");
           
        // }else {
         
        //     error.setAttribute('data-error-visible', 'true');
        //     console.log("Les conditions ne sont pas acceptées !");
            
        // }




// function termOfUseValidation(e){
  
//     const error = document.querySelector("div.conditions[data-error]");
//     // const conditionsChecked = document.getElementById("checkbox1");
//     const clicCheked = form.querySelector("span.checkbox-icon");
//     console.log(clicCheked);

//     if( clicCheked.setAttribute("checked", "checked")){
//         error.setAttribute('data-error-visible', 'false');
//         console.log("Les conditions sont acceptées!");
       
//     }else {
     
//         error.setAttribute('data-error-visible', 'true');
//         console.log("Les conditions ne sont pas acceptées !");
        
//     }

// }  


// On écoute le submit sur le formulaire
form.addEventListener("submit", (e) => {
    // e.preventDefault();
    firstNameValidation(e);
    lastValidation(e);
    emailValidation(e);
    birthdayValidation(e);
    tournoisValidation(e);
    // acceptTerm();
    

});




// function showValidation(namefield , regexValid){
//     const error = document.querySelector("div"+"."+namefield+"[data-error]");
//     console.log(error);
//     if(regexValid === false){
//         e.preventDefault();
//         error.setAttribute('data-error-visible', 'true');
//         console.log("Le champ n'est pas valide !");
//     }else {
//         error.setAttribute('data-error-visible', 'false');
//         console.log("Le champ est valide ! ");
//     }

// }

// // function testError(x, regexValid){
// //     const error = document.querySelector("div"+"."+x+"[data-error]");
// //     console.log(error);
// // }
// // testError(firstName, firstnameDiv);


// //fonction de validation via les regex pour chaque entrée
// function firstNameValidation(e){
//     // const error = document.querySelector("div.firstName[data-error]");
//     const firstName = /^[a-z A-Z à-ÿ À-Ý]{2,}$/.test(inputDataEnter[0].value.trim());
//     showValidation(firstnameDiv, firstName);
// }   
    
// function lastValidation(e){
//     // const error = document.querySelector("div.last[data-error]");
//     const last = /^[a-z A-Z à-ÿ À-Ý]{2,}$/.test(inputDataEnter[1].value.trim());
//     showValidation(lastDiv, last);
// }   

// function emailValidation(e){
//     // const error = document.querySelector("div.email[data-error]");
//     const email = /^[a-z0-9._-]+@[a-z0-9._-]+.[a-z]{2,20}$/.test(inputDataEnter[2].value.trim());
//     showValidation(emailDiv, email);
// }

// function birthdayValidation(e){
//     // const error = document.querySelector("div.birthday[data-error]");
//     const birthday = /^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)$/.test(inputDataEnter[3].value.trim());
//     showValidation(birthdayDiv, birthday);
// }   


// function tournoisValidation(e){
//     // const error = document.querySelector("div.tournois[data-error]");
//     const tournois = /^[0-9]*$/.test(inputDataEnter[4].value.trim());
//     showValidation(tournoisDiv, tournois);
// }  



// function termOfUseValidation(e){
//     const checkboxChecked = document.getElementById("checkbox1");
//     const conditionsChecked = form.querySelector("span.checkbox-icon");
//     const checkedOk = checkboxChecked.getAttribute("checked");
//     console.log(checkboxChecked);
//     console.log(conditionsChecked);
//     console.log(checkedOk);

//     conditionsChecked.addEventListener("click", () =>{
//         checkboxChecked.setAttribute("checked", "checked");
//     });
//     console.log(checkboxChecked);

//     if(checkedOk == "checked"){
//         conditionsChecked.setAttribute('data-error-visible', 'false');
//         console.log("Les conditions sont acceptées!");
       
//     }else {
//         e.preventDefault();
//         conditionsChecked.setAttribute('data-error-visible', 'true');
//         console.log("Les conditions ne sont pas acceptées !");
//     }

// }  




// function termOfUseValidation(e){
//     const error = document.querySelector("input.condition[data-error]");
//     const conditionsChecked = document.getElementById("checkbox1");
//     const checkedOk = conditionsChecked.getAttribute("checked");
//     const clicCheked = form.querySelector("span.checkbox-icon");
//     console.log(conditionsChecked);
//     // console.log(clicCheked);

//     clicCheked.addEventListener("click", () =>{
//         conditionsChecked.setAttribute("checked", "checked");
//     });
//     // console.log(checkedOk);
//     console.log(checkedOk);

//     if( conditionsChecked.setAttribute("checked", "checked")){
//         error.setAttribute('data-error-visible', 'false');
//         console.log("Les conditions sont acceptées!");
       
//     }else {
//         error.setAttribute('data-error-visible', 'true');
//         console.log("Les conditions ne sont pas acceptées !");
//     }

// }  