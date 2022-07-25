<template>
  <div class="contract-list d-flex flex-wrap">
    <!-- test  -->
    <div class="item" data-bs-toggle="modal" :data-bs-target="'#'+item.name" v-for="item in buildSystem" :key="item.title">
      <font-awesome-icon icon="fa-solid fa-chevron-right" />&nbsp;{{ item.title }}
      <!-- [Start]model  -->
      <div class="modal fade" :id="item.name" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-keyboard="false" data-bs-backdrop="static">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{{  item.title }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body" style="height: 100vh">
                  <img :src="item.buildImg" alt="" style="width:100%">
              </div>
            </div>
        </div>
      </div>
      <!-- [End]model  -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'buildSystem',
  data () {
    return {
      buildSystem: [
        { title: '光電模組', name: 'a1', buildImg: require('../../../public/images/productWelfareId/buildImg1.jpeg') },
        { title: '變流器', name: 'b2', buildImg: require('../../../public/images/productWelfareId/buildImg2.jpg') }
      ]
    }
  }
}
</script>
