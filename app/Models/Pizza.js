import { generateId } from "../Utils/GenerateId.js"


export default class Pizza {
  constructor({name, sauce, crust, id}){
    this.id = id || generateId() 
    this.name = name
    this.sauce = sauce
    this.crust = crust
  }
}