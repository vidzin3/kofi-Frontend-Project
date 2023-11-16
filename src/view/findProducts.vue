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
            <v-btn class="ml-5" variant="none" @click="router.push(`/cart`)" icon>
                <v-badge :content="cart.totalItem()" color="red">
                    <v-icon>mdi-cart</v-icon>
                </v-badge> 
            </v-btn>
        </div>
        <v-breadcrumbs :items="items">
            <template v-slot:title="{ item }">
            {{ item.title }}
            </template>
        </v-breadcrumbs>
        <div v-if="loading" class="text-center">
            <v-progress-circular indeterminate></v-progress-circular>
        </div>
        <v-row v-else>
            <v-col v-for="store in findproducts.findpro1.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in findproducts.findpro2.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in findproducts.findpro3.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in findproducts.findpro4.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in findproducts.findpro5.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in findproducts.findpro6.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in findproducts.findpro7.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in findproducts.findpro8.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in findproducts.findpro9.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in findproducts.findpro10.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in findproducts.findpro11.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in findproducts.findpro12.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in findproducts.findpro13.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in findproducts.findpro14.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in findproducts.findpro15.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in findproducts.findpro16.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in findproducts.findpro17.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in findproducts.findpro18.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in findproducts.findpro19.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)">
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in findproducts.findpro20.data" cols="6" lg="3">
                <v-card @click="router.push(`/product/${store.mainCategory.name}/${store.id}`)"> 
                    <v-img :width="120 " class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-body-2 text-orange">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="store in findproducts.findpro21.data" cols="6" lg="3">
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
    import { watch,onMounted,ref } from 'vue'
    import {findPro} from '../store/Finder'
    import {useRoute, useRouter} from 'vue-router'
    import { useCart } from '../store/cart'

    export default {
        setup(){
            const findproducts = findPro()
            const route = useRoute()
            const router = useRouter()
            const loading = ref(true)
            const cart = useCart()

            watch(()=> route.params.text,
                async (newText) => {
                    loading.value = true
                    try{
                        findproducts.getProduct1(newText.toLocaleString())
                        findproducts.getProduct2(newText.toLocaleString())
                        findproducts.getProduct3(newText.toLocaleString())
                        findproducts.getProduct4(newText.toLocaleString())
                        findproducts.getProduct5(newText.toLocaleString())
                        findproducts.getProduct6(newText.toLocaleString())
                        findproducts.getProduct7(newText.toLocaleString())
                        findproducts.getProduct8(newText.toLocaleString())
                        findproducts.getProduct9(newText.toLocaleString())
                        findproducts.getProduct10(newText.toLocaleString())
                        findproducts.getProduct11(newText.toLocaleString())
                        findproducts.getProduct12(newText.toLocaleString())
                        findproducts.getProduct13(newText.toLocaleString())
                        findproducts.getProduct14(newText.toLocaleString())
                        findproducts.getProduct15(newText.toLocaleString())
                        findproducts.getProduct16(newText.toLocaleString())
                        findproducts.getProduct17(newText.toLocaleString())
                        findproducts.getProduct18(newText.toLocaleString())
                        findproducts.getProduct19(newText.toLocaleString())
                        findproducts.getProduct20(newText.toLocaleString())
                        findproducts.getProduct21(newText.toLocaleString())
                    }catch(error){
                        console.log(error)
                    }finally{
                        loading.value = false
                    }
                }  
            )

            const items = [
                {
                    title:'home',
                    to: '/'
                }
            ]

            const searchFill = ref("")

            const performSearch = () => {
                if(searchFill.value == ""){
                    return router.push(`/search`)
                }
                router.push(`/search/search=${searchFill.value}`)
            }

            onMounted(async () => {
            })

            return {
                route,
                items,
                findproducts,
                router,
                performSearch,
                searchFill,
                loading,
                cart
            }
        }
    }
</script>