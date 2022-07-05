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
    <div class="breadcrumbs">
      <a href="/index.aspx">首頁</a>
      <i class="bi bi-chevron-double-right"></i>
      <a href="/news.aspx">太陽人快報</a>
      <i class="bi bi-chevron-double-right"></i>
      <a :class="{ 'active': product.type === 'green' }" v-if="typeFilter.type === 'green'">綠能轉型行不行</a>
      <a :class="{ 'active': product.type === 'news' }" v-else-if="typeFilter.type === 'news'">太陽人最新消息</a>
      <a :class="{ 'active':isActive }" v-else>全部</a>
    </div>
  </section>
  <!-- [End]Breadcrumb  -->

  <!-- [Start]Page & Search  -->
  <section class="section-operation">
    <div class="operation-block">
      <ul class="tab-block">
        <li
          :class="{ 'active': currentFilter === '' }"
          @click="filterCategory('all')"
        >
          全部
        </li>
        <span class="line">|</span>
        <li
          :class="{ 'active': currentFilter === 'news' }"
          @click="filterCategory('news')"
        >
          太陽人最新消息
        </li>
        <span class="line">|</span>
        <li
          :class="{ 'active': currentFilter === 'green' }"
          @click="filterCategory('green')"
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
    <div class="d-flex flex-wrap  px-0">
      <div class="d-flex me-md-5 px-0 mb-3 card-width" v-for="item in filterProduct.slice(pageStart, pageStart + countOfPage)"
        :key="item.title">
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
          title: 'test123',
          date: '2022/07/01',
          type: 'news'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '綠能轉型行不行',
          title: 'test456',
          date: '2022/07/01',
          type: 'green'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '太陽人最新消息',
          title: 'test789',
          date: '2022/07/01',
          type: 'news'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '綠能轉型行不行',
          title: 'test987',
          date: '2022/07/01',
          type: 'green'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '太陽人最新消息',
          title: 'test654',
          date: '2022/07/01',
          type: 'news'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '綠能轉型行不行',
          title: 'test321',
          date: '2022/07/01',
          type: 'green'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '太陽人最新消息',
          title: 'test111',
          date: '2022/07/01',
          type: 'news'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '綠能轉型行不行',
          title: 'test222',
          date: '2022/07/01',
          type: 'green'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '太陽人最新消息',
          title: 'test333',
          date: '2022/07/01',
          type: 'news'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '綠能轉型行不行',
          title: 'test444',
          date: '2022/07/01',
          type: 'green'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '太陽人最新消息',
          title: 'test123',
          date: '2022/07/01',
          type: 'news'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '綠能轉型行不行',
          title: 'test456',
          date: '2022/07/01',
          type: 'green'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '太陽人最新消息',
          title: 'test789',
          date: '2022/07/01',
          type: 'news'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '綠能轉型行不行',
          title: 'test987',
          date: '2022/07/01',
          type: 'green'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '太陽人最新消息',
          title: 'test654',
          date: '2022/07/01',
          type: 'news'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '綠能轉型行不行',
          title: 'test321',
          date: '2022/07/01',
          type: 'green'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '太陽人最新消息',
          title: 'test111',
          date: '2022/07/01',
          type: 'news'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '綠能轉型行不行',
          title: 'test222',
          date: '2022/07/01',
          type: 'green'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '太陽人最新消息',
          title: 'test333',
          date: '2022/07/01',
          type: 'news'
        },
        {
          testImg: require('../../public/images/news/news-background.jpg'),
          category: '綠能轉型行不行',
          title: 'test444',
          date: '2022/07/01',
          type: 'green'
        }
      ],
      currentFilter: '',
      countOfPage: 6,
      currentPage: 1
    }
  },
  methods: {
    // 列表篩選
    filterCategory: function (type) {
      this.setPage(1)
      this.currentFilter = type
      if (type === 'all') {
        this.typeFilter = this.product
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
      console.log(this.currentPage)
      console.log(this.totalPage)
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
  }
}
</script>

<style lang="sass"></style>
