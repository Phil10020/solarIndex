<template>
<div id="social">
      <!-- [Start]banner  -->
  <section
  class="banner"
  :style="{ background: 'url(' + banner + ')' }"
  >
    <div class="text-white d-flex justify-content-center">
      <h1>社會影響力</h1>
    </div>
  </section>
  <!-- [End]banner  -->

  <!-- [Start]intro  -->
  <section>
    <div class="intro" :style="{ background: 'url(' + social.intro + ')' }">
      <div class="d-flex">
        <div>
          <div><img :src="social.introLeft" alt=""></div>
          <div>我們秉持著環境與經濟共贏的精神，以日本職人技術，台<br/>灣在地深耕為念，透過創新的商業模式與多方力量的串聯，<br/>為環境保育及能源轉型帶來正面的影響。<span>—— 太陽人創辦人   陳威丞，2013年</span></div>
          <div><img :src="social.introRight" alt=""></div>
        </div>
        <div><img :src="social.introText" alt=""></div>
      </div>
    </div>
  </section>
  <!-- [End]intro  -->

  <!-- [Start]intention  -->
  <section>
    <div :style="{ background: 'url(' + intention.intentionBg + ')' }">
      <div>
        <h2>Our Original Intention<span>太陽人全民電廠的初心與理念</span></h2>
        <p>2011 年,311 東日本大地震與福島核災，徹底改寫了我們對能源安全的認知，我們也因此認知到：環境和文明的永續及平衡，是這世代人類都必須面對的共同課題。文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例文字範例。</p>
        <div>
          <div>
            <h4>綠能共享經濟的源起</h4>
            <p>節能減碳,能源轉型已是世界趨勢，但礙於資金或資訊通路門檻過高，一般社會<br/>大眾的力量無法順暢而有效地參與其中，使得能源轉型之路窒礙難行。</p>
          </div>
          <div>
            <h4>民間力量 能源轉型</h4>
            <p>太陽人自 2013 年開始提供以太陽能板為單位的電廠分割認購平台服務，以綠能<br/>的共享經濟為主軸，大幅降低了民眾參與的門檻，每一個人都能夠輕鬆地成為<br/>電廠老闆，並成為能源轉型的一道助力。</p>
          </div>
        </div>
      </div>
      <div>
        <div><img :src="intention.intentionTree" alt=""></div>
        <div><img :src="intention.intentionSolar" alt=""></div>
      </div>
    </div>
  </section>
  <!-- [End]intention  -->

  <!-- [Start]intro  -->
  <section>
    <div class="intro">
      <div class="d-flex">
        <div><img :src="social.introLeft" alt=""></div>
        <div>讓民間力量落實於能源轉型,達成環境與經濟的共贏!<br/><span>—— 太陽人的理念來源，創始至今</span></div>
        <div><img :src="social.introRight" alt=""></div>
      </div>
    </div>
  </section>
  <!-- [End]intro  -->

  <!-- [Start]tracking  -->
  <section>
    <div :style="{ background: 'url(' + tracking.trackingBg + ')' }">
      <h2>Power Plant Tracking<span>全民電廠足跡</span></h2>
      <div>
        <div>
          <h5><span>2013 至 2016</span>跨國綠電共享經濟：全民電廠的先驅者</h5>
          <p>「鹿兒島本名一號」是太陽人全民電廠 於 2013 年推出的第一座，日台全民皆可參與的綠能 電廠專案。開啟了綠電共享經濟的先河。<br/>
佐賀、長崎、大分等地的日本綠能電廠亦先後完工 掛表，共 35 位一般社會大眾一同參與並證明了民間 力量落實能源轉型的可行性與價值性。</p>
        </div>
        <div>
          <img :src="tracking.tracking1" alt="">
        </div>
      </div>
      <div>
        <div>
          <h5><span>2017 至 2019</span>校園與全民的能源革命：綠能的共享經濟</h5>
          <p>於 2018 年募資完成的太陽人龍肚光電球場專案共有 45 人參與太陽能板的認購，共 835 片太陽能板構成面積近 500 坪的光電球場，不但能夠讓學生們及地方居民不受天氣影響盡情活動身體，未來 20 年還能夠創造近 683 萬度的再生能源，減少二氧化碳排放量近 3,760,425 kg。</p>
        </div>
        <div>
          <img :src="tracking.tracking2" alt="">
        </div>
      </div>
      <div>
        <div>
          <h5><span>2020至 2021</span>提升偏鄉能源自給率與就業率：花東子弟返鄉就業</h5>
          <p>太陽人全民電廠的「點亮花東計畫」，透過在花東地區太陽能電廠的建置，有效地創造了大量且長期的工作機會，使花東偏鄉子弟不但能夠返鄉，還能夠獲得長期穩健的工作機會。</p>
        </div>
        <div>
          <img :src="tracking.tracking3" alt="">
        </div>
      </div>
      <div>
        <div>
          <h5><span>2022 至 Future</span>日光公益愛心永續：日光循環公益創能計畫</h5>
          <p>太陽人全民電廠透過日光公益模式，為社福機構或弱勢族群提供長期間的被動收益，以太陽的能量為他們帶來永續的溫暖。期待您也能一起參與，在參與氣候行動的同時不但能夠創造個人的經濟價值，也能讓您的愛心同步放大，達成環境、理財、公益的共贏。</p>
        </div>
        <div>
          <img :src="tracking.tracking4" alt="">
        </div>
      </div>
    </div>
  </section>
  <!-- [End]tracking  -->

  <!-- [Start]Goals  -->
  <section>
    <div :style="{ background: 'url(' + goals.goalsBg + ')' }">
      <div>
        <h2>Our SDGS Goals<span>太陽人的 SDGs 永續發展目標</span></h2>
        <p>太陽人全民電場致力於同步達成：<br/>
