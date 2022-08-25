<template>
<section id="performance">
      <!-- [Start]banner  -->
  <section
  class="banner mobile-mb-30"
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
      <div class="d-flex justify-content-center tab-choose shadow rounded">
        <button type="button"><h4 class="heighlight">台灣電廠</h4></button>
        <button type="button"><h4>日本電廠</h4> </button>
      </div>
      <div class="d-flex">
        <div class="heighlight">台北</div>
        <div>桃園</div>
        <div>新竹</div>
        <div>苗栗</div>
        <div>台中</div>
        <div>嘉義</div>
        <div>台南</div>
        <div>雲林</div>
        <div>高雄</div>
        <div>花蓮</div>
        <div>宜蘭</div>
      </div>
      <div class="d-flex">
        <div>日本1</div>
        <div>日本2</div>
        <div>日本3</div>
        <div>日本4</div>
        <div>日本5</div>
      </div>
    </div>
  </section>
  <!-- [End]Tab  -->

<!-- [Start]card+map  -->
  <section class="d-flex row">
    <!-- [Start]Card  -->
    <section class="col-6">
      <div class="d-flex">
        <div style="height:100px; width:100px"><img src="" alt="">1</div>
        <div>
          <div>
            <p>屋頂型</p>
            <h2>太陽人一號</h2>
            <p>桃園八德</p>
          </div>
          <div class="d-flex">
            <div class="d-flex">
              <div><img src="" alt=""></div>
              <p>總容量 : 11.90 KW</p>
            </div>
            <div class="d-flex">
              <div><img src="" alt=""></div>
              <p>總片數 : 35片</p>
            </div>
          </div>
        </div>
      </div>
    </section>
      <!-- [End]Card  -->

    <!-- [Start]google map  -->
    <section class="col-6">
      <h1>google-map</h1>
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
      social: {
        intro: require('../../public/images/social/Section_intro.png'),
        introLeft: require('../../public/images/social/intro_outline_left.png'),
        introRight: require('../../public/images/social/intro_outline_right.png'),
        introText: require('../../public/images/social/Social_Impact.png'),
        introYourself: require('../../public/images/social/Yourself.png')
      },
      intention: {
        intentionText: require('../../public/images/social/Spare.png'),
        intentionBg: require('../../public/images/social/Section_Intention.png'),
        intentionTree: require('../../public/images/social/intention_tree.png'),
        intentionSolar: require('../../public/images/social/intention_solar.png')
      },
      tracking: {
        tracking1: require('../../public/images/social/tracking1.png'),
        tracking2: require('../../public/images/social/tracking2.png'),
        tracking3: require('../../public/images/social/tracking3.png'),
        tracking4: require('../../public/images/social/tracking4.png'),
        trackingBg: require('../../public/images/social/Section_tracking.png')
      },
      goals: {
        rectangle: require('../../public/images/social/goalsWrap/rectangle.png'),
        rectangleHouse: require('../../public/images/social/goalsWrap/rectangle_house.png'),
        rectangleEye: require('../../public/images/social/goalsWrap/rectangle_eye.png'),
        rectangleSun: require('../../public/images/social/goalsWrap/rectangle_sun.png'),
        goalsBg: require('../../public/images/social/Section_goals.png'),
        goalsText: require('../../public/images/social/goalsWrap/Our.png'),
        goalsLogo: require('../../public/images/social/goalsWrap/sdgs.png'),
        goalsGray: require('../../public/images/social/goalsWrap/rectangle_gray.png'),
        goalsGreen: require('../../public/images/social/goalsWrap/rectangle_green.png')
      },
      partner: {
        our: require('../../public/images/social/our_partner.png'),
        circle: require('../../public/images/social/partner_circle.png'),
        partnerBg: require('../../public/images/social/Section_partner.png'),
        partnerText: require('../../public/images/social/text_best.png'),
        partner1: require('../../public/images/social/partnerImg/partner1.png'),
        partner2: require('../../public/images/social/partnerImg/partner2.png'),
        partner3: require('../../public/images/social/partnerImg/partner3.png')
      },
      see: {
        logo: require('../../public/images/social/see_logo.png'),
        seeBg: require('../../public/images/social/Section_see.png'),
        icon: require('../../public/images/social/icon.png'),
        download: require('../../public/images/social/download_bar.png'),
        seeText: require('../../public/images/social/to_see.png'),
        cardLogo: require('../../public/images/social/card_logo.png'),
        Wu: require('../../public/images/social/see/avatarWu.jpg'),
        Ceng: require('../../public/images/social/see/avatarCeng.jpg'),
        Yung: require('../../public/images/social/see/avatarYung.jpg')
      },
      power: {
        world: require('../../public/images/social/all_world.png')
      },
      footer: {
        footerLogo: require('../../public/images/social/footerLogo.svg')
      }
    }
  }
}
</script>
