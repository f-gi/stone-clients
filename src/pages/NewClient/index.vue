<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Create Client</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="client.name"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="client.phone"
            :rules="phoneRules"
            label="Phone"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="client.document"
            :rules="documentRules"
            label="Document"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="client.email"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-checkbox v-model="client.active" label="Active"></v-checkbox>
        </v-col>
        <v-col cols="12">
          <v-btn @click="createClient" :disabled="!valid" color="primary">
            Create Client
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'
import { useClientsStore } from '@/store/clientsStore' 

const valid = ref(false)
const client = ref({
  name: '',
  phone: '',
  document: '',
  email: '',
  active: false,
})

const nameRules = [
  (value) => !!value || 'Name is required',
  (value) =>
    /^[a-zA-Z\s]{3,}$/.test(value) ||
    'Name must contain only letters and have a minimum length of 3',
]

const phoneRules = [
  (value) => !!value || 'Phone is required',
  (value) =>
    /^[0-9]{10,11}$/.test(value) || 'Invalid phone format (e.g., 99123456789)',
]

const documentRules = [
  (value) => !!value || 'Document is required',
  (value) => /^[0-9]{11}$/.test(value) || 'Invalid document format (11 digits)',
]

const emailRules = [
  (value) => !!value || 'Email is required',
  (value) => /.+@.+\..+/.test(value) || 'Invalid email format',
]

const clientsStore = useClientsStore()

const createClient = () => {
  clientsStore.createClient(client.value)
  console.log('Creating client...', client.value)
  console.log('Clients after creation:', clientsStore.clients)
  resetClient()
}

const resetClient = () => {
  client.value = {
    name: '',
    phone: '',
    document: '',
    email: '',
    active: false,
  }
}
</script>

<style scoped></style>
