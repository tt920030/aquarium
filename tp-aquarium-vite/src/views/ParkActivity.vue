<template>
  <div class="journey">
    <Header></Header>
    <main>
      <div class="banner">
        <h1>
          樓層指南<br />
          GUIDED TOUR
        </h1>
      </div>
      <!-- 樓層指南選單 -->
      <ul class="floor_nav">
        <li>
          <a href=""><img src="../img/floor_p1.jpg" alt="" /> </a>
          <h4>樓層介紹</h4>
        </li>
        <li>
          <a href=""><img src="../img/floor_p2_active.jpg" alt="" /> </a>
          <h4 class="h4_active">館內活動</h4>
        </li>
        <li>
          <a href=""><img src="../img/floor_p3.jpg" alt="" /> </a>
          <h4>常見問題</h4>
        </li>
        <li>
          <a href=""><img src="../img/floor_p4.jpg" alt="" /> </a>
          <h4>參觀資訊</h4>
        </li>
      </ul>
      <section class="wrapper">
        <!-- journey information -->
        <h3 class="journey_info">台北海生館活動</h3>

        <div class="journey_intro">
          <ul>
            <li id="journey1">
              <a href="" class="lightbox">
                <img class="intro_img" src="../img/park_activity1.jpg" alt="" />
              </a>

              <div class="journey_intro_content">
                <div class="journey_intro_main">
                  <img src="../img/journey_intro_icon.svg" alt="" />
                  <h4>海底隧道漫步</h4>
                  <p>
                  </p>
                  <a class="btn">了解更多</a>
                </div>
              </div>
            </li>
            <li id="journey2">
              <a href="" class="lightbox">
                <img class="intro_img" src="../img/park_activity2.jpg" alt="" />
              </a>
              <div class="journey_intro_content">
                <div class="journey_intro_main">
                  <img src="../img/journey_intro_icon.svg" alt="" />
                  <h4>海洋生物導覽</h4>
                  <p>
                    導覽員會帶領參觀者進入展館或戶外區域，介紹不同種類的海洋生物、牠們的生活習性、食物鏈、海洋保育等相關知識。這種活動讓人們能夠深入了解海洋世界，了解海洋生物的生存環境和保育現狀，提高對保護海洋環境的意識。
                  </p>
                </div>

                <div class="journey_intor_icon">
                  <a class="btn">了解更多</a>
                </div>
              </div>
            </li>
            <li id="journey3">
              <a href="" class="lightbox">
                <img class="intro_img" src="../img/park_activity3.jpg" alt="" />
              </a>
              <div class="journey_intro_content">
                <div class="journey_intro_main">
                  <img src="../img/journey_intro_icon.svg" alt="" />
                  <h4>海獅秀</h4>
                  <p>
                    在這個活動中，訓練師會訓練海獅完成各種表演，例如跳躍、翻滾、平衡、接球等，以展示海獅的智慧和技能。這種活動不僅讓觀眾欣賞到海獅的可愛和聰明，還可以提高人們對海洋動物的認識和對保護海洋環境的意識。
                  </p>
                </div>

                <div class="journey_intor_icon">
                  <a class="btn">了解更多</a>
                </div>
              </div>
            </li>
            <li id="journey4">
              <a href="" class="lightbox">
                <img class="intro_img" src="../img/park_activity4.jpg" alt="" />
              </a>
              <div class="journey_intro_content">
                <div class="journey_intro_main">
                  <img src="../img/journey_intro_icon.svg" alt="" />
                  <h4>海星觸摸</h4>
                  <p>
                    觸摸海星活動是一種與海洋生物近距離互動的體驗，海星是一種生活在海洋中的奇特生物，牠們的身體扁平，呈星形，有著吸盤狀的足，能夠吸附在海洋中的礁石或其他物體上。通過觸摸海星活動，人們可以近距離觀察和感受這種奇特生物的外形和觸感，以及了解更多海星的生態和習性。
                  </p>
                </div>

                <div class="journey_intor_icon">
                  <a class="btn">了解更多</a>
                </div>
              </div>
            </li>
            <li id="journey5">
              <a href="" class="lightbox">
                <img class="intro_img" src="../img/park_activity5.jpg" alt="" />
              </a>
              <div class="journey_intro_content">
                <div class="journey_intro_main">
                  <img src="../img/journey_intro_icon.svg" alt="" />
                  <h4>餵食海龜</h4>
                  <p>
                    在海生館，你可以參加「餵食海龜體驗」活動，與海洋生物近距離互動。在活動中，你將有機會體驗親手餵食海龜的樂趣和刺激。你可以觀察這些可愛的海龜在水中游動，透過這個活動，你可以了解到關於海龜的一些基本知識
                  </p>
                </div>

                <div class="journey_intor_icon">
                  <a class="btn">了解更多</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <!-- 燈箱 -->
      <section class="light_box">
        <!-- 海底隧道漫步 -->
        <div class="lightbox_overlay journey1">
          <div class="wrapper">
            <div class="lightbox_content">
              <!-- 區塊1 -->
              <div class="lightbox_block">
                <h4 class="accordion_header">海底隧道漫步</h4>
                <ul>
                  <li>
                    <img src="../img/park_activity1.jpg" />
                  </li>
                  <li>
                    <h4>享受漫步海底世界的浪漫吧!</h4>
                    <p>
                      在這種活動中，人們可以漫步在海生館的隧道，觀察各種海洋生物在身旁游泳的情景，感受置身於海底世界的奇妙體驗。透過這種活動，人們可以近距離觀察各種海洋生物，包括鯊魚、海龜、海星、珊瑚等，並且學習到關於海洋生物和海洋生態系統的知識。
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 關閉按鈕 -->
          <div class="lightbox_close">x</div>
        </div>

        <!-- 海洋生物導覽 -->
        <div class="lightbox_overlay journey2">
          <div class="wrapper">
            <div class="lightbox_content">
              <!-- 區塊1 -->
              <div class="lightbox_block">
                <h4 class="accordion_header">海洋生物導覽</h4>
                <ul>
                  <li><img src="../img/park_activity2.jpg" alt="" /></li>
                  <li>
                    <h4>由專業的嚮導為您解說海底世界</h4>
                    <p>
                      導覽員會帶領參觀者進入展館或戶外區域，介紹不同種類的海洋生物、牠們的生活習性、食物鏈、海洋保育等相關知識。這種活動讓人們能夠深入了解海洋世界，了解海洋生物的生存環境和保育現狀，提高對保護海洋環境的意識。
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 關閉按鈕 -->
          <div class="lightbox_close">x</div>
        </div>

        <!-- 海獅秀 -->
        <div class="lightbox_overlay journey3">
          <div class="wrapper">
            <div class="lightbox_content">
              <!-- 區塊1 -->
              <div class="lightbox_block">
                <h4 class="accordion_header">海獅秀</h4>
                <ul>
                  <li><img src="../img/park_activity3.jpg" alt="" /></li>
                  <li>
                    <h4>快來欣賞可愛海獅的表演吧!</h4>
                    <p>
                      在這個活動中，訓練師會訓練海獅完成各種表演，例如跳躍、翻滾、平衡、接球等，以展示海獅的智慧和技能。這種活動不僅讓觀眾欣賞到海獅的可愛和聰明，還可以提高人們對海洋動物的認識和對保護海洋環境的意識。
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 關閉按鈕 -->
          <div class="lightbox_close">x</div>
        </div>

        <!-- 海星觸摸 -->
        <div class="lightbox_overlay journey4">
          <div class="wrapper">
            <div class="lightbox_content">
              <!-- 區塊1 -->
              <div class="lightbox_block">
                <h4 class="accordion_header">海星觸摸</h4>
                <ul>
                  <li><img src="../img/park_activity4.jpg" alt="" /></li>
                  <li>
                    <h4>感受海星神秘的觸感吧!</h4>
                    <p>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 關閉按鈕 -->
          <div class="lightbox_close">x</div>
        </div>

        <!-- 餵食海龜 -->
        <div class="lightbox_overlay journey5">
          <div class="wrapper">
            <div class="lightbox_content">
              <!-- 區塊1 -->
              <div class="lightbox_block">
                <h4 class="accordion_header">餵食海龜</h4>
                <ul>
                  <li><img src="../img/park_activity5.jpg" alt="" /></li>
                  <li>
                    <h4>快來親自體會餵食海龜的樂趣吧!</h4>
                    <p>
                      在海生館，你可以參加「餵食海龜體驗」活動，與海洋生物近距離互動。在活動中，你將有機會體驗親手餵食海龜的樂趣和刺激。你可以觀察這些可愛的海龜在水中游動，透過這個活動，你可以了解到關於海龜的一些基本知識，例
                      如牠們的營養需求和生態環境。此外，在活動中，專業的飼養員會分享更多有關海龜的生態和保育知識，讓你更深入了解海洋生物的重要性和生態價值。
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 關閉按鈕 -->
          <div class="lightbox_close">x</div>
        </div>
      </section>

      <RouterLink to="/ticket"></RouterLink>
    </main>

    <Footer></Footer>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import Header from "/src/components/Header.vue";
