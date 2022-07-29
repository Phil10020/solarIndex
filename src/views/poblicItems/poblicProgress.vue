<template>
  <div class="row" v-if="fullWidth > 767">
    <div class="col-md-12 text-muted">
    *可能因政府跑照流程或天候等因素而有調整，將依實際情形即時更新進度
    </div>
    <div class="col-md-12">
    <div class="schedule-timeline">
    <p class="title">期程</p>
    <div class="timeline-data">
        <div class="timeline-list" style="width: 100%">
        <p>111 年</p>
        </div>
        <div class="dates">
        <span v-for="(item, i) in progressData" :key="item+123" class="date" :style="{left: (i / (progressData.length - 1))*100 + '%'}">{{ item.date }}</span>
        </div>
    </div>
    </div>

    <div class="schedule-item schedule-danger">
    <p class="title">客戶</p>
    <div class="time-list">
        <div class="items" v-for="(item, i) in progressData" :key="item+123" :style="{left: (i / (progressData.length - 1))*100 + '%'}">
        <label>{{ item.costomer }}</label>
        </div>
    </div>
    </div>
    </div>
  </div>
  <div class="row" v-else>
    <div class="col-md-12">
      <div class="schedule-timeline">
      <p class="title">期程</p>
      <div class="timeline-data">
          <div class="timeline-list" style="width: 100%">
          <p>111 年</p>
          </div>
          <div class="dates">
          <span v-for="(item, i) in progressData" :key="item+123" class="date" :style="{left: (i / (progressData.length - 1))*100 + '%'}">{{ item.date }}</span>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'poblicProgress',
  data () {
    return {
      progressData: [
        { year: '111年', date: '02/14', costomer: '併聯審查同意書' },
        { year: '111年', date: '02/21', costomer: '能源局同意備案函文' },
        { year: '111年', date: '06/30', costomer: '電廠開工' },
        { year: '111年', date: '07/15', costomer: '電廠建置完成/台電掛表' },
        { year: '111年', date: '08/15', costomer: '設備登記' },
        { year: '111年', date: '09/15', costomer: '台電抄表結算收益' }
      ],
      fullWidth: 0,
      dateFilter: []
    }
  },
  mounted () {
    this.fullWidth = window.innerWidth
    console.log(this.fullWidth)
    this.dateFilter = this.progressData.filter(function (item) {
      console.log(item.date)
      return item.date = this.dateFilter
    })
    console.log(this.dateFilter)
  }
}
</script>
