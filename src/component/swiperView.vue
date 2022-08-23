<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :breakpoints="{
    768: {
      width: 768,
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      width: 992,
      slidesPerView: 3,
      spaceBetween: 30
    },
    1440: {
      width: 1440,
      slidesPerView: 4,
      spaceBetween: 40
    }
    }"
  >
    <swiper-slide>
      <div class="about-card position-relative" style="width: 17.8125rem;">
        <div class="card-title position-relative"><h5 class="position-relative"> 陳威丞 執行長</h5></div>
        <img :src="card.img1" class="card-img-top log-width" alt="">
        <div class="card-body position-absolute text-white bottom-0">
          <p class="card-text text-white">◉  株式会社ニチア - 代表取締役社長</p>
          <p class="card-text text-white">◉  國立臺灣海洋大學 - 博雅課程審議委員</p>
          <p class="text-white">民間力量導入能源轉型，達成環境永續和經濟效益的共贏</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="about-card position-relative" style="width: 17.8125rem;">
        <div class="card-title position-relative"><h5 class="position-relative">葉初 永續長</h5></div>
        <img :src="card.img2" class="card-img-top log-width" alt="">
        <div class="card-body position-absolute text-white bottom-0">
          <p class="card-text text-white">◉  法國R20 Paris授權與新蔓國際永續管理師</p>
          <p class="card-text text-white">◉  德國TUV NORD</p>
          <p class="text-white">氣候危機下沒有人是局外人</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="about-card position-relative" style="width: 17.8125rem;">
        <div class="card-title position-relative"><h5 class="position-relative">林祐任 工程經理</h5></div>
        <img :src="card.img3" class="card-img-top log-width" alt="">
        <div class="card-body position-absolute text-white bottom-0">
          <p class="card-text text-white">◉  台灣大學氣候發展博士</p>
          <p class="card-text text-white">◉  師範大學教育心理與輔導學系碩士</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="about-card position-relative" style="width: 17.8125rem;">
        <div class="card-title position-relative"><h5 class="position-relative">黃祺元 資訊經理</h5></div>
        <img :src="card.img4" class="card-img-top log-width" alt="">
        <div class="card-body position-absolute text-white bottom-0">
          <p class="card-text text-white">◉  羅威登資訊有限公司 - 執行長</p>
          <p class="card-text text-white">◉  普鴻資訊股份有限公司 -  軟體工程師</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="about-card position-relative" style="width: 17.8125rem;">
        <div class="card-title position-relative"><h5 class="position-relative"> 陳威丞 執行長</h5></div>
        <img :src="card.img1" class="card-img-top log-width" alt="">
        <div class="card-body position-absolute text-white bottom-0">
          <p class="card-text text-white">◉  株式会社ニチア - 代表取締役社長</p>
          <p class="card-text text-white">◉  國立臺灣海洋大學 - 博雅課程審議委員</p>
          <p class="text-white">民間力量導入能源轉型，達成環境永續和經濟效益的共贏</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="about-card position-relative" style="width: 17.8125rem;">
        <div class="card-title position-relative"><h5 class="position-relative"> 陳威丞 執行長</h5></div>
        <img :src="card.img1" class="card-img-top log-width" alt="">
        <div class="card-body position-absolute text-white bottom-0">
          <p class="card-text text-white">◉  株式会社ニチア - 代表取締役社長</p>
          <p class="card-text text-white">◉  國立臺灣海洋大學 - 博雅課程審議委員</p>
          <p class="text-white">民間力量導入能源轉型，達成環境永續和經濟效益的共贏</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="about-card position-relative" style="width: 17.8125rem;">
        <div class="card-title position-relative"><h5 class="position-relative"> 陳威丞 執行長</h5></div>
        <img :src="card.img1" class="card-img-top log-width" alt="">
        <div class="card-body position-absolute text-white bottom-0">
          <p class="card-text text-white">◉  株式会社ニチア - 代表取締役社長</p>
          <p class="card-text text-white">◉  國立臺灣海洋大學 - 博雅課程審議委員</p>
          <p class="text-white">民間力量導入能源轉型，達成環境永續和經濟效益的共贏</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="about-card position-relative" style="width: 17.8125rem;">
        <div class="card-title position-relative"><h5 class="position-relative"> 陳威丞 執行長</h5></div>
        <img :src="card.img1" class="card-img-top log-width" alt="">
        <div class="card-body position-absolute text-white bottom-0">
          <p class="card-text text-white">◉  株式会社ニチア - 代表取締役社長</p>
          <p class="card-text text-white">◉  國立臺灣海洋大學 - 博雅課程審議委員</p>
          <p class="text-white">民間力量導入能源轉型，達成環境永續和經濟效益的共贏</p>
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
      }
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
  }
}
</script>
