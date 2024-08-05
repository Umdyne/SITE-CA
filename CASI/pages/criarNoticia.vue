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
          <v-list>
            <v-list-item v-for="item in menu_lateral.items" :key="item.title" :to="item.to" @click="menu_lateral.drawer = false">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-container>
          <v-row justify="center">
            <v-col cols="12" lg="6" md="8" sm="10">
              <v-card ref="form">
                <v-card-text>
                  <v-text-field
                    ref="titulo"
                    v-model="titulo"
                    :error-messages="errorMessages"
                    :rules="[() => !!titulo || 'Campo obrigatório']"
                    label="Titulo da Noticia"
                    placeholder="Titulo"
                    required
                  ></v-text-field>
                  
                  <v-text-field
                    ref="subtitulo"
                    v-model="subtitulo"
                    label="SubTítulo"
                    placeholder="SubTítulo"
                  ></v-text-field>
                  
                  <v-textarea 
                    ref="noticia"
                    v-model="noticia"
                    :rules="[() => !!noticia || 'Campo obrigatório']"
                    label="Noticia"
                    placeholder="Texto principal da noticia"
                    required
                  ></v-textarea >
                  
                  <v-text-field
                    ref="autor"
                    v-model="autor"
                    :rules="[() => !!autor || 'Campo obrigatório']"
                    label="Autor"
                    placeholder="Nome do Autor"
                    required
                  ></v-text-field>
                  
                  <v-text-field
                    ref="linkImg"
                    v-model="linkImg"
                    label="Link da imagem"
                    placeholder="Link da imagem"
                    required
                  ></v-text-field>
                </v-card-text>
                
                <v-divider class="mt-12"></v-divider>
                
                <v-card-actions>
                  <v-btn variant="text" @click="()=>{console.alert('clicavel')}" :to="{ path: '/adm' }"> Cancelar </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" variant="text" @click="submit"> Criar </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>  
    </v-main>

    <v-footer app color="#0b011d" :height="40">
      <!-- Footer content goes here -->
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'

// Definição das referências
const tab = ref()

// Definição do menu lateral
const menu_lateral = reactive({
  drawer: false,
  group: null,
  items: [
    { title: 'Inicio', to: '/' },
    { title: 'Cardapio RU', to: '/cardapio' },
    { title: 'Campeonatos', to: '/campeonatos' },
    { title: 'CINECasi', to: '/cine' },
    { title: 'Historico Noticias', to: '/historico' },
  ],
})

// Observador para a mudança de grupo
watch(
  () => menu_lateral.group,
  () => {
    menu_lateral.drawer = false
  }
)

// Definição dos dados e métodos do formulário

</script>
