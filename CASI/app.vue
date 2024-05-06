<template>
  <NuxtLayout>
    <v-app>
      <v-app-bar :elevation="2">
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title class="text-center">CASI</v-app-bar-title>
      </v-app-bar>
      
      <v-card>
        <v-layout>
          <v-navigation-drawer
            v-model="drawer"
            temporary
            class="pt-15"
          >
            <v-list density="compact" nav>
              <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
              <v-list-item prepend-icon="mdi-forum" title="Contatos Diretorias" value="contacts"></v-list-item>
              <v-list-item prepend-icon="mdi-information" title="Noticias" value="news"></v-list-item>
            </v-list>
          </v-navigation-drawer>

          <v-main style="height: 615px">
            <v-container class="mt-16 bg-red">
              <v-row class="flex">
                <v-col>
                  <v-carousel class="">
                    <v-carousel-item
                      v-for="(card, index) in cards"
                      :key="index"
                      :src="card.src"
                      cover
                    ></v-carousel-item>
                  </v-carousel>
                </v-col>
                <v-col>
                  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="231px"
              cover
            >
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
    </v-app>
  </NuxtLayout>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      cards: [
        { title: 'CineCasi', src: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/02/19/520536786-wbokypsjuncergumc3w2jnd2ue.jpg', flex: 6 },
        { title: 'Greve', src: 'https://apeoc.org.br/wp-content/uploads/2016/04/Greve.Geral_.banner.SITE_noticia2p.jpg', flex: 6 },
        { title: 'Camisas', src: 'camisa.jpg', flex: 6 },
        { title: 'Eleições', src: 'eleicao.jpg', flex: 6 },
      ],
    };
  },
};
</script>
