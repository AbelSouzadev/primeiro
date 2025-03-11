document.addEventListener("DOMContentLoaded", function(){


const toggleMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav-menu');

toggleMenu.addEventListener('click', function () {
   
    menuToggle.classList.toggle('active');
 });

})
window.addEventListener('scroll', () => {
    const hearder = document.querySelector('header');
    hearder.classList.toggle('stick' ,window.scrollY > 0);
});