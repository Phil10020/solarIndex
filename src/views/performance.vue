<template>
<section id="performance">
      <!-- [Start]banner  -->
  <section
  class="banner"
  :style="{ background: 'url(' + banner + ')' }"
  :class="{ mapHide: mapClick===true }"
  >
    <div class="text-white d-flex justify-content-center banner-column">
      <h1>太陽人實績</h1>
      <p>company performance</p>
    </div>
  </section>
  <!-- [End]banner  -->

  <!-- [Start]Tab  -->
  <section class="tab">
    <div class="d-flex flex-column align-items-center justify-content-center tab-relative">
      <div class="d-flex justify-content-center tab-choose shadow rounded mb-30 tab-absolute tab-bottom" :class="{ mapHide: mapClick===true }">
        <button type="button" @click="tab(false)"><h4 :class="{ heighlight : !isShowInWeb }">台灣電廠</h4></button>
      </div>
      <ul class="d-flex flex-wrap " v-if="isShowInWeb == false">
        <li :class="{ active : areaFilter === '' } " @click.prevent="getDataName('')"><button type="button" >全部</button></li>
        <li :class="{ active : areaFilter === '台北市' } " @click.prevent="getDataName('台北市')"><button type="button" >台北</button></li>
        <li :class="{ active : areaFilter === '桃園市' }" @click.prevent="getDataName('桃園市')"><button type="button">桃園</button></li>
        <li :class="{ active : areaFilter === '新竹縣' }" @click.prevent="getDataName('新竹縣')"><button type="button">新竹</button></li>
        <li :class="{ active : areaFilter === '苗栗縣' }" @click.prevent="getDataName('苗栗縣')"><button type="button">苗栗</button></li>
        <li :class="{ active : areaFilter === '彰化縣' }" @click.prevent="getDataName('彰化縣')"><button type="button">彰化</button></li>
        <li :class="{ active : areaFilter === '南投縣' }" @click.prevent="getDataName('南投縣')"><button type="button">南投</button></li>
        <li :class="{ active : areaFilter === '雲林縣' }" @click.prevent="getDataName('雲林縣')"><button type="button">雲林</button></li>
        <li :class="{ active : areaFilter === '嘉義縣' }" @click.prevent="getDataName('嘉義縣')"><button type="button">嘉義</button></li>
        <li :class="{ active : areaFilter === '臺南市' }" @click.prevent="getDataName('臺南市')"><button type="button">台南</button></li>
        <li :class="{ active : areaFilter === '高雄市' }" @click.prevent="getDataName('高雄市')"><button type="button">高雄</button></li>
        <li :class="{ active : areaFilter === '台東縣' }" @click.prevent="getDataName('台東縣')"><button type="button">台東</button></li>
        <li :class="{ active : areaFilter === '花蓮縣' }" @click.prevent="getDataName('花蓮縣')"><button type="button">花蓮</button></li>
        <li :class="{ active : areaFilter === '宜蘭縣' }" @click.prevent="getDataName('宜蘭縣')"><button type="button">宜蘭</button></li>
      </ul>
    </div>
  </section>
  <!-- [End]Tab  -->

