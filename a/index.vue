<template>
    <v-app>
      <v-app-bar app color="#2d057e">
        <v-row  cols="12" class="d-flex justify-space-between ">
          <v-col cols="1">
            <v-img
                :height="50"
                src="/casi_logo.jpg"
                class="mt-3  bg-red"
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
  
  
  