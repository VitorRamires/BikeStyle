export default class selectProductImg{
  constructor(slideElement, productElement){
    this.imagesSlide = document.querySelectorAll(slideElement)
    this.displayMainSlide = document.querySelector(productElement) 
  }
  
  addListener(){
    this.imagesSlide.forEach((image)=>{
      image.onclick = ()=>{
        this.displayMainSlide.src = image.src
        image.classList.add("currentSlide")
      }
      image.classList.remove("currentSlide")
    })
  }

  initialization(){
    this.addListener()
  }

}