<!-- [Start]card+map  -->
  <section class="d-flex justify-content-center box-padding position-relative">
    <!-- [Start]Card  -->
    <section class=" solar position-relative" :class="{ cardOn : cardStaytus === true }">
      <div class="card-scrollBar shadow-lg round ">
        <button @click="backToTop" class="tabBtn d-none" :class="{ btnShow : topBtn === true }"><i class="bi bi-chevron-bar-up d-flex justify-content-center"></i></button>
        <div class="solar-card mb-3" style="max-width: 889px;" v-for="(item, index) in mapData" :key="item.name" @click="openMarker(index)">
            <div class="row g-0 solar-bg flex-nowrap">
              <div class="col-md-4">
                <img :src="'https://www.hellosolarman.com/' + item.mpic"  class="img-fluid rounded" alt="{{ item.name }}">
              </div>
              <div class="col-md-8">
                <div class="card-body ">
                  <p class="d-inline-flex card-text card-body-heighlight">屋頂型</p>
                  <h4 class="card-title">{{ item.name }}</h4>
                  <p class="card-text">{{ item.district }}</p>
                  <div class="d-flex align-items-center">
                    <div class="d-flex me-2">
                      <div class="me-1"><img src="../../public/images/performance/battery.svg" alt=""></div>
                      <p>總容量 : {{ item.kw }} kW</p>
                    </div>
                    <div class="d-flex">
                      <div class="me-1"><img src="../../public/images/performance/solar_icon.svg" alt=""></div>
                      <p>總片數 : {{ item.num }}片</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="d-flex justify-content-center d-md-none position-absolute btn-center">
        <button type="button" class="button_style" @click="buttonStaytus(false);"><img :src="card.buttonIcon" alt="map_icon"> 地圖模式</button>
      </div>
    </section>
      <!-- [End]Card  -->
    <!-- [Start]google map  -->
    <section class="map position-relative" :class="{ mapOn : mapStaytus === true }" id="fullscreen">
      <div ref="mapFull">
        <div class="d-flex justify-content-center align-items-center map-height" ref="mapFull">
          <h1 class="d-flex flex-wrap position-relative justify-content-center" style="width: 100%; height: auto">
            <div style="height: 67px; z-index: 10" class="powerPlant position-absolute shadow-lg rounded">
              <p>全台已完成{{productData.length}}座電廠</p>
            </div>
            <GMapMap :center="center"
              :options="options"
              :zoom="zoom" map-type-id="roadmap" style="height: 100vh;" class="mapWidth">
                <GMapCluster :zoomOnClick="true" :minimumClusterSize="4" :styles="clusterIcon">
                  <GMapMarker :icon="mapImg.icon1" :key="m.name" v-for="(m, index) in mapData" :position="m.position" :clickable="true" :draggable="false"
                    @click="openMarker(index)" @closeclick="openMarker(null)">
                    <GMapInfoWindow :closeclick="true" :opened="openedMarkerID === index">
                      <div class="solar-card" style="max-width: 21rem;">
                          <div class="row g-0 solar-bg">
                            <div class="col-md-4 d-flex align-items-center" >
                              <img :src="'https://www.hellosolarman.com/' + m.mpic" class="infoImg" style="" alt="太陽人一號">
                            </div>
                            <div class="col-md-6">
                              <div class="d-flex flex-wrap">
                                <p class="d-inline-flex card-text card-body-heighlight">屋頂型</p>
                                  <h6 class="card-title">{{ m.name }}</h6>
                                <div class="d-flex flex-wrap">
                                  <p class="card-text">{{ m.district }}</p>
                                  <p class="pstLine">總片數 : {{ m.num }}片</p>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-2 d-flex align-items-center">
                              <a href="https://www.managertoday.com.tw/articles/view/65714">
                                <button type="button"><img :src="mapImg.vector" alt="vector"/></button>
                              </a>
                            </div>
                          </div>
                      </div>
                    </GMapInfoWindow>
                  </GMapMarker>
                </GMapCluster>
            </GMapMap>
            <swiper
              style="z-index: 10;width: 90%"
              class="position-absolute swiperPosition mb-5 "
              :modules="modules"
              :slides-per-view="1"
              :space-between="10"
              navigation
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
              <swiper-slide v-for="(item, index) in mapData" class="shadow rounded" :key="item.name" @click="openMarker(index)" style="width:19.1rem">
                <div class=" position-relative d-flex flex-wrap swiper-card">
                  <div class="col-4" >
                    <img :src="'https://www.hellosolarman.com/' + item.mpic" class="img-fluid" alt="" style="border-radius: 10% 10%;height:5.625rem; width:6.5rem"/>
                  </div>
                  <div class="col-6">
                    <p class="d-inline-flex swiper-heighlight">屋頂型</p>
                    <h6 class="card-title text-black" style="overflow: hidden">{{ item.name }}</h6>
                    <div class="d-flex flex-wrap">
                      <p class="">{{ item.district }}</p>
                      <p class="pstLine">總片數 : {{ item.num }}片</p>
                    </div>
                  </div>
                  <div class="col-2 d-flex align-items-center">
                    <button><img :src="mapImg.vector" alt=""/></button>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </h1>
        </div>
        <div class="d-flex justify-content-end d-md-none position-absolute map-position">
          <button id="fullscreen-button" type="button" class="button_style" @click="buttonMapStaytus(false)"><i class="bi bi-list-ul"></i> 列表模式</button>
        </div>
      </div>
    </section>
    <!-- [End]google map  -->
  </section>
