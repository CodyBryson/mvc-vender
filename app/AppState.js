import Snack from "./Models/Snack.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []


  vendingOptions = {
    snacks: [new Snack("almonds", .50, "almonds.png"), new Snack("chips", .75, "chips.png"), new Snack("coke", 1.00), "coke.png", new Snack("fanta", 1.00, "fanta.png"), new Snack("powerade", 1.00, "powerade.png"), new Snack("redbull", 2.00, "redbull.png"), new Snack("sprite", 1.00, "sprite.png"), new Snack("water", 2.00, "water.png")]
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
