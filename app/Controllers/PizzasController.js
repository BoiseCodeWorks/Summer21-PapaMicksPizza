import { ProxyState } from '../AppState.js'
import { pizzasService } from '../Services/PizzasService.js'
import { loadState } from '../Utils/LocalStorage.js'


function _draw(){
  console.log('drawing your pizzas')
  let pizzas = ProxyState.pizzas
  let pizzaElm = document.getElementById('pizzas')
  let template = ''
  
  pizzas.forEach(p => {
    let toppings = ProxyState.toppings.filter(t => t.pizza == p.id)
    let total = 5
    template += `
    <div class="col-3 m-3 bg-light px-0">
                <div class="bg-dark text-light">
                    ${p.name}
                </div>
                <div class="row justify-content-center py-1 card-body">
                    <b class="col-12">Pizza Fixings:</b>
                    <ul class="col-12 bg-shade">
                        <li class="row align-items-center"> ${p.sauce}</li>
                        <li class="row align-items-center"> ${p.crust}</li>
                    </ul>
                    <b class="col-12">Toppings:</b>
                    <ul class="col-12 bg-shade">`

                    toppings.forEach(t =>{
                      total += t.price
                      template +=` <li class="row align-items-center">
                      <div class="col-7">${t.name}</div>
                      <div class="col-3">$${t.price}</div>
                      </li>`
                      
                    })


                 template +=   `</ul>
                    <form onsubmit="app.toppingsController.addTopping(event, '${p.id}')">
                    <label for="name"></label>
                    <input type="text" name="name" id="" class="form-control" placeholder=""
                        aria-describedby="helpId">
                    <button class="btn btn-primary btn-block"> Add Topping</button>
                </form>
                    <h5>Total: $${total.toFixed(2)}</h5>
                </div>
                <div title="fulfill order" class="col-12 btn btn-outline-dark"
                        onclick="app.pizzasController.fulfillOrder('${p.id}')">
                        <i class="fa fa-check" aria-hidden="true"></i>
                  </div>
            </div>
    `
  })
  pizzaElm.innerHTML = template
}


export default class PizzasController{
  constructor(){
    ProxyState.on('pizzas', _draw)
    ProxyState.on('toppings', _draw)
    loadState()
  }
  
createPizza(event){
  event.preventDefault()
  let form = event.target
  let rawPizza = {
    name: form.name.value,
    sauce: form.sauce.value,
    crust: form.crust.value
  }
  pizzasService.createPizza(rawPizza)

}

fulfillOrder(pizzaId){
  console.log('order fulfilled', pizzaId)
  pizzasService.fulfillOrder(pizzaId)
}

}