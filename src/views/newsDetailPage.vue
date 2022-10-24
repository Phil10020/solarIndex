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
      <a href="/news.aspx">太陽人快報</a>
      <i class="bi bi-chevron-double-right"></i>
      <a :class="{ 'active': currentFilter === 'green' }" v-if="currentFilter === 'green'">綠能轉型行不行</a>
      <a :class="{ 'active': currentFilter === 'news' }" v-else-if="currentFilter === 'news'">太陽人最新消息</a>
      <a :class="{ 'active':currentFilter === '' }" v-else>全部</a>
    </nav>
  </section>
  <!-- [End]Breadcrumb  -->
  <!-- [Start]SinglePageContent  -->
  <section>
    <div>
      <div class="d-flex flex-wrap justify-content-end">
        <button><font-awesome-icon icon="fa-solid fa-angle-left" /></button>
        <button><font-awesome-icon icon="fa-solid fa-list" /></button>
        <button><font-awesome-icon icon="fa-solid fa-angle-right" /></button>
      </div>
      <h2 class="d-flex justify-content-center">「國際女童日」 大家有聽過這個節日嗎？</h2>
      <div class="d-flex flex-wrap justify-content-between">
        <div class="d-flex flex-wrap">
          <div><i class="bi bi-calendar3"></i>10/13/2022 10:18:47 AM</div>
          <div><i class="bi bi-list-ul"></i>太陽人最新消息</div>
        </div>
        <div class="d-flex flex-wrap">
          分享至
          <div><i class="bi bi-facebook"></i></div>
          <div><i class="bi bi-line"></i></div>
          <div><i class="bi bi-twitter"></i></div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        太陽人全民電廠便是一個這樣的團隊。

        誰說能源產業只能是男生當道，不能是女孩主導呢?

        太陽人全民電廠的團隊成員有高達6成都是女生,而且物件開發或電表安裝等作業也都有女性成員參與其中呢!

        當我們的「太陽美少女」團隊集結在一起時，就沒有什麼解不開的難題~

        太陽的光可以照出彩虹的顏色，如同太陽人的美少女們，在一個充滿著性別刻板印象的能源產業中，像陽光般為這個產業映照出更耀眼的色彩。

        現今社會女力當道，太陽人同樣倡議 Women thrive，工作能力與性別並沒有直接關係，且太陽人團隊也支持女性同仁們持續跨部門學習，不論是工程第一現場或是內勤畫建置圖、政府公文送件，方方面面都難不倒「她們」。

        未來太陽人會繼續帶給大家滿滿的正能量喔!!

        也期待您一起加入太陽人的大家庭，一起達成能源的轉型、環境的永續

        追蹤太陽人臉書: 太陽人全民電廠   太陽人Instagram: hellosolarman
      </div>
    </div>
  </section>
  <!-- [End]SinglePageContent  -->
  <!-- [Start]footer  -->
  <section>
    <h4>最近發布</h4>
    <div><swiper></swiper></div>
  </section>
  <!-- [End]footer  -->
</template>

<script>
import swiper from '../component/swiperNews.vue'
export default {
  name: 'newsDetailPage',
  components: {
    swiper
  },
  data () {
    return {
      search: '',
      typeFilter: [],
      imgSrc: require('../../public/images/title/page_here_section_2.jpg'),
      product: [
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '太陽人最新消息',
          title: 'test11',
          date: '2022/07/01',
          type: 'news'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '綠能轉型行不行',
          title: 'test12',
          date: '2022/07/01',
          type: 'green'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '太陽人最新消息',
          title: 'test13',
          date: '2022/07/01',
          type: 'news'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '綠能轉型行不行',
          title: 'test14',
          date: '2022/07/01',
          type: 'green'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '太陽人最新消息',
          title: 'test15',
          date: '2022/07/01',
          type: 'news'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '綠能轉型行不行',
          title: 'test16',
          date: '2022/07/01',
          type: 'green'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '太陽人最新消息',
          title: 'test17',
          date: '2022/07/01',
          type: 'news'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '綠能轉型行不行',
          title: 'test18',
          date: '2022/07/01',
          type: 'green'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '太陽人最新消息',
          title: 'test19',
          date: '2022/07/01',
          type: 'news'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '綠能轉型行不行',
          title: 'test20',
          date: '2022/07/01',
          type: 'green'
        },
        // test dadta
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '太陽人最新消息',
          title: 'test21',
          date: '2022/07/01',
          type: 'news'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '綠能轉型行不行',
          title: 'test22',
          date: '2022/07/01',
          type: 'green'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '太陽人最新消息',
          title: 'test23',
          date: '2022/07/01',
          type: 'news'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '綠能轉型行不行',
          title: 'test24',
          date: '2022/07/01',
          type: 'green'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '太陽人最新消息',
          title: 'test25',
          date: '2022/07/01',
          type: 'news'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '綠能轉型行不行',
          title: 'test26',
          date: '2022/07/01',
          type: 'green'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '太陽人最新消息',
          title: 'test27',
          date: '2022/07/01',
          type: 'news'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '綠能轉型行不行',
          title: 'test28',
          date: '2022/07/01',
          type: 'green'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '太陽人最新消息',
          title: 'test29',
          date: '2022/07/01',
          type: 'news'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '綠能轉型行不行',
          title: 'test30',
          date: '2022/07/01',
          type: 'green'
        }
      ],
      currentFilter: '',
      countOfPage: 6,
      currentPage: 1,
      isActive: true,
      error: false,
      newsData: []
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
      const url = 'https://solardata.hellosolarman.com/api/data/news'
      this.$http.get(url).then((res) => {
        this.newsData = res.data.filter((item) => {
          if (res.data.id === this.$route) {
            console.log(this.$route)
          }
          return this.newsData
        })
      })
        .then((res) => {
          this.newsData = res.data.filter((item) => {
            if (item.img.match('http') === null) {
              item.img = web + item.img
            }
            return this.newsData
          })
          console.log(this.newsData)
        })
        .catch((err) => {
          console.log(err, 'getError')
        })
    }
  },
  computed: {
    // 搜尋功能
    filterProduct () {
      return this.typeFilter.filter((item) => {
        return (
          item.title.toLowerCase().includes(this.search.toLowerCase()) ||
          item.category.toLowerCase().includes(this.search.toLowerCase())
        )
      })
    },
    // 起始頁數設定
    pageStart: function () {
      return (this.currentPage - 1) * this.countOfPage
    },
    // 總頁數公式
    totalPage: function () {
      return Math.ceil(this.filterProduct.length / this.countOfPage)
    }
  },
  mounted () {
    // 渲染全部product資料
    this.typeFilter = this.product
  },
  created () {
    this.getData()
    this.paginate_total = this.typeFilter.length / this.paginate
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

<style lang="sass"></style>
