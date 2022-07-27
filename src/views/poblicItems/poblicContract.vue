<template>
  <div class="contract-list d-flex flex-wrap">
    <!-- test  -->
    <div class="item" data-bs-toggle="modal" :data-bs-target="'#'+item.name" v-for="item in contract" :key="item.name">
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
  name: 'poblicContract',
  data () {
    return {
      contract: [
        { title: '財務報告', name: 'aa', buildImg: require('../../../public/images/productWelfareId/contract/contract1.jpg') },
        { title: '併聯審查', name: 'bb', buildImg: require('../../../public/images/productWelfareId/contract/contract2.jpg') },
        { title: '租賃契約公證', name: 'cc', buildImg: require('../../../public/images/productWelfareId/contract/contract3.jpg') },
        { title: '產物保險', name: 'dd', buildImg: require('../../../public/images/productWelfareId/contract/contract4.jpg') },
        { title: '太陽人合約', name: 'ee', buildImg: require('../../../public/images/productWelfareId/contract/contract5.jpg') },
        { title: '能源局核准文件', name: 'ff', buildImg: require('../../../public/images/productWelfareId/contract/contract6.png') }
      ]
    }
  }
}
</script>
