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
            <v-col>
                <h1 class="text-center">No Cart </h1>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {useRouter} from 'vue-router'

    export default {
        setup () {

            const router = useRouter()

            return {
                router
            }
        },
        data(){
            return {
                items:[
                    {
                        title: 'home',
                        to: '/'
                    },
                    {
                        title: 'cart',
                    }
                ]
            }
        }
    }
</script>