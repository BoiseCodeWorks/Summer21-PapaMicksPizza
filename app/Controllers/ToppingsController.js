import { toppingsService } from "../Services/ToppingsService.js"



export default class ToppingsController{
  constructor(){
  }

  addTopping(event, pizza){
    event.preventDefault()
    let form = event.target
    let rawTopping = {
      name: form.name.value,
      pizza: pizza
    }
    toppingsService.addTopping(rawTopping)

  }
}