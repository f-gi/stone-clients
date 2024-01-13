<template>
  <v-dialog max-width="400" v-model="isDialogVisible">
    <v-card>
      <v-card-title class="headline"> Confirm Delete </v-card-title>
      <v-card-text>
        Are you sure you want to delete product {{ productName }}?
      </v-card-text>
      <v-card-actions>
        <v-btn variant="tonal" @click="$emit('confirm-delete')">Delete</v-btn>
        <v-btn variant="tonal" @click="$emit('cancel-delete')">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'

const props = defineProps(['showDeleteModal', 'productName'])
const isDialogVisible = ref(props.showDeleteModal)

watch(
  () => props.showDeleteModal,
  (newValue) => {
    isDialogVisible.value = newValue
  },
)
</script>

<style scoped></style>
