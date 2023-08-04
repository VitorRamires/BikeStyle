/*JS anim validation*/
document.documentElement.classList.add("js")


/*Slide bicicletas*/

const imagesSlide = Array.from(document.querySelectorAll(".produto-img-box img")),
      displayMainSlide = document.querySelector(".produto-img img") 

function slideOnClick(event){

  const targetItem = event.currentTarget,
        sourceItem = targetItem.src
        displayMainSlide.src = sourceItem

const itemActive = true
  if(itemActive === true){
  for(index = 0; index < imagesSlide.length; index++){
      imagesSlide[index].classList.remove("currentSlide")
      targetItem.classList.add("currentSlide")
    }
  }
}

function slideAction(image){
  image.addEventListener('click', slideOnClick)
}

imagesSlide.forEach(slideAction)



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
  const actualQuestion = event.currentTarget,
        paragraphQuestion = actualQuestion.querySelector("p"),
        arrowQuestion = actualQuestion.querySelector(".arrow img")

  paragraphQuestion.classList.toggle("ativar"); 
  arrowQuestion.classList.toggle("rotacionar"); 
}

function handleHidenQuestion(element){
  element.addEventListener("click", showDisable)
}

questionsElement.forEach(handleHidenQuestion)



/*Animação scrollbar*/
var reveals = document.querySelectorAll(".reveal");

function fadeAnimation(animeItens){
  var windowHeight = window.innerHeight,
      elementTop = animeItens.getBoundingClientRect().top,
      workingAnimation = 250

  if(elementTop < windowHeight - workingAnimation){
    animeItens.classList.add("active")
  }
}

function animationHandle(){
  reveals.forEach(fadeAnimation)
}

window.addEventListener("scroll", animationHandle);




