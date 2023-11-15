// define servers api

import {defineStore} from 'pinia'
import axios from 'axios'

export const services = defineStore('services',{
    state:()=>({
        service:[],
        serviceId : [],
        img:[
            "https://application-media.kofi.com.kh/assets/main/image/service/Preventive-Maintenence.png",
            "https://application-media.kofi.com.kh/assets/main/image/service/Boiler-Descaling.png",
            "https://application-media.kofi.com.kh/assets/main/image/service/Preventive-Kit.png",
            "https://application-media.kofi.com.kh/assets/main/image/service/1usexi-5b9e25b1-f58f-4f1a-b294-7dce07cf11a7.png"
        ],
        imgUrl:[
            {
                id:1,
                img:"https://application-media.kofi.com.kh/assets/main/image/service/Preventive-Maintenence.png"
            },
            {
                id:2,
                img:"https://application-media.kofi.com.kh/assets/main/image/service/Boiler-Descaling.png"
            },
            {
                id:3,
                img:"https://application-media.kofi.com.kh/assets/main/image/service/Preventive-Kit.png"
            },
            {
                id:4,
                img:"https://application-media.kofi.com.kh/assets/main/image/service/1usexi-5b9e25b1-f58f-4f1a-b294-7dce07cf11a7.png"
            }
        ]
    }),
    actions:{
        async getService(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/ticket/type/service')
                this.service = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getByRoute(id){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/ticket/type/detail/${id}`)
                this.serviceId = res.data
            }catch(error){
                console.log(error)
            }
        }
    }
})