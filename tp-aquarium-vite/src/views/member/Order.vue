<template>
  <div class="order wrapper">
    <!-- <select v-model="used" id="order">
            <option :value="0">未取貨</option>
            <option :value="1">已使用</option>
        </select> -->

    <div class="table">
      <div class="title">
        <h3>一個月內訂單</h3>
      </div>

      <table>
        <tr>
          <th>
            <p>訂單編號</p>
          </th>
          <th class="time">
            <p>訂購時間</p>
          </th>
          <th>
            <p>付款方式</p>
          </th>
          <th>
            <p>訂單金額</p>
          </th>
          <!-- <th>
                        <p>使用時間</p>
                    </th> -->
          <th>
            <p>商品名稱</p>
          </th>
          <th>
            <p>數量</p>
          </th>
          <th>
            <p>處理狀態</p>
          </th>
        </tr>
        <template v-for="item in order" :key="item.id">
          <tr>
            <td :rowspan="item.products.length">
              <p>{{ item.id }}</p>
            </td>
            <td :rowspan="item.products.length" class="time">
              <p>{{ item.buyTime }}</p>
            </td>
            <td :rowspan="item.products.length">
              <p>{{ item.pay }}</p>
            </td>
            <td :rowspan="item.products.length">
              <p>{{ item.total }}</p>
            </td>
            <!-- <td>
                            <p>{{ item.products[0].usedTime ? item.products[0].usedTime : "-"}}</p>
                        </td> -->
            <td>
              <p>{{ item.products[0].name }}</p>
            </td>
            <td>
              <p>{{ item.products[0].number }}</p>
            </td>
            <td class="time">
              <p>{{ item.products[0].state === 0 ? "未取貨" : "已取貨" }}</p>
            </td>
          </tr>
          <template
            v-for="(product, index) in item.products"
            :key="product.name"
          >
            <tr v-if="index !== 0">
              <!-- <td>
                                <p>{{ product.usedTime  ? product.usedTime: "-"}}</p>
                            </td> -->
              <td>
                <p>{{ product.name }}</p>
              </td>
              <td>
                <p>{{ product.number }}</p>
              </td>
              <td class="time">
                <p>{{ product.state === 0 ? "未取貨" : "已取貨" }}</p>
              </td>
            </tr>
          </template>
        </template>
      </table>
    </div>
    <div class="mobile_order">
      <div class="table_mobile">
        <div class="title">
          <h3>我的訂單</h3>
        </div>
        <!-- <div class="tableContainer" v-for="item in order" :key="item.id" :class="{'-close': close}"> -->
        <div class="tableContainer" v-for="item in order" :key="item.id">
          <table>
            <tr class="top">
              <th>
                <p>訂單編號</p>
              </th>
              <td>
                <p>{{ item.id }}</p>
                <!-- <img src="@https://tibamef2e.com/thd101/g6/img/member_angle.svg" alt="" @click="closeOrder"> -->
              </td>
            </tr>
            <tr class="text">
              <th>
                <p>訂購時間</p>
              </th>
              <td>
                <p>{{ item.buyTime }}</p>
              </td>
            </tr>
            <tr class="text">
              <th>
                <p>付款方式</p>
              </th>
              <td>
                <p>{{ item.pay }}</p>
              </td>
            </tr>
            <tr class="text">
              <th>
                <p>訂單金額</p>
              </th>
              <td>
                <p>{{ item.total }}</p>
              </td>
            </tr>
            <template v-for="product in item.products" :key="product.name">
              <tr class="text product_name">
                <th>
                  <p>商品名稱</p>
                </th>
                <td>
                  <p>{{ product.name }}</p>
                </td>
              </tr>
              <tr class="text">
                <th>
                  <p>使用時間</p>
                </th>
                <td>
                  <p>{{ product.usedTime }}</p>
                </td>
              </tr>
              <tr class="text">
                <th>
                  <p>數量</p>
                </th>
                <td>
                  <p>{{ product.number }}</p>
                </td>
              </tr>
              <tr class="text">
                <th>
                  <p>處理狀態</p>
                </th>
                <td>
                  <p>{{ product.state === 0 ? "未取貨" : "已取貨" }}</p>
                </td>
              </tr>
            </template>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios, { Axios } from "axios";
