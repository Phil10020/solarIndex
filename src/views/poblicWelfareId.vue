<template>
  <!-- [Start]Banner  -->
  <section
    class="subpage-banner-image"
    :style="{ background: 'url(' + imgSrc + ')' }"
  >
    <div class="container text-white">
      <h4>BUYING</h4>
      <h1>買電廠</h1>
    </div>
  </section>
  <!-- [End]Banner  -->

  <!-- [Start]breadcrumbs-list  -->
  <section>
    <div class="navigation-item">
      <a href="index.aspx">首頁</a>
      <i class="bi bi-chevron-double-right"></i>
      <a href="#" class="">買電廠</a>
      <i class="bi bi-chevron-double-right"></i>
      <a href="#" class="">小額購買</a>
      <i class="bi bi-chevron-double-right"></i>
      <a href="#" class="active">testBannerId</a>
    </div>
  </section>
  <!-- [End]breadcrumbs-list  -->

  <!-- test  -->
  <div>
  {{ typeFilter }}
  </div>

</template>
<script>
export default {
  name: 'poblicWelfareId',
  data () {
    return {
      imgSrc: require('../../public/images/banner/product_banner.jpg'),
      product: [],
      currentFilter: '',
      countOfPage: 3,
      currentPage: 1,
      search: '',
      typeFilter: []
    }
  },
  methods: {
    getData () {
      this.$http.get('/singleData.json/').then((res) => {
        console.log(res, 'sucess')
        this.product = res.data.data
        this.typeFilter = res.data.data
      }).catch((err) => {
        console.log(err, 'error')
      })
    }
  },
  computed: {
    filterData () {
      return this.typeFilter
    }
  },
  mounted () {
    this.id = this.$route.params.post_id
    this.getData()
    console.log(this.$route.params.post_id)
  }
}
</script>
