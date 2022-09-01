<template>
<section id="performance">
      <!-- [Start]banner  -->
  <section
  class="banner"
  :style="{ background: 'url(' + banner + ')' }"
  >
    <div class="text-white d-flex justify-content-center banner-column">
      <h1>太陽人實績</h1>
      <p>company performance</p>
    </div>
  </section>
  <!-- [End]banner  -->

  <!-- [Start]Tab  -->
  <section class="tab">
    <div class="d-flex flex-column align-items-center justify-content-center">
      <div class="d-flex justify-content-center tab-choose shadow rounded mb-30">
        <button type="button" @click="tab(false)"><h4 :class="{ heighlight : !isShowInWeb }">台灣電廠</h4></button>
        <button type="button" @click="tab(true)"><h4 :class="{ heighlight : isShowInWeb }">日本電廠</h4></button>
      </div>
      <ul class="d-flex flex-wrap" v-if="isShowInWeb == false">
        <li :class="{ active : currentFilter === '' } " @click.prevent="filterCategory('')"><button type="button" >全部</button></li>
        <li :class="{ active : currentFilter === 'tpe' } " @click.prevent="filterCategory('tpe')"><button type="button" >台北</button></li>
        <li :class="{ active : currentFilter === 'tyn' }" @click.prevent="filterCategory('tyn')"><button type="button">桃園</button></li>
        <li :class="{ active : currentFilter === 'hsz' }" @click.prevent="filterCategory('hsz')"><button type="button">新竹</button></li>
        <li :class="{ active : currentFilter === 'zmi' }" @click.prevent="filterCategory('zmi')"><button type="button">苗栗</button></li>
        <li :class="{ active : currentFilter === 'txg' }" @click.prevent="filterCategory('txg')"><button type="button">台中</button></li>
        <li :class="{ active : currentFilter === 'chw' }" @click.prevent="filterCategory('chw')"><button type="button">彰化</button></li>
        <li :class="{ active : currentFilter === 'ntc' }" @click.prevent="filterCategory('ntc')"><button type="button">南投</button></li>
        <li :class="{ active : currentFilter === 'yun' }" @click.prevent="filterCategory('yun')"><button type="button">雲林</button></li>
        <li :class="{ active : currentFilter === 'cyi' }" @click.prevent="filterCategory('cyi')"><button type="button">嘉義</button></li>
        <li :class="{ active : currentFilter === 'tnn' }" @click.prevent="filterCategory('tnn')"><button type="button">台南</button></li>
        <li :class="{ active : currentFilter === 'khh' }" @click.prevent="filterCategory('khh')"><button type="button">高雄</button></li>
        <li :class="{ active : currentFilter === 'pif' }" @click.prevent="filterCategory('pif')"><button type="button">屏東</button></li>
        <li :class="{ active : currentFilter === 'ttt' }" @click.prevent="filterCategory('ttt')"><button type="button">台東</button></li>
        <li :class="{ active : currentFilter === 'hun' }" @click.prevent="filterCategory('hun')"><button type="button">花蓮</button></li>
        <li :class="{ active : currentFilter === 'ila' }" @click.prevent="filterCategory('ila')"><button type="button">宜蘭</button></li>
      </ul>
      <ul class="d-flex" v-else>
        <li>日本1</li>
        <li>日本2</li>
        <li>日本3</li>
        <li>日本4</li>
        <li>日本5</li>
      </ul>
    </div>
  </section>
  <!-- [End]Tab  -->

