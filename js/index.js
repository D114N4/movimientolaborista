

const hamburguesa = document.querySelector('#hamburguer')
    const enlaces = document.querySelector('#nav-enlaces')

    hamburguesa.addEventListener('click', () => {
        enlaces.classList.toggle('show')
    })