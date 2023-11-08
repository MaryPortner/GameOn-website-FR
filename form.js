/* 
 * Form validation
 */

// retrieving form 
const form = document.querySelector('form');

// retrieving form data
const inputDataEnter = form.querySelectorAll(".formData input[data-enter]");

//variable 
let sendValid;

function testValidation(){
    sendValid = true;
    acceptTerm();
    birthdayValidation();
    emailValidation(); 
    firstNameValidation();
    lastValidation();
    numberTournamentValidation();
    tournamentCity();
}


form.addEventListener("submit", (e) => {

    e.preventDefault();
    testValidation();
    if(sendValid){
        confirmSendingForm();
    }

});

//****************************  conditions of use validation functions*************************/
function acceptTerm(){
    const error = document.querySelector("div.conditions[data-error]");
    const inputCheckbox = document.querySelector("#checkbox1");
    showValidation(inputCheckbox.checked, error);
}

//*************************** personal data validation functions ******************************/
function birthdayValidation(){
    const error = document.querySelector("div.birthday[data-error]");
    const birthday = /^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)$/.test(inputDataEnter[3].value.trim());
    showValidation(birthday, error);
}  

function emailValidation(){
    const error = document.querySelector("div.email[data-error]");
    const email = /^[a-z0-9._-]+@[a-z0-9._-]+.[a-z]{2,20}$/.test(inputDataEnter[2].value.trim());
    showValidation(email, error);
} 

function firstNameValidation(){
    const error = document.querySelector("div.firstName[data-error]");
    const firstName = /^[a-z A-Z à-ÿ À-Ý]{2,}$/.test(inputDataEnter[0].value.trim());
    showValidation(firstName, error);
}   

function lastValidation(){
    const error = document.querySelector("div.last[data-error]");
    const last = /^[a-z A-Z à-ÿ À-Ý]{2,}$/.test(inputDataEnter[1].value.trim());
    showValidation(last, error);
}   

//*************** validation function for the number of tournaments already completed *************/
function numberTournamentValidation(){
    const error = document.querySelector("div.numberTournament[data-error]");
    const validDataTournament = inputDataEnter[4].value.trim() >= 0 && inputDataEnter[4].value.trim() !="" && inputDataEnter[4].value.trim() < 100;
    showValidation(validDataTournament, error);
}  

//********************* validation function for tournament city selection  ************************/
function tournamentCity(){
    const error = document.querySelector("div.tournamentParticipationCity[data-error]");
    const inputsRadio = document.querySelectorAll('input[type=radio]:checked');
    showValidation(inputsRadio.length > 0, error);
}


//*******************************/factorization of the validation test ******************************/
function showValidation(validationCondition, error){
    if(!validationCondition){
        error.setAttribute('data-error-visible', 'true');
        sendValid = false;
    }else {
        error.setAttribute('data-error-visible', 'false');
    }
}



