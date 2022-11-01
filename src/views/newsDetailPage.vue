<template>
  <!-- [Start]Banner  -->
  <section
    class="subpage-banner-image"
    :style="{ background: 'url(' + imgSrc + ')' }"
  >
    <div class="container text-white">
      <h4>NEWS</h4>
      <h1>太陽人快報</h1>
    </div>
  </section>
  <!-- [End]Banner  -->
  <!-- [Start]Breadcrumb  -->
  <section>
    <nav class="navigation-item">
      <a href="/index.aspx">首頁</a>
      <i class="bi bi-chevron-double-right"></i>
      <router-link :to="'/news'" >太陽人快報</router-link>
      <i class="bi bi-chevron-double-right"></i>
      <a :class="{ 'active': currentFilter === 'green' }" v-if="currentFilter === 'green'">綠能轉型行不行</a>
      <a :class="{ 'active': currentFilter === 'news' }" v-else-if="currentFilter === 'news'">太陽人最新消息</a>
      <a :class="{ 'active':currentFilter === '' }" v-else>{{ newsData[0].title }}</a>
    </nav>
  </section>
  <!-- [End]Breadcrumb  -->
  <!-- [Start]article doesn't find -->
  <section v-if="axiosStatus === true" style="height: 50vh" class="d-flex align-items-center justify-content-center">
    <h2>此篇文章不存在!</h2>
  </section>
  <!-- [End]article doesn't find  -->
  <!-- [Start]SinglePageContent  -->
  <section class="newsPageDetail" v-else>
    <router-link :to="'/news'">
      <button @click="backToTop" class="tabBtn d-none" :class="{ btnShow : topBtn === true }"><i class="bi bi-list-ul d-flex justify-content-center fs-3"></i></button>
    </router-link>
    <div class="">
      <div class="news-detail-content">
        <h2 class="d-flex">{{ newsData[0].title }}</h2>
        <div class="d-flex flex-wrap justify-content-between">
          <div class="d-flex flex-wrap">
            <div><i class="bi bi-calendar3 text-primary"></i>{{ newsData[0].create_date }}</div>
            <div><i class="bi bi-list-ul text-primary"></i>{{ newsData[0].category }}</div>
          </div>
          <div class="d-flex flex-wrap align-items-center">
            分享至
            <a href="" target="_blank"><i class="bi bi-facebook m-2 fs-5 " style="color: #4267b2"></i></a>
            <a href="" target="_blank"><i class="bi bi-line m-2 fs-5 " style="color: #01B902;"></i></a>
            <a href="" target="_blank"><i class="bi bi-twitter m-2 fs-5 "  style="color: #3FAAF3;"></i></a>
          </div>
        </div>
        <div class="d-flex flex-wrap justify-content-start content" v-html="newsData[0].content">
        </div>
        </div>
    </div>
  </section>
  <!-- [End]SinglePageContent  -->
  <!-- [Start]footer  -->
  <section class="newsSlider">
    <h4 class="slider-title">最近發布
    </h4>
    <div class="d-flex position-relative">
        <button type="button" class=" start-0 slider-button" @click.prevent="slideCtrl(-1)">
          <i class="bi bi-chevron-left fs-3"></i>
        </button>
        <button type="button" class=" end-0 slider-button" @click.prevent="slideCtrl(1)">
          <i class="bi bi-chevron-right fs-3"></i>
        </button>
        <!-- 輪播swiper功能  -->
        <transition-group name="flip-list" tag="ul" class="slider-box">
          <li class="slider-card" :class="{'sliderCardWidth': screenWidth }" v-for="item in slideData" :key="item.id">
            <img class="slider-img" :src="imgData[item.ref].img" :alt="imgData.title"/>
            <div class="slider-hover">
              <router-link target="_blank" class="d-flex flex-column justify-content-center" :to="{name:'newsDetailPage', params:{id: imgData[item.ref].id}}" style="width:100%">
                <div class="d-flex justify-content-center"><i class="bi bi-link-45deg link-icon" ></i></div>
                <div class="text-white fs-4 d-flex justify-content-center">{{ imgData[item.ref].title }}</div>
              </router-link>
            </div>
          </li>
        </transition-group>
        <!-- swiper end  -->
      </div>

  </section>
  <!-- [End]footer  -->
</template>

