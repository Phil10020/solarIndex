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
    <div class="">
      <div class="d-flex flex-wrap justify-content-end news-detail-operation">
        <router-link :to="'/news'">
          <button><font-awesome-icon icon="fa-solid fa-list"/></button>
        </router-link>
      </div>
      <div class="news-detail-content">
        <h2 class="d-flex">{{ newsData[0].title }}</h2>
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
        <div class="d-flex flex-wrap justify-content-start content" v-html="newsData[0].content">
        </div>
        </div>
    </div>
  </section>
  <!-- [End]SinglePageContent  -->
  <!-- [Start]footer  -->
  <section>
    <h4>最近發布
    </h4>
    <div class="d-flex position-relative justify-content-center">
        <button class="position-absolute start-0">
          <i class="bi bi-chevron-left fs-5"></i>
        </button>
        <button class="position-absolute end-0">
          <i class="bi bi-chevron-right fs-5"></i>
        </button>
        <div class="">
          <div><img src="" alt="img"/></div>
          <div>dark hover</div>
        </div>
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
      newsData: [],
      axiosStatus: false
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
        })
        .catch((err) => {
          console.log(err, 'getError')
          this.axiosStatus = true
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

<style lang="scss" scoped>
  .swiper {
    width: 600px;
    height: 300px;
  }
</style>
