const $btnSignIn = document.querySelector('.iniciar-sesion-btn')
const $btnSignUp = document.querySelector('.registro-btn')
const $signUp = document.querySelector('.registro')
const $signIn = document.querySelector('.inicia-sesion')

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp){
        $signIn.classList.toggle('active')
        $signUp.classList.toggle('active')
    }

})