import Footer from "/src/components/Footer.vue";
import $ from "jquery";

$(function () {
  // 燈箱()
  // 找到該元素
  $(".lightbox").click(function (e) {
    // 防止點擊時跳轉
    e.preventDefault();
    // 找到父元素的ID
    let parentId = $(this).parent().attr("id");
    $("." + parentId).fadeIn();
    // 停掉body的滾輪
    $("body").css("overflow", "hidden");
  });

  //點擊x關閉
  $(".lightbox_close").click(function () {
    $(this).parent().fadeOut();
    $("body").css("overflow", "visible");
  });
  // 點擊旁邊關閉
  $(".lightbox_content").click(function (e) {
    e.stopPropagation();
  });
  $(".lightbox_overlay").click(function (e) {
    $(this).fadeOut();
    // 還原body的滾輪
    $("body").css("overflow", "visible");
  });

  // 手風琴()
  $(".accordion_header").click(function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle();
    // 滾動到 .accordion_header 的位置
    $("html, body").animate(
      {
        scrollTop: $(this).offset().top,
      },
      500
    );
  });
  //   $(".accordion_header").first().click();

  // 點了解更多打開手風琴
  $(".btn").click(function (e) {
    // 防止點擊時跳轉
    e.preventDefault();
    // 找到父元素的ID
    let parentId = $(this).closest("li").attr("id");
    console.log(parentId);
    //  打開手風琴
    $("." + parentId)
      .find(".accordion_header")
      .click();
    // 滾動至手風琴的位置
  });
});
</script>

