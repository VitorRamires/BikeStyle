export default class linkNavActive{
  constructor(linkElement){
    this.links = Array.from(document.querySelectorAll(linkElement))
  }

  applyHandleLinks(){
    this.links.forEach(this.handleLinks)
  }

  handleLinks(linkItemElement){
    const linkHref = linkItemElement.href
    if(document.location.href.includes(linkHref)){
      linkItemElement.classList.add("link-active")
    }
  }


  initialization(){
    this.applyHandleLinks()
  }

}