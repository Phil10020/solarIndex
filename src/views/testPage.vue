<template>
  <div><a href="https://icons.getbootstrap.com/">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta tenetur vel, dolores modi numquam ipsa.</a></div>
	<div><a href="https://icons.getbootstrap.com/">test1</a></div>
  <h1>{{ testString }}</h1>
  <div class="bg-img"></div>
  <div class="position-relative" style="width:200px; height:200px; background-color:green">test1<div class="position-absolute" style="width:100px;top:-10% ; height:100px; background-color:red">test2</div></div>
  <!-- carousel  -->
  <div class="owl-carousel owl-theme">
    <div class="item"><h4>1</h4></div>
    <div class="item"><h4>2</h4></div>
    <div class="item"><h4>3</h4></div>
    <div class="item"><h4>4</h4></div>
    <div class="item"><h4>5</h4></div>
    <div class="item"><h4>6</h4></div>
    <div class="item"><h4>7</h4></div>
    <div class="item"><h4>8</h4></div>
    <div class="item"><h4>9</h4></div>
    <div class="item"><h4>10</h4></div>
    <div class="item"><h4>11</h4></div>
    <div class="item"><h4>12</h4></div>
</div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import axios from 'axios'
export default {
  setup () {
    const testString = reactive('test123')
    const url = 'https://solardata.hellosolarman.com/api/data/news'
    const newsData = reactive({ list: [] })
    onMounted(() => {
      axios.get(url)
        .then((res) => {
          newsData.list = res.data
        })
        .catch((err) => {
          console.log(err, 'error')
        })
    })
    return { newsData, testString }
  },
  name: 'testPage'
  // data () {
  //   return {
  //     data: [],
  //   }
  // },
  // methods: {
  //   getData () {
  //     const web = 'https://www.hellosolarman.com'
  //     const url = 'https://solardata.hellosolarman.com/api/data/news'
  //     this.$http.get(url).then((res) => {
  //       this.newsData = res.data.filter((item) => {
  //         if (item.img.match('http') === null) {
  //           item.img = web + item.img
  //         }
  //         return this.newsData
  //       })
  //       console.log(this.newsData)
  //     })
  //       .catch((err) => {
  //         console.log(err, 'getError')
  //       })
  //   }
  // },
  // created () {
  //   this.getData()
  // }
}
</script>

<style scoped>
 .bg-img {
  background: url('../../public/images/social/goalsWrap/Our.png');
  width: 200px;
  height: 200px;
 }
</style>
