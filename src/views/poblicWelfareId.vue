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
      <font-awesome-icon icon="fa-solid fa-angles-right" />
      <a href="#" class="">買電廠</a>
      <font-awesome-icon icon="fa-solid fa-angles-right" />
      <a href="#" class="">小額購買</a>
      <font-awesome-icon icon="fa-solid fa-angles-right" />
      <a href="#" class="active">testBannerId</a>
    </div>
  </section>
  <!-- [End]breadcrumbs-list  -->
  <!-- [Start]Content  -->
  <section id="product-detail-content">
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
      <ul class="info-content d-flex justify-content-around">
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
            <i class="icon bi bi-sun-fill"></i>
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
            <i class="icon bi bi-currency-exchange"></i>
          </div>
          <p>單片售價</p>
          <p><strong>23235</strong> TWD</p>
        </li>
      </ul>
    </div>
    <div class="content-detail">
      <ul
        class="nav nav-tabs justify-content-between product-detail-tab"
        role="tablist"
      >
        <li class="nav-item product-detail-tab-item" v-for="(item, i) in tabs" :key="item+123">
          <button
            class="nav-link"
            style="cursor: pointer;"
            :class="{'active':i == num}"
            @click="tab(i)"
            > {{ item }} </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <!-- charity  -->
        <div v-show="num == 0">
          <poblic-charity></poblic-charity>
        </div>
        <!-- charity  -->
        <!-- location  -->
        <div v-show="num == 1">
          <poblic-location></poblic-location>
        </div>
        <!-- location  -->
        <!-- progress  -->
        <div v-show="num == 2">
          <poblic-progress></poblic-progress>
        </div>
        <!-- progress  -->
        <!-- buildSystem  -->
        <div v-show="num == 3">
          <build-system></build-system>
        </div>
        <!-- buildSystem  -->
        <!-- caculator  -->
        <div v-show="num == 4">
          <poblic-caculator></poblic-caculator>
        </div>
        <input type="hidden" id="hid_pst_qutys" value="36" />
        <input type="hidden" id="hid_Insurance" value="2000" />
        <input type="hidden" id="hid_pst_suntime" value="3.5" />
        <input type="hidden" id="hid_pst_pnl_kwp" value="0.34" />
        <input type="hidden" id="hid_pst_pwrprice" value="6.3079" />
        <input type="hidden" id="hid_pst_rev_property" value="0.1" />
        <input type="hidden" id="hid_pst_rev_rent" value="0.1" />
        <input type="hidden" id="hid_pst_panel_recycle" value="12240" />
        <!-- contract  -->
        <div v-show="num == 5">
          <poblic-contract></poblic-contract>
          <!-- <div class="contract-list">
            <div
              class="item"
              data-toggle="modal"
              data-target="#modal_pst_pdf_cashflow"
            >
              <i class="fas fa-chevron-right"></i>
              財務報告
            </div>

            <div
              class="item"
              data-toggle="modal"
              data-target="#modal_pst_pdf_taipower"
            >
              <i class="fas fa-chevron-right"></i>
              台電合約
            </div>

            <div
              class="item"
              data-toggle="modal"
              data-target="#modal_pst_pdf_roofrental"
            >
              <i class="fas fa-chevron-right"></i>
              租賃契約公證
            </div>

            <div
              class="item"
              data-toggle="modal"
              data-target="#modal_pst_pdf_insurance"
            >
              <i class="fas fa-chevron-right"></i>
              產物保險
            </div>

            <div
              class="item"
              data-toggle="modal"
              data-target="#modal_pst_pdf_contract"
            >
              <i class="fas fa-chevron-right"></i>
              太陽人合約
            </div>

            <div
              class="item"
              data-toggle="modal"
              data-target="#modal_pst_pdf_energy"
            >
              <i class="fas fa-chevron-right"></i>
              能源局核准文件
            </div>
          </div> -->
        </div>
        <!-- contract  -->
      </div>
    </div>
  </section>
  <!-- [End]  -->
  <!-- [Start]其它專案  -->
  <section id="product-detail-other-project">
        <h4 class="title letterSpacing-50">其他專案</h4>
        <div class="slider-block">

            <div id="slider-btn-left" class="to-left">
                <i class="bi bi-chevron-left"></i>
            </div>

            <div id="slider-btn-right" class="to-right">
                <i class="bi bi-chevron-right"></i>
            </div>

            <div class="slider-items">
                <div class="item" style="left: calc(0% - 0px);">
                    <img class="other-img" :src="otherImg.other1" alt="other1">
                    <p class="text-center mb-2">太陽人台中晨光29號</p>
                    <div class="hover">
                        <a class="link" href="product.aspx?op=detail&amp;id=f9645356-4d22-4ccb-93ce-2c04bc7458df">
                            <i class="fas fa-link"></i>
                        </a>
                        <div class="title">
                            太陽人台中晨光29號
                        </div>
                    </div>
                </div>
                <div class="item" style="left: calc(0% - 0px);">
                    <div style="position: absolute; z-index: 1; left: 10px; bottom: 10px;">
                        <img src="https://www.hellosolarman.com/images/soldout.png" width="100" height="100">
                    </div>
                    <img class="other-img" :src="otherImg.other2" alt="other2">
                    <p class="text-center mb-2">現代婦女基金會-日光循環公益專案 (雲林朝天19號)</p>
                    <div class="hover">
                        <a class="link" href="product.aspx?op=detail&amp;id=c6bd6210-d13c-49d2-81c4-eefa5b76af63">
                            <i class="fas fa-link"></i>
                        </a>
                        <div class="title">
                            現代婦女基金會-日光循環公益專案 (雲林朝天19號)
                        </div>
                    </div>
                </div>
                <div class="item" style="left: calc(0% - 0px);">
                    <div style="position: absolute; z-index: 1; left: 10px; bottom: 10px;">
                        <img src="https://www.hellosolarman.com/images/soldout.png" width="100" height="100">
                    </div>
                    <img class="other-img" :src="otherImg.other3" alt="other3">
                    <p class="text-center mb-2">太陽人宜蘭蘭陽06號</p>
                    <div class="hover">
                        <a class="link" href="product.aspx?op=detail&amp;id=76f95c8d-e0ba-416e-bad0-8eb5c1511a9e">
                            <i class="fas fa-link"></i>
                        </a>
                        <div class="title">
                            太陽人宜蘭蘭陽06號
                        </div>
                    </div>
                </div>
                <div class="item" style="left: calc(0% - 0px);">
                    <img class="other-img" :src="otherImg.other4" alt="other4">
                    <p class="text-center mb-2">太陽人苗栗石虎05號</p>
                    <div class="hover">
                        <a class="link" href="product.aspx?op=detail&amp;id=604cdd20-b4e9-45f4-be14-24209967d3b9">
                            <i class="fas fa-link"></i>
                        </a>
                        <div class="title">
                            太陽人苗栗石虎05號
                        </div>
                    </div>
                </div>
                <div class="item" style="left: calc(0% - 0px);">
                    <div style="position: absolute; z-index: 1; left: 10px; bottom: 10px;">
                        <img src="https://www.hellosolarman.com/images/soldout.png" width="100" height="100">
                    </div>
                    <img class="other-img" :src="otherImg.other5" alt="other5">
                    <p class="text-center mb-2">太陽人桃園天空45號</p>
                    <div class="hover">
                        <a class="link" href="product.aspx?op=detail&amp;id=eeddc999-3659-4854-ad31-213f581cfb5c">
                            <i class="fas fa-link"></i>
                        </a>
                        <div class="title">
                            太陽人桃園天空45號
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </section>
  <!-- [End]其它專案 -->
