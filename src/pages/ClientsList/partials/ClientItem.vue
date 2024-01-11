<!-- ClientItem.vue -->

<template>
    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline text-h6 mb-1">{{ client.name }}</v-list-item-title>
            <v-list-item-subtitle>Document: {{ client.document }}</v-list-item-subtitle>
            <v-list-item-subtitle>Phone: {{ client.phone }}</v-list-item-subtitle>
            <v-list-item-subtitle>Email: {{ client.email }}</v-list-item-subtitle>
            <v-list-item-subtitle>Active: {{ client.active ? 'Yes' : 'No' }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-card-actions>
        <!-- <router-link :to="{ name: 'editarCliente', params: { id: client.document }}">Edit</router-link>
        <router-link :to="{ name: 'linkarProdutos', params: { id: client.document }}">Link Products</router-link> -->
        <v-btn  @click="$emit('toggle-status', client.document)">
          {{ client.active ? 'Deactivate' : 'Activate' }}
        </v-btn>
      </v-card-actions>
        </v-list-item>
      </v-list>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      client: Object, 
    },
    methods: {
  },
  };
  </script>
  
  <style scoped>
  </style>
  