document.documentElement.classList.add("js")

import startScroll from '../js/startScroll.js'
import scrollAnimation from '../js/scrollAnimation.js'
import faq from '../js/faq.js'
import urlLocation from '../js/urlLocation.js'

let buttonScroll = new startScroll(".menu-back", "header")
let newScrollAnimation = new scrollAnimation(".reveal")
let faqHandler = new faq(".perguntas-item", ".perguntas-item p", ".arrow")
let newUrlLocation = new urlLocation()

buttonScroll.initialization()
newScrollAnimation.initialization()
faqHandler.initialization()
newUrlLocation.initialization()


const imagesSlide =document.querySelectorAll(".slide")
const displayMainSlide = document.querySelector(".produto-img img") 

function slideOnClick(){
  const actualImg = this.src
  displayMainSlide.src = actualImg
  imagesSlide.forEach((slideItem)=>{
    slideItem.classList.remove("currentSlide")
  })
  this.classList.add("currentSlide")
}

imagesSlide.forEach((image)=>{
  image.addEventListener('click', slideOnClick)
})

const links = Array.from(document.querySelectorAll("header nav a"))
function handleLinks(linkItem){
  const linkHref = linkItem.href
  if(document.location.href.includes(linkHref)){
    linkItem.classList.add("link-active")
  }
}
links.forEach(handleLinks)







