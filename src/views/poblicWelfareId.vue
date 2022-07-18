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
  <!-- [Start]Content  -->
  <section class="content">
    <div class="content-common">
      <div class="content-product">
        <div class="img-block">
          <a href="">
            <img :src="typeFilter.testImg"/>
          </a>
        </div>
        <div class="content-block">
          <h6>高雄市小港區</h6>
          <h5>台灣關愛基金會-日光循環公益專案 (高雄大港28號)</h5>
          <div class="hr"></div>
          <p class="description"></p>
          <div class="icons-link">
            <div class="share">
              分享至:
              <a href=""><i></i></a>
              <a href=""><i></i></a>
              <a href=""><i></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-detail"></div>
  </section>
  <!-- [End]  -->
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
        console.log(res, 'success')
        this.product = res.data.data[0]
        this.typeFilter = res.data.data[0]
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
