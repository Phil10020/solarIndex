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

  <!-- [Start]Page & Search  -->
  <section class="section-operation">
    <div class="operation-block">
      <ul class="welfare-type">
        <li
          :class="{ 'active': currentFilter === '' }"
          @click.prevent="filterCategory('all')"
        >
          全部
        </li>
        <li
          :class="{ 'active': currentFilter === 'news' }"
          @click.prevent="filterCategory('news')"
        >
          太陽人最新消息
        </li>
        <li
          :class="{ 'active': currentFilter === 'green' }"
          @click.prevent="filterCategory('green')"
        >
          綠能轉型行不行
        </li>
      </ul>
      <div class="search-block ">
        <div class="input-group mb-3">
          <input
            v-model="search"
            type="text"
            class="form-control"
            placeholder="請輸入關鍵字"
          />
          <div class="input-group-append">
            <button
              id="btn_search"
              class="btn btn-outline-secondary"
              type="button" disabled
            >
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- [End]Page & Search  -->

  <!-- [Start]Main  -->
  <section class="news-section-papers">
    <!-- [Start]Content (slice取得第開始，與結尾資料並與頁數關聯) -->
    <div class="d-flex flex-wrap px-0 item-width" :class="{ 'justify-content-start': error }">
      <div class="d-flex px-0 mb-3 card-width" :class="{ 'me-md-5': error }" v-for="item in filterProduct.slice(pageStart, pageStart + countOfPage)"
        :key="item.title">
        <router-link to="newsDetailPage">
          <div class="card mb-3 mb-lg-0">
          <img :src="item.testImg" class="card-img-top" alt="" />
          <div class="card-body px-0 p-md-2">
            <div class="d-flex justify-content-between">
              <div><i class="bi bi-calendar3"></i> {{ item.date }} </div>
              <div><i class="bi bi-list-ul"></i> {{ item.category }} </div>
            </div>
            <h5 class="card-title py-3 m-0">{{ item.title }}</h5>
          </div>
          </div>
        </router-link>
      </div>
    </div>
    <!-- [End]Content  -->
    <!-- [Start]Pagination  -->
    <div class="pagination-block d-flex justify-content-center mt-5 mb-5">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li
            class="page-item"
            :class="{ 'disabled': currentPage === 1 }"
            @click.prevent="setPage(currentPage - 1)"
          >
            <a class="page-link" href="#"><i class="bi bi-chevron-bar-left"></i></a>
          </li>
          <li
            class="page-item"
            v-for="n in totalPage"
            :key="n.title"
            :class="{ 'active': currentPage === n }"
            @click.prevent="setPage(n)"
          >
            <a class="page-link" href="#"> {{ n }} </a>
          </li>
          <li
            class="page-item"
            :class="{ 'disabled': currentPage === totalPage }"
            @click.prevent="setPage(currentPage + 1)"
          >
            <a class="page-link" href="#"><i class="bi bi-chevron-bar-right"></i></a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- [End]Pagination  -->
  </section>
  <!-- [End]Main  -->
</template>

<script>
export default {
  name: 'newsPage',
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
      error: false
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
