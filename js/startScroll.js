export default class startScroll {
  constructor(button, finalPositionElement){
    this.finalPositionElement = document.querySelector(finalPositionElement)
    this.button = document.querySelector(button)
    this.backMenu = this.backMenu.bind(this)
  }

  backMenu(){
    window.scrollTo({
      top:this.finalPositionElement.getBoundingClientRect().bottom,
      behavior:"smooth"
    })
  }

  initialization(){
    this.button.addEventListener("click", this.backMenu)
  }
  
}