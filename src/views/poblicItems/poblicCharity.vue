<template>
  <div>
    <div class="title">
      <font-awesome-icon icon="fa-solid fa-angle-right" />
      <span>公益專案介紹</span>
    </div>
    <div class="charity-info">
      <a href="https://www.twhhf.org/">
        <div class="charity-logo" :style="{ background: 'url(' + charityLogo + ')' }"></div>
      </a>
      <div class="charity-intro">
        <h5>台灣關愛基金會</h5>
        <span
          ><p>
            跨越族群藩籬的愛心&nbsp;<br />財團法人台灣關愛基金會（關愛之家）<br />黑戶寶寶、失聯移工，是台灣長久以來難解的議題。<br />我們很難想像，在台灣仍有許多非本國籍兒童、孕婦移工婦女、落難外籍人士，在台灣無法獲得妥善基本的生活和人權保障。
          </p>
          <p>
            暱稱「楊姊」的關愛之家創辦人—楊婕妤女士，總是不忍見他人之苦，捲起衣袖，盡其所能地幫助他們。不分國籍或族群，從住所照料、生活起居，甚至陪他們走完人生最後一程。關愛之家提供24小時照顧，成為這群弱勢族群的避風港。
          </p>
          <p>
            【太陽人全民電廠-日光循環公益專案】<br />透過經濟部能源局與台電的20年再生能源躉購制度，我們可以集合眾人之力，建置起一座日光循環電廠，在銷售電力獲得穩健收益的同時，也能夠為台灣的能源轉型、環境永續提供一份助力。
          </p>
          <p>
            而在公益專案的每一片太陽能板被認購時，太陽人團隊都會捐出【500元善款】支持關愛基金會的運營；而每位參與者在認購該電廠的太陽能板之後，除了自己能夠獲得來自台電的穩健收益之外（IRR6%~），同時也能夠選擇提撥部分售電收益，並透過太陽人全民電廠在未來持續贈與給關愛之家和次期公益電廠，讓楊姊不分族群和國籍的愛更加永續，長達20年。
          </p>
          <p>
            太陽人全民電廠 邀請您一起支持&nbsp;<br />【財團法人台灣關愛基金會
            日光循環公益專案】<br />讓我們一起將愛放大，太陽不息，愛永延續。
          </p></span
        >
      </div>
    </div>
    <div class="col-md-12 mb-3">
      <img
        :src="typeFilter.testImg"
        class="img-fluid w-100"
      />
    </div>
    <div class="col-md-12">
      <!-- youtube style  -->
      <iframe
        style="width: 100%; height: 450px; border: 0; margin-top: 50px"
        class="youtube-player"
        type="text/html"
        src="https://www.youtube.com/embed/LUVG93Gk-9o"
        frameborder="0"
      ></iframe>
    </div>
  </div>
  <div>
    <div class="title">
      <font-awesome-icon icon="fa-solid fa-angle-right" />
      <span>公益流程</span>
    </div>
    <div class="mt-30">
      <div class="step">
        <div class="step-block">
          <div>
            <span class="step-num">1</span>
            <div class="step-info">
              <span>喵助購買太陽能板時，</span>
              <span>決定拿出20%收益做公益。</span>
            </div>
          </div>
          <div class="step1">
            <img class="img-fluid" :src="stepImg.step1" alt="step1">
          </div>
        </div>
        <div class="step-block ms-md-3">
          <div>
            <span class="step-num">2</span>
            <div class="step-info">
              <span>有一天收到電費單時，</span>
              <span>發現獲得總收益100塊！</span>
            </div>
          </div>
          <div class="step2">
            <img class="img-fluid" :src="stepImg.step2" alt="step2">
          </div>
        </div>
      </div>
      <div class="step mt-30">
        <div class="step-block">
          <div>
            <span class="step-num">3</span>
            <div class="step-info lg">
              <span
                >這100塊中，有80塊 (80%) 直接匯到喵助的銀行戶頭，</span
              >
              <span>而20塊 (20%) 則拿去做公益金了！</span>
            </div>
            <div class="step-info sm">
              <span
                >這100塊中，有80塊 (80%) 直接匯到喵助的銀行戶頭，而20塊
                (20%) 則拿去做公益金了！</span
              >
            </div>
          </div>
          <div class="step3 d-flex justify-content-center">
            <img class="img-fluid" :src="stepImg.step3" alt="step3">
          </div>
        </div>
      </div>
      <div class="step mt-30">
        <div class="step-block">
          <div>
            <span class="step-num">4</span>
            <div class="step-info lg">
              <span
                >這20塊 (20%) 公益金，將有一半提供給社會福利團體，</span
              >
              <span>另外一半提供給下次的公益電廠建置金。 </span>
            </div>
            <div class="step-info sm">
              <span
                >這20塊 (20%)
                公益金，將有一半提供給社會福利團體，另外一半提供給下次的公益電廠建置金。</span
              >
            </div>
          </div>
          <div class="step4-5 d-flex justify-content-center">
            <div class="step4">
              <img class="img-fluid" :src="stepImg.step4" alt="step4">
            </div>
            <div class="step5 d-flex justify-content-center">
              <img class="img-fluid" :src="stepImg.step5" alt="step5">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex flex-column align-items-center">
    <div class="font-weight-bold text-primary mt-30">
      跟著太陽人一起循環公益，愛心不斷!
    </div>
    <div class="btn btn-redwine mt-30">
      <a href="#" data-toggle="modal" data-target="#modal_charity"
        >詳細說明</a
      >
    </div>
  </div>
  <div class="mt-30">
    <div class="title">
      <font-awesome-icon icon="fa-solid fa-angle-right" />
      <span>購買三步驟</span>
    </div>
    <div class="buy-step">
      <div>
        <div class="icon">
          <i class="icon icon-ml icon1">
          </i>
        </div>
        <span>STEP 01</span>
        <span>選擇購買的電廠與購買片數</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
  </svg>
      <div>
        <div
          class="proportion"></div>
        <span>STEP 02</span>
        <span>拉選提撥公益比例</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
  </svg>
      <div>
        <div class="icon">
          <i class="icon icon-ml icon icon3"></i>
        </div>
        <span>STEP 03</span>
        <span>選擇付款方式並完成購買</span>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center align-items-center">
    <div class="step-notice">
      <span>
        <span class="text-primary">*</span>
      </span>
      <span
        >當您購買並完成付款，且該電廠完工並掛表後開始計算電費，未來 20
        年您每期所獲得的收益將依照您拉選的比例提撥 50%
        給該電廠指定捐贈之社福團體及機構，另外 50%
        將支持太陽人建置二期(或後期)公益電廠指定用途準備金，讓公益循環，愛心不斷。
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'poblicCharity',
  data () {
    return {
      charityLogo: require('../../../public/images/productWelfareId/imgLogo.png'),
      stepImg: {
        step1: require('../../../public/images/productWelfareId/step1.jpg'),
        step2: require('../../../public/images/productWelfareId/step2.jpg'),
        step3: require('../../../public/images/productWelfareId/step3.jpg'),
        step4: require('../../../public/images/productWelfareId/step4.jpg'),
        step5: require('../../../public/images/productWelfareId/step5.jpg')
      },
      typeFilter: []
    }
  },
  methods: {
    getData () {
      this.$http
        .get('/singleData.json/')
        .then((res) => {
          this.product = res.data.data[0]
          this.typeFilter = res.data.data[0]
        })
        .catch((err) => {
          console.log(err, 'error')
        })
    }
  },
  mounted () {
    this.getData()
  }
}

</script>
