export default class faq{
  constructor(elementQuestion, elementAnwser, buttonShowAnwser){
    this.questionsElement = document.querySelectorAll(elementQuestion)
    this.paragraphElement = document.querySelectorAll(elementAnwser)
    this.button = document.querySelectorAll(buttonShowAnwser)
  }

  showAnwser(index){
    this.paragraphElement[index].classList.toggle("show-answer")
    this.button[index].classList.toggle("rotate")
  }

  faqAddEvent(){
    this.questionsElement.forEach((element, index) => {
      element.addEventListener("click", ()=>{this.showAnwser(index)})
    })
  }

  initialization(){
    this.faqAddEvent()
  }
}