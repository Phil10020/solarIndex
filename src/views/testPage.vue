<template>
  <div><a href="https://icons.getbootstrap.com/">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta tenetur vel, dolores modi numquam ipsa.</a></div>
	<div><a href="https://icons.getbootstrap.com/">test1</a></div>
  <h1></h1>
  <h5></h5>
</template>

<script>

export default {
  name: 'testPage',
  data () {
    return {
      data: []
    }
  },
  methods: {
    getData () {
      const url = 'http://solar.ablerex.com.tw/datacenter/rest/PV/PSData?uid=0158g1tebv8jwqv4&act=PD-2832-20221003'
      this.$http.get(url)
        .then((res) => {
          this.data = res.data
          console.log(this.data, 'success!')
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
    this.getData()
  }
}
</script>
