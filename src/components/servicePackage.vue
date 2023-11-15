<template>
    <div class="d-none">
        {{ getroute }}
    </div>
    <v-container fluid>
        <v-row v-for="servic in service.serviceId">
            <v-col cols="12" lg="8">
                <h1 class="text-orange">{{ servic.name }}</h1>
                <p  class="text-orange">{{ servic.shortDescription }}</p>
                <p class="text-body-1 mt-5" v-html="servic.description"></p>
            </v-col>
            <v-col v-if="route.params.id == 101" v-for="n in service.imgUrl.filter(index => index.id === 1)" cols="12" lg="4">
                <v-img :src="n.img"></v-img>
            </v-col>
            <v-col v-if="route.params.id == 102" v-for="n in service.imgUrl.filter(index => index.id === 2)" cols="12" lg="4">
                <v-img :src="n.img"></v-img>
            </v-col>
            <v-col v-if="route.params.id == 103" v-for="n in service.imgUrl.filter(index => index.id === 3)" cols="12" lg="4">
                <v-img :src="n.img"></v-img>
            </v-col>
            <v-col v-if="route.params.id == 104" v-for="n in service.imgUrl.filter(index => index.id === 4)" cols="12" lg="4">
                <v-img :src="n.img"></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { computed, onMounted } from 'vue'
    import {services} from '../store/services'
    import {useRoute} from 'vue-router'
    export default {
        setup(){
            const route = useRoute()
            const service = services()
            const paseRoute = parseInt(route.params.id)
            const getroute = computed(() => {
                return service.getByRoute(route.params.id)
            })
            return {
                route,
                service,
                paseRoute,
                getroute
            }
        }
    }
</script>