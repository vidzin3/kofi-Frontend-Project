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
        <v-breadcrumbs :items="items">
            <template v-slot:title="{ item }">
            {{ item.title }}
            </template>
        </v-breadcrumbs>
        <!-- <v-row>
            <v-col>
                <v-tabs
                v-model="tab"
                bg-color="primary"
                >
                    <v-tab @click="router.push(`/accademy/traning-course/id=51/subId=201`)" value="one">Item One</v-tab>
                    <v-tab @click="router.push(`/accademy/traning-course/id=52/subId=204`)" value="two">Item Two</v-tab>
                    <v-tab @click="router.push(`/accademy/traning-course/id=53/subId=207`)" value="three">Item Three</v-tab>
                    <v-tab @click="router.push(`/accademy/traning-course/id=54/subId=208`)" value="four">Item Three</v-tab>
                </v-tabs>

                <v-card-text>
                    <v-window v-model="tab">
                        <v-window-item  class="d-flex">
                            <v-row v-if="justStore">
                                <v-col v-for="train in justStore" class="d-flex" cols="6" lg="3" md="4">
                                    <v-card v-for="img in train.children" @click="router.push(`/accademy/traning-course/id=${train.id}/subId=${img.id}`)">
                                        <v-img :width="100" :src="`https://application-media.kofi.com.kh/${img.imageUrl}`"></v-img>
                                        <v-card-text>
                                            <p>{{ img.id }}</p>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </v-col>
        </v-row> -->
        <v-row>
            <v-col v-for="store in trainingStore.trainings.data" cols="6" lg="3" md="3" sm="4">
                <v-card variant="tonal" @click="router.push(`/accademy/traning-course/id=${store.id}/subId=${store.children[0].id}`)">
                    <v-img :width="150" class="ma-auto" :src="`https://application-media.kofi.com.kh/${store.imageUrl}`"></v-img>
                    <v-card-text>
                        <!-- <p>{{ store.id }}</p>
                        <p>{{ store.children[0].id }}</p> -->
                        <p class="text-center text-body-1 text-orange">{{ store.name }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-for="store in storeSelect">
            <v-col v-for="child in store.children" cols="12" lg="3">
                <v-card @click="router.push(`/accademy/traning-course/id=${child.parentId}/subId=${child.id}`)" class="d-flex align-center">
                    <v-img :height="100" :width="100" :src="`https://application-media.kofi.com.kh/${child.imageUrl}`"></v-img>
                    <v-card-text>
                        <p class="text-center text-body-1 text-orange">{{ child.name }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <div class="d-none">
            {{ route.params.id }} {{ route.params.subid }}
        </div>
        <v-row class="mt-5">
            <v-col>
                <RouterView />
            </v-col>
        </v-row>
    </v-container>
    
</template>

<script>
    import { computed, onMounted,ref,watch } from 'vue'
    import {training} from '../store/tranning'
    import {RouterLink,RouterView,useRouter,useRoute} from 'vue-router'
    import {useCart} from '../store/cart'
    export default {
        components:{
            RouterLink,
            RouterView,
        },
        setup(){
            const trainingStore = training()
            const cart = useCart()
            const router = useRouter()
            const route = useRoute()
            const trainingref = ref(null);
            const tab = ref(null)
            const storeSelect = ref(null)

            onMounted(async () => {
                await trainingStore.getApi()
                await trainingStore.SelectTrain()
                storeSelect.value = trainingStore.storeTrain.data.filter(index => index.id == route.params.id)
            })

            watch(()=> route.params.id,
                async (newSubId) => {
                    try{
                        await trainingStore.SelectTrain()
                        storeSelect.value = trainingStore.storeTrain.data.filter(index => index.id == newSubId)
                        console.log(storeSelect.value)
                        console.log(newSubId)
                    }catch(error){
                        console.log(error)
                    }
                }      
            )


            return{
                router,
                tab,
                route,
                trainingStore,
                trainingref,
                storeSelect,
                cart
            }
        },
        data(){
            return {
                items: [
                    {
                        title: 'home',
                        disabled: true,
                        to: '/',
                    },
                    {
                        title: 'Academy',
                        disabled: true
                    },
                    {
                        title: 'Training Course',
                        disabled: false
                    }
                ],
            }
        }
    }
</script>