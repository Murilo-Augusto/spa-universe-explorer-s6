import { Router } from "./router.js"

const router = new Router()
router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

const menuItems = document.querySelectorAll('nav a')
document.querySelector('nav').addEventListener('click', e => {
  let element = e.target ?? null
  for(const item of menuItems) {
    if(item.classList.contains('active') === true) {
      handleMenuState(item)
    }
  }

  if(element) {
    if(element.attributes['href'] && element.classList.contains('active') === false) {
      handleMenuState(element)
    } else if(element.attributes['href'] && element.classList.contains('active') === true) {
      handleMenuState(element)
    }
  }
})

function handleMenuState(element) {
  element.classList.toggle('active')
}