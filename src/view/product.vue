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
        <div class="d-none">
            {{ getRoute }}
        </div>
        <!-- v-for="(store,i) in pro" -->
        <div v-if="loading" class="text-center">
            <v-progress-circular class="text-center"  indeterminate></v-progress-circular>
        </div>
        <v-row v-else v-for="cate in storeCate">
            <v-col v-for="store in accessoryPro.accessorys.data" cols="6" lg="3" md="4">
                <v-card @click="router.push(`/product/${cate.slug}/${store.id}`)" :elevation="1"> 
                    <v-img :height="150" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>  
                    <v-card-text>
                        <p class="text-body-2">{{ store.name }}</p>
                        <p class="text-orange text-body-2">${{ store.prices.priceAfterDiscount.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import {useRoute,useRouter} from 'vue-router'
    import {accessory} from '../store/accessory'
    import { computed, onMounted, ref, watch } from 'vue'
    import {useProducts} from '../store/store'
    import { useCart } from '../store/cart'
    import axios from 'axios'

    export default {
        setup() {
            const route = useRoute();
            const cart = useCart()
            const product = ref([]);
            const router = useRouter()
            const accessoryPro = accessory()
            const category = useProducts()
            const count = ref(null)
            const storeCate = ref(null)
            const loading = ref(true)
            const items = [
                {
                    title: 'home',
                    disabled: false,
                    to: '/',
                },
                {
                    title: 'product',
                },
                {
                    title: `${route.params.id}`
                }
            ];

            // const getRoute = computed(()=>{
            //     loading.value = false
            //     return accessoryPro.getAcc(route.params.id)
            // })
            
            // onMounted( async () => {
            //     await accessoryPro.getAcc(route.params.id)
            // })
            const getRoute = computed(async () => {
                try {
                    loading.value = true
                    await accessoryPro.getAcc(route.params.id)
                } catch (error) {
                    console.error('Error fetching data:', error)
                } finally {
                    loading.value = false
                }
            })

            onMounted( async () => {
                await category.getCategory()
                storeCate.value = category.products.data.filter(map => map.id == route.params.id)
            })
            watch(() => route.params.id ,
                async (newId) => {
                    try{
                        await category.getCategory()
                        storeCate.value = category.products.data.filter(map => map.id == newId)
                    }catch(error){
                        console.log(error)
                    }
                },
                {
                    immediate: true // call back function route
                }
            )

            return {
                route,
                product,
                items,
                getRoute,
                accessoryPro,
                count,
                loading,
                router,
                storeCate,
                cart
            };
        }
    }
</script>