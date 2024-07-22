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
      <v-card class="w-100 h-100">
        <v-layout>
          
          <v-navigation-drawer color="#0b011d" v-model="menu_lateral.drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
            <v-list :items="menu_lateral.items" ></v-list>
          </v-navigation-drawer>
          <v-main  class="bg-deep-purple-darken-3">
            <v-container class="pa-1">

           
            <v-row class="h-100 ma-0">
          <v-col cols="6" class="flex">
            <!------------------------------------------ Carrosel ---------------------------------------------->
            <v-carousel show-arrows="hover" class="rounded-lg h-100 elevation-0" style="max-height: 830px; min-height: 830px;" cycle>
              <v-carousel-item src="/img/cine.jpeg" cover>
                <v-btn class="h-100 w-100" color="#FFFFFF00"></v-btn>
              </v-carousel-item>
              <v-carousel-item src="/img/casi_logo_hd.jpg" cover>
                <v-btn class="h-100 w-100" color="#FFFFFF00"></v-btn>
              </v-carousel-item>
              <v-carousel-item src="/img/geek.jpg" cover>
                <v-btn class="h-100 w-100" color="#FFFFFF00"></v-btn>
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <!------------------------------------------ Cards Noticias ---------------------------------------------->
          <v-col cols="6" class="h-80">
            <v-card class="bg-deep-purple-darken-3 ma-n1 flat elevation-0 " style="max-height: 830px;" >
              <v-container fluid>
                <v-row dense>
                  <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                    <v-card class="h-100 w-100" @click="()=>{console.alert('clicavel')}" :to="{ path: '/noticia' }">
                      <v-img :src="card.src" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover>
                        <v-card-title class="text-white" v-text="card.title"></v-card-title>
                      </v-img>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
          </v-main>
        </v-layout>
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
const cards = [
  { title: 'Greve :D', src: 'https://apeoc.org.br/wp-content/uploads/2016/04/Greve.Geral_.banner.SITE_noticia2p.jpg', flex: 6 },
  { title: 'Frieren Anime do Ano', src: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/bcc213e8825420a85790049366d409fd.jpe', flex: 6 },
  { title: 'RU Funcionando', src: 'https://upload.wikimedia.org/wikipedia/en/1/1b/DotRu_domain_logo.png', flex: 6 },
  { title: 'Onibus Tbm :D', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNUSGBLr4GUHcTIduyUOq72uGiFO8nLFhTQ&s', flex: 6 },
  { title: 'RU Funcionando', src: 'https://upload.wikimedia.org/wikipedia/en/1/1b/DotRu_domain_logo.png', flex: 6 },
  { title: 'Onibus Tbm :D', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNUSGBLr4GUHcTIduyUOq72uGiFO8nLFhTQ&s', flex: 6 },
  { title: 'RU Funcionando', src: 'https://upload.wikimedia.org/wikipedia/en/1/1b/DotRu_domain_logo.png', flex: 6 },
  { title: 'Onibus Tbm :D', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNUSGBLr4GUHcTIduyUOq72uGiFO8nLFhTQ&s', flex: 6 },
  
];

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
