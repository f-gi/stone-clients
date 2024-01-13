<template>
  <v-dialog max-width="400" v-model="isDialogVisible">
    <v-card>
      <v-card-title class="headline">{{ dialogTitle }}</v-card-title>
      <v-card-text>{{ dialogText }}</v-card-text>
      <v-card-actions>
        <v-btn variant="tonal" @click="$emit('confirm')">Delete</v-btn>
        <v-btn variant="tonal" @click="$emit('cancel')">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'

const props = defineProps(['showModal', 'dialogTitle', 'dialogText'])
const isDialogVisible = ref(props.showModal)

watch(
  () => props.showModal,
  (newValue) => {
    isDialogVisible.value = newValue
  },
)

</script>

<style scoped></style>
