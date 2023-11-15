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
            v-model.trim="searchFill"
            @keyup.enter="performSearch"
            ></v-text-field>
            <v-menu>
                <template v-slot:activator="{props}">
                    <v-btn v-bind="props">All Category</v-btn>
                </template>
                <v-list>
                    <v-list-item>All Category</v-list-item>
                </v-list>
            </v-menu>
            <v-btn class="ml-5" variant="none" @click="router.push(`/cart`)">
                <v-icon>mdi-cart</v-icon>  
            </v-btn>
        </div>
        <v-breadcrumbs :items="items">
            <template v-slot:title="{ item }">
            {{ item.title }}
            </template>
        </v-breadcrumbs>
        <v-row>
            <v-col v-for="store in searchPro.searchProducts.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in searchPro.searchProducts2.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in searchPro.searchProducts3.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120" class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in searchPro.searchProducts4.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in searchPro.searchProducts5.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120" class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in searchPro.searchProducts6.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in searchPro.searchProducts7.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in searchPro.searchProducts8.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in searchPro.searchProducts9.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120" class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in searchPro.searchProducts10.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img  :width="120" class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in searchPro.searchProducts11.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in searchPro.searchProducts12.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120" class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in searchPro.searchProducts13.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in searchPro.searchProducts14.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in searchPro.searchProducts15.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in searchPro.searchProducts16.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in searchPro.searchProducts17.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in searchPro.searchProducts18.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in searchPro.searchProducts19.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in searchPro.searchProducts20.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {useRouter} from 'vue-router'
    import {search} from '../store/search'
    import { onMounted, ref } from 'vue'
    export default {
        setup(){
            const searchPro = search()
            const router = useRouter()

            onMounted(async () => {
                await searchPro.getProduct1()
                await searchPro.getProduct2()
                await searchPro.getProduct3()
                await searchPro.getProduct4()
                await searchPro.getProduct5()
                await searchPro.getProduct6()
                await searchPro.getProduct7()
                await searchPro.getProduct8()
                await searchPro.getProduct9()
                await searchPro.getProduct10()
                await searchPro.getProduct11()
                await searchPro.getProduct12()
                await searchPro.getProduct13()
                await searchPro.getProduct14()
                await searchPro.getProduct15()
                await searchPro.getProduct16()
                await searchPro.getProduct17()
                await searchPro.getProduct18()
                await searchPro.getProduct19()
                await searchPro.getProduct20()
                await searchPro.getProduct21()
            })

            const searchFill = ref("")

            const performSearch = () => {
                if(searchFill.value == ""){
                    return router.push(`/search`)
                }
                router.push(`/search/search=${searchFill.value}`)
            }

            return {
                searchFill,
                searchPro,
                performSearch,
                router
            }
        },
        data(){
            return {
                items:[
                    {
                        title:'home',
                        to: '/'
                    },
                    {
                        title:"search",
                        to: '/search' 
                    }
                ]
            }
        }
    }
</script>