// Function to close the mobile menu
function closeMobileMenu() {
  mobileMenu.classList.remove('active')
  document.body.classList.remove('no-scroll')
}

// Toggle mobile menu on menu icon click
const menuIcon = document.getElementById('menu-icon')
const mobileMenu = document.querySelector('.mobile-menu')

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('active')
  // Toggle body scroll
  document.body.classList.toggle('no-scroll')
})


