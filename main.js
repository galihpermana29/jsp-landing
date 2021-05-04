

const toggleNav = document.querySelector('.hamburger');
const links = document.querySelector('.links')

toggleNav.addEventListener('click', function(){
   links.classList.toggle('active')
})