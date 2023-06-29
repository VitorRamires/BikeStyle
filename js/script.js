/*JS anim validation*/
document.documentElement.classList.add("js")

/*Slide bicicletas*/

const imagesSlide = Array.from(document.querySelectorAll(".produto-img-box img"))
const displayMainSlide = document.querySelector(".produto-img img") 

function SlideOnClick(event){
  const targetItem = event.currentTarget
  const sourceItem = targetItem.src
  displayMainSlide.src = sourceItem
  
  const itemActive = true
  if(itemActive === true){
  for(index = 0; index < imagesSlide.length; index++){
      imagesSlide[index].classList.remove("currentSlide")
      targetItem.classList.add("currentSlide")
    }
  }
}

function SlideAction(image){
  image.addEventListener('click', SlideOnClick)
}

imagesSlide.forEach(SlideAction)



/* Links Ativos */

const links = Array.from(document.querySelectorAll("header nav a"))

function handleLinks(linkItem){
  const linkHref = linkItem.href
  if(document.location.href.includes(linkHref)){
    linkItem.classList.add("link-active")
  }
}

links.forEach(handleLinks)



/* Parametros orçamemento */

const urlParameters = new URLSearchParams(location.search)

function redirectOption(parameterIds){
  const getIdParameters = document.getElementById(parameterIds)
  if(getIdParameters){
  getIdParameters.checked = true
  console.log(parameterIds)
  }
}

urlParameters.forEach(redirectOption)




/* Manipular perguntas */

const questionsElement = Array.from(document.querySelectorAll(".perguntas-item"))

function showDisable(event){
  const actualQuestion = event.currentTarget
  const paragraphQuestion = actualQuestion.querySelector("p")
  const arrowQuestion = actualQuestion.querySelector(".arrow img")


  paragraphQuestion.classList.toggle("ativar"); 
  arrowQuestion.classList.toggle("rotacionar"); 
}

function handleHidenQuestion(element){
  element.addEventListener("click", showDisable)
}

questionsElement.forEach(handleHidenQuestion)


/*Animação de Fade*/
var reveals = document.querySelectorAll(".reveal");

function fadeAnimation(animeItens){
  var windowHeight = window.innerHeight
  var elementTop = animeItens.getBoundingClientRect().top;
  var workingAnimation = 250

  if(elementTop < windowHeight - workingAnimation){
    animeItens.classList.add("active")
  }
}

function animationHandle(){
  reveals.forEach(fadeAnimation)
}

window.addEventListener("scroll", animationHandle);



