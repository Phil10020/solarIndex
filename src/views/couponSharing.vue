<template>
  <section
    class="subpage-banner-image"
    :style="{ background: 'url(' + imgSrc + ')' }"
  >
    <div class="container text-white">
      <h4>COUPON SHARING</h4>
      <h1>邀請好友拿獎勵</h1>
    </div>
  </section>
  <section>
    <nav class="navigation-item">
      <a href="/index.aspx">首頁</a>
      <i class="bi bi-chevron-double-right"></i>
      <a href="">其他</a>
      <i class="bi bi-chevron-double-right"></i>
      <!-- <a :class="{ 'active': currentFilter === 'green' }" v-if="currentFilter === 'green'">綠能轉型行不行</a>
      <a :class="{ 'active': currentFilter === 'news' }" v-else-if="currentFilter === 'news'">太陽人最新消息</a> -->
      <a class="active">邀請好友拿獎勵</a>
    </nav>
  </section>
  <section id="couponSharing">
    <div class="container content">
      <div class="share-title">日光幣分享拿獎勵</div>
      <div class="share-desc">
        <div class="share-desc-block">
          <img :src="imgSrc1" alt="邀請朋友來註冊領月光幣" />
        </div>
        <div class="share-desc-word">
          <span>新朋友完成註冊或認購，獲得日光幣獎勵!</span>
          <br />
          <span
            >您可在認購太陽能板時使用並獲得現金折抵優惠，讓投報率更提高!</span
          >
        </div>
        <div class="share-desc-innerBlock">
          <div class="share-desc-block">
            <img
              class="small"
              :src="imgSrc2"
              alt="兩位朋友註冊成功，同時獲得300日光幣"
            />
            <div class="share-desc-word">
              <span>每2位新朋友成功註冊時，</span>
              <br/>
              <span
                >您都能獲得<span class="font-color-primary">+300</span
                >元的日光幣</span
              >
            </div>
          </div>
          <div class="share-desc-block">
            <img
              class="small"
              :src="imgSrc3"
              alt="介紹新朋友首次認購成功，可額外獲得日光幣"
            />
            <div class="share-desc-word">
              <span>新朋友首次認購太陽能板成功時，</span>
              <br />
              <span
                >您將再額外獲得<span class="font-color-primary">+500</span
                >元的日光幣!</span
              >
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="share-step-title">連結分享三步驟超簡單</div>
      <div class="share-step-shoose">
        <button
          class="share-step-type divider px-3"
          type="computer"
          :class="{ active: !isShowingWeb }"
          @click="toggleTab(false)"
        >
          <i class="bi bi-laptop"></i>網頁分享
        </button>
        <button
          class="share-step-type px-3"
          type="app"
          :class="{ active: isShowingWeb }"
          @click="toggleTab(true)"
        >
          <i class="bi bi-phone"></i>App分享
        </button>
      </div>
      <div class="share-step app" v-if="isShowingWeb == true">
        <div class="share-step-block">
          <div class="share-step-img">
            <img :src="imgAppShare1" alt="App分享Setp1" />
          </div>
          <div class="share-step-desc">
            <span>STEP 01</span>
            <br />
            <span>至會員中心(現個人帳戶)點選優惠分享</span>
          </div>
        </div>
        <div class="share-step-block">
          <div class="share-step-img">
            <img :src="imgAppShare2" alt="App分享Setp2" />
          </div>
          <div class="share-step-desc">
            <span>STEP 02</span>
            <br />
            <span>點選取得序號並選擇分享方式</span>
            <br />
            <span
              >可以用 <big style="color: #00c300"><b>LINE</b></big> 跟
              <big style="color: #1877f2"><b>FB</b></big> 分享更方便喔!</span
            >
          </div>
        </div>
        <div class="share-step-block">
          <div class="share-step-img">
            <img :src="imgWebShare3" alt="Web分享Setp3" />
          </div>
          <div class="share-step-desc">
            <span>STEP 03</span>
            <br />
            <span>新朋友完成註冊或認購，獲得日光幣獎勵！</span>
          </div>
        </div>
      </div>
      <div class="share-step computer" v-else>
        <div class="share-step-block">
          <div class="share-step-img">
            <img :src="imgWebShare1" alt="Web分享Setp1" />
          </div>
          <div class="share-step-desc">
            <span>STEP 01</span>
            <br />
            <span>至會員中心點選優惠分享</span>
          </div>
        </div>
        <div class="share-step-block">
          <div class="share-step-img">
            <img :src="imgWebShare2" alt="Web分享Setp2" />
          </div>
          <div class="share-step-desc">
            <span>STEP 02</span>
            <br />
            <span>點選取得序號並選擇分享方式</span>
            <br />
            <span
              >可以用 <big style="color: #00c300"><b>LINE</b></big> 跟
              <big style="color: #1877f2"><b>FB</b></big> 分享更方便喔!</span
            >
          </div>
        </div>
        <div class="share-step-block">
          <div class="share-step-img">
            <img :src="imgWebShare3" alt="Web分享Setp3" />
          </div>
          <div class="share-step-desc">
            <span>STEP 03</span>
            <br />
            <span>新朋友完成註冊或認購，獲得日光幣獎勵！</span>
          </div>
        </div>
      </div>
      <div class="share-now-btn">
        <a href="#" data-toggle="modal" data-target="#login">即刻分享</a>
      </div>
    </div>
    <div class="share-more-detail">
      <div>
        太陽人全民電廠保有隨時修改本活動規範的權利，得不經事前通知隨時撤銷或終止相關獎勵。若發現有任何濫用、詐欺或違反太陽人全民電廠相關政策之行為，太陽人全民電廠有權進行審查及處理，並保有終止或回收日光幣之權利。
      </div>
      <!-- Button trigger modal -->
      <button type="button" class="btn share-more-detail-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        更多說明
      </button>
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">邀請好友拿獎勵說明</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h5>詳細規則：</h5>
              <ol>
                <li>每當有兩位新朋友透過您分享的序號或連結成功註冊成為太陽人會員時，您將獲得300元日光幣獎勵，新朋友也將各獲得100元日光幣。</li>
                <li>新朋友首次完成認購太陽能板時，您將額外再獲得500元日光幣獎勵。</li>
                <li>太陽人全民電廠隨時保留活動修改之權利。</li>
              </ol>
            </div>
            <div class="modal-footer justify-content-start">
              <h5>注意事項：</h5>
              <ol>
                <li>
                  邀請者:
                  <ul style="list-style-type: lower-alpha;">
                    <li>日光幣僅限於太陽人全民電廠之電廠專案認購太陽能板時使用，每片太陽能板的日光幣使用上限為500元。</li>
                    <li>受邀者一旦完成優惠分享流程，太陽人即自動將日光幣獎勵派發至邀請者之日光幣帳戶。</li>
                    <li>日光幣不得移轉至其他帳戶，亦不得轉換為現金或其他使用。</li>
                    <li>若受邀者收到多個分享碼，僅受邀者首先輸入之分享碼生效，並使該邀請者獲得日光幣。</li>
                  </ul>
                </li>
                <li>
                  受邀者:
                  <ul style="list-style-type: lower-alpha;">
                    <li>限過去未於太陽人全民電廠註冊之使用者可享有此優惠方案之服務與獎勵。</li>
                    <li>每位受邀者僅能使用一組分享碼。</li>
                    <li>太陽人全民電廠隨時保留活動修改之權利，若發現有任何濫用、詐欺或違反太陽人全民電廠相關政策之行為，太陽人全民電廠有權進行審查及處理，並保有終止或回收日光幣之權利。</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'couponSHaring',
  props: {
    msg: String
  },
  data () {
    return {
      imgSrc: require('../../public/images/title/page_here_section_2.jpg'),
      imgSrc1: require('../../public/images/coupon/couponShare1.png'),
      imgSrc2: require('../../public/images/coupon/couponShare2.png'),
      imgSrc3: require('../../public/images/coupon/couponShare3.png'),
      imgAppShare1: require('../../public/images/coupon/App分享1.gif'),
      imgAppShare2: require('../../public/images/coupon/App分享2.gif'),
      imgWebShare3: require('../../public/images/coupon/App分享_網頁分享3.gif'),
      imgWebShare1: require('../../public/images/coupon/網頁分享1.gif'),
      imgWebShare2: require('../../public/images/coupon/網頁分享2.gif'),
      isShowingWeb: false
    }
  },
  methods: {
    toggleTab (isShow) {
      this.isShowingWeb = isShow
    }
  }
}
</script>
