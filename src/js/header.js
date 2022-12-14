/*====== MENU SHOW =====*/



/*=== Drop down login ===*/
const loginDrop = document.querySelector('.container-login');
const btnAccount = document.querySelector('.icon-account');

const toggleLogin = ()=>{
    loginDrop.classList.toggle('hide');
}
btnAccount.addEventListener('click', toggleLogin)
/*====== Eye icon password =====*/
const userPassword = document.querySelector('#password');
const eyeIcon = document.querySelector('.hide-password');

eyeIcon.onclick = () =>{
    if(userPassword.type === "password"){
        userPassword.type = "text";
    }else{
        userPassword.type = "password";
    }
}