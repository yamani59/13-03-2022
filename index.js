const bannerWrapper = document.querySelector('.banner-wrapper')
const banner = document.querySelector('.banner')
const navbar = document.querySelector('.navbar-wrapper');
  logo = document.querySelector('.navbar-logo');
  iconmenu = document.querySelector('.menee');
  menu = document.querySelector('.navbar-menu-list')

let mnCheck = false
// let nav = false

window.addEventListener('scroll',(e) => {
  if (window.scrollY > 0) {
    navbar.style.background = 'white'
    navbar.style.borderBottom = '1px solid black'
    logo.style.color= 'black'
    iconmenu.style.color = '#258541'
  } else {
    navbar.style.background = 'none'
    navbar.style.borderBottom = 'none'
    logo.style.color= 'white'
    iconmenu.style.color = 'white'
  }
})

iconmenu.addEventListener('click', e => {
  if (!mnCheck) {
    menu.style.display = 'block'
    mnCheck = true
  }
  else {
    menu.style.display = 'none'
    mnCheck = false
  }
})