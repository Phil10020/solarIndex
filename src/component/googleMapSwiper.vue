<template>
  <swiper
    :modules="modules"
    :slides-per-view="2"
    :space-between="10"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :breakpoints="{
    768: {
      width: 768,
      slidesPerView: 2,
      spaceBetween: 40
    },
    992: {
      width: 992,
      slidesPerView: 3,
      spaceBetween: 30
    },
    1440: {
      width: 1440,
      slidesPerView: 4,
      spaceBetween: 10
    }
    }"
  >
    <swiper-slide v-for="(item, index) in mapData" :key="index">
      <div class="about-card position-relative" style="width: 17.8125rem;">
        <div class="card-title position-relative"><h5 class="position-relative"> {{ item.name }}</h5></div>
        <img :src="'https://www.hellosolarman.com/' + item.mpic" class="card-img-top" alt="">
        <div class="card-body position-absolute text-white content-down">
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Navigation, Pagination } from 'swiper'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// swiperJs
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      card: {
        img1: require('../../public/images/about/about1.png'),
        img2: require('../../public/images/about/about2.png'),
        img3: require('../../public/images/about/about3.png'),
        img4: require('../../public/images/about/about4.png')
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
      modules: [Navigation, Pagination]
    }
  },
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
      console.log('123')
      this.mapId = this.typeFilter.filter((item) => {
        return item.id.includes(test)
      })
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
          this.productData = res.data.filter((item) => { return item.pst_mpic && item.longitude && item.latitude && item.kw_capacity !== null })
        })
        .then(() => { return this.googleMapForeach() })
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
      this.mapData = this.newMapArray.filter((item) => {
        return item.country.includes(area)
      })
    },
    // 列表地區篩選功能
    filterCategory: function (type) {
      this.typeFilter = ''
      this.mapFilter = ''
      this.currentFilter = type
      this.typeFilter = this.product.filter((item) => {
        return item.type.includes(type)
      })
    },
    // 點擊移動到最上面
    backToTop (isActive) {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    // openInfoWindow (index) {
    //   console.log(index, this.mapData[index].lat, this.mapData[index].lng)
    // },
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
        // item.lat = parseFloat(x)
        // item.lng = parseFloat(y)
        this.newMapArray.push({ position: { lat: parseFloat(x), lng: parseFloat(y) }, kw: item.kw_capacity, address: item.pst_address, country: item.pst_county, district: item.pst_district, mpic: item.pst_mpic, name: item.pst_name, num: item.pst_qutys })
      })
    },
    openMarker (index) {
      this.zoom = 16
      this.openedMarkerID = index
      console.log(this.center)
    }
  },
  // 組件生成時監聽畫面寬度
  created () {
    window.addEventListener('scroll', this.myEventHandler)
    this.getData()
    this.mapData = this.newMapArray
  }
}
</script>
