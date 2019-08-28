import { Drink } from "./Drink";
import { NoMoneyError, NoStockError, NoAvailableCoinError } from "./NoStockError";

export class VendingMachine {
    totalMoney : number = 0
    stock : Drink[] = []

    getStock() : {[name : string] : number} {
        const output:{[name : string] : number}= {}
        this.stock.forEach(drink => {
            const prevValue = output[drink.name] || 0
            output[drink.name] = prevValue + 1
        })
        return output
    }

    getChange() {
        return this.totalMoney 
    }

    buy(drinkName : string) : Drink {
        const drink = this.stock.filter(stockDrink => stockDrink.name == drinkName)[0]
        if(drink === undefined) throw new NoStockError("在庫がありません")
        this.stock = this.stock.filter(element => element !== drink)
        if(this.totalMoney < drink.price) throw new NoMoneyError("お金が足りません")
        this.totalMoney -= drink.price
        return drink
    }

    insertMoney(money : number) {
        const okCoin = [10 , 50 , 100 , 500 , 1000]
        if(!okCoin.includes(money)) throw new NoAvailableCoinError("対応していないお金です")
        this.totalMoney += money    
    }

    stockDrink(drink: Drink) {
        this.stock.push(drink)
    }
}