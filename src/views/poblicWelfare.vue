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
  <section id="breadcrumbs-navigation">
    <div class="breadcrumbs">
      <a href="index.aspx">首頁</a>
      <i class="fas fa-angle-double-right"></i>
      <a href="#" class="active">太陽人公益</a>
    </div>
  </section>
  <!-- [End]Banner  -->
  <section class="publicWelfare_section">
    <ul class="welfare-type">
			<li :class="{active:welfareType==''}"  @click="welfareType = ''">全部</li>
			<li :class="{active:welfareType=='I'}" @click="welfareType = 'I'">國際救援</li>
			<li :class="{active:welfareType=='G'}" @click="welfareType = 'G'">老人服務</li>
			<li :class="{active:welfareType=='W'}" @click="welfareType = 'W'">婦幼關懷</li>
			<li :class="{active:welfareType=='B'}" @click="welfareType = 'B'">身心障礙</li>
			<li :class="{active:welfareType=='E'}" @click="welfareType = 'E'">環保動保</li>
			<li :class="{active:welfareType=='O'}" @click="welfareType = 'O'">其他</li>
		</ul>
    <div class="welfare-list">
      <div class="card-wrap" v-for="item in product" :key="item.title">
      <div class="welfare-card">
        <div class="img-block">
          <a href="">
            <img :src="item.testImg" alt=""/>
          </a>
        </div>
        <div class="content-block">
        <div class="title">
          <div class="welfare-name">{{item.title}}</div>
          <div class="money">{{item.price}}</div>
        </div>
        <div class="content">{{item.content}}</div>
        </div>
      </div>
    </div>
    </div>
    <div class="pagination">
			<div class="page arrow-left" @click="setPage(1)"></div>
			<div id="page_box" class="page-box">
				<!-- <template v-for="i in maxPage">
					<div class="page" :class="{active:i == nowPage}" @click="nowPage = i">
						{{i}}
					</div>
				</template> -->
			</div>
			<div class="page arrow-right" @click="setPage(maxPage)"></div>
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
          title: 'test1',
          price: 15000,
          content: 'lorem77'
        },
        {
          testImg: 'https://www.hellosolarman.com/assets/welfare/34454346-697f-41a5-874d-5894e7b219e1/imgs/imgCharity.jpg',
          title: 'test2',
          price: 15900,
          content: 'lorem74'
        },
        {
          testImg: 'https://www.hellosolarman.com/assets/welfare/b0140b9c-4a7b-490b-883f-ada34388f5ff/imgs/imgCharity.jpg',
          title: 'test3',
          price: 15100,
          content: 'lorem73'
        },
        {
          testImg: 'https://www.hellosolarman.com/assets/welfare/106ae4f6-8af7-4ffd-a32c-1a8dffd9101a/imgs/imgCharity.jpg',
          title: 'test4',
          price: 15700,
          content: 'lorem72'
        },
        {
          testImg: 'https://www.hellosolarman.com/assets/welfare/b25b1fea-7fe9-4981-985c-995fb79b3091/imgs/imgCharity.jpeg',
          title: 'test5',
          price: 15900,
          content: 'lorem70'
        },
        {
          testImg: 'https://www.hellosolarman.com/assets/welfare/80326560-d31e-4cad-b0a6-fdf68d34c496/imgs/imgCharity.jpg',
          title: 'test6',
          price: 14000,
          content: 'lorem69'
        },
        {
          testImg: 'https://www.hellosolarman.com/assets/welfare/b14e9466-8c4b-4f13-8b7f-bece5b6aae8e/imgs/imgCharity.jpg',
          title: 'test7',
          price: 18000,
          content: 'lorem57'
        },
        {
          testImg: 'https://www.hellosolarman.com/assets/welfare/80326560-d31e-4cad-b0a6-fdf68d34c496/imgs/imgCharity.jpg',
          title: 'test8',
          price: 11000,
          content: 'lorem47'
        }
      ]
    }
  }
}
</script>
