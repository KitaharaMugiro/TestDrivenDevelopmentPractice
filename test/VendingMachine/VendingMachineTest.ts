import * as chai from 'chai';
import { VendingMachine } from '../../src/VendingMachine/VendingMachine';
import { Drink } from '../../src/VendingMachine/Drink';
import { NoMoneyError, NoStockError, NoAvailableCoinError } from '../../src/VendingMachine/NoStockError';

describe('VendingMachineのテスト',  () => {
    it('100円を入れて水を買う', () => {  
        const machine = new VendingMachine()
        machine.stockDrink(new Drink("water" , 100))
        machine.insertMoney(100)
        const drink = machine.buy("water")
        const change = machine.getChange()

        chai.assert.equal(drink.name , "water")
        chai.assert.equal(change , 0)
    })

    it('120円を入れて水を買う + 20円のお釣り', () => {  
        const machine = new VendingMachine()
        machine.stockDrink(new Drink("water" , 100))
        machine.insertMoney(100)
        machine.insertMoney(10)
        machine.insertMoney(10)
        const drink = machine.buy("water")
        const change = machine.getChange()

        chai.assert.equal(drink.name , "water")
        chai.assert.equal(change , 20)
    })

    it('120円を入れてコーラを買う', () => {  
        const machine = new VendingMachine()
        machine.stockDrink(new Drink("cola" , 120))
        machine.insertMoney(100)
        machine.insertMoney(10)
        machine.insertMoney(10)
        const drink = machine.buy("cola")
        const change = machine.getChange()

        chai.assert.equal(drink.name , "cola")
        chai.assert.equal(change , 0)
    })

    it('水とコーラを在庫に入れて120円を入れてコーラを買う  => 在庫を確認すると水しかない', () => {  
        const expectedStock = {water : 1}
        const machine = new VendingMachine()
        machine.stockDrink(new Drink("water" , 100))
        machine.stockDrink(new Drink("cola" , 120))
        machine.insertMoney(100)
        machine.insertMoney(10)
        machine.insertMoney(10)
        const drink = machine.buy("cola")
        const change = machine.getChange()
        const stock = machine.getStock()

        chai.assert.equal(drink.name , "cola")
        chai.assert.equal(change , 0)
        chai.assert.deepEqual(stock , expectedStock)
    })

    it('水とコーラを在庫に入れて120円を入れて水を買う  => 在庫を確認するとコーラしかない', () => {  
        const expectedStock = {cola : 1}
        const machine = new VendingMachine()
        machine.stockDrink(new Drink("water" , 100))
        machine.stockDrink(new Drink("cola" , 120))
        machine.insertMoney(100)
        machine.insertMoney(10)
        machine.insertMoney(10)
        const drink = machine.buy("water")
        const change = machine.getChange()
        const stock = machine.getStock()

        chai.assert.equal(drink.name , "water")
        chai.assert.equal(change , 20)
        chai.assert.deepEqual(stock , expectedStock)
    })

    it('100円入れてコーラを買おうとするとNoMoneyErrorになる', () => {  
        const machine = new VendingMachine()
        machine.stockDrink(new Drink("cola" , 120))
        machine.insertMoney(100)
        try {
            machine.buy("cola")
            chai.assert.fail("エラーが発生しませんでした")
        } catch (e) {
            if(e instanceof NoMoneyError){
                //OK
                return
            }
            chai.assert.fail(e.message)
        }
    })

    it('在庫がないのに水を買おうとするとNoStockErrorになる', () => {  
        const machine = new VendingMachine()
        machine.insertMoney(100)
        try {
            machine.buy("watar")
            chai.assert.fail("エラーが発生しませんでした")
        } catch (e) {
            if(e instanceof NoStockError){
                //OK
                return
            }
            chai.assert.fail(e.message)
        }
    })

    it("10円,50円,100円,500円,1000円以外は使えない" , () => {
        const machine = new VendingMachine()
        const coins = [1 , 5 , 2000 , 10000]
        coins.forEach(coin => {
            try {
                machine.insertMoney(coin)
                chai.assert.fail("エラーが発生しませんでした")
            } catch (e) {
                if(e instanceof NoAvailableCoinError){
                    //OK
                    return
                }
                chai.assert.fail(e.message)
            }
        })
    })

})