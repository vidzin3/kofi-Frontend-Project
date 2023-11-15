// define router

import {createRouter,createWebHistory} from 'vue-router'
import home from '../view/home.vue'
import search from '../view/Search.vue'
import product from '../view/product.vue'
import services from '../view/services.vue'
import servicePackage from '../components/servicePackage.vue'
import showroom from '../view/showroom.vue'
import showDetail from '../components/showDetail.vue'
import traning from '../view/trainning.vue'
import trainingDetail from '../components/trainingDetail.vue'
import preview from '../view/preview.vue'
import findProducts from '../view/findProducts.vue'
import cart from '../view/cart.vue'
 
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            component: home
        },
        {
            path: '/cart',
            component : cart
        },
        {
            path: '/search',
            component: search
        },
        {
            path: '/search/search=:text',
            component: findProducts
        },
        {
            path: '/product/category/:id',
            component: product
        },
        {
            path: '/product/:name/:id',
            component: preview
        },
        {
            path:'/service/service-package/id=:id',
            component: services,
            children:[
                {
                    path: '/service/service-package/id=:id',
                    component:servicePackage
                }
            ]
        },
        {
            path: '/showroom/id=:id',
            component:showroom,
        },
        {
            path: '/showroom/detail/id=:id',
            component: showDetail
        },
        {
            path: '/accademy/traning-course/id=:id/subId=:subid',
            component: traning,
            children:[
                {
                    path: '/accademy/traning-course/id=:id/subId=:subid',
                    component: trainingDetail
                }
                
            ]
        }
    ]
})

export default router