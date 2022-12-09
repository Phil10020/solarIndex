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
      <a :class="{ 'active': currentFilter === 'a' }" v-if="currentFilter === 'a'">綠能轉型行不行</a>
      <a :class="{ 'active': currentFilter === 'b' }" v-else-if="currentFilter === 'b'">太陽人最新消息</a>
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
          :class="{ 'active': currentFilter === 'b' }"
          @click.prevent="filterCategory('b')"
        >
          太陽人最新消息
        </li>
        <li
          :class="{ 'active': currentFilter === 'a' }"
          @click.prevent="filterCategory('a')"
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
    <div class="d-flex flex-wrap px-0 item-width row justify-content-center" :class="{ 'justify-content-start': error }">
      <div class="d-flex  mb-3 news-card position-relative col-4 g-3" :class="{ 'me-md-5': error }" v-for="item in filterProduct.slice(pageStart, pageStart + countOfPage)"
        :key="item.id">
        <router-link :to="{name:'newsDetailPage', params:{id: item.id}}" style="width: 100%">
          <div class="mb-3 mb-lg-0">
          <div class="position-relative">
            <img :src="item.img" class="card-img-style " style="height: 180px" :alt="item.title" />
            <div class="item-hover">
              <a target="_blank" class="d-flex flex-column justify-content-center" style="width:100%">
                <div class="d-flex justify-content-center"><i class="bi bi-link-45deg link-icon" ></i></div>
              </a>
            </div>
          </div>
          <div class="card-body px-0 p-md-2">
            <div class="d-flex justify-content-between">
              <div><i class="bi bi-calendar3"></i> {{ item.create_date }} </div>
              <div><i class="bi bi-list-ul"></i> {{ item.newsCategory }} </div>
            </div>
            <h5 v-html="item.title" class="card-title py-3 m-0"></h5>
          </div>
          </div>
        </router-link>
      </div>
    </div>
    <!-- [End]Content  -->
    <!-- [Start]Pagination  -->
    <div class="pagination-block d-flex justify-content-center mt-5 mb-5">
      <nav aria-label="Page navigation example">
        <ul v-if="currentPage < 3  " class="pagination" :class="{ 'disabled': pageArr.length === 1 }">
          <li
            class="page-item"
            :class="{ 'disabled': currentPage === 1 }"
            @click.prevent="setPage(currentPage - 1)"
          >
            <a class="page-link" href="#"><i class="bi bi-chevron-bar-left"></i></a>
          </li>
          <li
            class="page-item"
            v-for="n in pageArr.slice(0, 5)"
            :key="n.index"
            :class="{ 'active': currentPage === n }"
            @click.prevent="setPage(n)"
          >
            <a class="page-link" href="#"> {{ n }} </a>
          </li>
          <li
            class="page-item"
            :class="{ 'disabled': currentPage === pageArr.length }"
            @click.prevent="setPage(currentPage + 1)"
          >
            <a class="page-link" href="#"><i class="bi bi-chevron-bar-right"></i></a>
          </li>
        </ul>
        <ul v-else-if="2 < currentPage < totalPage - 5 " class="pagination" :class="{ 'disabled': pageArr.length === 1 }">
          <li
            class="page-item"
            :class="{ 'disabled': currentPage === 1 }"
            @click.prevent="setPage(currentPage - 1)"
          >
            <a class="page-link" href="#"><i class="bi bi-chevron-bar-left"></i></a>
          </li>
          <li
            class="page-item"
            v-for="n in pageArr.slice(currentPage-3, currentPage+2)"
            :key="n.index"
            :class="{ 'active': currentPage === n }"
            @click.prevent="setPage(n)"
          >
            <a class="page-link" href="#"> {{ n }} </a>
          </li>
          <li
            class="page-item"
            :class="{ 'disabled': currentPage === pageArr.length }"
            @click.prevent="setPage(currentPage + 1)"
          >
            <a class="page-link" href="#"><i class="bi bi-chevron-bar-right"></i></a>
          </li>
        </ul>
        <ul v-else class="pagination" :class="{ 'disabled': pageArr.length === 1 }">
          <li
            class="page-item"
            :class="{ 'disabled': currentPage === 1 }"
            @click.prevent="setPage(currentPage - 1)"
          >
            <a class="page-link" href="#"><i class="bi bi-chevron-bar-left"></i></a>
          </li>
          <li
            class="page-item"
            v-for="n in pageArr.slice(totalPage - 5, totalPage)"
            :key="n.index"
            :class="{ 'active': currentPage === n }"
            @click.prevent="setPage(n)"
          >
            <a class="page-link" href="#"> {{ n }} </a>
          </li>
          <li
            class="page-item"
            :class="{ 'disabled': currentPage === pageArr.length }"
            @click.prevent="setPage(currentPage + 1)"
          >
            <a class="page-link" href="#"><i class="bi bi-chevron-bar-right"></i></a>
          </li>
        </ul>
          <!-- <li
            class="page-item"
            v-for="n in pageArr.slice(currentPage-1, currentPage+4)"
            :key="n.index"
            :class="{ 'active': currentPage === n }"
            @click.prevent="setPage(n)"
          >
            <a class="page-link" href="#"> {{ n }} </a>
          </li> -->
      </nav>
    </div>
    <!-- [End]Pagination  -->
  </section>
  <!-- [End]Main  -->
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'
import axios from 'axios'
// import axios from 'axios'
export default {
  name: 'newsPage',
  setup () {
    const imgSrc = ref(require('../../public/images/title/page_here_section_2.jpg'))
    const countOfPage = 6
    const currentPage = ref(1)
    const error = ref(false)
    const typeFilter = ref([])
    const newsData = ref([])
    const filterData = ref([])
    const pageArr = ref([])
    const search = ref('')
    const currentFilter = ref('')

    // 列表篩選，利用if else判斷product.type的類型，並使用this.currentFilter = type or ''來改變active的啟動條件
    const filterCategory = function (type) {
      setPage(1)
      currentFilter.value = type
      if (type === 'all') {
        typeFilter.value = filterData.value
        currentFilter.value = ''
      } else {
        typeFilter.value = filterData.value.filter((item) => {
          // 使用includes判斷true or false 篩選 type (news & green)
          return item.category.toLowerCase().includes(type)
        })
      }
      addArrIdx()
    }

    // 取得axios資料
    const getData = function () {
      const web = 'https://www.hellosolarman.com'
      const url = 'https://solardata.hellosolarman.com/api/data/news'
      axios.get(url).then((res) => {
        newsData.value = res.data.filter((item) => {
          if (item.img.match('http') === null) {
            item.img = web + item.img
          }
          return newsData.value
        })
      })
        .then(() => changeCategory())
        .then(() => addArrIdx())
        .then(() => changeDate())
        .catch((err) => {
          console.log(err, 'getError')
        })
    }

    // 將參數帶入預設頁面currentPage
    const setPage = function (idx) {
      if (idx >= 0 || idx < totalPage.value) {
        currentPage.value = idx
      }
    }
    const changeCategory = function () {
      for (let num = 1; num <= totalPage.value; num++) {
        filterData.value.push(num)
      }
      newsData.value.forEach((item) => {
        if (item.category === 'A') {
          filterData.value.push({ ...item, newsCategory: '太陽人最新消息' })
        } else {
          filterData.value.push({ ...item, newsCategory: '綠能轉型行不行' })
        }
      })
    }

    // 日期降序排列&格式調整
    const changeDate = function () {
      // 升序排列
      filterData.value.sort(function (a, b) {
        return new Date(b.create_date) - new Date(a.create_date)
      })
      // 篩選字串
      filterData.value.forEach((item) => {
        item.create_date = new Date(item.create_date).toLocaleDateString()
      })
    }

    // 頁數代號關聯顯示
    const addArrIdx = function () {
      pageArr.value = []
      const allPage = Math.ceil(filterProduct.value.length / countOfPage)
      for (let newsIdx = 1; newsIdx <= allPage; newsIdx++) {
        pageArr.value.push(newsIdx)
      }
    }

    // 搜尋功能
    const filterProduct = computed(() => {
      return typeFilter.value.filter((item) => {
        return (
          item.title.includes(search.value.toLowerCase())
        )
      })
    })

    // 監聽事件並將更動後的currentPage，設定回原本預設值，並且觸發addArrIdx函式重新計算頁數
    watch(search, () => {
      currentPage.value = 1
      addArrIdx()
    })
    // 起始頁數設定
    const pageStart = computed(() => (currentPage.value - 1) * countOfPage)

    // 總頁數公式
    const totalPage = computed(() => Math.ceil(typeFilter.value.length / countOfPage))

    // 渲染全部product資料
    onMounted(() => {
      typeFilter.value = filterData.value
    })

    // setup沒有created,所以直接呼叫函式
    getData()

    return { imgSrc, countOfPage, currentPage, error, pageArr, search, currentFilter, setPage, filterProduct, pageStart, totalPage, filterCategory }
  }
}
</script>
