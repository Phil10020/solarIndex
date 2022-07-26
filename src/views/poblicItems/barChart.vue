<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      chartData: {
        labels: ['第一年', '第二年', '第三年', '第四年', '第五年', '第六年', '第七年', '第八年', '第九年', '第十年', '第十一年',
          '第十二年', '第十三年', '第十四年', '第十五年', '第十六年', '第十七年', '第十八年', '第十九年', '第二十年'],
        datasets: [
          {
            label: '預估收益',
            backgroundColor: '#a7243c',
            data: [
              30, 60, 40, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200
            ]
          }]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>
