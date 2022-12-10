<template>
  <Navbar></Navbar>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/headerView.vue'
import Footer from '@/components/footerView.vue'
export default {
  name: 'HomeView',
  components: {
    Navbar,
    Footer
  }
}
</script>
