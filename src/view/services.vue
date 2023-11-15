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
            <v-btn class="ml-5" variant="none" @click="router.push(`/cart`)">
                <v-icon>mdi-cart</v-icon>  
            </v-btn>
        </div>
        <v-breadcrumbs class="px-0" :items="items">
            <template v-slot:title="{ item }">
            {{ item.title }}
            </template>
        </v-breadcrumbs>
        <v-row>
            <v-col cols="12">
                <h1 class="text-h6 text-orange">About Service</h1>
            </v-col>
            <v-col cols=12>
                <v-card>
                    <v-tabs v-model="tabs">
                        <v-tab class="text-body-1" value="vision">Vision</v-tab>
                        <v-tab class="text-body-1" value="Facilities">Facilities</v-tab>
                        <v-tab class="text-body-1" value="serviceproviding">Service Providing</v-tab>
                    </v-tabs>
                    <v-card-text class="">
                        <v-window v-model="tabs">
                            <v-window-item class="text-body-1" value="vision">
                                At KOFI, we recognize that coffee is a vital part of all our customers business, that is why we have a dedicated team of fully qualified technicians who are professionals in the service and maintenance of espresso coffee machines. Our technicians are available to our customers 24 hours a day, 7 days a week from 7 AM to 10 PM .
                            </v-window-item>
                            <v-window-item class="text-body-1" value="Facilities">
                                We understand how important and frustrating it is when your coffee machines break down, that is why our technician are at service 24 hours a day. They are responsive and will try to attain to our customer request ASAP. If machine cannot be repaired onsite, Kofi will replace a standby machine to minimize the effect of business interruption.
                            </v-window-item>
                            <v-window-item class="text-body-1" value="serviceproviding">
                                To ensure coffee consistency and minimize breakdown, our dedicated teams of technicians are schedule to visit your coffee shop at least once a month. Check up includes:
                                <ul>
                                    <li>- Check Steam Wand</li>
                                    <li>- Water Temperature</li>
                                    <li>- Coffee Temperature</li>
                                    <li>- Pump Pressure</li>
                                    <li>- Grinder</li>
                                    <li>- Dosage</li>
                                    <li>- Coffee Flow</li>
                                    <li>- Brewing Unit</li>
                                    <li>- Group Head and Handles</li>
                                    <li>- Clean & Chemically Cleanse</li>
                                    <li>- Coffee Machine</li>
                                </ul>
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-for="services in service.service">
            <v-col v-for="(serve,i) in services" cols="6" lg="3">
                <v-card variant="outlined" color="orange" class="pa-4" rounded="xl" @click="router.push(`/service/service-package/id=${serve.id}`)">
                    <v-img :src="service.img[i]"></v-img>
                    <v-card-text>
                        <p class="text-center text-body-1 text-orange">{{ serve.name }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <RouterView />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { onMounted } from 'vue'
    import {services} from '../store/services'
    import {RouterView,useRouter} from 'vue-router'
    export default {
        components:{
            RouterView
        },
        setup(){
            const service = services()
            const storeService = async () => {
                await service.getService()
            }   
            const router = useRouter()
            onMounted(()=>{
                storeService()
            })
            return{
                service,
                router
            }
        },
        data() {
            return {
                items: [
                    {
                        title: 'home',
                        disabled: true,
                        to: '/',
                    },
                    {
                        title: 'SERVICE',
                        disabled: true
                    },
                    {
                        title: 'Service Package',
                        disabled: false
                    }
                ],
                tabs:null,
            }
        }
    }
</script>