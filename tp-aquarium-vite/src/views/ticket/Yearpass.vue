<template>
  <Header></Header>
  <main class="ticket">
    <div class="banner">
      <h1>年度通行<br />YEARPASS</h1>
    </div>
    <div class="wrapper">
      <div class="year">
        <table>
          <thead>
            <tr>
              <th>門票種類</th>
              <th>售價</th>
              <th>適用對象</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>大人</td>
              <td>NT $1080</td>
              <td>18歲(含)~64歲成人使用</td>
            </tr>
            <tr>
              <td>學生</td>
              <td>NT $760</td>
              <td>12歲(含)~17歲學生使用</td>
            </tr>
            <tr>
              <td>兒童</td>
              <td>NT $520</td>
              <td>6歲(含)~11歲學童使用</td>
            </tr>
            <tr>
              <td>博愛票</td>
              <td>NT $520</td>
              <td>持有身心障礙證明者與1位陪同者、孕婦、滿65歲以上長者適用</td>
            </tr>
          </tbody>
        </table>
        <ul class="offer">
          <li><h4>本館地下停車費享消費享8折優惠</h4></li>
          <li><h4>有效期限內不限次數暢遊本館</h4></li>
          <li><h4>本館指定餐廳消費享8折優惠</h4></li>
          <li><h4>紀念品店消費享9折優惠</h4></li>
        </ul>
      </div>
      <div class="yearpass-mid">
        <div>
          <h3>申辦年度通行證</h3>
          <p>
            在接下來的一年內無論何時都能暢遊台北水族館。<br />
            充滿歡樂的通行證。<br />
            不管是何時都能享有平時購票更多的優惠!
          </p>
        </div>
        <img
          src="https://tibamef2e.com/thd101/g6/img/yearpass_phone.svg"
          alt=""
        />
      </div>
      <div class="yearpass-bottom">
        <h2>選擇購買張數</h2>
        <TicketCounter
          itinerary="年度通行證"
          @count="count"
          @total="total"
          @types="types"
        />

        <div class="inside">
          <h3>現在申辦可使用至{{ expire }}</h3>
          <h4>
            共計張數 <span>{{ finalCount }}</span> 張
          </h4>
          <h3>共計金額 NT ${{ finalTotal }}</h3>
        </div>
        <a
          @click.prevent="addCart"
          :class="['btn', 'goCart', finalTotal ? '' : 'disable']"
          >加入購物車</a
        >
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import TicketCounter from "../../components/TicketCounter.vue";
const today = ref(new Date());
const expire = ref(
  new Date(
    today.value.setFullYear(today.value.getFullYear() + 1)
  ).toLocaleDateString()
);
const finalTotal = ref();
const finalCount = ref();
const finalTypes = ref();
const total = function (e) {
  finalTotal.value = e;
};
const count = function (e) {
  finalCount.value = e;
};
const types = function (e) {
  finalTypes.value = e;
};
onMounted(() => {});
</script>

<style lang="scss" scoped>
main.ticket {
  .banner {
    background-image: url(https://tibamef2e.com/thd101/g6/img/ticket_banner.png);
    height: 660px;
    background-size: cover;
    @include mobile {
      height: 268px;
      background-repeat: no-repeat;
      background-position: center;
    }
    h1 {
      padding-top: 35rem;
      padding-left: 40px;
      @include mobile {
        padding-left: 0;
        padding-top: 100px;
        font-size: 2.8rem;
        line-height: 5rem;
      }
    }
  }
  margin-bottom: 40rem;
  @include wrapper;
  h1 {
    margin: 3rem 5rem 0;
  }

  h3 {
    margin-top: 3rem;
  }

  table {
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
    border-collapse: separate;
    border-spacing: 0;
    margin: 5rem auto;
    background: white;
    font-size: 1.6rem;

    thead {
      background-color: map-get($color, bgc2);
      font-weight: bold;
    }

    tr td:first-child {
      background-color: map-get($color, bgc2);
      font-weight: bold;
    }

    th,
    td {
      text-align: center;
      border: 1px solid map-get($color, bgc2);
      padding: 3rem 4rem;
    }
  }

  .ticket-year {
    margin: 0 auto;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    table {
      margin: 2rem;

      td:nth-child(2) {
        padding-left: 10rem;
        padding-right: 10rem;
      }
    }
  }

  .ticket-year-right {
    margin-left: 1.5rem;

    a {
      width: 80%;
    }
  }

  .ticket-group {
    td:not(:nth-child(1)) {
      padding-left: 8rem;
      padding-right: 8rem;
    }
  }

  .ticket-notice {
    border: 1px solid black;
    padding: 2rem;
    margin: 5rem;
  }

  .ticket-day-bottom {
    margin: 0 auto;
    width: 90%;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .offer {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    justify-content: space-between;
    margin: 0 auto;
    li {
      text-align: left;
      width: 46%;
      list-style: disc;
      font-size: 1.6rem;
      line-height: 8rem;
      @include mobile {
        width: 100%;
        line-height: 3rem;
      }
    }
  }

  a {
    font-weight: bold;
    padding: 1rem 3rem;

    &:hover {
      transform: scale(1.2);
    }
    &.disable {
      cursor: not-allowed;
      pointer-events: none;
      background-color: rgba(229, 229, 229, 0.8);
      color: rgba(174, 174, 174, 0.8);
    }
  }

  //年度方案頁面

  .yearpass-mid {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5rem;
    gap: 10rem;
    border-bottom: 1px solid black;
    line-height: 5rem;
    img {
      width: 30%;
    }
  }

  .yearpass-bottom {
    margin-bottom: 10rem;
    h2 {
      margin-bottom: 2rem;
    }

    .inside {
      margin: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-size: 2.6rem;
      }

      h3 {
        margin: 0;
      }
    }
    a {
      float: right;
      @include mobile {
        float: none;
      }
    }
  }

  @include mobile {
    text-align: center;

    table {
      width: 80%;
      box-shadow: none;

      thead {
        display: none;
      }

      th,
      td {
        padding: 1.5rem 1rem;
      }

      td:before {
        position: absolute;
        left: 1rem;
        font-weight: bold;
      }

      &.ticket-day {
        td:nth-child(2):before {
          content: "日間票";
        }

        td:nth-child(3):before {
          content: "星光票";
        }
      }
    }

    .ticket-day-bottom {
      flex-direction: column;
      gap: 2rem;
    }

    .ticket-year {
      flex-direction: column;
    }

    table tr,
    table td {
      display: block;
    }

    table tr {
      position: relative;
      margin-bottom: 1em;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
    }

    table td {
      border-top: none;
    }

    .yearpass-mid {
      flex-direction: column;
      gap: 1rem;
      & > div {
        text-align: left;
      }
      img {
        width: 50%;
        margin-top: 2rem;
      }
    }

    .yearpass-bottom {
      h3 {
        line-height: 1.3;
      }

      .inside {
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
}
</style>
