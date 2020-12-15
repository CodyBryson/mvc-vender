import Snack from "./Models/Snack.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []


  vendingOptions = {
    snacks: [new Snack("almonds", .50), new Snack("chips", .75), new Snack("coke", 1.00), new Snack("fanta", 1.00), new Snack("powerade", 1.00), new Snack("redbull", 2.00), new Snack("sprite", 1.00), new Snack("water", 2.00)]
  }
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
