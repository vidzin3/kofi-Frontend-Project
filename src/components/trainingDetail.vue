<template>
    <div class="d-none">
        {{ getRouteId }}
    </div>
    <v-row>
        <v-col v-for="train in trainings.trainingById" cols="12" lg="8" md="8">
            <v-card variant="tonal">
                <v-card-text>
                    <p class="text-orange text-h6">{{ train.name }}</p>
                    <p class="text-orange text-caption">{{ train.shortDescription }}</p>
                    <div class="mt-4">
                        <p class="text-h6" v-html="train.description"></p>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="orange">Book Training Course</v-btn>
                </v-card-actions>
            </v-card>          
        </v-col>
        <v-col v-for="train in trainings.trainingById" cols="12" lg="4" md="8">
            <v-img :src="`https://application-media.kofi.com.kh/${train.imageUrl}`"></v-img>
        </v-col>
    </v-row>
</template>

<script>
    import {useRoute} from 'vue-router'
    import {training} from '../store/tranning'
    import { computed, onMounted } from 'vue'
    export default {
        setup(){
            
            const route = useRoute()
            const trainings = training()
            const getRouteId = computed(()=>{
                return trainings.getById(route.params.subid)
            }) 
            onMounted(async()=>{
                await trainings.getApi()
            })
            return{ 
                route,
                trainings,
                getRouteId
            }
        }
    }
</script>