</template>
<script>
import poblicCharity from './poblicItems/poblicCharity.vue'
import poblicLocation from './poblicItems/poblicLocation.vue'
import poblicProgress from './poblicItems/poblicProgress.vue'
import buildSystem from './poblicItems/poblicBuildSystem.vue'
import poblicCaculator from './poblicItems/poblicCaculator.vue'
import poblicContract from './poblicItems/poblicContract.vue'

export default {
  name: 'poblicWelfareId',
  data () {
    return {
      imgSrc: require('../../public/images/banner/product_banner.jpg'),
      iconImg: {
        icon1: require('../../public/images/productWelfareId/icon_mobil.svg'),
        icon2: require('../../public/images/productWelfareId/icon_persent.png'),
        icon3: require('../../public/images/productWelfareId/icon_pay.svg')
      },
      otherImg: {
        other1: require('../../public/images/productWelfareId/other1.jpg'),
        other2: require('../../public/images/productWelfareId/other2.jpg'),
        other3: require('../../public/images/productWelfareId/other3.jpg'),
        other4: require('../../public/images/productWelfareId/other4.jpg'),
        other5: require('../../public/images/productWelfareId/other5.jpg')
      },
      product: [],
      currentFilter: '',
      countOfPage: 3,
      currentPage: 1,
      search: '',
      typeFilter: [],
      tabs: [
        '公益說明',
        '電廠位置與空拍',
        '預估進度',
        '建置系統',
        '收益計算機',
        '相關文件與合約'
      ],
      num: 0
    }
  },
  components: {
    poblicCharity,
    poblicLocation,
    poblicProgress,
    buildSystem,
    poblicCaculator,
    poblicContract
  },
  methods: {
    getData () {
      this.$http
        .get('/singleData.json/')
        .then((res) => {
          this.product = res.data.data[0]
          this.typeFilter = res.data.data[0]
        })
        .catch((err) => {
          console.log(err, 'error')
        })
    },
    tab (i) {
      this.num = i
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
  }
}
</script>
