// define store 
import {defineStore} from 'pinia'
import axios from 'axios'

export const training = defineStore('training',{
    state:() => ({
        trainings:[],
        storeTrain:[],
        trainingById: [],
    }),
    actions:{
        async getApi(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/ticket/type/training')
                this.trainings = res.data
            }catch(error){
                console.log(error)
            }
        },
        async SelectTrain(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/ticket/type/training')
                this.storeTrain = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getById(id){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/ticket/type/detail/${id}`)
                this.trainingById = res.data
            }catch(error){
                console.log(error)
            }
        }
    }
})