import { onMounted, ref, defineEmits, reactive } from "vue";
import { useCookies } from "vue3-cookies";
const close = ref(true);

const order = reactive([
  // {
  //     id:"3",
  //     buyTime: "2023/03/25 21:36:54",
  //     pay: "信用卡付款",
  //     total: "640",
  //     products: [{
  //         usedTime: "2023/1/1",
  //         name: "成人票",
  //         number: "1",
  //         state: "03/27 17:21 已使用"
  //     },
  //     {
  //         usedTime: "-",
  //         name: "企鵝筆記本",
  //         number: "1",
  //         state: "03/27 17:21 已取貨"
  //     },
  //     {
  //         usedTime: "-",
  //         name: "企鵝筆記本",
  //         number: "1",
  //         state: "03/27 17:21 已取貨"
  //     }
  // ]
  // },
  // {
  //     id:"4",
  //     buyTime: "2023/05/25 21:36:54",
  //     pay: "信用卡付款",
  //     total: "640",
  //     products: [{
  //         usedTime: "2023/1/1",
  //         name: "成人票",
  //         number: "1",
  //         state: "03/27 17:21 已使用"
  //     },
  //     {
  //         usedTime: "-",
  //         name: "企鵝筆記本",
  //         number: "1",
  //         state: "03/27 17:21 已取貨"
  //     }
  // ]
  // },
  // {
  //     id:"5",
  //     buyTime: "2023/05/25 21:36:54",
  //     pay: "信用卡付款",
  //     total: "640",
  //     products: [{
  //         usedTime: "2023/1/1",
  //         name: "成人票",
  //         number: "1",
  //         state: "03/27 17:21 已使用"
  //     },
  //     {
  //         usedTime: "-",
  //         name: "企鵝筆記本",
  //         number: "1",
  //         state: "03/27 17:21 已取貨"
  //     }
  // ]
  // }
]);

const closeOrder = (e) => {
  close.value = !close.value;
};

const used = ref(0);

const { cookies } = useCookies();

const id = cookies.get("id");

const getOrder = () => {
  let params = new URLSearchParams();
  params.append("id", id);

  axios
    .post(`${import.meta.env.VITE_API_URL}getOrder.php`, params) //使用get或post等取得路徑資料(php)

    .then((res) => {
      //回傳後如何處理

      // console.log(res.data);

      res.data.forEach((item) => {
        order.push({
          id: item.ID,
          buyTime: item.BUY_TIME,
          total: item.SUM,
          pay: item.PAY,
          products: [],
        });
      });

      getOrderDetail();
    })
    .catch((err) => console.log(err)); //錯誤如何處理
};

const getOrderDetail = () => {
  let params = new URLSearchParams();
  params.append("id", id);

  axios
    .post(`${import.meta.env.VITE_API_URL}getOrderDetail.php`, params) //使用get或post等取得路徑資料(php)

    .then((res) => {
      //回傳後如何處理

      console.log(res.data);

      res.data.forEach((item) => {
        order.forEach((orderList) => {
          if (orderList.id === item.ORDER_ID) {
            orderList.products.push({
              // usedTime: item.USE_DATE,
              name: item.NAME,
              number: item.NUMBER,
              state: item.RECEIVE,
            });
          }
        });
      });
    })
    .catch((err) => console.log(err)); //錯誤如何處理
};

const now = new Date();

onMounted(() => {
  getOrder();
});
</script>

