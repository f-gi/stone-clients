<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>{{ isEditing ? 'Edit Client' : 'Create Client' }}</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="client.name"
            :rules="rules.name"
            label="Name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="client.phone"
            :rules="rules.phone"
            label="Phone"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="client.document"
            :rules="rules.document"
            label="Document"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="client.email"
            :rules="rules.email"
            label="Email"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-checkbox v-model="client.active" label="Active"></v-checkbox>
        </v-col>
        <v-col cols="12">
          <v-btn @click="saveClient" :disabled="!valid" color="primary">
            {{ isEditing ? 'Update Client' : 'Create Client' }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useClientsStore } from '@/store/clientsStore'
import { useRouter } from 'vue-router'

const clientsStore = useClientsStore()
const router = useRouter()
const isEditing = ref(false)

const valid = ref(false)
const client = ref({
  name: '',
  phone: '',
  document: '',
  email: '',
  active: false,
})

const rules = {
  name: [
    (value) => !!value || 'Name is required',
    (value) =>
      /^[a-zA-Z\s]{3,}$/.test(value) ||
      'Name must contain only letters and have a minimum length of 3',
  ],
  phone: [
    (value) => !!value || 'Phone is required',
    (value) =>
      /^[0-9]{10,11}$/.test(value) || 'Invalid phone format (99123456789)',
  ],
  document: [
    (value) => !!value || 'Document is required',
    (value) =>
      /^[0-9]{11}$/.test(value) || 'Invalid document format (11 digits)',
  ],
  email: [
    (value) => !!value || 'Email is required',
    (value) => /.+@.+\..+/.test(value) || 'Invalid email format',
  ],
}

const saveClient = () => {
  if (isEditing.value) {
    clientsStore.updateClient(client.value)
  } else {
    clientsStore.createClient(client.value)
  }
  resetClient()
  router.push('/')
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

onMounted(() => {
  const routeClientId = router.currentRoute.value.params.id
  if (routeClientId) {
    const existingClient = clientsStore.clients.find(
      (c) => c.id === routeClientId,
    )
    if (existingClient) {
      client.value = { ...existingClient }
      isEditing.value = true
    }
  }
})
</script>

<style scoped></style>
