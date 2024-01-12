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

<script>
export default {
  data() {
    return {
      valid: false,
      client: {
        name: '',
        phone: '',
        document: '',
        email: '',
        active: false,
      },
      nameRules: [
        (value) => !!value || 'Name is required',
        (value) =>
          /^[a-zA-Z\s]{3,}$/.test(value) ||
          'Name must contain only letters and have a minimum length of 3',
      ],
      phoneRules: [
        (value) => !!value || 'Phone is required',
        (value) =>
          /^[0-9]{10,11}$/.test(value) ||
          'Invalid phone format (e.g., 99123456789)',
      ],
      documentRules: [
        (value) => !!value || 'Document is required',
        (value) => /^[0-9]{11}$/.test(value) || 'Invalid document format (11 digits)',
      ],
      emailRules: [
        (value) => !!value || 'Email is required',
        (value) => /.+@.+\..+/.test(value) || 'Invalid email format',
      ],
    }
  },
  methods: {
    createClient() {
      console.log('Creating client...', this.client)
      this.resetClient()
    },
    resetClient() {
      this.client = {
        name: '',
        phone: '',
        document: '',
        email: '',
        active: false,
      }
    },
  },
}
</script>

<style scoped></style>