<!-- [end]card+map  -->
  <!-- [Start]footer  -->
  <section class="pb-82">
    <footer :class="{ mapHide: mapStaytus===true }">
      <div class="mb-45">
        <img class="img-fluid" :src="footer.footerLogo" alt="footer">
      </div>
      <!-- 2  -->
      <div class="d-flex mb-45 justify-content-between footer-column" >
        <div style="width: 50%" class="me-74">
          <h6>Connect</h6>
          <div class="d-flex footer-column">
            <div class="me-171">
              <p><a href="">宏威環球事業股份有限公司</a></p>
              <p><a href="">02-5574-0007</a></p>
              <p><a href="">02-2927-3447</a></p>
            </div>
            <div>
              <p><a href="">service@hellosolarman.com</a></p>
              <p>週一至週五 10:00-19:00</p>
              <p>新北市永和區中和路345號10樓之2</p>
            </div>
          </div>
        </div>
        <div class="d-flex flex-wrap justify-content-between footer-column" style="width: 50%">
          <div >
            <h6>FOLLOW US</h6>
            <div class="follow">
              <a href=""><i class="bi bi-facebook"></i><p>hellosolarman</p></a>
              <a href=""><i class="bi bi-line"></i><p>LINE「@solarman」</p></a>
              <a href=""><i class="bi bi-instagram"></i><p>hellosolarman</p></a>
            </div>
          </div>
          <div>
            <h6>邀請好友拿獎勵</h6>
            <p><a href="">COPYRIGHT© 2021 太陽人全民電廠 All RIGHTS <br/>RESERVED.</a></p>
          </div>
        </div>
      </div>
      <!-- 3  -->
      <div>
        <h6>USEFULL LINKS</h6>
        <div class="d-flex justify-content-between usefull footer-column">
          <div>
            <h6>認識太陽人</h6>
            <p><a href="">公司介紹</a></p>
            <p><a href="">太陽人實績</a></p>
            <p><a href="">媒體報導</a></p>
          </div>
          <div>
          <h6>太陽人電廠</h6>
            <p><a href="">小額購買</a></p>
            <p><a href="">整場購買</a></p>
            <p><a href="">體驗電廠</a></p>
            <p><a href="">賣電廠</a></p>
            <p><a href="">蓋電廠</a></p>
            <p><a href="">出租屋頂</a></p>
            <p><a href="">自己持有</a></p>
          </div>
          <div>
            <h6>太陽人學院</h6>
            <p><a href="">業務人才</a></p>
            <p><a href="">更多人才</a></p>
          </div>
          <div>
            <h6>太陽人快報</h6>
            <p><a href="">太陽人最新消息</a></p>
            <p><a href="">綠能轉型行不行</a></p>
          </div>
          <div>
            <h6>常見問答</h6>
            <p><a href="">關於太陽能電廠</a></p>
            <p><a href="">投資專案</a></p>
            <p><a href="">合約知識</a></p>
            <p><a href="">付款相關問題</a></p>
            <p><a href="">訂單相關問題</a></p>
            <p><a href="">售電收益</a></p>
            <p><a href="">關於日光幣</a></p>
          </div>
          <div>
          <h6>太陽人服務</h6>
            <p><a href="">太陽人會員條款</a></p>
            <p><a href="">隱私權保護政策</a></p>
            <p><a href="">交易安全</a></p>
          </div>
        </div>
      </div>
    </footer>
  </section>
  <!-- [End]footer  -->
</section>

</template>

