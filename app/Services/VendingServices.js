import { ProxyState } from "../AppState.js"
let money = 0;

class AddMoney {
  addMoney() {
    money += .25;
    drawMoney()
  }
}
class DrawMoney {
  drawMoney() {
    document.getElementById("total").innerText = money.toString()
  }
}

class Vend {
  vend(str) {
    document.getElementById("vend").src = ProxyState.vendingOptions.snacks[2].toString()
  }
}
class VendingService {
  buy(str) {
    let selection = ProxyState.vendingOptions.snacks
    if (money <= selection.cost) {
      alert("Please insert more coins.")
    }
    else {
      money -= selection.cost[str];
      vend(str)
    }
  }
}

export const vendingService = new VendingService()