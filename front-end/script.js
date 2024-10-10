

let sizePassword = document.querySelector("#valor") // o número selecionado
let sliderElement = document.querySelector("#slider") // seleção de números
let buttonElement = document.querySelector("#button") // botão de gerar a senha
let password = document.querySelector("#password") // a senha
let containerPassword = document.querySelector("#container-password") // a aparição do cointainer quando a senha for gerada

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*"
let novaSenha = ""; 


sizePassword.innerHTML = sliderElement.value; 

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    
    let pass = "";
    for (let i = 0 , n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}
