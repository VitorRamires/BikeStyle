document.documentElement.classList.add("js")

import startScroll from '../js/startScroll.js'
import scrollAnimation from '../js/scrollAnimation.js'
import faq from '../js/faq.js'

let buttonScroll = new startScroll(".menu-back", "header")
let newScrollAnimation = new scrollAnimation(".reveal")
let faqHandler = new faq(".perguntas-item", ".perguntas-item p", ".arrow")

buttonScroll.initialization()
newScrollAnimation.initialization()
faqHandler.initialization()


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


const urlParameters = new URLSearchParams(location.search)
function redirectOption(parameterIds){
  const getIdParameters = document.getElementById(parameterIds)
  if(getIdParameters){
  getIdParameters.checked = true
  console.log(parameterIds)
  }
}
urlParameters.forEach(redirectOption)


const questionsElement = document.querySelectorAll(".perguntas-item")
const paragraphElement = document.querySelectorAll(".perguntas-item p")
const arrow = document.querySelectorAll(".arrow")

function answerHandle(index){
  paragraphElement[index].classList.toggle("show-answer")
  arrow[index].classList.toggle("rotate")
}

questionsElement.forEach((section, index) => {
  section.addEventListener("click", ()=>{answerHandle(index)})
})




