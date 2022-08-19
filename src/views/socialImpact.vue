<template>
<section id="social">
      <!-- [Start]banner  -->
  <section
  class="banner mobile-mb-30"
  :style="{ background: 'url(' + banner + ')' }"
  >
    <div class="text-white d-flex justify-content-center banner-column">
      <h1>社會影響力</h1>
      <p>social  impact</p>
    </div>
  </section>
  <!-- [End]banner  -->

  <!-- [Start]intro  -->
  <section class="mb-200">
    <div class="intro d-flex align-items-end justify-content-center" :style="{ background: 'url(' + social.intro + ')' }">
      <div class="intro-m174 d-flex justify-content-center">
        <div class="d-flex justify-content-center">
          <div class="mr-70"><img class="brackets" :src="social.introLeft" alt=""></div>
          <div class="d-flex justify-content-center">
            <div class="mb-3 mt-53">
              <p class="mb-14 text-success">我們秉持著環境與經濟共贏的精神，以日本職人技術，台<br/>灣在地深耕為念，透過創新的商業模式與多方力量的串聯，<br/>為環境保育及能源轉型帶來正面的影響。<br/></p>
              <p class="text-end mb-0"><small>—— 太陽人創辦人   陳威丞，2013年</small></p>
            </div>
          </div>
          <div class="ml-70 d-flex align-items-end"><img :src="social.introRight" alt=""></div>
        </div>
        <div class="position-absolute intro-right z-1"><img class="brackets" :src="social.introText" alt=""></div>
      </div>
    </div>
  </section>
  <!-- [End]intro  -->

  <!-- [Start]intention  -->
  <section class="intention mobile-mb-30">
    <div class="intention-bg" :style="{ background: 'url(' + intention.intentionBg + ')' }">
      <div class="d-flex ps-167 justify-content-between mobile-content">
        <div class="intention-width mobile-center z-3 pt-30">
          <h2 class="english-title mb-3">Our Original Intention</h2>
          <h4 class="mb-35 sub-title">太陽人全民電廠的初心與理念</h4>
          <p class="mb-54 mobile-padding">2011 年,311 東日本大地震與福島核災，徹底改寫了我們對能源安全的認知，我們也因此認知到：環境和文明的永續及平衡，是這世代人類都必須面對的共同課題。</p>
          <div>
            <div class="mb-55 position-relative">
              <h4 class="mb-20 h4 mobile-padding">綠能共享經濟的源起</h4>
              <p class="mobile-padding">節能減碳,能源轉型已是世界趨勢，但礙於資金或資訊通路門檻過高，一般社會大眾的力量無法順暢而有效地參與其中，使得能源轉型之路窒礙難行。</p>
              <img class="z-6 d-none mobile-d-block mobile-img mobile-padding-l" :src="intention.intentionTree" alt="">
            </div>
            <div class="position-relative">
              <h4 class="h4 mobile-padding">民間力量 能源轉型</h4>
              <p class="mobile-padding">太陽人自 2013 年開始提供以太陽能板為單位的電廠分割認購平台服務，以綠能的共享經濟為主軸，大幅降低了民眾參與的門檻，每一個人都能夠輕鬆地成為電廠老闆，並成為能源轉型的一道助力。</p>
              <img class=" d-none mobile-d-block mobile-img mobile-padding-r"  :src="intention.intentionSolar" alt=""/>
            </div>
          </div>
        </div>
        <div class="z-4 position-absolute intention-right">
          <img class="mobile-img" :src="intention.intentionText" alt="">
        </div>
        <div class="z-5 mobile-d-none">
          <div><img class="z-6 " :src="intention.intentionTree" style="width:749px ; height:547px ;" alt=""></div>
          <div class="d-flex justify-content-end"><img class="z-7 " :src="intention.intentionSolar" style="width:627px ; height:461px ;" alt=""></div>
        </div>
      </div>
    </div>
  </section>
  <!-- [End]intention  -->

  <!-- [Start]intro  -->
  <section class="mb-205">
    <div class="intro d-flex align-items-end justify-content-center">
      <div class="intro-m174 d-flex justify-content-center">
        <div class="d-flex justify-content-center">
          <div class="mr-70"><img :src="social.introLeft" alt=""></div>
          <div class="d-flex justify-content-center">
            <div class="mb-3 mt-53">
              <p class="mb-14 text-success">讓民間力量落實於能源轉型,達成環境與經濟的共贏!</p>
              <p class="text-end mb-0"><small>—— 太陽人的理念來源，創始至今</small></p>
            </div>
          </div>
          <div class="ml-70 d-flex align-items-end"><img :src="social.introRight" alt=""></div>
        </div>
        <div class="z-1 position-absolute intro-r"><img class="mobile-img" :src="social.introYourself" alt=""></div>
      </div>
    </div>
  </section>
  <!-- [End]intro  -->

  <!-- [Start]tracking  -->
  <section>
    <div class="tracking tracking-bg" :style="{ background: 'url(' + tracking.trackingBg + ')' }">
      <div class="p-30">
        <div class="d-flex justify-content-center mb-97">
          <div class="d-flex justify-content-center flex-column mobile-relative">
            <div class="z-22 position-relative">
              <h2 class="english-title">Power Plant Tracking</h2>
              <h4 class="sub-title text-center mb-0">全民電廠足跡</h4>
            </div>
            <div class="z-11 position-absolute tracking-right mobile-bottom-70">
              <img class="mobile-img" :src="power.world" alt="" >
            </div>
          </div>
        </div>
        <div class="card-wrap">
          <div style="max-width: 1280px;" class="tracking-card card-padding mb-126 shadow-lg rounded align-items-end">
            <div class="d-flex align-items-end mobile-column flex-row-reverse" >
              <div class="content-width ">
                <p class="mb-10"><small class="heighlight">2013 至 2016</small></p>
                <h5 class="mb-10">跨國綠電共享經濟：全民電廠的先驅者</h5>
                <p>「鹿兒島本名一號」是太陽人全民電廠 於 2013 年推出的第一座，日台全民皆可參與的綠能 電廠專案。開啟了綠電共享經濟的先河。<br/>
      佐賀、長崎、大分等地的日本綠能電廠亦先後完工 掛表，共 35 位一般社會大眾一同參與並證明了民間 力量落實能源轉型的可行性與價值性。</p>
              </div>
              <div class="content-width position-relative me-65">
                <img class="img-fluid position-absolute img-1-width"  :src="tracking.tracking1" alt=""/>
              </div>
            </div>
          </div>
          <!-- 2  -->
          <div style="max-width: 1280px;" class="tracking-card card-padding-reverse mb-126 shadow-lg rounded align-items-end">
            <div class="d-flex align-items-end tracking-reverse mobile-column">
              <div class="content-width me-65">
                <p class="mb-10"><small class="heighlight">2017 至 2019</small></p>
                <h5 class="mb-10">校園與全民的能源革命：綠能的共享經濟</h5>
                <p>於 2018 年募資完成的太陽人龍肚光電球場專案共有 45 人參與太陽能板的認購，共 835 片太陽能板構成面積近 500 坪的光電球場，不但能夠讓學生們及地方居民不受天氣影響盡情活動身體，未來 20 年還能夠創造近 683 萬度的再生能源，減少二氧化碳排放量近 3,760,425 kg。</p>
              </div>
              <div class="content-width position-relative ">
                <img class="img-fluid position-absolute img-1-width" :src="tracking.tracking2" alt="">
              </div>
            </div>
          </div>
          <!-- 3  -->
          <div style="max-width: 1280px;" class="tracking-card card-padding mb-126 shadow-lg rounded align-items-end">
            <div class="d-flex align-items-end tracking-reverse mobile-column flex-row-reverse">
              <div class="content-width">
                <p class="mb-10"><small class="heighlight">2020至 2021</small></p>
                <h5 class="mb-10">提升偏鄉能源自給率與就業率：花東子弟返鄉就業</h5>
                <p>太陽人全民電廠的「點亮花東計畫」，透過在花東地區太陽能電廠的建置，有效地創造了大量且長期的工作機會，使花東偏鄉子弟不但能夠返鄉，還能夠獲得長期穩健的工作機會。</p>
              </div>
              <div class="content-width position-relative me-65">
                <img class="img-fluid position-absolute img-1-width" :src="tracking.tracking3" alt="">
              </div>
            </div>
          </div>
          <!-- 4  -->
          <div style="max-width: 1280px;" class="tracking-card card-padding-reverse mb-126 shadow-lg rounded align-items-end">
            <div class="d-flex align-items-end mobile-column tracking-reverse">
              <div class="content-width me-65">
                <p class="mb-10"><small class="heighlight">2022 至 未來</small></p>
                <h5 class="mb-10">日光公益愛心永續：日光循環公益創能計畫</h5>
                <p>太陽人全民電廠透過日光公益模式，為社福機構或弱勢族群提供長期間的被動收益，以太陽的能量為他們帶來永續的溫暖。期待您也能一起參與，在參與氣候行動的同時不但能夠創造個人的經濟價值，也能讓您的愛心同步放大，達成環境、理財、公益的共贏。</p>
              </div>
              <div class="content-width position-relative">
                <img class="img-fluid position-absolute img-1-width"  :src="tracking.tracking4" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- [End]tracking  -->

  <!-- [Start]Goals  -->
  <section class="mb-27 mobile-mb-0">
    <div class="goals d-flex justify-content-between flex-wrap goals-bg position-relative" :style="{ background: 'url(' + goals.goalsBg + ')' }">
      <div class="z-55 d-flex flex-column justify-content-center ms-16 mt-center mobile-padding">
        <h2 class="english-title">Our SDGS Goals</h2>
        <h4 class="sub-title mb-26">太陽人的 SDGs 永續發展目標</h4>
        <p>太陽人全民電場致力於同步達成：<br/>
