export default class scrollAnimation {
  constructor(affectedElements){
    this.affectedElements = document.querySelectorAll(affectedElements);
    this.animationHandle = this.animationHandle.bind(this)
  }

  animationHandle(){
    let windowHeight = window.innerHeight
    this.affectedElements.forEach((element) => {
      const windowHeightAjusted = windowHeight * 0.6
      const elementTop = element.getBoundingClientRect().top
      if(windowHeightAjusted > elementTop){
        element.classList.add("active")
      }
    })
  }

  initialization(){
    window.addEventListener("scroll", this.animationHandle)
  }
}