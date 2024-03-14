document.body.classList.add('bg-red')
document.body.classList.remove('one')

console.log(document.body.classList)

// querySelector
const btnOpen = document.querySelector('.btn--open')
const btnClose = document.querySelector('.btn--close')
const navMenu = document.querySelector('.nav__menu')
console.log(btnOpen)

// Agregar evento por propiedad
btnOpen.onclick = function () {
  // navMenu.classList.add('show--menu')
  navMenu.classList.toggle('show--menu')
}

btnClose.onclick = function () {
  navMenu.classList.remove('show--menu')
}
const links = document.querySelectorAll('.nav__link')

for (const link of links) {
  link.addEventListener('click', function () {
    navMenu.classList.remove('show--menu')
  })
}

var typed = new Typed('#typing', {
  strings: ['Frontend', 'Backend'],
  typeSpeed: 50,
  loop:true,
  cursorChar:"_"
});
