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
                <template v-slot:activator="{props}" @click="router.push(`/cart`)">
                    <v-btn v-bind="props">All Category</v-btn>
                </template>
                <v-list>
                    <v-list-item>All Category</v-list-item>
                </v-list>
            </v-menu>
            <v-btn class="ml-5" variant="none">
                <v-icon>mdi-cart</v-icon>  
            </v-btn>
        </div>
        <v-breadcrumbs :items="items">
            <template v-slot:title="{ item }">
            {{ item.title }}
            </template>
        </v-breadcrumbs>
        <v-row>
            <v-col v-for="(company,i) in room.room.data" cols="6" sm="4" md="4" lg="2">
                <v-card @click="router.push(`/showroom/detail/id=${company.id}`)">
                    <v-img :height="200" cover :src="room.img[i]"></v-img>
                    <v-card-text>
                        <p class="text-center">{{ company.name }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { onMounted } from 'vue'
    import {showroom} from '../store/showroom'
    import {useRouter,RouterView} from 'vue-router'
    export default {
        components:{
            RouterView
        },
        setup(){

            const room = showroom()
            const router = useRouter()
            onMounted(async() => {
                await room.getRoom()
            })

            return {
                room,
                router
            }
        },
        data(){
            return{
                items:[
                    {
                        title: 'home',
                        disabled: false,
                        to: '/',
                    },
                    {
                        title: 'Showroom',
                        disabled: false
                    }
                ]
            }
        }
    }
</script>