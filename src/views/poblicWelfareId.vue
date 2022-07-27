<template>
  <!-- [Start]Banner  -->
  <section
    class="subpage-banner-image"
    :style="{ background: 'url(' + imgSrc + ')' }"
  >
    <div class="container text-white">
      <h4>BUYING</h4>
      <h1>買電廠</h1>
    </div>
  </section>
  <!-- [End]Banner  -->

  <!-- [Start]breadcrumbs-list  -->
  <section>
    <div class="navigation-item">
      <a href="index.aspx">首頁</a>
      <i class="bi bi-chevron-double-right"></i>
      <a href="#" class="">買電廠</a>
      <i class="bi bi-chevron-double-right"></i>
      <a href="#" class="">小額購買</a>
      <i class="bi bi-chevron-double-right"></i>
      <a href="#" class="active">testBannerId</a>
    </div>
  </section>
  <!-- [End]breadcrumbs-list  -->
  <!-- [Start]Content  -->
  <section id="product-detail-content">
    <div class="content-common">
      <div class="content-product d-flex">
        <div class="img-block">
          <a href="">
            <img :src="typeFilter.testImg" />
          </a>
        </div>
        <div class="content-block ps-md-4 d-flex flex-wrap">
          <div>
            <h6>高雄市小港區</h6>
            <h5>{{ typeFilter.title }}</h5>
            <div class="hr"></div>
            <p class="description">
              {{ typeFilter.content }}
            </p>
          </div>
          <div class="icons-link">
            <div class="share">
              分享至:
              <a href="#"><i class="bi bi-facebook facebook-color mx-1"></i></a>
              <a href="#"><i class="bi bi-line line-color mx-1"></i></a>
              <a href="#"><i class="bi bi-twitter twitter-color mx-1"></i></a>
            </div>
          </div>
        </div>
      </div>
      <ul class="info-content d-flex justify-content-around">
        <li class="item">
          <p>投報率</p>
          <p><strong>8.69</strong>%</p>
          <p>(IRR <strong>6.05</strong>%)</p>
          <div class="icon-block">
            <i class="icon icon-ml bi bi-laptop"></i>
          </div>
        </li>
        <li class="item">
          <p>
            平均有效<br />
            日照時間
          </p>
          <p>
            <strong>3.5</strong>
            kwh
          </p>
          <div class="icon-block">
            <i class="icon bi bi-sun-fill"></i>
          </div>
        </li>
        <li class="item">
          <p>售電單價</p>
          <p>
            <strong>6.3079</strong>
            TWD
          </p>
          <div class="icon-block">
            <i class="bi bi-lightning-fill"></i>
          </div>
        </li>

        <li class="item">
          <p>售電期間</p>
          <p>
            <strong>20</strong>
            年
          </p>
          <div class="icon-block">
            <i class="bi bi-calendar2-check"></i>
          </div>
        </li>
        <li class="item">
          <div class="icon-block">
            <i class="icon bi bi-currency-exchange"></i>
          </div>
          <p>單片售價</p>
          <p><strong>23235</strong> TWD</p>
        </li>
      </ul>
    </div>
    <div class="content-detail">
      <ul
        class="nav nav-tabs justify-content-between product-detail-tab"
        role="tablist"
      >
        <li class="nav-item product-detail-tab-item" v-for="(item, i) in tabs" :key="item+123">
          <button
            class="nav-link"
            style="cursor: pointer;"
            :class="{'active':i == num}"
            @click="tab(i)"
            > {{ item }} </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <!-- charity  -->
        <div v-show="num == 0">
          <poblic-charity></poblic-charity>
        </div>
        <!-- charity  -->
        <!-- location  -->
        <div v-show="num == 1">
          <poblic-location></poblic-location>
        </div>
        <!-- location  -->
        <!-- progress  -->
        <div v-show="num == 2">
          <poblic-progress></poblic-progress>
        </div>
        <!-- progress  -->
        <!-- buildSystem  -->
        <div v-show="num == 3">
          <build-system></build-system>
        </div>
        <!-- buildSystem  -->
        <!-- caculator  -->
        <div v-show="num == 4">
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
        </div>
        <input type="hidden" id="hid_pst_qutys" value="36" />
        <input type="hidden" id="hid_Insurance" value="2000" />
        <input type="hidden" id="hid_pst_suntime" value="3.5" />
        <input type="hidden" id="hid_pst_pnl_kwp" value="0.34" />
        <input type="hidden" id="hid_pst_pwrprice" value="6.3079" />
        <input type="hidden" id="hid_pst_rev_property" value="0.1" />
        <input type="hidden" id="hid_pst_rev_rent" value="0.1" />
        <input type="hidden" id="hid_pst_panel_recycle" value="12240" />
        <!-- contract  -->
        <div v-show="num == 5">
          <div class="contract-list">
            <div
              class="item"
              data-toggle="modal"
              data-target="#modal_pst_pdf_cashflow"
            >
              <i class="fas fa-chevron-right"></i>
              財務報告
            </div>

            <div
              class="item"
              data-toggle="modal"
              data-target="#modal_pst_pdf_taipower"
            >
              <i class="fas fa-chevron-right"></i>
              台電合約
            </div>

            <div
              class="item"
              data-toggle="modal"
              data-target="#modal_pst_pdf_roofrental"
            >
              <i class="fas fa-chevron-right"></i>
              租賃契約公證
            </div>

            <div
              class="item"
              data-toggle="modal"
              data-target="#modal_pst_pdf_insurance"
            >
              <i class="fas fa-chevron-right"></i>
              產物保險
            </div>

            <div
              class="item"
              data-toggle="modal"
              data-target="#modal_pst_pdf_contract"
            >
              <i class="fas fa-chevron-right"></i>
              太陽人合約
            </div>

            <div
              class="item"
              data-toggle="modal"
              data-target="#modal_pst_pdf_energy"
            >
              <i class="fas fa-chevron-right"></i>
              能源局核准文件
            </div>
          </div>
        </div>
        <!-- contract  -->
      </div>
    </div>
  </section>
  <!-- [End]  -->
  <!-- [Start]其它專案  -->
  <section id="product-detail-other-project">
        <h4 class="title letterSpacing-50">其他專案</h4>
        <div class="slider-block">

            <div id="slider-btn-left" class="to-left">
                <i class="bi bi-chevron-left"></i>
            </div>

            <div id="slider-btn-right" class="to-right">
                <i class="bi bi-chevron-right"></i>
            </div>

            <div class="slider-items">
                <div class="item" style="left: calc(0% - 0px);">
                    <img class="other-img" :src="otherImg.other1" alt="other1">
                    <p class="text-center mb-2">太陽人台中晨光29號</p>
                    <div class="hover">
                        <a class="link" href="product.aspx?op=detail&amp;id=f9645356-4d22-4ccb-93ce-2c04bc7458df">
                            <i class="fas fa-link"></i>
                        </a>
                        <div class="title">
                            太陽人台中晨光29號
                        </div>
                    </div>
                </div>
                <div class="item" style="left: calc(0% - 0px);">
                    <div style="position: absolute; z-index: 1; left: 10px; bottom: 10px;">
                        <img src="https://www.hellosolarman.com/images/soldout.png" width="100" height="100">
                    </div>
                    <img class="other-img" :src="otherImg.other2" alt="other2">
                    <p class="text-center mb-2">現代婦女基金會-日光循環公益專案 (雲林朝天19號)</p>
                    <div class="hover">
                        <a class="link" href="product.aspx?op=detail&amp;id=c6bd6210-d13c-49d2-81c4-eefa5b76af63">
                            <i class="fas fa-link"></i>
                        </a>
                        <div class="title">
                            現代婦女基金會-日光循環公益專案 (雲林朝天19號)
                        </div>
                    </div>
                </div>
                <div class="item" style="left: calc(0% - 0px);">
                    <div style="position: absolute; z-index: 1; left: 10px; bottom: 10px;">
                        <img src="https://www.hellosolarman.com/images/soldout.png" width="100" height="100">
                    </div>
                    <img class="other-img" :src="otherImg.other3" alt="other3">
                    <p class="text-center mb-2">太陽人宜蘭蘭陽06號</p>
                    <div class="hover">
                        <a class="link" href="product.aspx?op=detail&amp;id=76f95c8d-e0ba-416e-bad0-8eb5c1511a9e">
                            <i class="fas fa-link"></i>
                        </a>
                        <div class="title">
                            太陽人宜蘭蘭陽06號
                        </div>
                    </div>
                </div>
                <div class="item" style="left: calc(0% - 0px);">
                    <img class="other-img" :src="otherImg.other4" alt="other4">
                    <p class="text-center mb-2">太陽人苗栗石虎05號</p>
                    <div class="hover">
                        <a class="link" href="product.aspx?op=detail&amp;id=604cdd20-b4e9-45f4-be14-24209967d3b9">
                            <i class="fas fa-link"></i>
                        </a>
                        <div class="title">
                            太陽人苗栗石虎05號
                        </div>
                    </div>
                </div>
                <div class="item" style="left: calc(0% - 0px);">
                    <div style="position: absolute; z-index: 1; left: 10px; bottom: 10px;">
                        <img src="https://www.hellosolarman.com/images/soldout.png" width="100" height="100">
                    </div>
                    <img class="other-img" :src="otherImg.other5" alt="other5">
                    <p class="text-center mb-2">太陽人桃園天空45號</p>
                    <div class="hover">
                        <a class="link" href="product.aspx?op=detail&amp;id=eeddc999-3659-4854-ad31-213f581cfb5c">
                            <i class="fas fa-link"></i>
                        </a>
                        <div class="title">
                            太陽人桃園天空45號
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </section>
  <!-- [End]其它專案 -->
