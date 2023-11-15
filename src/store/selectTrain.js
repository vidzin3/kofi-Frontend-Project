// define store 
import {defineStore} from 'pinia'
import axios from 'axios'

export const selectTraining = defineStore('training',{
    state:() => ({
        storeId:[]
    }),
    actions:{
        async getId(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/ticket/type/training')
                this.storeId = res.data
            }catch(error){
                console.log(error)
            }
        },
    }
})