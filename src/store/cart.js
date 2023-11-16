// define cart 
import {defineStore} from 'pinia'

export const useCart = defineStore('cart',{
    state:() => ({
        cart: [],
        counting : []
    }),
    actions:{
        addToCart(product,count){
            this.cart.push(product)
            this.cart.push(count)
        },
        deteleCart(id){
            const index = this.cart.findIndex(index => index.id === id)
            this.cart.splice(index,1);
            this.counting.splice(index,1);
        }
    }
})