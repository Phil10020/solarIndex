<template>
  <!-- [Start]Banner  -->
  <section
    class="subpage-banner-image"
    :style="{ background: 'url(' + imgSrc + ')' }"
  >
    <div class="container text-white">
      <h4>PUBLIC WELFARE</h4>
      <h1>太陽人公益</h1>
    </div>
  </section>
  <!-- [End]Banner  -->

  <!-- [Start]breadcrumbs-list  -->
  <section>
    <div class="navigation-item">
      <a href="index.aspx">首頁</a>
      <i class="bi bi-chevron-double-right"></i>
      <a href="#" class="active">太陽人公益</a>
    </div>
  </section>
  <!-- [End]breadcrumbs-list  -->

  <!-- [Start]Content  -->
  <section class="publicWelfare_section">
    <!-- [Start]Select & Search-Bar  -->
    <div class="d-flex justify-content-between">
          <ul class="welfare-type">
			<li :class="{'active':currentFilter === ''}"  @click.prevent="filterCategory('all')">全部</li>
			<li :class="{'active':currentFilter === 'I'}" @click.prevent="filterCategory('I')">國際救援</li>
			<li :class="{'active':currentFilter === 'G'}" @click.prevent="filterCategory('G')">老人服務</li>
			<li :class="{'active':currentFilter === 'W'}" @click.prevent="filterCategory('W')">婦幼關懷</li>
			<li :class="{'active':currentFilter === 'B'}" @click.prevent="filterCategory('B')">身心障礙</li>
			<li :class="{'active':currentFilter === 'E'}" @click.prevent="filterCategory('E')">環保動保</li>
			<li :class="{'active':currentFilter === 'O'}" @click.prevent="filterCategory('O')">其他</li>
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
    <!-- [End]Select & Search-Bar  -->
    <div class="welfare-list">
      <div class="card-wrap" v-for="item in filterProduct.slice(pageStart, pageStart + countOfPage)" :key="item.title">
      <router-link :to="`/poblic/${item.post_id}`" class="welfare-card">
        <div class="img-block">
          <a href="">
            <img :src="item.testImg" alt=""/>
          </a>
        </div>
        <div class="content-block">
        <div class="title">
          <div class="welfare-name">{{item.title}}</div>
          <div class="money">
            <div>受惠金額</div>
            <div>{{item.price}}</div>
            <div>(TWD)</div>
          </div>
        </div>
        <div class="content">{{item.content}}</div>
        <!-- <div class="content">
          <div class="wrapper">
          <input id="exp1" class="exp"  type="checkbox">
          <div class="text">
          <label class="btn" for="exp1"></label>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laborum nisi totam sit quod iusto magnam quibusdam officia nemo reiciendis, optio dignissimos repudiandae possimus quis incidunt, voluptatum consequatur vitae molestias voluptas iste exercitationem veritatis. Earum doloribus amet veniam dolorem perspiciatis!
          </div>
          </div>
        </div> -->
        </div>
      </router-link>
    </div>
    </div>
  </section>
  <!-- [End]Content  -->

  <!-- [Start]Pagination  -->
  <section>
    <div class="pagination-block d-flex justify-content-center mt-5 mb-5">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"
            :class="{ 'disabled': currentPage === 1 }"
            @click.prevent="setPage(currentPage - 1)"
          ><a class="page-link" href=""><i class="bi bi-chevron-bar-left"></i></a></li>
          <li
            class="page-item"
            v-for="n in totalPage"
            :key="n.title"
            :class="{ 'active': currentPage === n }"
            @click.prevent="setPage(n)"
            ><a class="page-link" href=""> {{ n }} </a></li>
          <li
            class="page-item"
            :class="{ 'disabled': currentPage === totalPage }"
            @click.prevent="setPage(currentPage + 1)"
            ><a class="page-link" href=""><i class="bi bi-chevron-bar-right"></i></a></li>
        </ul>
    </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: 'poblicWelfare',
  data () {
    return {
      imgSrc: require('../../public/images/title/page_here_section_2.jpg'),
      product: [],
      currentFilter: '',
      countOfPage: 3,
      currentPage: 1,
      search: '',
      typeFilter: []
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
          return item.type.includes(type)
        })
      } ;
    },
    // 將參數帶入預設頁面currentPage
    setPage: function (idx) {
      if (idx >= 0 || idx < this.totalPage) {
        this.currentPage = idx
      }
    },
    // 取得json資料，將res賦予到data和常變動的data內
    getData () {
      this.$http.get('/test.json/').then((res) => {
        this.product = res.data.data
        this.typeFilter = res.data.data
      }).catch((err) => {
        console.log(err, 'error')
      })
    }
  },
  computed: {
    // 搜尋功能
    filterProduct () {
      return this.typeFilter.filter((item) => {
        return (
          item.title.toLowerCase().includes(this.search.toLowerCase()) ||
          item.content.toLowerCase().includes(this.search.toLowerCase())
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
  // 掛載axios 更改DOM元素
  mounted () {
    this.getData()
  },
  watch: {
    // 監聽事件並將更動後的currentPage，設定回原本預設值
    search: function () {
      this.currentPage = 1
    }
  }
}
</script>
