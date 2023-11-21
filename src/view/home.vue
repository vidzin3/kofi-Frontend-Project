<template>
    <v-container fluid>
        <div class="d-flex align-center">
            <v-text-field
            density="compact"
            variant="solo"
            label="Search for everything..."
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            class="mr-5"
            @click="router.push('/search')"
            ></v-text-field>
            <v-menu>
                <template v-slot:activator="{props}">
                    <v-btn v-bind="props">All Category</v-btn>
                </template>
                <v-list>
                    <v-list-item>All Category</v-list-item>
                </v-list>
            </v-menu>
            <v-btn class="ml-5" variant="none" @click="router.push(`/cart`)" icon>
                <v-badge :content="cart.totalItem()" color="red">
                    <v-icon>mdi-cart</v-icon>
                </v-badge> 
            </v-btn>
        </div>
        <!-- <v-breadcrumbs :items="items">
            <template v-slot:title="{ item }">
            {{ item.title }}
            </template>
        </v-breadcrumbs> -->
        <Splide :options="options">
            <SplideSlide class="text-center" v-for="slides in slide">
                <img :height="400" cover :src="slides.img" alt="">
            </SplideSlide>
            <v-btn class="splide__toggle">
                <span class="splide__toggle__play"></span>
                <span class="splide__toggle__pause"></span>
            </v-btn>
        </Splide>
        <v-card class="d-flex text-center mt-10" variant="tonal">
            <v-card-text class="" v-for="benifits in benifit" :key="benifits.id">
                <v-avatar rounded="0" :image="benifits.img" class="mb-3"></v-avatar>
                <p class="text-caption text-lg-body-2">{{ benifits.text }}</p>
            </v-card-text>
        </v-card>
        <h3 class="mt-10">Top Selection From KOFI</h3>
        <!-- <v-row v-for="home in homeProduct.products" class="mt-3" :key="home.id">
            <v-col v-for="(pro,i) in home" cols="6" sm="4" md="3" lg="3">
                <v-card :elevation="3">
                    <v-img :src="homeProduct.img[i]" alt="" :height="170"></v-img>
                    <v-card-text> 
                        <p class="text-body-1">{{ pro.name }}</p>
                        <p class="text-orange text-subtitle-2">$ {{ pro.prices }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row> -->
        <div v-if="loading" class="text-center">
            <v-progress-circular indeterminate></v-progress-circular>
        </div>
        <v-row class="mt-3">
            <v-col v-for="(home,i) in homeProduct.products.data" :key="home.id" cols="6" sm="4" md="3" lg="3">
                <v-card @click="router.push(`/product/${home.mainCategory.name}/${home.id}`)" :elevation="1">
                    <v-img :src="homeProduct.img[i]" alt="" :height="170"></v-img>
                    <v-card-text> 
                        <p class="text-body-1">{{ home.name }}</p>
                        <p class="text-orange text-subtitle-2">$ {{ home.prices.priceAfterDiscount }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {Splide,SplideSlide} from '@splidejs/vue-splide'
    import slide from '../data/slide.json'
    import {useRouter} from 'vue-router'
    import benifit from '../data/benifit.json'
    import {productHome} from '../store/productHome'
    import { onMounted, ref } from 'vue'
    import { useCart } from '../store/cart'
    export default {
        components:{
            Splide,
            SplideSlide
        },
        setup(){
            const options = {
                type: 'loop',
                autoplay: 'true',
                interval: 2900
            }
            const router = useRouter()
            const homeProduct = productHome()
            const loading = ref(true)
            const cart = useCart()

            const storeAll = async () => {
                loading.value = true
                try{
                    await homeProduct.getApi()
                }catch(error){
                    console.log(error)
                }finally{
                    loading.value = false
                }
            }

            onMounted(()=>{
                storeAll()
            })

            return {
                options,
                router,
                homeProduct,
                loading,
                cart
            }
        },
        data(){
            return{
                slide,
                items: [
                    {
                        title: 'home',
                        disabled: false,
                        to: '/',
                    },
                ],
                benifit,
            }
        }
    }
</script>