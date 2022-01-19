const btnMobile = document.getElementById('btn__mobile');

const toggleMenu = () => {
  const navbar = document.getElementById('menu');
  navbar.classList.toggle('menu__active');
};

btnMobile.addEventListener('click', toggleMenu);
