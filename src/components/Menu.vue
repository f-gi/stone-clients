<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="custom-drawer">
      <v-list>
        <v-list-item v-for="route in routes" :key="route.path" link>
          <v-list-item-title class="custom-list-item-title">
            <router-link :to="route.path" class="custom-router-link">
              {{ route.name }}
            </router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const routes = [
  { path: '/', name: 'Home' },
  { path: '/new-client', name: 'New Client' },
  { path: '/products', name: 'Products' },
  { path: '/new-product', name: 'New Product' },
]

const toggleDrawer = () => {
  drawer.value = !drawer.value
}
</script>

<style scoped lang="scss">
.custom-router-link {
  color: #1967C0;
  text-decoration: none;
}

.custom-router-link:hover {
  color: #0056b3;
}

.custom-list-item-title {
  font-size: 16px;
}

.custom-drawer {
  height: 500px;
}
</style>