<style lang="scss" scoped>
.journey {
  main {
    // 開場介紹圖
    .banner {
      background-image: url("../../../../src/img/guided_tour_banner.jpg");
      width: 100%;
      height: 660px;
      background-size: cover;
      // RWD
      @include mobile {
        height: 300px;
      }
      h1 {
        padding-top: 300px;
        padding-left: 40px;
        @include mobile {
          padding-top: 105px;
        }
      }
    }
    // 樓層nav
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
        &:nth-child(2)::after {
          content: "";
          background-image: url("../../../../src/img/floor_nav_index.jpg");
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
    .journey_banner_content {
      // position: relative;
      // writing-mode: vertical-lr;

      h2 {
        position: absolute;
        z-index: 999;
        top: 55%;
        right: 25%;
        writing-mode: vertical-lr;
        font-family: Noto Sans TC;
      }

      h1 {
        position: absolute;
        z-index: 999;
        top: 55%;
        right: 29%;
        color: map-get($color, text);
        writing-mode: vertical-lr;
        font-family: Noto Sans TC;
        font-weight: normal;
      }

      h4 {
        position: absolute;
        z-index: 999;
        top: 65%;
        right: 35%;
        writing-mode: vertical-lr;
        font-family: Noto Sans TC;
        line-height: 2;
      }

      @include mobile() {
        h2 {
          top: 40%;
          right: 7%;
        }

        h1 {
          top: 40%;
          right: 15%;
        }

        h4 {
          top: 45%;
          right: 30%;
        }
      }
    }

    .journey_banner {
      position: relative;
      padding-top: 450px;

      .pic_1 {
        position: absolute;
        width: 300px;
        height: 230px;
        top: 30px;
        left: -50px;
        background-image: url(../img/journey_banner1.jpg);
        clip-path: url(#foam_1);
      }

      .pic_2 {
        position: absolute;
        width: 280px;
        height: 280px;
        bottom: -150px;
        left: 80px;
        background-image: url(../img/journey_banner2.jpg);
        background-position-x: -100px;
        clip-path: url(#foam_2);
      }

      .pic_3 {
        position: absolute;
        width: 480px;
        height: 500px;
        top: 55px;
        left: 350px;
        background-image: url(../img/journey_banner3.jpg);
        clip-path: url(#foam_3);
      }

      .pic_4 {
        position: absolute;
        width: 250px;
        height: 250px;
        top: -30px;
        right: 380px;
        background-image: url(../img/journey_banner4.jpg);
        clip-path: url(#foam_4);
      }

      .pic_5 {
        position: absolute;
        width: 250px;
        height: 250px;
        bottom: -110px;
        right: 15px;
        background-image: url(../img/journey_banner5.jpg);
        background-position-x: center;
        clip-path: url(#foam_5);
      }

      .pic_6 {
        position: absolute;
        width: 300px;
        height: 350px;
        top: -100px;
        right: 0;
        background-image: url(../img/journey_banner6.jpg);
        background-position-y: 70px;
        background-position-x: -80px;
        clip-path: url(#foam_6);
      }

      @include mobile() {
        overflow-x: hidden;

        .pic_1 {
          top: -150px;
          left: 300px;
        }

        .pic_2 {
          top: 170px;
          left: -100px;
        }

        .pic_3 {
          display: none;
        }

        .pic_4 {
          display: none;
        }

        .pic_5 {
          top: -70px;
          right: 150px;
        }

        .pic_6 {
          display: none;
        }
      }
    }

    svg {
      #foam_1 path {
        animation: foam1 10s linear infinite;
      }

      #foam_2 path {
        animation: foam2 8s linear infinite;
      }

      #foam_3 path {
        animation: foam3 15s linear infinite;
      }

      #foam_4 path {
        animation: foam4 7s linear infinite;
      }

      #foam_5 path {
        animation: foam5 12s linear infinite;
      }

      #foam_6 path {
        animation: foam6 10s linear infinite;
      }
    }

    @keyframes foam1 {
      0% {
        d: path(
          "M144.482 0C198.601 0 238 48.1206 238 102.207C238 154.194 196.499 197 144.482 197C76.9866 197 0 169.663 0 102.207C0 33.12 75.3541 0 144.482 0Z"
        );
      }

      25% {
        d: path(
          "M77.6519 0C140.831 0 209 31.4384 209 94.9585C209 162.591 144.921 207 77.6519 207C24.6084 207 0 148.288 0 94.9585C0 46.9507 29.9017 0 77.6519 0Z"
        );
      }

      75% {
        d: path(
          "M116.705 0C184.091 0 264 22.4973 264 89.8915C264 160.563 187.368 195 116.705 195C55.3728 195 0 151.232 0 89.8915C0 32.3584 59.1793 0 116.705 0Z"
        );
      }

      100% {
        d: path(
          "M144.482 0C198.601 0 238 48.1206 238 102.207C238 154.194 196.499 197 144.482 197C76.9866 197 0 169.663 0 102.207C0 33.12 75.3541 0 144.482 0Z"
        );
      }
    }

    @keyframes foam2 {
      0% {
        d: path(
          "M144.482 0C198.601 0 238 48.1206 238 102.207C238 154.194 196.499 197 144.482 197C76.9866 197 0 169.663 0 102.207C0 33.12 75.3541 0 144.482 0Z"
        );
      }

      25% {
        d: path(
          "M77.6519 0C140.831 0 209 31.4384 209 94.9585C209 162.591 144.921 207 77.6519 207C24.6084 207 0 148.288 0 94.9585C0 46.9507 29.9017 0 77.6519 0Z"
        );
      }

      75% {
        d: path(
          "M116.705 0C184.091 0 264 22.4973 264 89.8915C264 160.563 187.368 195 116.705 195C55.3728 195 0 151.232 0 89.8915C0 32.3584 59.1793 0 116.705 0Z"
        );
      }

      100% {
        d: path(
          "M144.482 0C198.601 0 238 48.1206 238 102.207C238 154.194 196.499 197 144.482 197C76.9866 197 0 169.663 0 102.207C0 33.12 75.3541 0 144.482 0Z"
        );
      }
    }

    @keyframes foam3 {
      0% {
        d: path(
          "M226.643 0.00741225C328.09 -0.724186 430.755 52.7234 456.953 150.596C480.399 238.188 397.561 306.112 322.06 356.471C258.286 399.007 179.654 419.989 115.139 378.582C37.6457 328.847 -19.645 242.098 6.34841 153.846C34.302 58.9383 127.581 0.721814 226.643 0.00741225Z"
        );
      }

      25% {
        d: path(
          "M197.86 0.000489616C299.286 -0.258384 360.086 102.183 386.298 199.751C407.961 280.386 375.796 362.604 308.727 412.672C238.046 465.436 141.894 487.077 70.1472 435.761C-2.59182 383.735 -12.719 286.315 12.3714 200.705C40.6519 104.211 96.9155 0.258134 197.86 0.000489616Z"
        );
      }

      75% {
        d: path(
          "M178.368 0.00346831C273.583 -0.676585 327.853 98.772 352.794 190.71C373.542 267.194 348.994 347.555 285.509 394.952C219.31 444.377 128.277 456.985 61.7517 408C-3.71213 359.797 -10.9057 271.336 11.4425 193.148C37.3015 102.677 84.3193 0.675193 178.368 0.00346831Z"
        );
      }

      100% {
        d: path(
          "M226.643 0.00741225C328.09 -0.724186 430.755 52.7234 456.953 150.596C480.399 238.188 397.561 306.112 322.06 356.471C258.286 399.007 179.654 419.989 115.139 378.582C37.6457 328.847 -19.645 242.098 6.34841 153.846C34.302 58.9383 127.581 0.721814 226.643 0.00741225Z"
        );
      }
    }

    @keyframes foam4 {
      0% {
        d: path(
          "M117.059 2.92066C143.022 6.02419 167.173 16.1281 183.566 36.2795C200.054 56.5471 204.532 82.0928 202.57 108.033C200.005 141.942 199.617 180.765 171.189 199.893C139.346 221.319 95.7049 220.349 61.4105 203.012C27.972 186.108 9.28373 151.12 2.46663 114.598C-3.97025 80.1122 1.53425 42.1536 26.7912 17.5393C49.64 -4.72814 85.2126 -0.886164 117.059 2.92066Z"
        );
      }

      25% {
        d: path(
          "M97.9844 0.0389885C133.802 1.27215 157.983 34.5949 176.679 65.113C192.121 90.3183 197.511 120.195 188.916 148.466C181.026 174.419 159.127 191.967 134.578 203.594C110.248 215.118 82.8084 221.104 58.0935 210.428C32.2177 199.251 15.18 175.409 6.98995 148.48C-2.1122 118.553 -4.17957 86.1277 12.1743 59.4493C31.2887 28.2674 61.3815 -1.2212 97.9844 0.0389885Z"
        );
      }

      75% {
        d: path(
          "M93.3378 2.72734C129.268 -2.51613 169.441 -2.43629 194.752 23.593C222.34 51.9647 233.747 96.184 220.459 133.457C208.33 167.48 169.466 180.052 135.053 191.052C107.836 199.752 79.321 199.388 53.6874 186.765C28.3674 174.296 7.72976 152.927 1.66884 125.367C-4.33788 98.0532 6.56089 71.0149 23.3056 48.613C40.8835 25.0963 64.2812 6.96773 93.3378 2.72734Z"
        );
      }

      100% {
        d: path(
          "M117.059 2.92066C143.022 6.02419 167.173 16.1281 183.566 36.2795C200.054 56.5471 204.532 82.0928 202.57 108.033C200.005 141.942 199.617 180.765 171.189 199.893C139.346 221.319 95.7049 220.349 61.4105 203.012C27.972 186.108 9.28373 151.12 2.46663 114.598C-3.97025 80.1122 1.53425 42.1536 26.7912 17.5393C49.64 -4.72814 85.2126 -0.886164 117.059 2.92066Z"
        );
      }
    }

    @keyframes foam5 {
      0% {
        d: path(
          "M102.353 2.36807C131.44 -1.20598 164.947 -3.74362 184.409 18.1682C204.557 40.8526 202.655 75.5536 192.862 104.271C184.253 129.518 161.427 144.81 137.326 156.24C113.469 167.555 87.5091 174.98 62.6727 166.016C34.3669 155.799 5.17859 136.589 0.511353 106.858C-3.97697 78.2663 22.0066 56.3664 42.2064 35.6415C59.0321 18.3783 78.4277 5.30794 102.353 2.36807Z"
        );
      }

      25% {
        d: path(
          "M100.582 0.00976744C126.631 -0.468452 148.145 16.6835 165.579 36.1075C184.861 57.5895 205.559 82.5141 200.116 110.902C194.534 140.012 166.373 156.854 139.902 170.024C112.907 183.455 82.7496 194.843 54.9787 183.113C25.8093 170.793 3.91437 142.615 0.321087 111.068C-2.93761 82.4588 19.2322 59.7833 38.5 38.4405C55.6738 19.4171 75.003 0.479339 100.582 0.00976744Z"
        );
      }

      75% {
        d: path(
          "M98.7161 1.04016C126.11 5.12979 138.9 33.3688 156.822 54.4576C176.011 77.0369 206.854 95.2236 203.788 124.679C200.496 156.306 172.8 181.702 142.546 191.616C115.814 200.377 90.1892 183.126 65.2771 170.07C42.0018 157.871 17.6435 145.889 8.40657 121.314C-2.49942 92.2984 -4.82148 57.9013 13.7971 33.1051C32.8973 7.66749 67.2272 -3.66087 98.7161 1.04016Z"
        );
      }

      100% {
        d: path(
          "M102.353 2.36807C131.44 -1.20598 164.947 -3.74362 184.409 18.1682C204.557 40.8526 202.655 75.5536 192.862 104.271C184.253 129.518 161.427 144.81 137.326 156.24C113.469 167.555 87.5091 174.98 62.6727 166.016C34.3669 155.799 5.17859 136.589 0.511353 106.858C-3.97697 78.2663 22.0066 56.3664 42.2064 35.6415C59.0321 18.3783 78.4277 5.30794 102.353 2.36807Z"
        );
      }
    }

    @keyframes foam6 {
      0% {
        d: path(
          "M159.595 0.657297C216.266 -5.38853 272.604 30.9898 301.293 80.2431C326.548 123.602 305.516 175.42 288.985 222.797C275.473 261.522 255.646 298.219 218.89 316.407C181.661 334.829 138.993 331.579 100.452 316.089C57.7323 298.92 12.5223 274.064 1.99541 229.237C-8.57981 184.204 25.0738 144.992 51.3303 106.91C81.5282 63.111 106.7 6.30019 159.595 0.657297Z"
        );
      }

      25% {
        d: path(
          "M177.846 0.315805C227.125 -2.83252 275.032 17.7208 307.692 54.7269C342.519 94.1883 362.605 146.384 352.295 197.98C341.665 251.18 303.287 293.48 255.02 318.321C204.925 344.103 145.79 354.473 94.8039 330.498C43.3372 306.297 6.47708 255.162 0.502262 198.64C-4.83737 148.127 33.4064 107.964 67.2764 70.0867C97.8333 35.9148 132.078 3.23987 177.846 0.315805Z"
        );
      }

      75% {
        d: path(
          "M169.392 3.34532C221.57 -2.59461 281.238 -4.91856 315.85 34.5185C351.585 75.2341 346.7 136.115 331.538 188.092C317.583 235.931 284.741 275.479 239.455 296.409C195.053 316.93 144.568 315.167 99.9457 295.128C53.667 274.346 9.98727 239.368 1.27947 189.452C-7.07273 141.575 26.9733 99.7805 59.5718 63.6928C89.0152 31.0977 125.714 8.31753 169.392 3.34532Z"
        );
      }

      100% {
        d: path(
          "M159.595 0.657297C216.266 -5.38853 272.604 30.9898 301.293 80.2431C326.548 123.602 305.516 175.42 288.985 222.797C275.473 261.522 255.646 298.219 218.89 316.407C181.661 334.829 138.993 331.579 100.452 316.089C57.7323 298.92 12.5223 274.064 1.99541 229.237C-8.57981 184.204 25.0738 144.992 51.3303 106.91C81.5282 63.111 106.7 6.30019 159.595 0.657297Z"
        );
      }
    }
  }

  .journey_slide {
    display: flex;
    gap: 15px;
    overflow-x: hidden;

    img {
      width: 20%;
    }

    @include mobile() {
      overflow-x: hidden;
      margin-top: -180px;

      img {
        width: 50%;
      }
    }
  }

  @include wrapper {
    .journey_title {
      text-align: center;
      margin: 100px 0;

      h3 {
        font-size: 18px;
        margin-top: 10px;
      }
    }

    .journey_info {
      margin-bottom: 20px;

      @include mobile() {
        padding-left: 20px;
        margin: 0;
      }
    }

    .journey_intro {
      margin-bottom: 100px;

      ul {
        li {
          position: relative;
          display: flex;

          &::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 2%;
            background-color: map-get($color, bgc2);
          }

          &:last-child::after {
            position: absolute;
            content: "";
            width: 100%;
            height: 2%;
            background-color: map-get($color, bgc2);
            bottom: 0;
          }

          .intro_img {
            padding: 30px 30px 30px 0;
            // width: 20%;
          }

          .journey_intro_content {
            align-self: center;

            .journey_intro_main {
              position: relative;
              display: flex;
              flex-wrap: wrap;
              gap: 15px;

              &::after {
                position: absolute;
                content: "";
                width: 100%;
                bottom: 70%;
                border: 1px dashed map-get($color, text);
              }

              p {
                margin-top: 40px;
              }
            }

            .journey_intor_icon {
              display: flex;
              margin-top: 40px;
              gap: 30px;
              align-items: center;

              i {
                display: flex;
                font-size: 20px;
                gap: 8px;

                p {
                  line-height: 1;
                }
              }
              .btn {
                margin-left: auto;

                i {
                  font-size: 15px;
                  display: inline-block;
                }
              }
            }
          }

          @include mobile() {
            flex-direction: column;
            padding: 20px;

            &::before {
              height: 1%;
              width: 90%;
            }

            &:last-child::after {
              height: 1%;
              width: 90%;
            }

            .lightbox {
              //   margin: 20px 0 0 100px;
              .intro_img {
                display: none;
              }
            }
            .journey_intro_content {
              order: 0;
              margin-top: 40px;

              .journey_intor_icon {
                justify-content: flex-end;
              }
            }
          }
        }
      }
    }
  }
  //燈箱
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: black;
  }
  .light_box {
    @include mobile() {
      padding-top: 50px;
      background: #f4f5f7;
    }
    .lightbox_overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      // RWD
      @include mobile() {
        display: block;
        position: static;
        background-color: transparent;
      }

      @include wrapper {
        overflow-y: scroll;
        overflow-x: hidden;
        height: 630px;

        @include mobile() {
          height: auto;
          overflow: initial;
        }

        // 內容設定
        .lightbox_content {
          padding: 70px 85px 55px;
          margin: 50px 0;
          background: #fff;
          border-radius: 28px;
          position: relative;
          // RWD
          @include mobile() {
            padding: 0;
            margin: 0;
            position: static;
            background: #f4f5f7;
          }

          // 區塊
          .lightbox_block {
            // RWD
            @include mobile() {
              border: 1px solid #ddd;
              border-radius: 10px;
              box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
              margin-bottom: 15px;
            }

            h4 {
              margin-bottom: 25px;
              font-weight: bold;
              line-height: 1.6;
              // RWD
              @include mobile() {
                margin: 0;
                padding: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                &.accordion_header::after {
                  content: "\002B";
                  font-size: 24px;
                  font-weight: bold;
                  color: #666;
                  transition: transform 0.3s ease;
                }
                &.active {
                  background-color: lightseagreen;
                }
                &.active::after {
                  transform: rotate(45deg);
                }
              }
            }

            // 內文主排版
            ul {
              display: flex;
              // RWD
              @include mobile() {
                flex-direction: column;
              }

              li {
                padding: 0 0 50px 0;
                // RWD
                @include mobile() {
                  padding: 0;
                }
                &:last-child {
                  margin: 30px 0 0 45px;
                  // RWD
                  @include mobile() {
                    margin: 20px;
                  }
                  p {
                    font-size: 1.4rem;
                    line-height: 1.8;
                    // RWD
                    @include mobile() {
                      margin: 10px;
                    }
                  }
                }
                img {
                  // RWD
                  @include mobile() {
                    margin: auto;
                    display: block;
                  }
                }
              }

              // 內文二
              &:last-child {
                padding-top: 60px;
                border-top: 1px solid #546a88;
                // RWD
                @include mobile() {
                  padding-top: 40px;
                  display: none;
                }

                a {
                  margin: 71px 0 0 287px;
                  // RWD
                  @include mobile() {
                    margin: 0;
                    display: block;
                    width: fit-content;
                  }
                }
              }
            }
          }
        }
      }

      // 關閉按鈕
      .lightbox_close {
        position: fixed;
        top: 27px;
        right: 133px;
        font-size: 3.6rem;
        color: #003366;
        width: 60px;
        height: 60px;
        line-height: 53px;
        display: block;
        text-align: center;
        border-radius: 50%;
        background: #fff;
        box-shadow: 0px 0px 5px #000;
        cursor: pointer;
        @include mobile() {
          display: none;
        }
      }
    }
  }
}
</style>
