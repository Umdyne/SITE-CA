<template>
    <v-app>
      <!----------------------------- Barra Superior ----------------------------------------->
      <v-app-bar color="#0b011d">
        <v-row class="d-flex justify-space-between">
          <v-col cols="4">
            <v-btn class="h-80 ma-5" icon="" :ripple="false" @click.stop="menu_lateral.drawer = !menu_lateral.drawer">
              <v-img src="/img/casi_logo.jpg" cover :width="80"></v-img>
            </v-btn>
          </v-col>
          <v-col cols="4">
            <v-card class="mx-auto bg-transparent" max-width="400">
              <v-card-text>
                <v-text-field label="Pesquisar" class="mt-5"></v-text-field>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4" class="d-flex ma-auto justify-end">
            <v-btn class="h-10 ma-5 border b-deep-purple-darken-3" icon="" :to="{ path: '/login' }" :ripple="false">
              <v-img src="/img/logoPerfilB.png" cover :width="40" class="border rounded-xl"></v-img>
            </v-btn>
          </v-col>
        </v-row>
      </v-app-bar>
  
      <!------------------------------------------ Main ----------------------------------------------------------->
      <v-main class="d-flex justify-center bg-deep-purple-darken-3">
        <!------------------------------------------ Menu Lateral ----------------------------------------------------------->
        <v-card class="w-100 h-100 bg-deep-purple-darken-3">
         
            
            <v-navigation-drawer color="#0b011d" v-model="menu_lateral.drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
              <v-list :items="menu_lateral.items" ></v-list>
            </v-navigation-drawer>
          
              <v-container class="pa-1 ">

              </v-container>
          </v-card>  
      </v-main>
  
      <v-footer app color="#0b011d" :height="40">
        <!-- Footer content goes here -->
      </v-footer>
    </v-app>
  </template>
  
  
  <script setup>
  import { ref, reactive, watch } from 'vue';
  
  // Definição das referências
  const tab = ref();
  
  // Definição do array de cartões
  
  
  // Definição do menu lateral
  const menu_lateral = reactive({
    drawer: false,
    group: null,
    items: [
      { title: 'Inicio', value: 'foo' },
      { title: 'Cardapio RU', value: 'bar' },
      { title: 'Campeonatos', value: 'fizz' },
      { title: 'CINECasi', value: 'buzz' },
      { title: 'Historico Noticias', value: 'opa' },
    ],
  });
  
  // Observador para a mudança de grupo
  watch(() => menu_lateral.group, () => {
    menu_lateral.drawer = false;
  });
  </script>
  