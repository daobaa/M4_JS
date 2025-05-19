// Use of DOM because the script is placed inside the <head>
document.addEventListener("DOMContentLoaded", function (){
    // Checkbox Toggle
    const pswInput = document.getElementById("psw");
    const box = document.getElementById("mostrar");

    box.addEventListener("change", function (){
        if(box.checked){
            pswInput.type = "text";
        } else{
            pswInput.type = "password";
        }
    });

    // Username Control
    const nameInput = document.getElementById("usrname");
    const valArroba = document.getElementById("arroba");

    nameInput.addEventListener("input", function () {
        if(!nameInput.value.includes("@")){
            valArroba.classList.remove("valid");
            valArroba.classList.add("invalid");
        } else{
            valArroba.classList.remove("invalid");
            valArroba.classList.add("valid");
        }
    });

    // Password Control
    pswInput.addEventListener("input", function (){
        // Lowercase Letter
        const valLetter = document.getElementById("letter");
        let Lowercase;
        let lowRegex = /[a-z]/;

        if(!lowRegex.test(pswInput.value)){
            valLetter.classList.remove("valid");
            valLetter.classList.add("invalid");
            Lowercase = false;
        } else{
            valLetter.classList.remove("invalid");
            valLetter.classList.add("valid");
            Lowercase = true;
        }

        // Uppercase Letter
        const valCapital = document.getElementById("capital");
        let Uppercase;
        let capRegex = /[A-Z]/;

        if(!capRegex.test(pswInput.value)){
            valCapital.classList.remove("valid");
            valCapital.classList.add("invalid");
            Uppercase = false;
        } else{
            valCapital.classList.remove("invalid");
            valCapital.classList.add("valid");
            Uppercase = true;
        }

        // One Number
        const valNum = document.getElementById("number");
        let Number;
        let numRegex = /[0-9]+/;

        if(!numRegex.test(pswInput.value)){
            valNum.classList.remove("valid");
            valNum.classList.add("invalid");
            Number = false;
        }else{
            valNum.classList.remove("invalid");
            valNum.classList.add("valid");
            Number = true;
        }

        // Minimum characters
        const valMin = document.getElementById("length");
        let Minimum;
        if(!(pswInput.value.length >= 8)){
            valMin.classList.remove("valid");
            valMin.classList.add("invalid");
            Minimum = false;
        }else{
            valMin.classList.remove("invalid");
            valMin.classList.add("valid");
            Minimum = true;
        }

        const nomMessage = document.getElementById("message_nom");
        const passwdMessage = document.getElementById("message_passwd");
    
        const nomParent = nomMessage.parentNode;
        const passwdParent = passwdMessage.parentNode;
        
        // If all requirements are met it removes the html that displays the requirements
        if(Uppercase && Lowercase && Number && Minimum === true){
            nomMessage.remove();
            passwdMessage.remove();
        } else{
            if(!nomMessage.parentNode){
                nomParent.appendChild(nomMessage);
            }
            if(!passwdMessage.parentNode){
                passwdParent.appendChild(passwdMessage);
            }
        }
    });
    
    let formLog = document.querySelector("form");
    formLog.setAttribute("action", "enunciat_pelicules.html");
});