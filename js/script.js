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



