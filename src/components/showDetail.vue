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
        <v-row>
            <v-col >
                <v-card v-for="rom in room.room" class="d-flex flex-wrap" variant="tonal">
                    <v-col lg="8" md="8" cols="12">
                        <v-card-text>
                            <p class="text-center text-h6 text-lg-h5 text-orange ma-auto">{{ rom.name }}</p>
                            <div class="text-center d-flex justify-center align-center text-orange text-body-1"> 0 
                                <v-icon v-for="n in 5" class="" icon="mdi-star-outline"></v-icon>
                                (0)
                            </div>
                        </v-card-text>
                        <v-card-text>
                            <p class="text-orange text-h5 text-center"># {{ rom.houseNo }},St {{ rom.street }} <span v-for="dist in rom.district">{{ dist }}</span> ,<span v-for="provinc in rom.province">{{ provinc }}</span>,<span v-for="country in rom.country">{{ country }}</span> Open {{ rom.workingDays }} {{ rom.openingHours }} {{ rom.closingHours }}</p>
                            <p class="text-orange text-h5 text-center">Email : {{ rom.email }}</p>
                        </v-card-text>
                    </v-col>
                    <v-col v-if="route.params.id == 6" lg="4" cols="12" md="4" sm="12">
                        <v-img :height="400" cover :src="room.img[0]"></v-img>
                    </v-col>
                    <v-col v-if="route.params.id == 4" lg="4" cols="12" md="4" sm="12">
                        <v-img :height="400" cover :src="room.img[1]"></v-img>
                    </v-col>
                    <v-col v-if="route.params.id == 3" lg="4" cols="12" md="4" sm="12">
                        <v-img :height="400" cover :src="room.img[2]"></v-img>
                    </v-col>
                    <v-col v-if="route.params.id == 2" lg="4" cols="12" md="4" sm="12">
                        <v-img :height="400" cover :src="room.img[3]"></v-img>
                    </v-col>
                    <v-col v-if="route.params.id == 1" lg="4" cols="12" md="4" sm="12">
                        <v-img :height="400" cover :src="room.img[4]"></v-img>
                    </v-col>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <div class="d-none">
        {{ getRoute }}
    </div>
</template>

<script>
    import {useRoute,useRouter} from 'vue-router'
    import {showroom} from '../store/showroom'
    import { computed } from 'vue'
    import { useCart } from '../store/cart'
    export default {
        setup(){
            const route = useRoute()
            const room = showroom()
            const router = useRouter()
            const cart = useCart()

            const getRoute = computed(()=>{
                return room.getRoomId(route.params.id)
            })

            return{
                route,
                getRoute,
                room,
                router,
                cart
            }
        },
        data(){
            return {
                items:[
                    {
                        title: 'home',
                        disable: true,
                        to: '/'
                    },
                    {
                        title: 'Showroom',
                        to: `/showroom/id=${6}`
                    },
                    {
                        title: 'Detail',
                    }
                ]
            }
        }
    }
</script>