<script>
import { Navigation } from 'swiper'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
// swiperJs
export default ({
  name: 'performanceView',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      // google map
      center: {
        lat: 24.15994867967149, lng: 120.6668839584927
      },
      mapImg: {
        icon1: require('../../public/images/performance/map_location.svg'),
        vector: require('../../public/images/performance/vector.png')
      },
      options: {
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: true,
        fullscreenControl: false,
        zoom: 8,
        clickableIcons: true,
        minZoom: 8,
        maxZoom: 20,
        styles: [
          {
            featureType: 'poi',
            stylers: [{
              visibility: 'off'
            }]
          }
        ]
      },
      clusterIcon: [
        {
          textColor: 'black',
          url: require('../../public/images/performance/map_location_nolight.svg'),
          height: 50,
          width: 50,
          textSize: 20,
          anchorText: [12, 0]
        }
      ],
      openedMarkerID: null,
      // google map end
      banner: require('../../public/images/banner/performance_BN.png'),
      card: {
        panels: require('../../public/images/performance/panels.png'),
        BG: require('../../public/images/performance/sun_bg.png'),
        BG2: require('../../public/images/performance/sun_bg_light.png'),
        battery: require('../../public/images/performance/battery.svg'),
        solar: require('../../public/images/performance/solar_icon.svg'),
        buttonIcon: require('../../public/images/performance/map_button.svg')
      },
      footer: {
        footerLogo: require('../../public/images/social/footerLogo.svg')
      },
      typeFilter: [],
      isShowInWeb: false,
      currentFilter: '',
      mapClick: false,
      mapShowOn: false,
      mapStaytus: false,
      cardStaytus: false,
      topBtn: false,
      mapId: [],
      mapFilter: '',
      productData: [],
      mapData: [],
      areaFilter: '',
      newMapArray: []
    }
  },
  // 台灣 or 日本 列表顯示切換方法
  methods: {
    tab (isShow) {
      this.isShowInWeb = isShow
    },
    buttonStaytus (isActive) {
      this.mapStaytus = !isActive
      this.cardStaytus = !isActive
      this.mapClick = !isActive
    },
    buttonMapStaytus (isActive) {
      this.mapStaytus = isActive
      this.cardStaytus = isActive
      this.mapClick = isActive
    },
    change: function (test) {
      this.mapFilter = test
      this.mapId = this.typeFilter.filter((item) => item.id.includes(test))
    },
    mapActive (isActive) {
      this.mapClick = isActive
    },
    mapShow (isActive) {
      this.mapShowOn = isActive
    },
    // axios
    getData () {
      const url = 'https://solardata.hellosolarman.com/api/data/stations'
      this.$http.get(url)
        .then((res) => {
          this.productData = res.data.filter((item) => item.pst_mpic && item.longitude && item.latitude && item.kw_capacity !== null)
        })
        .then(() => this.googleMapForeach())
        // .then(() => { return this.getDataName('') })
        .catch((err) => {
          console.log(err)
        })
    },
    getDataName (area) {
      this.zoom = 8
      this.mapData = []
      this.areaFilter = area
      // pop null country
      this.newMapArray = this.newMapArray.filter((item) => {
        return item.country != null
      })
      this.mapData = this.newMapArray.filter((item) => item.country.includes(area)
      )
    },
    // 列表地區篩選功能
    filterCategory: function (type) {
      this.typeFilter = ''
      this.mapFilter = ''
      this.currentFilter = type
      this.typeFilter = this.product.filter((item) => item.type.includes(type)
      )
    },
    // 點擊移動到最上面
    backToTop (isActive) {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    // 監聽滾動值並顯示向上選項
    myEventHandler (e) {
      if (document.body.srcollTop > 100 || document.documentElement.scrollTop > 100) {
        this.topBtn = true
      } else {
        this.topBtn = false
      }
    },
    // googleMap陣列
    googleMapForeach () {
      this.productData.forEach((item) => {
        const x = item.latitude
        const y = item.longitude
        this.newMapArray.push({ position: { lat: parseFloat(x), lng: parseFloat(y) }, kw: item.kw_capacity, address: item.pst_address, country: item.pst_county, district: item.pst_district, mpic: item.pst_mpic, name: item.pst_name, num: item.pst_qutys })
      })
    },
    openMarker (index) {
      this.zoom = 20
      this.openedMarkerID = index
      this.center = this.mapData[index].position
      console.log(this.center, this.openedMarkerID)
    }
  },
  setup () {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }

    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation]
    }
  },
  // 組件生成時監聽畫面寬度
  created () {
    window.addEventListener('scroll', this.myEventHandler)
    this.getData()
    this.mapData = this.newMapArray
  },
  // 組件銷毀時釋放內存
  unmounted () {
    window.removeEventListener('scroll', this.myEventHandler)
  },
  // 渲染初始資料顯示畫面
  mounted () {
  }
})
</script>
