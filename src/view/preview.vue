<template>
    <v-container fluid>
        <div class="d-none">
            {{ getRoute }}
        </div>
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
            <v-btn class="ml-5" variant="none" @click="router.push(`/cart`)">
                <v-icon>mdi-cart</v-icon>  
            </v-btn>
        </div>
        <v-breadcrumbs :items="items">
            <template v-slot:title="{ item }">
            {{ item.title }}
            </template>
        </v-breadcrumbs>
        <v-row v-if="storePre">
            <v-col cols="12" lg="6" md="6">
                <v-card variant="tonal">
                    <v-img :height="300" :src="`https://application-media.kofi.com.kh/${storePre.imageUrl}`"></v-img>
                </v-card>
            </v-col>
            <v-col cols=12 lg="6" md="6">
                <p class="text-h6">{{ storePre.name }}</p>
                <div class="d-flex text-orange text-body-1">
                    <v-icon icon="mdi-star"></v-icon>
                    <p>{{ storePre.totalRates }} ({{ storePre.avgRates }} Reviews)</p>
                </div>
                <div class="my-4 d-flex align-center">
                    <h1 class="text-h5 text-orange mr-10">{{ storePre.currency }} {{ storePre.prices.priceAfterDiscount.toFixed(2) }}</h1>
                    <v-item-group
                        selected-class="bg-primary"
                        multiple
                    >
                        <v-item v-slot="{ isSelected, toggle }">
                            <v-icon @click="toggle" :icon="isSelected ? 'mdi-heart' : 'mdi-heart-outline'"></v-icon>
                        </v-item>
                    </v-item-group>
                    <!-- <v-item-group multiple selected-class="bg-purple">
                        <v-item
                        v-for="n in 1"
                        :key="n"
                        v-slot="{ selectedClass, toggle }"
                        >
                            <v-chip
                                :class="selectedClass"
                                @click="toggle"
                            >
                                <v-icon :icon="isSelected ? 'mdi-heart' : 'mdi-heart-outline'"></v-icon>
                            </v-chip>
                        </v-item>
                    </v-item-group> -->
                </div>
                <div v-for="option in storePre.variantOptions" :key="option.id">
                    <h1 class="text-h5">{{ option.text }}:</h1>
                    <v-chip-group filter>
                        <v-chip v-for="chip in option.optionValues" class="text-body-1" @click="point(chip.sortOrder)">{{ chip.text }}</v-chip>
                    </v-chip-group>
                </div>
                <div class="d-flex justify-space-between w-50 py-1">
                    <p>Brand</p>
                    <p>{{ storePre.brand.name }}</p>
                </div>
                <v-divider class="w-50"></v-divider>
                <div class="d-flex justify-space-between w-50 py-1">
                    <p>Points</p>
                    <p>{{ call }}</p>
                </div>
                <v-divider class="w-50"></v-divider>
                <div class="d-flex justify-space-between w-50 py-1">
                    <p>Quantity</p>
                    <p>Available</p>
                </div>
                <v-divider class="w-50"></v-divider>
                <div class="d-flex justify-space-between w-50 py-1">
                    <p>Shipping</p>
                    <p>Available</p>
                </div>
                <v-divider class="w-50"></v-divider>
                <div class="mt-4">
                    <h1 class="text-subtitle-1">description</h1>
                    <v-card variant="tonal">
                        <v-card-text>
                            <p class="text-subtitle-1">{{ storePre.description }}</p>
                        </v-card-text>
                    </v-card>
                </div>
                <div class="mt-4">
                    <h1 class="text-subtitle-1">specification</h1>
                    <v-card variant="tonal">
                        <v-card-text>
                            <p class="text-subtitle-1" v-html="storePre.specification"></p>
                        </v-card-text>
                    </v-card>
                </div>
                <div class="d-flex align-center w-100 mt-3">
                    <div class="d-flex flex-column w-100">
                        <p class="text-subtitle-1">Quantity</p>
                        <v-text-field label="Quantity" variant="solo-inverted"></v-text-field>
                    </div>
                    <div class="w-100 pa-3">
                        <v-btn class="w-100 text-button text-white" color="orange">Add to cart</v-btn>
                    </div>
                </div>
                <v-card variant="tonal">
                    <v-card-text class="d-flex align-center justify-space-between">
                        <p>Customer Reviews</p>
                        <v-btn variant="text">Add a review</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <div class="mt-4">
            <h1 class="text-subtitle-1">More Product from KOFI</h1>
            <v-row>
                <v-col v-for="review in useStore.review.data" cols="6" lg="3" md="4" sm="4">
                    <v-card @click="router.push(`/product/${review.mainCategory.name}/${review.id}`)" :elevation="3">
                        <v-img :height="150" :src="`https://application-media.kofi.com.kh/${review.imageUrl}`"></v-img>
                        <v-card-text>
                            <p class="text-caption">{{ review.name }}</p>
                            <p class="text-orange text-body-2">${{ review.prices.priceAfterDiscount.toFixed(2) }}</p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script>
    import {accessory} from '../store/accessory'
    import {useProducts} from '../store/store'
    import {useRoute,useRouter} from 'vue-router'
    import {computed, ref,watch,onMounted} from 'vue'

    export default {
        setup(){
            const route = useRoute()
            const router = useRouter()
            const useStore = accessory()
            const productor = useProducts()
            const storePre = ref(null)
            const call = ref(null)
            const storeRoute = ref(null)

            const getRoute = computed(async ()=> {
                try{
                    await useStore.reviewProduct(route.params.id)
                }catch(error){
                    console.log(error)
                }
            })

            onMounted(async () => {
                await productor.getCategory()
            })

            watch(()=>route.params.id,
                async (newId) => {
                    try{
                        await useStore.getById(newId)
                        storePre.value = useStore.items.data
                    }catch(error){
                        console.log(error)
                    }
                },
                {
                    immediate:true
                }      
            )
            watch(()=> route.params.name,
                async (newName) => {
                    try{
                        await productor.getCategory()
                        storeRoute.value = productor.products.data.filter(text => text.slug === newName)
                    }catch(error){
                        console.log(error)
                    }
                },
                {
                    immediate : true
                }
            )

            const point = (shortOr) => {
                call.value = shortOr
            }

            const items = [
                {
                    title:'home',
                    to: '/'
                },
                {
                    title:`${route.params.name}`
                },
                {
                    title:`${route.params.id}`
                }
            ]


            return{
                route,
                router,
                storePre,
                items,
                point,
                call,
                getRoute,
                useStore,
                storeRoute
            }
        }
    }
</script>