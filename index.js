const bannerWrapper = document.querySelector('.banner-wrapper')
const banner = document.querySelector('.banner')
const navbar = document.querySelector('.navbar-wrapper');
  logo = document.querySelector('.navbar-logo')
// let nav = false

window.addEventListener('scroll',(e) => {
  if (window.scrollY > 0) {
    navbar.style.background = 'white'
    navbar.style.borderBottom = '1px solid black'
    logo.style.color= 'black'
  } else {
    navbar.style.background = 'none'
    navbar.style.borderBottom = 'none'
    logo.style.color= 'white'
  }
})