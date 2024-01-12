<template>
  <div>
    <h1>Lista de Clientes</h1>
    <v-container>
      <v-row>
        <v-col
          v-for="client in clients"
          :key="client.document"
          cols="12"
          md="6"
          lg="4"
        >
          <ClientItem :client="client" @toggle-status="handleToggleStatus" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import ClientItem from './partials/ClientItem.vue'
import { ref, watchEffect } from 'vue'
import { useClientsStore } from '@/store/clientsStore' 
const clientsStore = useClientsStore()
const clients = ref(clientsStore.clients)

const handleToggleStatus = (client) => {
  clientsStore.updateClient(client)
}

watchEffect(() => {
  clients.value = clientsStore.clients
})
</script>

<style scoped lang="scss"></style>
