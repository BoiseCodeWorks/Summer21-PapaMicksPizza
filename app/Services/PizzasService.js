import { ProxyState } from "../AppState.js"
import Pizza from "../Models/Pizza.js"
import { saveState } from "../Utils/LocalStorage.js"



class PizzasService{
  constructor(){
    ProxyState.on('pizzas', saveState)
    ProxyState.on('toppings', saveState)
  }
  fulfillOrder(pizzaId) {
    ProxyState.pizzas = ProxyState.pizzas.filter(p => p.id != pizzaId)
    console.log(ProxyState.pizzas)
  }

  createPizza(rawPizza) {
    ProxyState.pizzas  = [...ProxyState.pizzas, new Pizza(rawPizza)]
    console.log("all your pizzas", ProxyState.pizzas)

  }
}


export const pizzasService = new PizzasService()