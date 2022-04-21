
// validacao
let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let mapa = document.querySelector('#mapa')

let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

// function validaEmail() {
//     let txtEmail = document.querySelector('#txtEmail')
//     if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
//         txtEmail.innerHTML = 'Email inválido'
//         txtEmail.style.color = 'red'
//     }else{
//         txtEmail.innerHTML = 'Email válido'
//         txtEmail.style.color = 'green'
//     }
// }

function validaEmail() {
    let regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
  
    if (email.value.match(regex)){
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'green'
        emailOk = true
    } else {
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'

    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    } 
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!!!')
    }else{
        alert('O formulário não foi preenchido corretamente')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}