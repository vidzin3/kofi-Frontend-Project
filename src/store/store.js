// define store products

import {defineStore} from 'pinia'
import axios from 'axios'

export const useProducts = defineStore('products',{
    state:()=>({
        products:[],
    }),
    getters:{

    },
    actions:{
        async getCategory(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/category')
                this.products = res.data
            }catch (error){
                console.log(error)
            }
        },
    }
})