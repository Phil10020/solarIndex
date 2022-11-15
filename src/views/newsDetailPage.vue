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
import axios from 'axios'
import { ref } from 'vue'
export default {
  name: 'newsDetailPage',
  setup () {
    const imgSrc = require('../../public/images/title/page_here_section_2.jpg')
    const newsData = ref([])
    const getData = function () {
      const web = 'https://www.hellosolarman.com'
      const id = this.id
      const url = `https://solardata.hellosolarman.com/api/data/new?id=${id}`
      axios.get(url)
        .then((res) => {
          newsData.value = res.data.filter((item) => {
            if (item.img.match('http') === null) {
              item.img = web + item.img
            } return newsData
          })
          newsData.value.forEach((item) => {
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
    }

    // 時間格式轉換
    const changeDate = function () {
      // 升序排列
      newsData.value.sort(function (a, b) {
        return new Date(b.create_date) - new Date(a.create_date)
      })
      newsData.value.forEach((item) => {
        item.create_date = new Date(item.create_date).toLocaleDateString()
      })
    }

    // 抓取swiper圖片
    const imgData = ref([])
    const getImg = function () {
      const web = 'https://www.hellosolarman.com'
      const url = 'https://solardata.hellosolarman.com/api/data/news'
      console.log('step1')
      axios.get(url)
        .then((res) => {
          console.log('step2')
          // 陣列日期升序排列、去除時間格式
          imgData.value = res.data.sort(function (a, b) {
            return new Date(b.create_date) - new Date(a.create_date)
          })
          imgData.value.forEach((item) => {
            item.create_date = new Date(item.create_date).toLocaleDateString()
          })
          // 將資料篩選至5筆內
          imgData.value = res.data.filter((item, index) => {
            if (item.img.match('http') === null) {
              item.img = web + item.img
            }
            return index < 5
          })
        })
        .then(() => {
          imgArry()
        })
        .catch((err) => {
          console.log(err, 'getError')
        })
      console.log('step3')
    }

    // 圖片無限輪播算式
    const slideData = ref([])
    const imgArry = function () {
      for (let i = 0; i < imgData.value.length * 2; i++) {
        const obj = {}
        obj.id = i
        obj.ref = i % imgData.value.length
        slideData.value.push(obj)
      }
    }

    // 控制swiper點擊左右
    const clickWait = ref(false)
    const slideCtrl = function (slidesToShow = 1) {
      if (clickWait.value === ref(true)) {
        return
      }
      stopTime()
      clickWait.value = ref(true)
      if (slidesToShow > 0) {
        const shiftItem = slideData.value.shift()
        slideData.value.push(shiftItem)
        console.log(slideData.value, 'l')
        setTime()
        return
      }
      if (slidesToShow < 0) {
        const shiftItem = slideData.value.pop()
        slideData.value.unshift(shiftItem)
        setTime()
        console.log(slideData.value, 'r')
      }
    }

    const timer = ref({})
    const stopTime = function () {
      clearInterval(timer.value)
    }

    const setTime = function () {
      timer.value = setTimeout(() => {
        clickWait.value = ref(false)
      }, 500)
    }
    return { getData, changeDate, newsData, getImg, imgData, imgArry, slideData, imgSrc, slideCtrl, clickWait, stopTime, setTime }
  },
  props: {
    id: {
      type: String
    }
  },
  data () {
    return {
      currentFilter: '',
      axiosStatus: false,
      topBtn: false,
      screenWidth: false
    }
  },
  methods: {
    // 監聽滾動值並顯示向上選項
    myEventHandler () {
      if (document.body.srcollTop > 100 || document.documentElement.scrollTop > 100) {
        this.topBtn = true
      } else {
        this.topBtn = false
      }
    },
    widthEventHandler () {
      window.innerWidth < 768 ? this.screenWidth = true : this.screenWidth = false
      console.log(window.innerWidth)
    }
  },
  mounted () {
    // 渲染全部product資料
    this.imgArry()
    window.addEventListener('resize', this.widthEventHandler)
    this.widthEventHandler()
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
  }
}
</script>
