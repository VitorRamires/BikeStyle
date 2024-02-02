export default class selectProductImg{
  constructor(slideElement, productElement){
    this.imagesSlide = document.querySelectorAll(slideElement)
    this.displayMainSlide = document.querySelector(productElement) 
  }

  changeHandler(index, image){
    this.displayMainSlide.src =  this.imagesSlide[index].src
    this.imagesSlide.forEach(item=>{
      item.classList.remove('currentSlide')
    })
    image.classList.add('currentSlide')
  }
  
  addListener(){
    this.imagesSlide.forEach((image, index)=>{
      image.addEventListener('click', ()=>{this.changeHandler(index, image)})
    })
  }

  initialization(){
    this.addListener()
  }

}


