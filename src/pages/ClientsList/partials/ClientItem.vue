<template>
  <v-card>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline text-h6 mb-1">
          {{ client.name }}
        </v-list-item-title>
        <div class="info-item">
          <strong>Document:</strong> {{ client.document }}
        </div>
        <div class="info-item">
          <strong>Phone:</strong> {{ client.phone }}
        </div>
        <div class="info-item">
          <strong>Email:</strong> {{ client.email }}
        </div>
        <div class="info-item">
          <strong>Active:</strong> {{ client.active ? 'Yes' : 'No' }}
        </div>
      </v-list-item-content>
      <v-card-actions>
        <v-btn @click="$emit('toggle-status', client.document)">
          {{ client.active ? 'Deactivate' : 'Activate' }}
        </v-btn>
      </v-card-actions>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    client: Object,
  },
  methods: {},
}
</script>

<style scoped></style>
