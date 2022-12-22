/*====== MENU SHOW =====*/



/*=== Drop down login ===*/
const loginDrop = document.querySelector('.container-login');
const btnAccount = document.querySelector('.icon-account');

const toggleLogin = ()=>{
    loginDrop.classList.toggle('hide');
}
btnAccount.addEventListener('click', toggleLogin)

/*==== Cart container hide ====*/
const bagContainer = document.querySelector('.cart-frame')
const btnBag = document.querySelector('.icon-cart')

const toggleCart = ()=>{
    bagContainer.classList.toggle('hide');
}
btnBag.addEventListener('click', toggleCart)

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