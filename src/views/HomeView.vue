<template>
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/headerView.vue'
export default {
  name: 'HomeView',
  components: {
    Navbar
  }
}
</script>
