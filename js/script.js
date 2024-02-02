document.documentElement.classList.add("js")

import startScroll from '../js/startScroll.js'
import scrollAnimation from '../js/scrollAnimation.js'
import faq from '../js/faq.js'
import urlLocation from '../js/urlLocation.js'
import linkNavActive from '../js/links.js'
import selectProductImg from '../js/selectProductImg.js'

let buttonScroll = new startScroll(".menu-back", "header")
let newScrollAnimation = new scrollAnimation(".reveal")
let faqHandler = new faq(".perguntas-item", ".perguntas-item p", ".arrow")
let newUrlLocation = new urlLocation()
let newlinkTabs = new linkNavActive("header nav a")
let selectProduct = new selectProductImg(".slide", ".produto-img img")

buttonScroll.initialization()
newScrollAnimation.initialization()
faqHandler.initialization()
newUrlLocation.initialization()
newlinkTabs.initialization()
selectProduct.initialization()











