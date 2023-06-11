<template>
  <Header></Header>
  <div class="faq">
    <main>
      <div class="banner">
        <h1>園區介紹<br />GUIDED TOUR</h1>
      </div>

      <!-- 樓層指南選單 -->
      <ul class="floor_nav">
        <li>
          <RouterLink to="/floor_introduction"
            ><img src="https://tibamef2e.com/thd101/g6/img/floor_p1.svg" alt=""
          /></RouterLink>
          <h4>樓層介紹</h4>
        </li>
        <li>
          <RouterLink to="/park_activity"
            ><img
              src="https://tibamef2e.com/thd101/g6/img/floor_p2.svg"
              alt=""
            />
          </RouterLink>

          <h4>館內活動</h4>
        </li>
        <li>
          <RouterLink to="/faq"
            ><img
              src="https://tibamef2e.com/thd101/g6/img/floor_p3_active.svg"
              alt=""
            />
          </RouterLink>
          <h4 class="h4_active">常見問題</h4>
        </li>
        <li>
          <RouterLink to="/visit_information"
            ><img
              src="https://tibamef2e.com/thd101/g6/img/floor_p4.svg"
              alt=""
            />
          </RouterLink>
          <h4>參觀資訊</h4>
        </li>
      </ul>

      <div class="wrapper">
        <div class="accordion">
          <div class="topic">
            <h4>營業相關</h4>
          </div>
          <div class="faq1 active">
            <p class="question">Q:平假日營業時間、休館時間？</p>
            <p class="answer">
              A:平日營業時間早上9:00至下午17:00，假日營業時間早上8:30至下午18:00。休館時間為每周一。
            </p>
            <p class="question">Q:如何預約團體參觀？</p>
            <p class="answer">
              A:如有團體購票預約需求，請來電洽詢，將有專人為您服務
            </p>
            <p class="question">Q:外籍旅客館內消費是否提供退稅服務？</p>
            <p class="answer">A:本館無提供退稅服務，敬請見諒</p>
          </div>
        </div>

        <div class="accordion">
          <div class="topic">
            <h4>參觀與服務</h4>
          </div>
          <div class="faq1 active">
            <p class="question">Q:是否能攜帶寵物入館？</p>
            <p class="answer">A:本館不得攜帶任何寵物入館</p>
            <p class="question">Q:館內是否提供行李寄放服務？</p>
            <p class="answer">
              A:館內大廳服務台後方有提供投幣式寄物櫃可以寄放行李
            </p>
            <p class="question">Q:如何預約館內導覽活動？</p>
            <p class="answer">
              A:可於台北海生館官網購買預約專人導覽活動，亦可於館內大廳服務台現場報名當日尚有名額之導覽場次
            </p>
            <p class="question">Q:展示館內可以使用閃光燈拍照嗎？</p>
            <p class="answer">
              A:為顧及避免造成對生物的干擾及影響來賓參觀品質，凡活體生物展示前請避免使用閃光燈。
            </p>
          </div>
        </div>

        <div class="accordion">
          <div class="topic">
            <h4>交通資訊</h4>
          </div>
          <div class="faq1 active">
            <p class="question">Q:平假日營業時間、休館時間？</p>
            <p class="answer">
              A:平日營業時間早上9:00至下午17:00，假日營業時間早上8:30至下午18:00。休館時間為每周一。
            </p>
            <p class="question">Q:如何預約團體參觀？</p>
            <p class="answer">
              A:如有團體購票預約需求，請來電洽詢，將有專人為您服務
            </p>
            <p class="question">Q:外籍旅客館內消費是否提供退稅服務？</p>
            <p class="answer">A:本館無提供退稅服務，敬請見諒</p>
          </div>
        </div>
      </div>
    </main>
  </div>

  <Footer></Footer>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import Header from "/src/components/Header.vue";
import Footer from "/src/components/Footer.vue";
import $ from "jquery";

// const abc = function () { };

onMounted(() => {
  $(function () {
    // 手風琴()
    $(".accordion").click(function () {
      $(this).find(".topic").toggleClass("on");
      $(this).find(".faq1").slideToggle();
    });
  });
});
</script>

<style lang="scss" scoped>
// @import "../assets/sass/page/faq" ;

.faq {
  main {
    .banner {
      background-image: url(https://tibamef2e.com/thd101/g6/img/guided_tour_banner.jpg);
      width: 100%;
      height: 660px;
      background-size: cover;

      h1 {
        padding-top: 300px;
        padding-left: 40px;
      }
    }

    .floor_nav {
      display: flex;
      justify-content: center;

      li {
        margin: 20px 30px;
        text-align: center;

        // RWD
        @include mobile() {
          margin: 15px 0;
          padding: 0 10px;
        }

        &:nth-child(3)::after {
          content: "";
          background-image: url("https://tibamef2e.com/thd101/g6/img/floor_nav_index.svg");
          background-repeat: no-repeat;
          display: block;
          width: 30px;
          height: 27px;
          position: relative;
          top: 9px;
          left: 36%;
        }

        a {
          // width: 100px;
          height: 82px;

          @include mobile() {
            height: 60px;
          }

          img {
            width: 70%;
            display: block;
            margin: auto;
          }
        }

        h4 {
          color: #97cbe0;
        }

        .h4_active {
          color: #16355a;
        }
      }
    }

    .wrapper {
      background-image: url(https://tibamef2e.com/thd101/g6/img/faq_bg2.jpg);
      height: 1700px;
      background-size: contain;
      padding-top: 20px;

      .accordion {
        width: 70%;
        border: 1px solid #16355a;
        margin: 0 auto;
        margin-bottom: 50px;
        background-color: white;

        .topic {
          display: flex;
          justify-content: space-between;
          align-items: center;

          &::after {
            content: "\002B";
            font-size: 24px;
            font-weight: bold;
            color: #666;
            transition: transform 0.3s ease;
          }

          &.on {
            background-color: lightseagreen;
          }

          &.on::after {
            transform: rotate(45deg);
          }
        }

        .topic {
          padding: 20px;
          background-color: #ccf1f5;
        }

        .faq1 {
          display: none;
          padding: 20px;

          .question {
            position: relative;
          }

          .question::after {
            content: "";
            width: 100%;
            height: 1px;
            background-color: #16355a;
            position: absolute;
            left: 0px;
            bottom: -3px;
          }

          .answer {
            margin-top: 10px;
            margin-bottom: 30px;
            position: relative;
          }
        }
      }
    }
  }
}
</style>
