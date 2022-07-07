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
  <section id="breadcrumbs-navigation">
    <div class="breadcrumbs">
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
      <div class="welfare-card">
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
        </div>
      </div>
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
      product: [
        {
          testImg: 'https://www.hellosolarman.com/assets/welfare/80326560-d31e-4cad-b0a6-fdf68d34c496/imgs/imgCharity.jpg',
          title: '台灣關愛基金會',
          price: 15000,
          content: '透過經濟部能源局與台電的20年再生能源躉購制度，我們可以集合眾人之力，建置起一座日光循環電廠，在銷售電力獲得穩健收益的同時，也能夠為台灣的能源轉型、環境永續提供一份助力。',
          type: 'I'
        },
        {
          testImg: 'https://www.hellosolarman.com/assets/welfare/34454346-697f-41a5-874d-5894e7b219e1/imgs/imgCharity.jpg',
          title: 'ARTT台灣動物緊急救援小組',
          price: 15900,
          content: '台灣動物緊急救援小組於民國八十四年成立於高雄市，當時是全台灣第一個仿效歐美專為傷病受虐流浪動物提供緊急救援與醫療的民間組織；組織開始之初，只有少數幾名志工自發性參與流浪貓狗救援，並自掏腰包向國外進口專業的動物救援器材。逐漸地，因為理念與行動受到大眾肯定，越來越多的支持者陸續加入捐助行列，投入動物救援任務；台灣動物緊急救援小組亦於民國九十六年向內政部申請立案，正式成為全國性公益非營利組織「台灣動物緊急救援推廣協會」，也是全台灣第一個經政府同意，准許對外合法勸募的動物救援組織。',
          type: 'G'
        },
        {
          testImg: 'https://www.hellosolarman.com/assets/welfare/b0140b9c-4a7b-490b-883f-ada34388f5ff/imgs/imgCharity.jpg',
          title: '迦南身心障礙養護院',
          price: 15100,
          content: '迦南愛心電廠專案中每一片太陽能板被認購時，太陽人團隊都會率先捐贈500元善款來幫助身心障礙養護院的運營。每位專案參與者除了會獲得長期的收益之外，也可選擇提撥未來售電收益的部分比例，在未來20年持續提供迦南養護院中憨兒及身心障礙者的照顧費用及次期電廠準備金。',
          type: 'W'
        },
        {
          testImg: 'https://www.hellosolarman.com/assets/welfare/106ae4f6-8af7-4ffd-a32c-1a8dffd9101a/imgs/imgCharity.jpg',
          title: '讓浪吃飽-浪浪糧食平台',
          price: 15700,
          content: '太陽人全民電廠這次將透過日光循環公益專案，與讓浪吃飽集食計畫平台合作，藉由綠能電廠20年持續產出收益的特性來長期提供浪浪園區糧食援助，並與園區合作幫助改善環境不良、糧食短缺、醫療設備等問題，讓我們一起為浪浪們打造一座持續創造溫暖的浪浪愛心電廠。',
          type: 'B'
        },
        {
          testImg: 'https://www.hellosolarman.com/assets/welfare/b25b1fea-7fe9-4981-985c-995fb79b3091/imgs/imgCharity.jpeg',
          title: '勵馨基金會',
          price: 15900,
          content: '當勵馨基金會-日光循環公益專案中的每一片太陽能板被認購時，太陽人團隊都會率先捐贈500元善款來支持勵馨基金會的營運，您也可在認購太陽能板時自由決定往後售電收益的提撥比例（0~100%），讓更多婦幼可以獲得長達20年的溫暖。',
          type: 'E'
        },
        {
          testImg: 'https://www.hellosolarman.com/assets/welfare/80326560-d31e-4cad-b0a6-fdf68d34c496/imgs/imgCharity.jpg',
          title: '唐氏症關愛者協會',
          price: 14000,
          content: '透過太陽人全民電廠日光循環公益專案，參與者在認購每一片太陽能板時，太陽人團隊都會率先捐贈500元善款來幫助唐氏症關愛者協會的運營；而參與者除了可獲得來自台電至少20年的穩健收益之外，也能夠自由選擇捐贈提撥比例，將部分售電收益透過太陽人團隊持續幫助唐氏症關愛者協會及次期公益電廠準備金，讓一塊錢不只是一塊錢，愛心無限放大。',
          type: 'O'
        },
        {
          testImg: 'https://www.hellosolarman.com/assets/welfare/b14e9466-8c4b-4f13-8b7f-bece5b6aae8e/imgs/imgCharity.jpg',
          title: '勵馨基金會1',
          price: 18000,
          content: '當勵馨基金會-日光循環公益專案中的每一片太陽能板被認購時，太陽人團隊都會率先捐贈500元善款來支持勵馨基金會的營運，您也可在認購太陽能板時自由決定往後售電收益的提撥比例（0~100%），讓更多婦幼可以獲得長達20年的溫暖。',
          type: 'I'
        },
        {
          testImg: 'https://www.hellosolarman.com/assets/welfare/80326560-d31e-4cad-b0a6-fdf68d34c496/imgs/imgCharity.jpg',
          title: '唐氏症關愛者協會',
          price: 11000,
          content: '透過太陽人全民電廠日光循環公益專案，參與者在認購每一片太陽能板時，太陽人團隊都會率先捐贈500元善款來幫助唐氏症關愛者協會的運營；而參與者除了可獲得來自台電至少20年的穩健收益之外，也能夠自由選擇捐贈提撥比例，將部分售電收益透過太陽人團隊持續幫助唐氏症關愛者協會及次期公益電廠準備金，讓一塊錢不只是一塊錢，愛心無限放大。',
          type: 'G'
        }
      ],
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
      console.log(this.typeFilter)
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
  mounted () {
    // 渲染全部product資料
    this.typeFilter = this.product
  },
  watch: {
    // 監聽事件並將更動後的currentPage，設定回原本預設值
    search: function () {
      this.currentPage = 1
    }
  }
}
</script>