氣候行動、永續城鄉、潔淨能源等多元價值</p>
      </div>
      <div class="z-44 position-absolute ms-691"><img class="img-fluid" :src="goals.goalsText" alt=""></div>
      <div class="bg  d-flex flex-column justify-content-center align-items-center  img-fluid item-center item-right position-absolute z-gray" style="width: 786px;height: 873px;" :style="{ background: 'url(' + goals.goalsGray + ')' }">
      </div>
      <div class="bg  d-flex flex-column justify-content-center align-items-center  img-fluid item-center item-right position-relative z-green" style="width: 950px;height: 665px;" :style="{ background: 'url(' + goals.goalsGreen + ')' }">
        <div class="location-logo" :style="{ background: 'url(' + goals.goalsLogo + ')' }" style="width:300px; height:300px">
          <div class="location-eye">
            <div class="d-flex justify-content-center mobile-location-width" style="width:97px; height:97px" :style="{ background: 'url(' + goals.rectangleEye + ')' }">13</div>
          </div>
          <div class="location-house">
            <div class="d-flex justify-content-center mobile-location-width" style="width:100px; height:100px" :style="{ background: 'url(' + goals.rectangleHouse + ')' }">11</div>
          </div>
          <div class="location-sun">
            <div class="d-flex justify-content-center  mobile-location-width" style="width:97px; height:97px" :style="{ background: 'url(' + goals.rectangleSun + ')' }">7</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- [End]Goals  -->

  <!-- [Start]Partner  -->
  <section>
    <div class=" position-relative partner-bg mb-21" :style="{ background: 'url(' + partner.partnerBg + ')' }">
      <div class="d-flex partner z-44 mb-176 position-relative mobile-column-1820 " >
        <div class="logo-wrap mobile-column-relative mobile-center-1820 ">
          <div class="logo-wrap-bg logo-wrap-mobil d-flex flex-column justify-content-end  pb-84" :style="{ background: 'url(' + partner.our + ')' }">
            <div class="d-flex flex-column mb-173 justify-content-between position-relative">
              <h4 class="text-center mb-4 color-g mt-5 mobile-absolute">媒體報導</h4>
              <p class=""><a class="web-d-none" href="">看更多夥伴>></a></p>
              <div class="d-flex align-items-center justify-content-center mobil-d-none">
                <!-- <button><font-awesome-icon icon="fa-solid fa-angle-left" /></button> -->
                <div class="mx-2"><img :src="partner.partner1" alt=""></div>
                <!-- <button><font-awesome-icon icon="fa-solid fa-angle-right" /></button> -->
              </div>
            </div>
            <div class="d-flex justify-content-around">
              <div class="d-flex flex-column justify-content-between mobile-relative">
                <h4 class="text-center mb-4 color-b ">公益夥伴</h4>
                <p class=""><a class="web-d-none" href="">看更多夥伴>></a></p>
                <div class="d-flex align-items-center justify-content-center mobil-d-none">
                  <!-- <button><font-awesome-icon icon="fa-solid fa-angle-left" /></button> -->
                  <div class="mx-2"><img :src="partner.partner2" alt=""></div>
                  <!-- <button><font-awesome-icon icon="fa-solid fa-angle-right" /></button> -->
                </div>
              </div>
              <div class="d-flex flex-column justify-content-between mobile-relative">
                <h4 class="text-center mb-4 color-y">政府機關</h4>
                <p class=""><a class="web-d-none" href="">看更多夥伴>></a></p>
                <div class="d-flex align-items-center justify-content-center mobil-d-none">
                  <!-- <button><font-awesome-icon icon="fa-solid fa-angle-left" /></button> -->
                  <div class="mx-2"><img :src="partner.partner3" alt=""></div>
                  <!-- <button><font-awesome-icon icon="fa-solid fa-angle-right" /></button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-74 position-absolute partner-right mt-202 mobile-relative mobile-column-relative">
          <div class="d-flex position-relative mobile-center-1820">
            <div class="z-55">
              <h2 class="english-title">Our Partner</h2>
              <h4 class="sub-title mb-26">影響力夥伴</h4>
            </div>
              <div class="position-absolute text-position z-44">
                <img class="mobile-img img-fluid" :src="partner.partnerText" alt="" srcset="">
              </div>
          </div>
          <p class="">太陽人全民電廠結合來自企業、民間團體及公益 單位夥伴的力量及<br/>特別的商業模式，一齊打造不一樣且 更加多元的綠色架構，加強對<br/>整體社會及世界環境的正 面影響力。</p>
          <div class="d-flex justify-content-center">
            <div class="bg-circle" :style="{ background: 'url(' + partner.circle + ')' }">
              <div>優良企業</div>
              <div>180+</div>
            </div>
            <div class="bg-circle" :style="{ background: 'url(' + partner.circle + ')' }">
              <div>民間團體</div>
              <div>140+</div>
            </div>
            <div class="bg-circle" :style="{ background: 'url(' + partner.circle + ')' }">
              <div>公益夥伴</div>
              <div>15+</div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="bg-gray position-absolute mb-79 z-33"></div> -->
    </div>
  </section>
  <!-- [End]Partner  -->

  <!-- [Start]See  -->
  <section class="mb-20">
    <div class="see"  :style="{ background: 'url(' + see.seeBg + ')' }">
      <div class="title-wrap d-flex justify-content-center mb-47 position-relative">
        <div class="z-44">
          <h2 class="english-title">More Powerful to See</h2>
          <h4 class="text-center">民間力量讓更多人看見</h4>
        </div>
        <div class="position-absolute z-33 see-right"><img class="img-fluid" :src="see.seeText" alt=""></div>
      </div>
      <div class=" mb-100">
        <div class="d-flex justify-content-center card-mobil">
          <div class="card shadow rounded border-0 card-padding  m-3" :style="{ background: 'url(' + see.cardLogo + ')' }">
            <div class="d-flex align-items-end mobile-imgWrap-1433">
              <div class="card-absolute"><img class="card-relative" :src="see.logo" alt=""></div>
              <h4 class="mb-0 ms-130 mt-20">陳小姐<br/><span>ｘｘｘｘ企業高階主管</span></h4>
            </div>
            <p class="mb-0 mt-20">一直以來都非常注重環保議題，太陽人全民電廠的初衷以及理念深深打動著我。期待能有更多人能看到太陽人全民電廠的努力，一起重視地球的未來！</p>
          </div>
          <div class="card shadow rounded border-0 card-padding  m-3" :style="{ background: 'url(' + see.cardLogo + ')' }">
            <div class="d-flex align-items-end mobile-imgWrap-1433">
              <div class="card-absolute"><img class="card-relative" :src="see.logo" alt=""></div>
              <h4 class="mb-0 ms-130 mt-20">陳小姐<br/><span>ｘｘｘｘ企業高階主管</span></h4>
            </div>
            <p class="mb-0 mt-20">一直以來都非常注重環保議題，太陽人全民電廠的初衷以及理念深深打動著我。期待能有更多人能看到太陽人全民電廠的努力，一起重視地球的未來！</p>
          </div>
          <div class="card shadow rounded border-0 card-padding  m-3" :style="{ background: 'url(' + see.cardLogo + ')' }">
            <div class="d-flex align-items-end mobile-imgWrap-1433">
              <div class="card-absolute"><img class="card-relative" :src="see.logo" alt=""></div>
              <h4 class="mb-0 ms-130 mt-20">陳小姐<br/><span>ｘｘｘｘ企業高階主管</span></h4>
            </div>
            <p class="mb-0 mt-20">一直以來都非常注重環保議題，太陽人全民電廠的初衷以及理念深深打動著我。期待能有更多人能看到太陽人全民電廠的努力，一起重視地球的未來！</p>
          </div>
        </div>
        <div class="d-flex justify-content-center card-mobil">
          <div class="card shadow rounded border-0 card-padding  m-3" :style="{ background: 'url(' + see.cardLogo + ')' }">
            <div class="d-flex align-items-end mobile-imgWrap-1433">
              <div class="card-absolute"><img class="card-relative" :src="see.logo" alt=""></div>
              <h4 class="mb-0 ms-130 mt-20">陳小姐<br/><span>ｘｘｘｘ企業高階主管</span></h4>
            </div>
            <p class="mb-0 mt-20">一直以來都非常注重環保議題，太陽人全民電廠的初衷以及理念深深打動著我。期待能有更多人能看到太陽人全民電廠的努力，一起重視地球的未來！</p>
          </div>
          <div class="card shadow rounded border-0 card-padding  m-3" :style="{ background: 'url(' + see.cardLogo + ')' }">
            <div class="d-flex align-items-end mobile-imgWrap-1433">
              <div class="card-absolute"><img class="card-relative" :src="see.logo" alt=""></div>
              <h4 class="mb-0 ms-130 mt-20">陳小姐<br/><span>ｘｘｘｘ企業高階主管</span></h4>
            </div>
            <p class="mb-0 mt-20">一直以來都非常注重環保議題，太陽人全民電廠的初衷以及理念深深打動著我。期待能有更多人能看到太陽人全民電廠的努力，一起重視地球的未來！</p>
          </div>
          <div class="card shadow rounded border-0 card-padding  m-3" :style="{ background: 'url(' + see.cardLogo + ')' }">
            <div class="d-flex align-items-end mobile-imgWrap-1433">
              <div class="card-absolute"><img class="card-relative" :src="see.logo" alt=""></div>
              <h4 class="mb-0 ms-130 mt-20">陳小姐<br/><span>ｘｘｘｘ企業高階主管</span></h4>
            </div>
            <p class="mb-0 mt-20">一直以來都非常注重環保議題，太陽人全民電廠的初衷以及理念深深打動著我。期待能有更多人能看到太陽人全民電廠的努力，一起重視地球的未來！</p>
          </div>
        </div>
      </div>
      <!-- <h4 class="text-center mb-25 mobile-font-22">社會影響力報告書</h4>
      <div class="d-flex flex-wrap mobile-column justify-content-around">
        <div class="download-bar d-flex flex-column  mb-25 position-relative">
          <p class="text-end mb-2 card-relative ">345KB</p>
          <div class="d-flex align-items-center justify-content-between download-bar-column">
            <div class="circle d-flex justify-content-center align-items-center position-absolute"><img :src="see.icon"/></div>
            <div class="download d-flex justify-content-center  align-items-center ">pdf 檔案名稱名稱名稱名稱.pdf</div>
            <div type="button" class="d-flex align-items-center button button-color download-button justify-content-center">DOWNLOAD</div>
          </div>
        </div>
        <div class="download-bar d-flex flex-column  mb-25 position-relative">
          <p class="text-end mb-2 card-relative ">345KB</p>
          <div class="d-flex align-items-center download-bar-column">
            <div class="circle d-flex justify-content-center align-items-center position-absolute"><img :src="see.icon"/></div>
            <div class="download d-flex justify-content-center  align-items-center ">pdf 檔案名稱名稱名稱名稱.pdf</div>
            <div type="button" class="d-flex align-items-center button button-color download-button justify-content-center">DOWNLOAD</div>
          </div>
        </div>
        <div class="download-bar d-flex flex-column  mb-25 position-relative">
          <p class="text-end mb-2 card-relative ">345KB</p>
          <div class="d-flex align-items-center download-bar-column">
            <div class="circle d-flex justify-content-center align-items-center position-absolute"><img :src="see.icon"/></div>
            <div class="download d-flex justify-content-center  align-items-center ">pdf 檔案名稱名稱名稱名稱.pdf</div>
            <div type="button" class="d-flex align-items-center button button-color download-button justify-content-center">DOWNLOAD</div>
          </div>
        </div>
        <div class="download-bar d-flex flex-column  mb-25 position-relative">
          <p class="text-end mb-2 card-relative ">345KB</p>
          <div class="d-flex align-items-center download-bar-column">
            <div class="circle d-flex justify-content-center align-items-center position-absolute"><img :src="see.icon"/></div>
            <div class="download d-flex justify-content-center  align-items-center ">pdf 檔案名稱名稱名稱名稱.pdf</div>
            <div type="button" class="d-flex align-items-center button button-color download-button justify-content-center">DOWNLOAD</div>
          </div>
        </div>
        <div class="download-bar d-flex flex-column  mb-25 position-relative">
          <p class="text-end mb-2 card-relative ">345KB</p>
          <div class="d-flex align-items-center download-bar-column">
            <div class="circle d-flex justify-content-center align-items-center position-absolute"><img :src="see.icon"/></div>
            <div class="download d-flex justify-content-center  align-items-center ">pdf 檔案名稱名稱名稱名稱.pdf</div>
            <div type="button" class="d-flex align-items-center button button-color download-button justify-content-center">DOWNLOAD</div>
          </div>
        </div>
        <div class="download-bar d-flex flex-column  mb-25 position-relative">
          <p class="text-end mb-2 card-relative ">345KB</p>
          <div class="d-flex align-items-center download-bar-column">
            <div class="circle d-flex justify-content-center align-items-center position-absolute"><img :src="see.icon"/></div>
            <div class="download d-flex justify-content-center  align-items-center ">pdf 檔案名稱名稱名稱名稱.pdf</div>
            <div type="button" class="d-flex align-items-center button button-color download-button justify-content-center">DOWNLOAD</div>
          </div>
        </div>
      </div> -->
    </div>
  </section>
  <!-- [End]See  -->

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
  name: 'socialImpact',
  data () {
    return {
      banner: require('../../public/images/social/BN.png'),
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
        cardLogo: require('../../public/images/social/card_logo.png')
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
