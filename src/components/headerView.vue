<style lang="scss" scoped>
	.logo {
		width: 100px;
	}
	.nav-link {
		font-size: 24px;
	}
</style>
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top" style="z-index: 1000;">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#"><img class="logo opacity-100" :src="solarLogo"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page" href="#">認識太陽人</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/news" class="nav-link" href="#">太陽人快報</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/performance" class="nav-link" href="#">全台電場分布</router-link>
        </li>
        <li class="nav-item">
          <router-link to="coupon" class="nav-link " href="#">邀請好友拿獎勵</router-link>
        </li>
      </ul>
    </div>
  </div>
    </nav>
</template>

<script>

export default {
  data () {
    return {
      solarLogo: require('../../public/images/social/partnerLogo4.png')
    }
  },
  methods: {

  },
  mounted () {
  }
}
</script>
