const burgerMenu = () => {
  const $btn = document.querySelector('.burger-menu');
  const $menu = document.querySelector('.navbar-mobile');

  $btn.addEventListener('click', () => {
    $btn.classList.toggle('is-active');
    $menu.classList.toggle('is-active');
  });
} 

export default burgerMenu;