</template>
<script>
import poblicCharity from './poblicItems/poblicCharity.vue'
import poblicLocation from './poblicItems/poblicLocation.vue'
import poblicProgress from './poblicItems/poblicProgress.vue'
import buildSystem from './poblicItems/poblicBuildSystem.vue'

import BarChart from './poblicItems/barChart.vue'

export default {
  name: 'poblicWelfareId',
  data () {
    return {
      imgSrc: require('../../public/images/banner/product_banner.jpg'),
      iconImg: {
        icon1: require('../../public/images/productWelfareId/icon_mobil.svg'),
        icon2: require('../../public/images/productWelfareId/icon_persent.png'),
        icon3: require('../../public/images/productWelfareId/icon_pay.svg')
      },
      otherImg: {
        other1: require('../../public/images/productWelfareId/other1.jpg'),
        other2: require('../../public/images/productWelfareId/other2.jpg'),
        other3: require('../../public/images/productWelfareId/other3.jpg'),
        other4: require('../../public/images/productWelfareId/other4.jpg'),
        other5: require('../../public/images/productWelfareId/other5.jpg')
      },
      product: [],
      currentFilter: '',
      countOfPage: 3,
      currentPage: 1,
      search: '',
      typeFilter: [],
      tabs: [
        '公益說明',
        '電廠位置與空拍',
        '預估進度',
        '建置系統',
        '收益計算機',
        '相關文件與合約'
      ],
      num: 0,
      solarPanels: [{ name: '台灣關愛基金會', price: 23235, rate: 8.69, irrRate: 6.05, powerGeneration: 8300, num: 36 }]
    }
  },
  components: {
    poblicCharity,
    poblicLocation,
    poblicProgress,
    buildSystem,
    BarChart
  },
  methods: {
    getData () {
      this.$http
        .get('/singleData.json/')
        .then((res) => {
          console.log(res, 'success')
          this.product = res.data.data[0]
          this.typeFilter = res.data.data[0]
        })
        .catch((err) => {
          console.log(err, 'error')
        })
    },
    tab (i) {
      this.num = i
    }
  },
  computed: {
    filterData () {
      return this.typeFilter
    }
  },
  mounted () {
    this.id = this.$route.params.post_id
    this.getData()
    console.log(this.$route.params.post_id)
  }
}
</script>
