<template>
    <div v-for="item in product" :key="item.id">
    {{  item.title }}
    </div>
</template>
<script>
export default {
  name: 'poblicWelfareId',
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
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$http.get('/test.json/').then((res) => {
        console.log(res.data.data)
        this.product = res.data.data
      }).catch((err) => {
        console.log(err, 'error123')
      })
      console.log(this.product)
    }
  },
  mouted () {
    this.id = this.$route.params.post_id
    this.getData()
  }
}
</script>
