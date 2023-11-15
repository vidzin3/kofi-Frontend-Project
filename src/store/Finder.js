// define store 

import {defineStore} from 'pinia'
import axios from 'axios'

export const findPro = defineStore('findPro',{
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
        searchProducts20 :[],
        findpro1:[],
        findpro2:[],
        findpro3:[],
        findpro4:[],
        findpro5:[],
        findpro6:[],
        findpro7:[],
        findpro8:[],
        findpro9:[],
        findpro10:[],
        findpro11:[],
        findpro12:[],
        findpro13:[],
        findpro14:[],
        findpro15:[],
        findpro16:[],
        findpro17:[],
        findpro18:[],
        findpro19:[],
        findpro20:[],
        findpro21:[]
    }),
    actions:{
        // async getProduct1(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&search=i')
        //         this.searchProducts = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        // async getProduct2(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=10')
        //         this.searchProducts2 = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        // async getProduct3(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=20')
        //         this.searchProducts3 = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        // async getProduct4(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=30')
        //         this.searchProducts4 = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        // async getProduct5(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=40')
        //         this.searchProducts5 = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        // async getProduct6(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=50')
        //         this.searchProducts6 = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        // async getProduct7(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=60')
        //         this.searchProducts7 = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        // async getProduct8(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=70')
        //         this.searchProducts8 = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        // async getProduct9(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=80')
        //         this.searchProducts9 = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        // async getProduct10(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=90')
        //         this.searchProducts10 = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        // async getProduct11(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=100')
        //         this.searchProducts11 = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        // async getProduct12(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=110')
        //         this.searchProducts12 = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        // async getProduct13(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=120')
        //         this.searchProducts13 = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        // async getProduct14(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=130')
        //         this.searchProducts14 = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        // async getProduct15(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=140')
        //         this.searchProducts15 = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        // async getProduct16(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=150')
        //         this.searchProducts16 = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        // async getProduct17(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=160')
        //         this.searchProducts17 = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        // async getProduct18(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=170')
        //         this.searchProducts18 = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        // async getProduct19(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=180')
        //         this.searchProducts18 = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        // async getProduct20(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=190')
        //         this.searchProducts19 = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        // async getProduct21(){
        //     try{
        //         const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=10&offset=200')
        //         this.searchProducts10 = res.data
        //     }catch(error){
        //         console.log(error)
        //     }
        // },
        async getProduct1(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&search=${text}`)
                this.findpro1 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct2(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&offset=10&search=${text}`)
                this.findpro2 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct3(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&offset=20&search=${text}`)
                this.findpro3 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct4(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&offset=30&search=${text}`)
                this.findpro4 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct5(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&offset=40&search=${text}`)
                this.findpro5 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct6(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&offset=50&search=${text}`)
                this.findpro6 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct7(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&offset=60&search=${text}`)
                this.findpro7 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct8(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&offset=70&search=${text}`)
                this.findpro8 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct9(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&offset=80&search=${text}`)
                this.findpro9 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct10(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&offset=90&search=${text}`)
                this.findpro10 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct11(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&offset=100&search=${text}`)
                this.findpro11 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct12(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&offset=110&search=${text}`)
                this.findpro12 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct13(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&offset=120&search=${text}`)
                this.findpro13 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct14(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&offset=130&search=${text}`)
                this.findpro14 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct15(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&offset=140&search=${text}`)
                this.findpro15 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct16(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&offset=150&search=${text}`)
                this.findpro16 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct17(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&offset=160&search=${text}`)
                this.findpro17 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct18(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&offset=170&search=${text}`)
                this.findpro18 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct19(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&offset=180&search=${text}`)
                this.findpro19 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct20(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&offset=190&search=${text}`)
                this.findpro20 = res.data
            }catch(error){
                console.log(error)
            }
        },
        async getProduct21(text){
            try{
                const res = await axios.get(`https://application-service.kofi.com.kh/client/product?limit=10&offset=200&search=${text}`)
                this.findpro21 = res.data
            }catch(error){
                console.log(error)
            }
        }
    }
})
