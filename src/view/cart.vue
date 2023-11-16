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
        <v-row v-if="cart.cart.length > 0">
            <v-col>
                <v-table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>image</th>
                            <th>Quantity</th>
                            <th>Remove</th>
                            <th>Buy</th>
                        </tr>
                    </thead>
                    <tbody v-for="(carts,i) in cart.cart">
                        <tr>
                            <td>{{ carts.name }}</td>
                            <td>
                                <v-avatar :image="`https://application-media.kofi.com.kh/${carts.imageUrl}`" rounded="0" size="80"></v-avatar>
                            </td>
                            <td>{{ cart.counting[i] }}</td>
                            <td>
                                <v-btn @click="cart.deteleCart(carts.id)">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </td>
                            <td>
                                <v-btn color="green">BUY</v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
        <v-row v-else>
            <v-col>
                <h1 class="text-center">No Cart </h1>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {useRouter} from 'vue-router'
    import {useCart} from '../store/cart'
    import { VDataTable } from 'vuetify/labs/VDataTable'

    export default {
        components:{
            VDataTable
        },
        setup () {

            const cart = useCart()
            const router = useRouter()

            return {
                router,
                cart,
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