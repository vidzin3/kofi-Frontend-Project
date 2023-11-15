// define store 

import {defineStore} from 'pinia'
import axios from 'axios'

export const showroom = defineStore('showroom',{
    state:() => ({
        room:[],
        img:[
            "https://application-media.kofi.com.kh/assets/main/image/showroom/Showroom-Phnom-Penh.png",
            "https://application-media.kofi.com.kh/assets/main/image/showroom/hjhv6c-3ec5c5e5-626e-45cc-bc8a-1b04f41e7f4b.jpeg",
            "https://application-media.kofi.com.kh/assets/main/image/showroom/n4xre2-692215fe-22a3-4c59-88fb-d67913624050.jpeg",
            "https://application-media.kofi.com.kh/assets/main/image/showroom/stbfde-b7506126-c611-4de0-9da1-e833b6f2220f.jpeg",
            "https://application-media.kofi.com.kh/assets/main/image/showroom/4r01x8-1df93e5f-1ee8-4c9b-b037-0a8b24c4ef20.jpeg",
        ]
    }),
    actions:{
        async getRoom(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/showroom')
                this.room = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getRoomId(id){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/showroom/${id}`)
                this.room = res.data
            }catch(error){
                console.log(error)
            }
        }
    }
})