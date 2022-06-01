

const data = {};

let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
})



let fname = document.querySelector('#fname');

let fnameP = document.querySelector('#fname-p');

fname.addEventListener('blur', function () {

    if(fname.value.includes(' ') || fname.value.length <2 || fname.value.length > 30) {
        fnameP.textContent = 'Недопустимое значение';
        return false; 
    }
    else {
        data.fname = fname.value;
        return true;
    }

})

let lname = document.querySelector('#lname');

let lnameP = document.querySelector('#lname-p');

lname.addEventListener('blur', function () {

    if(lname.value.includes(' ') || lname.value.length <2 || lname.value.length > 30) {
        lnameP.textContent = 'Недопустимое значение';
        return false; 
    }
    else {
        data.lname = lname.value;
        return true;
    }

})

let email = document.querySelector('#email');

let emailP = document.querySelector('#email-p');

email.addEventListener('blur', function () {

    if(email.value.includes(' ') || email.value.length <2 || email.value.length > 30|| email.value.indexOf('@') == -1) {
        emailP.textContent = 'Недопустимое значение';
        return false; 
    }
    else {
        data.email = email.value.toLowerCase();
        return true;
    }

})

let pass = document.querySelector('#pword');

let pWordP = document.querySelector('#pword-p');

pass.addEventListener('blur', function () {

    if(pass.value.includes(' ') || pass.value.length <6) {
        pWordP.textContent = 'Недопустимое значение';
        return false; 
    }
    else {
        data.pWord = pass.value;
        return true;
    }

})
