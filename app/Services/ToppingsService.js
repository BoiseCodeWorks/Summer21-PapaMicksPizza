import { ProxyState } from "../AppState.js"
import Topping from "../Models/Topping.js"



class ToppingsService{
  

  addTopping(rawTopping){
    console.log('topping at service', rawTopping)
    ProxyState.toppings = [...ProxyState.toppings, new Topping(rawTopping)]
    console.log('all the toppings', ProxyState.toppings)

  }
}

export const toppingsService = new ToppingsService()