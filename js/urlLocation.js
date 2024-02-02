export default class urlLocation{
  constructor(){
    this.urlParameters = new URLSearchParams(location.search)
  }

  redirectOption(parameterIds){
    const getIdParameters = document.getElementById(parameterIds)
    if(getIdParameters){
      getIdParameters.checked = true
    }
  }

  initialization(){
    this.urlParameters.forEach(this.redirectOption)
  }
}

