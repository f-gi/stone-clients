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
<script>
import ClientItem from './partials/ClientItem.vue'

export default {
  components: {
    ClientItem,
  },
  data() {
    return {
      clients: [
        {
          name: 'Client 1',
          document: 123456789,
          phone: 987654321,
          email: 'client1@email.com',
          active: true,
        },
        {
          name: 'Client 2',
          document: 987654321,
          phone: 123456789,
          email: 'client2@email.com',
          active: false,
        },
        {
          name: 'Client 3',
          document: 555555555,
          phone: 111111111,
          email: 'client3@email.com',
          active: true,
        },
        {
          name: 'Client 4',
          document: 999999999,
          phone: 888888888,
          email: 'client4@email.com',
          active: false,
        },
        {
          name: 'Client 5',
          document: 777777777,
          phone: 222222222,
          email: 'client5@email.com',
          active: true,
        },
        {
          name: 'Client 6',
          document: 444444444,
          phone: 666666666,
          email: 'client6@email.com',
          active: false,
        },
      ],
    }
  },
  methods: {
    handleToggleStatus(client) {
      console.log('Toggle Status:', client)
    },
  },
}
</script>

<style scoped lang="scss"></style>
