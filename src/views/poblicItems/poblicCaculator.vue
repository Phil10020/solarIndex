<template>
              <h5 class="mb-2 mt-2">
            <font-awesome-icon icon="fa-solid fa-angle-right" class="text-primary"/>
            &nbsp;預估賣電收益計算機
          </h5>
          <p style="color: #484848" class="letterSpacing-75">
            請輸入您欲購買的太陽能板片數，將顯示電廠20年的財富預估收益
          </p>

          <div
            class="
              col-md-12
              mt-5
              mb-5
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <label style="font-size: 18px; color: #484848" class="me-3 mb-0">
              購買片數
            </label>
            <select
              id="slt_trial_panel"
              class="form-controller me-3"
              style="width: 170px; height: 38px; vertical-align: top"
            >
              <option :value="item" v-for="item in solarPanels[0]['num']" :key="`${item}`">{{ item }}</option>
            </select>
            <button class="btn btn-redwine" id="btn_trial_calculation">
              開始試算
            </button>
          </div>

          <div class="info-block">
            <span class="info-block-item"
              >保險

              <label class="info-block-item-mark" id="display_insurance">
                56
              </label>
              元/年
            </span>

            <span class="info-block-item"
              >屋頂租金(賣電收益)
              <label class="info-block-item-mark" id="pre_rent_id">10 %</label>
            </span>

            <span class="info-block-item"
              >維運管理(賣電收益)
              <label class="info-block-item-mark"> 10 % </label>
            </span>
          </div>

          <div class="info-chart-block mt-3 mb-3">
            <div class="row">
              <div class="col-lg-4">
                <p class="text-center mb-3">總收益</p>
                <table class="table table-bordered">
                  <tbody>
                    <tr>
                      <td
                        style="
                          background-color: #e9e9e9;
                          vertical-align: middle;
                        "
                      >
                        總出資金額
                      </td>
                      <td style="vertical-align: middle">
                        <input type="hidden" id="pst_itemprice" value="23235" />
                        原價購買: <span id="total_price"></span>元
                        <br />
                        <hr />
                        使用500日光幣/片: <span id="total_price2"></span>元
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          background-color: #e9e9e9;
                          vertical-align: middle;
                        "
                      >
                        年均投報率
                      </td>
                      <td style="vertical-align: middle">
                        原價購買: 8.69 %<br />
                        <hr />
                        使用500日光幣/片: 8.88 %
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          background-color: #e9e9e9;
                          vertical-align: middle;
                        "
                      >
                        IRR
                      </td>
                      <td style="vertical-align: middle">
                        原價購買: 6.05 %<br />
                        <hr />
                        使用500日光幣/片: 6.32 %
                      </td>
                    </tr>
                    <tr>
                      <td style="background-color: #e9e9e9">
                        預估20年<br />
                        總發電
                      </td>
                      <td style="vertical-align: middle">
                        <span id="total_yearsEnergy">8300</span>
                        度
                      </td>
                    </tr>
                    <tr>
                      <td style="background-color: #e9e9e9">相對減碳</td>
                      <td style="vertical-align: middle">
                        <span id="totle_carbon">4,385</span>
                        kgCO2e
                      </td>
                    </tr>
                    <tr>
                      <td style="background-color: #e9e9e9">
                        預估20年<br />
                        總售電收入
                      </td>
                      <td style="vertical-align: middle">
                        <span id="totle_income">40,422</span>
                        元
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-lg-8 p-0">
                <bar-chart :width="866" :height="400"></bar-chart>
              </div>
            </div>
          </div>

          <p class="text-center">收益預估表</p>
          <div class="income-list">
            <div class="row">
              <div class="col-xl-6 mb-3">
                <table
                  class="table table-sm table-striped"
                  id="incomeEstimate_1"
                >
                  <thead class="bg-primary text-light">
                    <tr>
                      <td class="text-center">年</td>
                      <td class="text-end">發電量</td>
                      <td class="text-end">賣電收入</td>
                      <td class="text-end">營運維護費</td>
                      <td class="text-end">保險</td>
                      <td class="text-end">屋頂租金</td>
                      <td class="text-end">模組回收費</td>
                      <td class="text-end">累積收益</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">1</td>
                      <td class="text-end">434</td>
                      <td class="text-end">2738</td>
                      <td class="text-end">-274</td>
                      <td class="text-end">-56</td>
                      <td class="text-end">-274</td>
                      <td class="text-end">-34</td>
                      <td class="text-end">2,100</td>
                    </tr>

                    <tr>
                      <td class="text-center">2</td>
                      <td class="text-end">432</td>
                      <td class="text-end">2725</td>
                      <td class="text-end">-273</td>
                      <td class="text-end">-56</td>
                      <td class="text-end">-273</td>
                      <td class="text-end">-34</td>
                      <td class="text-end">4,189</td>
                    </tr>

                    <tr>
                      <td class="text-center">3</td>
                      <td class="text-end">430</td>
                      <td class="text-end">2712</td>
                      <td class="text-end">-271</td>
                      <td class="text-end">-56</td>
                      <td class="text-end">-271</td>
                      <td class="text-end">-34</td>
                      <td class="text-end">6,269</td>
                    </tr>

                    <tr>
                      <td class="text-center">4</td>
                      <td class="text-end">428</td>
                      <td class="text-end">2700</td>
                      <td class="text-end">-270</td>
                      <td class="text-end">-56</td>
                      <td class="text-end">-270</td>
                      <td class="text-end">-34</td>
                      <td class="text-end">8,339</td>
                    </tr>

                    <tr>
                      <td class="text-center">5</td>
                      <td class="text-end">426</td>
                      <td class="text-end">2687</td>
                      <td class="text-end">-269</td>
                      <td class="text-end">-56</td>
                      <td class="text-end">-269</td>
                      <td class="text-end">-34</td>
                      <td class="text-end">10,398</td>
                    </tr>

                    <tr>
                      <td class="text-center">6</td>
                      <td class="text-end">424</td>
                      <td class="text-end">2675</td>
                      <td class="text-end">-268</td>
                      <td class="text-end">-56</td>
                      <td class="text-end">-268</td>
                      <td class="text-end">-34</td>
                      <td class="text-end">12,447</td>
                    </tr>

                    <tr>
                      <td class="text-center">7</td>
                      <td class="text-end">422</td>
                      <td class="text-end">2662</td>
                      <td class="text-end">-266</td>
                      <td class="text-end">-56</td>
                      <td class="text-end">-266</td>
                      <td class="text-end">-34</td>
                      <td class="text-end">14,487</td>
                    </tr>

                    <tr>
                      <td class="text-center">8</td>
                      <td class="text-end">420</td>
                      <td class="text-end">2649</td>
                      <td class="text-end">-265</td>
                      <td class="text-end">-56</td>
                      <td class="text-end">-265</td>
                      <td class="text-end">-34</td>
                      <td class="text-end">16,516</td>
                    </tr>

                    <tr>
                      <td class="text-center">9</td>
                      <td class="text-end">418</td>
                      <td class="text-end">2637</td>
                      <td class="text-end">-264</td>
                      <td class="text-end">-56</td>
                      <td class="text-end">-264</td>
                      <td class="text-end">-34</td>
                      <td class="text-end">18,535</td>
                    </tr>

                    <tr>
                      <td class="text-center">10</td>
                      <td class="text-end">416</td>
                      <td class="text-end">2624</td>
                      <td class="text-end">-262</td>
                      <td class="text-end">-56</td>
                      <td class="text-end">-262</td>
                      <td class="text-end">-34</td>
                      <td class="text-end">20,545</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-xl-6 mb-3">
                <table
                  class="table table-sm table-striped"
                  id="incomeEstimate_2"
                >
                  <thead class="bg-primary text-light">
                    <tr>
                      <td class="text-center">年</td>
                      <td class="text-end">發電量</td>
                      <td class="text-end">賣電收入</td>
                      <td class="text-end">營運維護費</td>
                      <td class="text-end">保險</td>
                      <td class="text-end">屋頂租金</td>
                      <td class="text-end">模組回收費</td>
                      <td class="text-end">累積收益</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">11</td>
                      <td class="text-end">414</td>
                      <td class="text-end">2611</td>
                      <td class="text-end">-261</td>
                      <td class="text-end">-56</td>
                      <td class="text-end">-261</td>
                      <td class="text-end">-0</td>
                      <td class="text-end">22,578</td>
                    </tr>

                    <tr>
                      <td class="text-center">12</td>
                      <td class="text-end">412</td>
                      <td class="text-end">2599</td>
                      <td class="text-end">-260</td>
                      <td class="text-end">-56</td>
                      <td class="text-end">-260</td>
                      <td class="text-end">-0</td>
                      <td class="text-end">24,601</td>
                    </tr>

                    <tr>
                      <td class="text-center">13</td>
                      <td class="text-end">410</td>
                      <td class="text-end">2586</td>
                      <td class="text-end">-259</td>
                      <td class="text-end">-56</td>
                      <td class="text-end">-259</td>
                      <td class="text-end">-0</td>
                      <td class="text-end">26,613</td>
                    </tr>

                    <tr>
                      <td class="text-center">14</td>
                      <td class="text-end">408</td>
                      <td class="text-end">2574</td>
                      <td class="text-end">-257</td>
                      <td class="text-end">-56</td>
                      <td class="text-end">-257</td>
                      <td class="text-end">-0</td>
                      <td class="text-end">28,617</td>
                    </tr>

                    <tr>
                      <td class="text-center">15</td>
                      <td class="text-end">406</td>
                      <td class="text-end">2561</td>
                      <td class="text-end">-256</td>
                      <td class="text-end">-56</td>
                      <td class="text-end">-256</td>
                      <td class="text-end">-0</td>
                      <td class="text-end">30,610</td>
                    </tr>

                    <tr>
                      <td class="text-center">16</td>
                      <td class="text-end">404</td>
                      <td class="text-end">2548</td>
                      <td class="text-end">-255</td>
                      <td class="text-end">-56</td>
                      <td class="text-end">-255</td>
                      <td class="text-end">-0</td>
                      <td class="text-end">32,592</td>
                    </tr>

                    <tr>
                      <td class="text-center">17</td>
                      <td class="text-end">402</td>
                      <td class="text-end">2536</td>
                      <td class="text-end">-254</td>
                      <td class="text-end">-56</td>
                      <td class="text-end">-254</td>
                      <td class="text-end">-0</td>
                      <td class="text-end">34,564</td>
                    </tr>

                    <tr>
                      <td class="text-center">18</td>
                      <td class="text-end">400</td>
                      <td class="text-end">2523</td>
                      <td class="text-end">-252</td>
                      <td class="text-end">-56</td>
                      <td class="text-end">-252</td>
                      <td class="text-end">-0</td>
                      <td class="text-end">36,527</td>
                    </tr>

                    <tr>
                      <td class="text-center">19</td>
                      <td class="text-end">398</td>
                      <td class="text-end">2511</td>
                      <td class="text-end">-251</td>
                      <td class="text-end">-56</td>
                      <td class="text-end">-251</td>
                      <td class="text-end">-0</td>
                      <td class="text-end">38,480</td>
                    </tr>

                    <tr>
                      <td class="text-center">20</td>
                      <td class="text-end">396</td>
                      <td class="text-end">2498</td>
                      <td class="text-end">-250</td>
                      <td class="text-end">-56</td>
                      <td class="text-end">-250</td>
                      <td class="text-end">-0</td>
                      <td class="text-end">40,422</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import BarChart from './barChart.vue'
export default {
  name: 'poblicCaculator',
  data () {
    return {
      solarPanels: [{ name: '台灣關愛基金會', price: 23235, rate: 8.69, irrRate: 6.05, powerGeneration: 8300, num: 36 }]
    }
  },
  components: {
    BarChart
  }
}
</script>
