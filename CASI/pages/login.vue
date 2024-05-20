<template>
    <v-app>
      <v-app-bar app color="#0a011c">
        
  
        <v-row  cols="12" class="d-flex justify-space-between ">
          <v-col cols="1">
            
            <v-img
                :height="50"
                src="/casi_logo.jpg"
                class="mt-3"
                >
            </v-img>
            
            
          </v-col>
          <v-col cols="3">
  
          </v-col>
          <v-col  cols="4" class="">
            <v-card
            class="mx-auto bg-transparent"
            max-width="400"
            >
              <v-card-text>
                <v-text-field
                  elevation="0"
                  :loading="loading"
                  append-inner-icon="mdi-magnify"
                  density="compact"
                  label="Pesquisar"
                  variant="solo"
                  hide-details
                  single-line
                  @click:append-inner="onClick"
                ></v-text-field>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="3" class="d-flex  ma-auto justify-end">
            <v-card>
                
            </v-card>
          </v-col>
          <v-col>
            <v-img
                :height="30"
                src="/user.png"
                class="mt-5"
                >
            </v-img>
          </v-col>
        </v-row>
      </v-app-bar>
  
      <v-main class="d-flex align-center bg-deep-purple-darken-3">
        <v-card width="50%" elevation="5" rounded="lg" class="mx-auto ">
      <v-tabs
        v-model="tab"
        align-tabs="center"
        color="deep-purple-accent-4"
      >
        <v-tab v-for="n in [1,2]" :key="n" :value="n">
          {{ n == 2 ? 'Cadastrar' : 'Entrar' }}
        </v-tab>
      </v-tabs>
  
      <v-tabs-window v-model="tab">
        <v-tabs-window-item
        v-for="n in [1,2]" :key="n"
          :value="n"
        >
          <v-container fluid>
            <v-row>
              <v-col cols="12" v-if="n === 1">
                <Form>
                  <v-text-field variant="outlined" label="Usuário"></v-text-field>
                  <v-text-field variant="outlined" type="password" label="Senha"></v-text-field>
                  <v-btn color="#4527A0">Entrar</v-btn>
                  <v-btn class="ml-4" color="#4527A0">Recuperar senha</v-btn>
                </Form>
                
              </v-col>
              <v-col cols="12" v-else>
                <Form>
                  <v-text-field variant="outlined" label="Nome"></v-text-field>
                  <v-text-field variant="outlined" label="Usuário"></v-text-field>
                  <v-text-field variant="outlined" type="password" label="Senha"></v-text-field>
                  <v-text-field variant="outlined" type="email" label="E-mail"></v-text-field>
                  <v-btn color="#4527A0">Cadastrar</v-btn>
                </Form>
              </v-col>
            </v-row>
          </v-container>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
        <!-- Page content goes here -->
      </v-main>
  
      <v-footer app color="primary">
        <!-- Footer content goes here -->
      </v-footer>
    </v-app>
  </template>
  
  <script setup>
  const tab = ref()
  </script>
  
  <style>
  /* Your styles go here */
  </style>
  
  
  