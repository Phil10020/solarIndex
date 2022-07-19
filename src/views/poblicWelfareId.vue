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
  <section id="poduct-detail-content">
    <div class="content-common">
      <div class="content-product d-flex">
        <div class="img-block">
          <a href="">
            <img :src="typeFilter.testImg" />
          </a>
        </div>
        <div class="content-block ps-md-4 d-flex flex-wrap">
          <div>
            <h6>高雄市小港區</h6>
            <h5>{{ typeFilter.title }}</h5>
            <div class="hr"></div>
            <p class="description">
              {{ typeFilter.content }}
            </p>
          </div>
          <div class="icons-link">
            <div class="share">
              分享至:
              <a href="#"><i class="bi bi-facebook facebook-color mx-1"></i></a>
              <a href="#"><i class="bi bi-line line-color mx-1"></i></a>
              <a href="#"><i class="bi bi-twitter twitter-color mx-1"></i></a>
            </div>
          </div>
        </div>
      </div>
      <ul class="info-content d-flex   justify-content-around">
        <li class="item">
          <p>投報率</p>
          <p><strong>8.69</strong>%</p>
          <p>(IRR <strong>6.05</strong>%)</p>
          <div class="icon-block">
            <i class="icon icon-ml bi bi-laptop"></i>
          </div>
        </li>
        <li class="item">
          <p>
            平均有效<br />
            日照時間
          </p>
          <p>
            <strong>3.5</strong>
            kwh
          </p>
          <div class="icon-block">
            <i class="icon icon-ml icon-sun"></i>
          </div>
        </li>
        <li class="item">
          <p>售電單價</p>
          <p>
            <strong>6.3079</strong>
            TWD
          </p>
          <div class="icon-block">
            <i class="bi bi-lightning-fill"></i>
          </div>
        </li>

        <li class="item">
          <p>售電期間</p>
          <p>
            <strong>20</strong>
            年
          </p>
          <div class="icon-block">
            <i class="bi bi-calendar2-check"></i>
          </div>
        </li>
        <li class="item">
          <div class="icon-block">
            <i class="icon icon-ml icon-money"></i>
          </div>
          <p>單片售價</p>
          <p><strong>23235</strong> TWD</p>
        </li>
      </ul>
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
      this.$http
        .get('/singleData.json/')
        .then((res) => {
          console.log(res, 'success')
          this.product = res.data.data[0]
          this.typeFilter = res.data.data[0]
        })
        .catch((err) => {
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
