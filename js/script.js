const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const buttonlogin = document.querySelector('.btnPopup');
const buttoncloselogin = document.querySelector('.icon-close');
const HomePage = document.querySelector('.home');
let nom = document.querySelector('.Username');
let mail = document.querySelector('.email');
let motCle = document.querySelector('.password');

registerlink.addEventListener('click', ()=>{

    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

buttonlogin.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
    HomePage.classList.remove('here');
});

buttoncloselogin.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
    HomePage.classList.add('active-popup');
});

HomePage.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});


// console.log(document)
// let button = document.querySelector(".btn")

// let User = document.querySelector('.Username')
// console.log(User);

// let motCle = document.querySelector('.password')
// console.log(motCle);

// let mail = document.querySelector('.email')
// console.log(mail);

// button.addEventListener("click", function(){
//     localStorage.setItem('User',Username.value)
//     localStorage.setItem('motCle',password.value)
//     localStorage.setItem('mail',email.value)

//     button.classList.save('active');

// })

const submitButton = document.querySelectorAll('.btn')

submitButton.Oneclick = ()=>{
    const User = document.getElementsByClassName('.Username').value;
    const mail = document.getElementsByClassName('.email').value;
    const keyWord = document.getElementsByClassName('.password').value;

    localStorage.setItem('User', Username);
    localStorage.setItem('mail', email);  localStorage.setItem('keyWord', password);

    if(User == "" && mail =="" && keyWord ==""){
        alert('veuilllez renseigner')
    }else {
        if(keyWord != password ) {
            alert('mot de passe incorrect');
        }else {
            alert('enregidtrement effectué !');
        }
    }
}
