import {defineStore} from 'pinia'
import axios from 'axios'

export const productHome = defineStore('homeProduct',{
    state:()=>({
        products:[],
        img:[
            "https://application-media.kofi.com.kh/assets/main/image/product/6nwhde-7894706d-b78b-4a8c-967e-4e003d0fdb75.png",
            "https://application-media.kofi.com.kh/assets/main/image/product/9znmpj-20980cfb-0222-419f-be36-7ded5f74ae43.png",
            "https://application-media.kofi.com.kh/assets/main/image/product/tabwys-f5fa11ea-fc75-481e-bddf-3d5f6d436828.png",
            "https://application-media.kofi.com.kh/assets/main/image/product/b7h9nr-4666adef-d54c-4b19-a975-4a3d55b8d862.png",
            "https://application-media.kofi.com.kh/assets/main/image/product/1m8h1q-6a54cc40-5046-4a30-9dc4-103141fde1f8.png",
            "https://application-media.kofi.com.kh/assets/main/image/product/ebl3t2-85d6b94d-0c85-43f8-8385-63806bf4b5c3.png",
            "https://application-media.kofi.com.kh/assets/main/image/product/jofcj5-20528a43-7523-4948-a1e8-ff7399bec43c.png",
            "https://application-media.kofi.com.kh/assets/main/image/product/ykgh3o-744ba8d2-d92c-4af9-82b1-09f6c4ed7c2d.png",
            "https://application-media.kofi.com.kh/assets/main/image/product/2g2pz9-ffa5c4e8-17fc-47b2-bb21-ce9489ab1bd2.png",
            "https://application-media.kofi.com.kh/assets/main/image/product/1pkvsw-30c50fe5-ceed-4db9-9691-ae88743aa20a.png",
            "https://application-media.kofi.com.kh/assets/main/image/product/pti6cn-35201f13-a00a-4bf9-a909-bc26ce6a47d2.png",
            "https://application-media.kofi.com.kh/assets/main/image/product/qmwd4p-d8c65c69-d40e-46bb-a758-b2439436d501.png"
        ]
    }),
    actions:{
        async getApi(){
            try{
                const res = await axios.get('https://application-service.kofi.com.kh/client/product?limit=12&offset=0&topSelection=true&sort=top_selection_asc')
                this.products = res.data
            }catch(error){
                console.log(error)
            }
        }
    }
})