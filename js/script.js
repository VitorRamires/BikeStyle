document.documentElement.classList.add("js")

const imagesSlide =document.querySelectorAll(".slide")
      displayMainSlide = document.querySelector(".produto-img img") 

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


const windowHeight = window.innerHeight
const reveals = document.querySelectorAll(".reveal");
function animationHandle(){
  reveals.forEach((element) => {
    const windowHeightAjusted = windowHeight * 0.6
    const elementTop = element.getBoundingClientRect().top
    if(windowHeightAjusted > elementTop){
      element.classList.add("active")
    }
  })

}
window.addEventListener("scroll", animationHandle)


const menuBack = document.querySelector(".menu-back")
const menu = document.querySelector("header")


function backMenu(){
  const menuOffsetBottom = menu.getBoundingClientRect().bottom
  window.scrollTo({
    top:menuOffsetBottom,
    behavior:"smooth"
  })
}

menuBack.addEventListener("click", backMenu)