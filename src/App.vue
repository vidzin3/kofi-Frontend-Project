<template>
  <v-app>
    <v-navigation-drawer v-model="Menu">
      <v-list>
        <v-list-item>
          <v-img :width="100" class="ma-auto" src="https://shop.kofi.com.kh/_nuxt/img/logo.638b7a5.svg"></v-img>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item>
          <v-img :width="70" class="ma-auto" src="https://shop.kofi.com.kh/_nuxt/img/profileDefault.1920c41.png"></v-img>
        </v-list-item>
        <v-list-item>
          <h1 class="text-center">{{ Day }}</h1>
        </v-list-item>
      </v-list>
      <v-list active-color="red" class="pa-4">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-list-item class="rounded-xl" to="/">Home</v-list-item>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-expansion-panels class="mt-4" variant="accordion">
          <v-expansion-panel title="Product">
            <v-expansion-panel-text>
              <v-list-item v-for="category in store.products.data" class="pa-0" @click="router.push(`/product/category/${category.id}`)" style="cursor: pointer;"> {{ category.name }}</v-list-item>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-expansion-panels class="mt-4">
          <v-expansion-panel title="Services">
            <v-expansion-panel-text>
              <v-list-item v-for="ser in service.service" @click="router.push(`/service/service-package/id=101`)" style="cursor: pointer;">Service Package</v-list-item>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- <v-menu>
          <template v-slot:activator="{props}">
            <v-list-item active-color="red" class="rounded-xl" v-bind="props">Product</v-list-item>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in store.products"
              :key="index"
              >
              <v-list-item-title v-for="category in item" @click="router.push(`/product/category/${category.id}`)" class="mb-4" style="cursor: pointer;"> {{ category.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> -->
        <!-- <v-menu>
          <template v-slot:activator="{props}">
            <v-list-item active-color="red" class="rounded-xl" v-bind="props">Services</v-list-item>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title v-for="ser in service.service" @click="router.push(`/service/service-package/id=101`)" style="cursor: pointer;">Service Package</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> -->
        <!-- <v-menu>
          <template v-slot:activator="{props}">
            <v-list-item active-color="red" class="rounded-xl" v-bind="props">Academy</v-list-item>
          </template>
          <v-list>
            <v-list-item
            >
              <v-list-item-title @click="router.push(`/accademy/traning-course/id=51/subId=201`)" style="cursor: pointer;">Trainning Course</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> -->
        <v-expansion-panels class="mt-4">
          <v-expansion-panel title="Academy">
            <v-expansion-panel-text>
              <v-list-item @click="router.push(`/accademy/traning-course/id=51/subId=201`)" style="cursor: pointer;">Trainning Course</v-list-item>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-expansion-panels class="mt-4">
          <v-expansion-panel>
            <v-list-item active-color="red" class="rounded-xl" @click="router.push(`/showroom/id=${6}`)">Showroom</v-list-item>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click="Menu = !Menu"></v-app-bar-nav-icon>
      <v-app-bar-title class="d-flex justify-end text-body-1">Tel : 069 666 999 | 077 777 970
        <v-menu>
          <template v-slot:activator="{props}">
            <v-btn
              variant="tonal"
              color="primary"
              v-bind="props"
            >
            User
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-dialog :width="500">
                <template v-slot:activator="{props}">
                  <v-btn v-bind="props">SIGN-IN</v-btn>
                </template>
                <template v-slot:default="{isActive}">
                  <v-card class="px-4 py-10">
                    <v-img :width="150" class="ma-auto" src="https://shop.kofi.com.kh/_nuxt/img/logo.638b7a5.svg"></v-img>
                    <h1 class="text-center text-orange font-weight-bold">Sign in</h1>
                    <v-card-text>
                      <v-text-field
                        v-model="Email"
                        variant="outlined"
                        :rules="nameRules"
                        :counter="10"
                        label="Phone Number / Email / Card code"
                        hide-details
                        required
                      ></v-text-field>
                      <v-text-field
                        class="mt-7"
                        variant="outlined"
                        v-model="Password"
                        :rules="nameRules"
                        :counter="10"
                        label="Password"
                        hide-details
                        required
                      ></v-text-field>
                    </v-card-text>
                    <v-card-actions class="px-4">
                      <v-btn block color="white bg-orange" rounded="xl">Sign in</v-btn>
                    </v-card-actions>
                    
                    <!-- <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        text="Close Dialog"
                        @click="isActive.value = false"
                      ></v-btn>
                    </v-card-actions> -->
                  </v-card>
                </template>
              </v-dialog>
            </v-list-item>
            <v-list-item>
              <v-dialog :width="500">
                <template v-slot:activator="{props}">
                  <v-btn v-bind="props">SIGN-UP</v-btn>
                </template>
                <template v-slot:default="{isActive}">
                  <v-card class="px-4 py-10">
                    <v-img :width="150" class="ma-auto" src="https://shop.kofi.com.kh/_nuxt/img/logo.638b7a5.svg"></v-img>
                    <h1 class="text-center text-orange font-weight-bold">Sign Up with ecommerce</h1>
                    <v-card-text>
                      <v-text-field
                        v-model="FirstName"
                        variant="outlined"
                        :rules="nameRules"
                        :counter="10"
                        label="First Name"
                        hide-details
                        required
                      ></v-text-field>
                      <v-text-field
                        class="mt-7"
                        variant="outlined"
                        v-model="LastName"
                        :rules="nameRules"
                        :counter="10"
                        label="Last Name"
                        hide-details
                        required
                      ></v-text-field>
                      <v-combobox
                        class="mt-7"
                        label="Combobox"
                        variant="outlined"
                        :items="['Male','Female','other']"
                      ></v-combobox>
                      <v-text-field
                        variant="outlined"
                        v-model="Email"
                        :rules="nameRules"
                        :counter="10"
                        label="Email"
                        hide-details
                        required
                      ></v-text-field>
                      <v-text-field
                        class="mt-7"
                        variant="outlined"
                        v-model="PhoneNumber"
                        :rules="nameRules"
                        :counter="10"
                        label="Phone Number"
                        hide-details
                        required
                      ></v-text-field>
                      <v-text-field
                        class="mt-7"
                        variant="outlined"
                        v-model="Password"
                        :rules="nameRules"
                        :counter="10"
                        label="Password"
                        hide-details
                        required
                      ></v-text-field>
                      <v-text-field
                        class="mt-7"
                        variant="outlined"
                        v-model="CPassword"
                        :rules="nameRules"
                        :counter="10"
                        label="Confirm Password"
                        hide-details
                        required
                      ></v-text-field>
                    </v-card-text>
                    <v-card-actions class="px-4">
                      <v-btn block color="white bg-orange" rounded="xl">Register Now</v-btn>
                    </v-card-actions>
                    
                    <!-- <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        text="Close Dialog"
                        @click="isActive.value = false"
                      ></v-btn>
                    </v-card-actions> -->
                  </v-card>
                </template>
              </v-dialog>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
    <v-footer class="d-flex justify-end pa-0 flex-column">
      <div class="d-flex align-center w-100 justify-space-between">
        <div class="d-flex w-100 flex-column justify-center align-center">
          <div class="d-flex">
            <v-list-item class="text-black" href="https://shop.kofi.com.kh/terms.html">Term</v-list-item>
            <v-list-item class="text-black" href="https://shop.kofi.com.kh/policy.html">Privacy</v-list-item>
            <v-list-item class="text-black">CopyrightBy &copy; KOFI</v-list-item>
          </div>
          <div>
            <p>© 2023 KOFI Co., Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>

  import {RouterView,useRouter} from 'vue-router'
  import { useProducts} from './store/store'
  import { onMounted } from 'vue'
  import {services} from './store/services'

  export default {
    components:{
      RouterView
    },
    setup(){
      
      const router = useRouter()
      const store = useProducts()
      const service = services()

      const storeAll = async () =>{
        await store.getCategory()
        await service.getService()
      }
      onMounted(async () => {
        storeAll()
      })
      return{
        store,
        router,
        service
      }   
    },
    data(){
      return{
        Menu: null,
        Day: null,
        data:[
          "Product",
          "Services",
          "Academy",
          "Showroom"
        ]
      }
    },
    methods:{
      GetDay(){
        const date = new Date().getHours()
        if(date <= 11){
          this.Day = "good Morning"
        }else if(date >= 12 && date < 18){
          this.Day = "good Afternoon"
        }else if(date >= 18 && date < 20){
          this.Day = "good evening"
        }else{
          this.Day = "good Night"
        }
      }
    },
    mounted(){
      this.GetDay()
    }
  }
</script>