// define cart 
import {defineStore} from 'pinia'

export const useCart = defineStore('cart',{
    state:() => ({
        cart: [],
        counting : []
    }),
    actions:{
        addToCart(product,count){
            const countInt = parseInt(count,10)
            this.cart.push(product)
            this.counting.push(countInt)
        },
        deteleCart(id){
            const index = this.cart.findIndex(index => index.id == id)
            console.log(index)
            this.cart.splice(index,1);
            this.counting.splice(index,1);
        },
        totalItem(){
            return this.cart.reduce((acc)=>acc+1,0)
        },
        totalPrice(){
            return this.cart.reduce((acc,p,index)=> acc+p.prices.priceAfterDiscount*this.counting[index],0)
        }
    }
})