// Animación del banner
const banner = document.getElementById('banner');
let bannerHeight = banner.offsetHeight;
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY;
  banner.style.backgroundPositionY = -scrollPos / 2 + 'px';
  banner.style.opacity = 1 - Math.max(scrollPos - bannerHeight, 0) / 200;
});

// Validación del formulario de contacto
const form = document.querySelector('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (nombre.value === '' || email.value === '' || mensaje.value === '') {
    alert('Por favor, rellena todos los campos.');
  } else {
    alert('Mensaje enviado correctamente.');
    form.reset();
  }
});
