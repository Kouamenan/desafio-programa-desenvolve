const inputMessagem = document.querySelector('#mensagem');
const inputEmail = document.querySelector('#email');
const bntEnviar = document.querySelector('#btn_enviar');
const alerta = document.querySelector('.alerta');
const faleConosco = document.querySelector('.fale_conosco');
const faleConoscoFooter = document.querySelector('.fale_conosco_footer');
const quemSomos = document.querySelector('.quem_somos');
const quemSomosFooter = document.querySelector('.quem_somos_footer');
const btnSobre = document.querySelector('.sobre');
const btnCont = document.querySelector('.btn-cont');
const formulario = document.querySelector('form');

const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'.split('');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ.'.split('');
const numeros = '0123456789'.split('');


formulario.addEventListener('submit', function(event) {
    const email = inputEmail.value;
    const messagem = inputMessagem.value;
    let temLetrasMinusculas = false;
    let temLetrasMaiusculas = false;
    let temNumeros = false;

    if(!email ){
        alerta.innerHTML = 'Erro no envio: Endereço de mail inválido'
        return
    }

    if (!messagem) {
        alerta.innerHTML = 'Erro no envio: Insira uma mensagem'
        return
    }

    const user = email.split('@');
    const domain = user[1].split('.');
    console.log(user[0][2])
    
    if (user[0].length > 32 || domain[0].length > 16) {
        alerta.innerHTML = 'Erro no envio: Endereço de mail inválido'
        return
    }
    
    for (let i = 0; i < user[0].length; i++) {
        if(letrasMaiusculas.includes(user[0][i])) {
            temLetrasMaiusculas = true;
            continue;
        }

        if(letrasMinusculas.includes(user[0][i])) {
            temLetrasMinusculas= true;
            continue;
        }

        if(numeros.includes(user[0][i])) {
            temNumeros = true;
            continue;
        }
    }

    for (let i = 0; i < domain[0].length; i++) {
        if(letrasMinusculas.includes(domain[0][i])) {
            temLetrasMinusculas= true;
            continue;
        }

        if(numeros.includes(domain[0][i])) {
            temNumeros = true;
            continue;
        }
    }

    if (temNumeros || temLetrasMaiusculas || temLetrasMinusculas) {
        alerta.innerHTML = `Obrigado pelo contato, ${user[0]}!`;
        console.log('senha valida')
    }
})



faleConosco.addEventListener('click', function (event) {
    window.scroll({
        top : 2000,
        behavior : "smooth"
    })
})

faleConoscoFooter.addEventListener('click', function (event) {
    window.scroll({
        top : 2000,
        behavior : "smooth"
    })
})

quemSomos.addEventListener('click', function (event) {
    window.scroll({
        top : 1300,
        behavior : "smooth"
    })
})

quemSomosFooter.addEventListener('click', function (event) {
    window.scroll({
        top : 1300,
        behavior : "smooth"
    })
})

btnSobre.addEventListener('click', function (event) {
    window.scroll({
        top : 1300,
        behavior : "smooth"
    })
     
})

btnCont.addEventListener('click', function (event) {
    window.scroll({
        top : 2000,
        behavior : "smooth"
    })
     
})