氣候行動、永續城鄉、潔淨能源等多元價值</p>
      </div>
      <div><img :src="goals.rectangle" alt=""></div>
    </div>
  </section>
  <!-- [End]Goals  -->

  <!-- [Start]Partner  -->
  <section>
    <div :style="{ background: 'url(' + partner.partnerBg + ')' }">
      <div><img :src="partner.our"/></div>
      <div>
        <h2>Our Partner<span>影響力夥伴</span></h2>
        <p>太陽人全民電廠結合來自企業、民間團體及公益 單位夥伴的力量及<br/>特別的商業模式，一齊打造不一樣且 更加多元的綠色架構，加強對<br/>整體社會及世界環境的正 面影響力。</p>
        <div>
          <div :style="{ background: 'url(' + partner.circle + ')' }">
            <div>優良企業</div>
            <div>180+</div>
          </div>
          <div :style="{ background: 'url(' + partner.circle + ')' }">
            <div>民間團體</div>
            <div>140+</div>
          </div>
          <div :style="{ background: 'url(' + partner.circle + ')' }">
            <div>公益夥伴</div>
            <div>15+</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- [End]Partner  -->

  <!-- [Start]See  -->
  <section>
    <div :style="{ background: 'url(' + see.seeBg + ')' }">
      <h2>More Powerful to See<span>民間力量讓更多人看見</span></h2>
      <div>
        <div class="card">
          <div>
            <div><img :src="see.logo" alt=""></div>
            <h4>陳小姐<span>ｘｘｘｘ企業高階主管</span></h4>
          </div>
          <p>一直以來都非常注重環保議題，太陽人全民電廠的初衷以及理念深深打動著我。期待能有更多人能看到太陽人全民電廠的努力，一起重視地球的未來！</p>
        </div>
        <div class="card">
          <div>
            <div><img :src="see.logo" alt=""></div>
            <h4>陳小姐<span>ｘｘｘｘ企業高階主管</span></h4>
          </div>
          <p>一直以來都非常注重環保議題，太陽人全民電廠的初衷以及理念深深打動著我。期待能有更多人能看到太陽人全民電廠的努力，一起重視地球的未來！</p>
        </div>
        <div class="card">
          <div>
            <div><img :src="see.logo" alt=""></div>
            <h4>陳小姐<span>ｘｘｘｘ企業高階主管</span></h4>
          </div>
          <p>一直以來都非常注重環保議題，太陽人全民電廠的初衷以及理念深深打動著我。期待能有更多人能看到太陽人全民電廠的努力，一起重視地球的未來！</p>
        </div>
        <div class="card">
          <div>
            <div><img :src="see.logo" alt=""></div>
            <h4>陳小姐<span>ｘｘｘｘ企業高階主管</span></h4>
          </div>
          <p>一直以來都非常注重環保議題，太陽人全民電廠的初衷以及理念深深打動著我。期待能有更多人能看到太陽人全民電廠的努力，一起重視地球的未來！</p>
        </div>
        <div class="card">
          <div>
            <div><img :src="see.logo" alt=""></div>
            <h4>陳小姐<span>ｘｘｘｘ企業高階主管</span></h4>
          </div>
          <p>一直以來都非常注重環保議題，太陽人全民電廠的初衷以及理念深深打動著我。期待能有更多人能看到太陽人全民電廠的努力，一起重視地球的未來！</p>
        </div>
        <div class="card">
          <div>
            <div><img :src="see.logo" alt=""></div>
            <h4>陳小姐<span>ｘｘｘｘ企業高階主管</span></h4>
          </div>
          <p>一直以來都非常注重環保議題，太陽人全民電廠的初衷以及理念深深打動著我。期待能有更多人能看到太陽人全民電廠的努力，一起重視地球的未來！</p>
        </div>
      </div>
      <h4>社會影響力報告書</h4>
      <div>
        <div>
          <div><img :src="see.icon"/></div>
          <div :style="{ background: 'url(' + see.download + ')' }">pdf 檔案名稱名稱名稱名稱.pdf</div>
          <button>DOWNLOAD</button>
        </div>
      </div>
    </div>
  </section>
  <!-- [End]See  -->
</div>
</template>

<script>
export default {
  name: 'socialImpact',
  data () {
    return {
      banner: require('../../public/images/social/BN.png'),
      social: {
        intro: require('../../public/images/social/Section_intro.png'),
        introLeft: require('../../public/images/social/intro_outline_left.png'),
        introRight: require('../../public/images/social/intro_outline_right.png'),
        introText: require('../../public/images/social/Social_Impact.png')
      },
      intention: {
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
        rectangle: require('../../public/images/social/rectangle.png'),
        goalsBg: require('../../public/images/social/Section_goals.png')
      },
      partner: {
        our: require('../../public/images/social/our_partner.png'),
        circle: require('../../public/images/social/partner_circle.png'),
        partnerBg: require('../../public/images/social/Section_partner.png')
      },
      see: {
        logo: require('../../public/images/social/see_logo.png'),
        seeBg: require('../../public/images/social/Section_see.png'),
        icon: require('../../public/images/social/icon.png'),
        download: require('../../public/images/social/download_bar.png')

      }
    }
  }
}
</script>
