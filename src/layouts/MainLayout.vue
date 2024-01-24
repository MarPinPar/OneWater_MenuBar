<!-- MainLayout.vue -->
<template>
  <q-layout>
    <main-navbar></main-navbar> <!-- Include the navigation bar component -->

    <q-page-container>
      <!-- Main content of the page -->
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import MainNavbar from 'components/MainNavBar.vue'

export default {
  name: 'MainLayout',
  components: {
    MainNavbar
  }
}
</script>
