const addressForm = document.querySelector('#adress-form')
const cepInput = document.querySelector('#cep')
const adressInput = document.querySelector('#adress')
const cityInput = document.querySelector('#city')
const neighborhoodInput = document.querySelector('#neighborhood')
const regionInput = document.querySelector('#region')

const formInput = document.querySelectorAll('[data-input]')

const message = document.querySelector('#message')

// Validade cep input
cepInput.addEventListener("keypress", (e) =>{
    const onlyNumber = /[0-9]/;
    const key = String.fromCharCode(e.keyCode);

    // allow only numbers
    if(!onlyNumber.test(key)) {
        e.preventDefault();
        return;
    }
});

//Get adress event
cepInput.addEventListener("keyup", (e) =>{
    const inputValue = e.target.value

    //check if we have the correct length
    if(inputValue.length === 8) {
        getAdress(inputValue);
    }
});

//Get customer adress from API
const getAdress = async (cep) => {
    
    
    cepInput.blur();//tira a seleção do input
    console.log(cep);
    
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

    const response = await fetch(apiUrl);

    const data = await response.json();
    
    console.log(data)

    //show error and reset form
    if (data.erro == true) {
        console.log('entrou no erro')
        addressForm.reset();
        //show message
        toggleMessage('CEP inválido, tente novamente')
        return;
    }

    adressInput.value = data.logradouro;
    cityInput.value = data.localidade;
    neighborhoodInput.value = data.bairro;
    regionInput.value = data.uf;
};



//show or hide message - não ta funcionando
function toggleMessage (msg) {
    
    const messageText = document.querySelector("#message p");

    messageText.innerText = msg;
    
}

// Save address
addressForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    setTimeout(() => {
  
      console.log("Endereço salvo com sucesso!");
  
      addressForm.reset();
  
    }, 1000);
  });