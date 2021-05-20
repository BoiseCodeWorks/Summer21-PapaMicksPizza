import PizzasController from "./Controllers/PizzasController.js";
import ToppingsController from "./Controllers/ToppingsController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
  pizzasController = new PizzasController()
  toppingsController = new ToppingsController()
}

window["app"] = new App();
