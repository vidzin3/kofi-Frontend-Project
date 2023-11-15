// define store 

import {defineStore} from 'pinia'
import axios from 'axios'

export const search = defineStore('search',{
    state:() => ({
        searchProducts :[],
        searchProducts2 :[],
        searchProducts3 :[],
        searchProducts4 :[],
        searchProducts5 :[],
        searchProducts6 :[],
        searchProducts7 :[],
        searchProducts8 :[],
        searchProducts9 :[],
        searchProducts10 :[],
        searchProducts11 :[],
        searchProducts12 :[],
        searchProducts13 :[],
        searchProducts14 :[],
        searchProducts15 :[],
        searchProducts16 :[],
        searchProducts17 :[],
        searchProducts18 :[],
        searchProducts19 :[],
        searchProducts20 :[]
    }),
    actions:{
        async getProduct1(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10')
                this.searchProducts = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct2(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=10')
                this.searchProducts2 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct3(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=20')
                this.searchProducts3 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct4(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=30')
                this.searchProducts4 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct5(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=40')
                this.searchProducts5 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct6(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=50')
                this.searchProducts6 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct7(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=60')
                this.searchProducts7 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct8(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=70')
                this.searchProducts8 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct9(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=80')
                this.searchProducts9 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct10(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=90')
                this.searchProducts10 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct11(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=100')
                this.searchProducts11 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct12(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=110')
                this.searchProducts12 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct13(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=120')
                this.searchProducts13 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct14(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=130')
                this.searchProducts14 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct15(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=140')
                this.searchProducts15 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct16(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=150')
                this.searchProducts16 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct17(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=160')
                this.searchProducts17 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct18(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=170')
                this.searchProducts18 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct19(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=180')
                this.searchProducts18 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct20(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=190')
                this.searchProducts19 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct21(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=200')
                this.searchProducts10 = res.data
            }catch(error){
                console.log(error)
            }
        }
    }
})
