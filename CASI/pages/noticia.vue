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
      <v-main class="d-flex justify-center bg-deep-purple-darken-3 h-100">
        <!------------------------------------------ Menu Lateral ----------------------------------------------------------->
        <v-card class="w-100 h-100">
          <v-layout>
            
            <v-navigation-drawer color="#0b011d" v-model="menu_lateral.drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
              <v-list :items="menu_lateral.items" ></v-list>
            </v-navigation-drawer>
            <v-main  class="bg-deep-purple-darken-3">

              <v-container class="pa-1 bg-red h-screen my-5 bg-deep-purple-darken-1 rounded-lg">
                <v-row>
                  <v-col cols="8" class=" bg-transparent">
                    <v-card
                    class="ma-auto rounded-lg bg-transparent elevation-0"
                    
                  > 
                    <v-card-title class="text-h3">Fim da Greve</v-card-title>
                    <v-card-subtitle class="pb-5">
                      Greve finalmente termina...
                    </v-card-subtitle>
                    <v-img
                      class="align-end text-white bg-deep-purple-darken-1"
                      max-height="400"
                      src="https://crn1.com.br/wp-content/uploads/2024/06/fim-da-Greve.jpg"
                      
                    >
                      
                    </v-img>

                    

                    <v-card-text class="text-h6">
                      <div class="mb-5">Cabou a greve, cabou a greve, cabou a greve, cabou a greve, cabou a greve, cabou a greve, cabou a greve
                        , cabou a greve, cabou a greve, cabou a greve, cabou a greve, cabou a greve, cabou a greve, cabou a greve, cabou a greve
                        , cabou a greve, cabou a greve, cabou a greve, cabou a greve, cabou a greve, cabou a greve, cabou a greve, cabou a greve.
                      </div>

                      <div class="mb-5">Voltou as aulas, voltou as aulas, voltou as aulas, voltou as aulas, voltou as aulas, voltou as aulas, voltou as aulas, voltou as aulas,
                        voltou as aulas, voltou as aulas, voltou as aulas, voltou as aulas, voltou as aulas, voltou as aulas, voltou as aulas, voltou as aulas,
                        voltou as aulas, voltou as aulas, voltou as aulas, voltou as aulas, voltou as aulas, voltou as aulas, voltou as aulas, voltou as aulas. </div>
                    </v-card-text>

                    <v-card class="mx-auto" max-width="400">
                      <v-card-title>
                        O que achou da noticia?
                      </v-card-title>
                      <v-card-text>
                        <v-radio-group >
                          <v-radio label="Otima" value="otima"></v-radio>
                          <v-radio label="Boa" value="boa"></v-radio>
                          <v-radio label="Mais ou menos" value="maisoumenos"></v-radio>
                          <v-radio label="Ruim" value="ruim"></v-radio>
                          <v-radio label="Pessima" value="pessimaim"></v-radio>
                        </v-radio-group>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" @click="submitVote">Votar</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-card>


                  </v-col>
                  <v-col class="">
                    
                    
                      <v-card class="my-4 mr-2 text-white" color="deep-purple-lighten-1" >
                        <v-card-actions>
                          <v-list-item class="w-100">
                            <template v-slot:prepend>
                              <v-avatar
                                color="grey-darken-3"
                                image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                              ></v-avatar>
                            </template>

                            <v-list-item-title>Jovem Interessado</v-list-item-title>

                            <v-list-item-subtitle>Aluno</v-list-item-subtitle>

                            <template v-slot:append>
                              <div class="justify-self-end">
                                <v-btn icon="mdi-thumb-up"> </v-btn>

                                <span class="subheading me-2">3</span>
                              </div>
                            </template>
                          </v-list-item>
                        </v-card-actions>

                        <v-card-text class="text-h5 py-2"> Que fato interessante </v-card-text>
                      </v-card>

                      <v-card class="my-4 mr-2 text-white" color="deep-purple-lighten-1" >
                        <v-card-actions>
                          <v-list-item class="w-100">
                            <template v-slot:prepend>
                              <v-avatar
                                color="grey-darken-3"
                                image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                              ></v-avatar>
                            </template>

                            <v-list-item-title>Outro Jovem Interessado</v-list-item-title>

                            <v-list-item-subtitle>Aluno</v-list-item-subtitle>

                            <template v-slot:append>
                              <div class="justify-self-end">
                                <v-btn icon="mdi-thumb-up"> </v-btn>

                                <span class="subheading me-2">1</span>
                              </div>
                            </template>
                          </v-list-item>
                        </v-card-actions>

                        <v-card-text class="text-h5 py-2"> Concordo </v-card-text>
                      </v-card>

                      <v-card class="my-4 mr-2 text-white" color="deep-purple-lighten-1" >
                        <v-card-actions>
                          <v-list-item class="w-100">
                            <template v-slot:prepend>
                              <v-avatar
                                color="grey-darken-3"
                                image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                              ></v-avatar>
                            </template>

                            <v-list-item-title>Adulto Interessado</v-list-item-title>

                            <v-list-item-subtitle>Professor</v-list-item-subtitle>

                            <template v-slot:append>
                              <div class="justify-self-end">
                                <v-btn icon="mdi-thumb-up"> </v-btn>

                                <span class="subheading me-2">78</span>
                              </div>
                            </template>
                          </v-list-item>
                        </v-card-actions>

                        <v-card-text class="text-h5 py-2"> Sim </v-card-text>
                      </v-card>


                      <v-form class="mr-2">
                        
                          
                           
                              <v-text-field
                              label="Escreva um comentário"></v-text-field>
                              <v-btn class="mt-n7 ">Enviar</v-btn>
                            
                          
                        
                      </v-form>
                    
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
  