<script>
export default {
  name: 'newsDetailPage',
  components: {
  },
  props: {
    id: {
      type: String
    }
  },
  data () {
    return {
      search: '',
      typeFilter: [],
      imgSrc: require('../../public/images/title/page_here_section_2.jpg'),
      currentFilter: '',
      countOfPage: 6,
      currentPage: 1,
      isActive: true,
      error: false,
      newsData: [],
      axiosStatus: false,
      imgData: [],
      slideData: [],
      clickWait: false,
      timer: {},
      topBtn: false,
      screenWidth: false
    }
  },
  methods: {
    // 列表篩選，利用if else判斷product.type的類型，並使用this.currentFilter = type or ''來改變active的啟動條件
    filterCategory: function (type) {
      this.setPage(1)
      this.currentFilter = type
      if (type === 'all') {
        this.typeFilter = this.product
        this.currentFilter = ''
      } else {
        this.typeFilter = this.product.filter((item) => {
          // 使用includes判斷true or false 篩選 type (news & green)
          return item.type.toLowerCase().includes(type)
        })
      } ;
      console.log(this.type)
    },
    // 將參數帶入預設頁面currentPage
    setPage: function (idx) {
      if (idx >= 0 || idx < this.totalPage) {
        this.currentPage = idx
      }
    },
    getData () {
      const web = 'https://www.hellosolarman.com'
      const id = this.id
      const url = `https://solardata.hellosolarman.com/api/data/new?id=${id}`
      this.$http.get(url)
        .then((res) => {
          this.newsData = res.data.filter((item) => {
            if (item.img.match('http') === null) {
              item.img = web + item.img
            } return this.newsData
          })
          this.newsData.forEach((item) => {
            if (item.category === 'A') {
              item.category = '太陽人最新消息'
            } else {
              item.category = '綠能轉型行不行'
            }
          })
        })
        .then(() => {
          this.changeDate()
        })
        .catch((err) => {
          console.log(err, 'getError')
          this.axiosStatus = true
        })
    },
    getImg () {
      const web = 'https://www.hellosolarman.com'
      const url = 'https://solardata.hellosolarman.com/api/data/news'
      console.log('step1')
      this.$http.get(url)
        .then((res) => {
          console.log('step2')
          // 陣列日期升序排列、去除時間格式
          this.imgData = res.data.sort(function (a, b) {
            return new Date(b.create_date) - new Date(a.create_date)
          })
          this.imgData.forEach((item) => {
            item.create_date = new Date(item.create_date).toLocaleDateString()
          })
          // 將資料篩選至5筆內
          this.imgData = res.data.filter((item, index) => {
            if (item.img.match('http') === null) {
              item.img = web + item.img
            }
            return index < 5
          })
        })
        .then(() => {
          this.imgArry()
        })
        .catch((err) => {
          console.log(err, 'getError')
        })
      console.log('step3')
    },
    // 控制swiper點擊左右
    slideCtrl (slidesToShow = 1) {
      if (this.clickWait) {
        return
      }
      this.stopTime()
      this.clickWait = true
      if (slidesToShow > 0) {
        const shiftItem = this.slideData.shift()
        this.slideData.push(shiftItem)
        console.log(this.slideData, 'l')
        this.setTime()
        return
      }
      if (slidesToShow < 0) {
        const shiftItem = this.slideData.pop()
        this.slideData.unshift(shiftItem)
        this.setTime()
        console.log(this.slideData, 'r')
      }
    },
    // 圖片無限輪播算式
    imgArry () {
      for (let i = 0; i < this.imgData.length * 2; i++) {
        const obj = {}
        obj.id = i
        obj.ref = i % this.imgData.length
        this.slideData.push(obj)
      }
    },
    setTime () {
      this.timer = setTimeout(() => {
        this.clickWait = false
      }, 500)
    },
    stopTime () {
      clearInterval(this.timer)
    },
    // 監聽滾動值並顯示向上選項
    myEventHandler (e) {
      if (document.body.srcollTop > 100 || document.documentElement.scrollTop > 100) {
        this.topBtn = true
      } else {
        this.topBtn = false
      }
    },
    // 時間格式轉換
    changeDate () {
      // 升序排列
      this.imgData.sort(function (a, b) {
        return new Date(b.create_date) - new Date(a.create_date)
      })
      this.imgData.forEach((item) => {
        item.create_date = new Date(item.create_date).toLocaleDateString()
      })
    },
    widthEventHandler () {
      window.innerWidth < 768 ? this.screenWidth = true : this.screenWidth = false
      console.log(window.innerWidth)
    }
  },
  computed: {
  },
  mounted () {
    // 渲染全部product資料
    this.imgArry()
    window.addEventListener('resize', this.widthEventHandler)
  },
  created () {
    // 監聽滑鼠滾動
    window.addEventListener('scroll', this.myEventHandler)
    this.getData()
    this.getImg()
  },
  unmounted () {
    // 銷毀組件
    window.removeEventListener('scroll', this.myEventHandler)
    window.removeEventListener('resize', this.widthEventHandler)
  },
  watch: {
    // 監聽事件並將更動後的currentPage，設定回原本預設值
    search: function () {
      this.currentPage = 1
    },
    currentPage: function () {
      // 判斷物件長度是否為2(若為2則啟用v-bind屬性，將它改成justify-content-start狀態)，以及是否在頁尾(currentPage===totalPage)
      if (this.typeFilter.length % this.countOfPage === 2 && this.currentPage === this.totalPage) {
        this.error = true
        this.isActive = false
      } else {
        this.error = false
        this.isActive = true
      }
    }
  }
}
</script>