<!-- [Start]card+map  -->
  <section class="d-flex justify-content-cneter box-padding position-relative">
    <button @click="backToTop" class="tabBtn d-none" :class="{ btnShow : topBtn === true }">Top</button>
    <!-- [Start]Card  -->
    <section class=" solar position-relative" :class="{ cardOn : cardStaytus === true }">
      <div class="card-scrollBar shadow-lg round ">
        <div class="solar-card mb-3" style="max-width: 889px;" v-for="item in typeFilter" :key="item.id" @click.prevent="change(item.id)" :id="item.id">
            <div class="row g-0 solar-bg">
              <div class="col-md-4">
                <img src="../../public/images/performance/panels.png" class="img-fluid rounded" alt="太陽人一號">
              </div>
              <div class="col-md-8">
                <div class="card-body ">
                  <p class="d-inline-flex card-text card-body-heighlight">屋頂型</p>
                  <h4 class="card-title">太陽人一號</h4>
                  <p class="card-text">{{ item.name }}</p>
                  <div class="d-flex align-items-center">
                    <div class="d-flex me-2">
                      <div class="me-1"><img src="../../public/images/performance/battery.svg" alt=""></div>
                      <p>總容量 : 11.90 KW</p>
                    </div>
                    <div class="d-flex">
                      <div class="me-1"><img src="../../public/images/performance/solar_icon.svg" alt=""></div>
                      <p>總片數 : 35片</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="d-flex justify-content-center d-md-none position-absolute btn-center">
        <button type="button" class="button_style" @click="buttonStaytus(false)"><img :src="card.buttonIcon" alt="map_icon"> 地圖模式</button>
      </div>
    </section>
      <!-- [End]Card  -->

    <!-- [Start]google map  -->
    <section class="map" :class="{ mapOn : mapStaytus === true }" style="width:45%">
      <div class="d-flex justify-content-center align-items-center" id="fullscreen">
        <h1 class="d-flex flex-wrap">google-map
          <div v-for="item in typeFilter" :key="item.id" class="d-none" :class="{ mapShow: mapFilter === item.id }"><i class="bi bi-geo-alt-fill" :class="{ mapActive : currentFilter === '' } "></i> {{ item.name }} </div>
        </h1>
      </div>
      <div class="d-flex justify-content-center d-md-none">
        <button type="button" id="fullscreen-button" class="button_style" @click="buttonMapStaytus(false)"><i class="bi bi-list-ul"></i> 列表模式</button>
      </div>
    </section>
    <!-- [End]google map  -->
  </section>
<!-- [end]card+map  -->
  <!-- [Start]footer  -->
  <section class="pb-82">
    <footer>
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
        <div class="d-flex justify-content-between footer-column" style="width: 50%">
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
export default {
  name: 'performanceView',
  data () {
    return {
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
      product: [{ name: '全部', type: '', id: '0' },
        { name: '台北', type: 'tpe', id: '1' },
        { name: '桃園', type: 'tyn', id: '2' },
        { name: '新竹', type: 'hsz', id: '3' },
        { name: '苗栗', type: 'zmi', id: '4' },
        { name: '台中', type: 'txg', id: '5' },
        { name: '彰化', type: 'chw', id: '6' },
        { name: '南投', type: 'ntc', id: '7' },
        { name: '雲林', type: 'yun', id: '8' },
        { name: '嘉義', type: 'cyi', id: '9' },
        { name: '台南', type: 'tnn', id: '10' },
        { name: '高雄', type: 'khh', id: '11' },
        { name: '屏東', type: 'pif', id: '12' },
        { name: '台東', type: 'ttt', id: '13' },
        { name: '花蓮', type: 'hun', id: '14' },
        { name: '宜蘭', type: 'ila', id: '15' },
        { name: '桃園2', type: 'tyn', id: '16' },
        { name: '桃園3', type: 'tyn', id: '17' },
        { name: '桃園4', type: 'tyn', id: '18' },
        { name: '彰化2', type: 'chw', id: '19' },
        { name: '彰化3', type: 'chw', id: '20' },
        { name: '高雄2', type: 'khh', id: '21' }
      ],
      typeFilter: [],
      isShowInWeb: false,
      currentFilter: '',
      mapClick: false,
      mapShowOn: false,
      mapStaytus: false,
      cardStaytus: false,
      topBtn: false,
      mapId: [],
      mapFilter: ''
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
    },
    buttonMapStaytus (isActive) {
      this.mapStaytus = isActive
      this.cardStaytus = isActive
    },
    change: function (test) {
      this.mapFilter = test
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
    // 列表地區篩選功能
    filterCategory: function (type) {
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
    // 監聽滾動值並顯示向上選項
    myEventHandler (e) {
      if (document.body.srcollTop > 100 || document.documentElement.scrollTop > 100) {
        this.topBtn = true
      } else {
        this.topBtn = false
      }
    }
  },
  // 組件生成時監聽畫面寬度
  created () {
    window.addEventListener('scroll', this.myEventHandler)
  },
  // 組件銷毀時釋放內存
  unmounted () {
    window.removeEventListener('scroll', this.myEventHandler)
  },
  // 渲染初始資料顯示畫面
  mounted () {
    this.typeFilter = this.product
  }
}
</script>