<style lang="scss" scoped>
.order {
  select {
    margin-bottom: 60px;
    width: 150px;
    height: 50px;
    font-family: "Noto Sans TC", sans-serif;
    font-size: 1.6rem;
    line-height: 1.6;
    letter-spacing: 0.1rem;
    border: 1px solid black;
    padding: 5px 10px;
    margin-left: 10px;
    appearance: none;
    background-image: url("https://tibamef2e.com/thd101/g6/img/member_angle.svg");
    background-repeat: no-repeat;
    background-position: right 13px center;
    outline: none;

    @include mobile {
      margin-top: 30px;
      margin-bottom: 10px;
    }

    option {
    }
  }

  .table {
    border-radius: 20px;
    border: 1px solid map-get($color, bgc2);
    overflow: hidden;

    @include mobile {
      display: none;
    }

    .title {
      height: 100px;
      background-color: map-get($color, bgc2);

      h3 {
        text-align: center;
        font-size: 2rem;
        letter-spacing: 0.2rem;
        font-family: "Noto Sans TC", sans-serif;
        margin: 0;
        line-height: 100px;
      }
    }

    table {
      width: 100%;

      text-align: center;

      tr {
        th,
        td {
          border: 1px solid map-get($color, bgc2);
          padding: 15px;
          vertical-align: middle;

          p {
            font-family: "Noto Sans TC", sans-serif;
            margin: 0;
            font-size: 1.6rem;
            line-height: 1.6;
            letter-spacing: 0.1rem;
          }
        }
      }
    }
  }

  .mobile_order {
    display: none;
    margin-top: 40px;

    @include mobile {
      display: block;

      select {
        margin-bottom: 30px;
        width: 150px;
        height: 35px;
        font-family: "Noto Sans TC", sans-serif;
        font-size: 1.6rem;
        line-height: 1.6;
        letter-spacing: 0.1rem;
        border: 1px solid black;
        padding: 5px 10px;
        margin-left: 20px;
        appearance: none;
        background-image: url("https://tibamef2e.com/thd101/g6/img/member_angle.svg");
        background-repeat: no-repeat;
        background-position: right 13px center;
        outline: none;

        option {
        }
      }

      .table_mobile {
        margin: 0 auto;
        width: 90%;
        border: 1px solid map-get($color, bgc2);
        border-radius: 20px;
        overflow: hidden;

        .title {
          height: 65px;
          background-color: map-get($color, bgc2);

          h3 {
            line-height: 65px;
            text-align: center;
          }
        }

        .tableContainer {
          transition: all 0.5s;
          height: auto;
          overflow: hidden;

          table {
            width: 100%;

            .product_name {
              background-color: #fff71c75;
            }

            .top {
              background-color: map-get($color, bgc1);
            }

            tr {
              width: 100%;

              text-align: center;

              th {
                box-sizing: border-box;
                border: 1px solid map-get($color, bgc2);
                padding: 15px;
                vertical-align: middle;
                width: 30%;
                border-left: 0px;
              }

              td {
                box-sizing: border-box;
                border: 1px solid map-get($color, bgc2);
                padding: 15px;
                vertical-align: middle;
                width: 70%;
                border-right: 0px;
                position: relative;

                img {
                  position: absolute;
                  right: 10px;
                  top: 50%;
                  transform: translate(0, -50%);
                }
              }

              &:last-child {
                th {
                  border-bottom: 0;
                }
              }

              &:last-child {
                td {
                  border-bottom: 0;
                }
              }

              p {
              }
            }
          }
        }

        .tableContainer2 {
          transition: all 0.5s;
          height: 358px;
          overflow: hidden;
          table {
            width: 100%;

            .top {
              background-color: map-get($color, bgc1);
            }

            tr {
              width: 100%;

              text-align: center;

              th {
                box-sizing: border-box;
                border: 1px solid map-get($color, bgc2);
                padding: 15px;
                vertical-align: middle;
                width: 30%;
                border-left: 0px;
              }

              td {
                box-sizing: border-box;
                border: 1px solid map-get($color, bgc2);
                padding: 15px;
                vertical-align: middle;
                width: 70%;
                border-right: 0px;
                position: relative;

                img {
                  position: absolute;
                  right: 10px;
                  top: 50%;
                  transform: translate(0, -50%);
                }
              }

              &:last-child {
                th {
                  border-bottom: 0;
                }
              }

              &:last-child {
                td {
                  border-bottom: 0;
                }
              }

              p {
              }
            }
          }
        }

        .-close {
          height: 50px;
        }
      }
    }
  }
}
</style>
