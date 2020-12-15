import { ProxyState } from "../AppState.js"

class VendingService {
  buy(str) {
    let money = 2.00
    let selection = ProxyState.vendingOptions.snacks
    if (money < selection
      alert("Please insert more coins.")
  }
    else {
  money -= selection.cost[str];
  vend()
}
  }
}

export const vendingService = new VendingService()