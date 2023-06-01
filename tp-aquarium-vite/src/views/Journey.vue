<template>
  <div class="journey">
    <main>
      <!-- journer banner -->
      <div class="journey_banner_content">
        <h2>台北海生館</h2>
        <h1>行程介紹</h1>
        <h4>
          遊海洋 、探生物<br />都在台北海生館<br />觀賞海底奇景<br />體驗海洋生態
        </h4>
      </div>

      <div class="journey_banner">
        <div class="pic_1"></div>
        <div class="pic_2"></div>
        <div class="pic_3"></div>
        <div class="pic_4"></div>
        <div class="pic_5"></div>
        <div class="pic_6"></div>
      </div>

      <svg
        width="0px"
        viewPort="0 0 1920 1920"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id="foam_1">
          <path
            d="M132.809 0C192.343 0 222 64.1411 222 123.716C222 178.216 187.272 231 132.809 231C66.1537 231 0 190.417 0 123.716C0 52.8075 61.9501 0 132.809 0Z"
          />
        </clipPath>
        <clipPath id="foam_2">
          <path
            d="M94.4387 0.00158853C139.429 0.302741 165.195 45.37 179.01 88.3187C192.706 130.9 196.856 181.185 161.489 208.451C123.798 237.508 70.2004 230.421 32.7042 201.112C-1.19687 174.613 -6.32664 128.365 6.321 87.1628C19.742 43.4417 48.8327 -0.303687 94.4387 0.00158853Z"
          />
        </clipPath>
        <clipPath id="foam_3">
          <path
            d="M222.317 0.364088C292.665 3.75065 346.668 53.5755 371.904 119.356C403.146 200.793 425.151 299.291 358.628 355.679C278.657 423.466 158.528 434.202 74.6374 371.334C-6.21459 310.744 -16.6558 196.342 20.7218 102.45C51.5311 25.0579 139.146 -3.63985 222.317 0.364088Z"
          />
        </clipPath>
        <clipPath id="foam_4">
          <path
            d="M98.2735 5.38836C133.152 0.467112 174.935 -8.19893 197.892 18.238C221.199 45.0769 205.114 84.6553 197.039 119.123C189.016 153.366 184.839 193.638 153.097 209.438C121.011 225.409 83.1359 209.459 52.3574 191.141C25.4821 175.146 5.67021 149.478 0.842331 118.822C-3.61051 90.5471 10.1525 63.8917 28.8834 42.0844C46.7506 21.2826 70.9558 9.24277 98.2735 5.38836Z"
          />
        </clipPath>
        <clipPath id="foam_5">
          <path
            d="M101.075 3.0382C126.087 4.79428 151.876 6.41364 169.288 24.4786C188.779 44.7001 202.401 73.3103 194.914 100.395C187.679 126.565 159.551 137.973 134.829 149.132C111.229 159.785 86.1613 169.437 61.8818 160.444C34.7774 150.404 12.7773 128.764 4.77162 100.959C-3.79138 71.2178 -1.97827 36.0303 19.7112 13.9767C39.9125 -6.56376 72.3556 1.02177 101.075 3.0382Z"
          />
        </clipPath>
        <clipPath id="foam_6">
          <path
            d="M195.383 2.17794C241.131 7.22373 281.359 31.5506 308.462 68.6958C334.026 103.732 338.895 147.107 332.406 189.968C325.066 238.457 314.7 293.157 271.073 315.679C226.601 338.637 175.839 314.385 129.901 294.512C80.3869 273.091 24.2279 252.773 7.36071 201.591C-10.9039 146.168 5.88683 82.2226 45.9414 39.7413C82.9874 0.450862 141.665 -3.74675 195.383 2.17794Z"
          />
        </clipPath>
      </svg>

      <!-- journey slider -->
      <div class="journey_slider">
        <div class="journey_slider_box">
          <div class="journey_slider_list">
            <img src="../img/journey_slide1.jpg" alt="" />
            <img src="../img/journey_slide2.jpg" alt="" />
            <img src="../img/journey_slide3.jpg" alt="" />
            <img src="../img/journey_slide4.jpg" alt="" />
            <img src="../img/journey_slide5.jpg" alt="" />
          </div>
        </div>
      </div>

      <section class="wrapper">
        <!-- journey title -->
        <div class="journey_title">
          <h2>活動行程</h2>
          <h3>Activities</h3>
        </div>

        <!-- journey information -->
        <h3 class="journey_info">台北海生館活動</h3>

        <div class="journey_intro">
          <ul>
            <li id="journey1">
              <a href="" class="lightbox">
                <img class="intro_img" src="@/img/journey_intro1.jpg" alt="" />
              </a>

              <div class="journey_intro_content">
                <div class="journey_intro_main">
                  <img src="@/img/journey_intro_icon.svg" alt="" />
                  <h4>夜宿海生館-兩天一夜</h4>
                  <p>
                    夜宿海生館是一個兩天一夜的活動，將帶您前往探索台灣水域區的豐富生態和文化。<br />進行夜間探索、聆聽海洋生物的聲音，更有機會觀察到燈籠魚、海蜇等特殊生物，兩天一夜的行程充滿探索和學習的樂趣，讓您深入了解台灣水域區的獨特之處。
                  </p>
                </div>

                <div class="journey_intor_icon">
                  <i class="bi bi-clock"><p>兩天一夜</p></i>
                  <i class="bi bi-geo-alt-fill"><p>台北海生館</p></i>
                  <i class="bi bi-coin"><p>$2680/人</p></i>
                  <a class="btn">加入購物車</a>
                </div>
              </div>
            </li>
            <li id="journey2">
              <a href="" class="lightbox">
                <img class="intro_img" src="@/img/journey_intro2.jpg" alt="" />
              </a>
              <div class="journey_intro_content">
                <div class="journey_intro_main">
                  <img src="@/img/journey_intro_icon.svg" alt="" />
                  <h4>水中留影</h4>
                  <p>
                    水中拍照是一種非常有趣的活動，可以在游泳池或海灘等水域進行。<br />通過使用專業的防水相機或手機殼，您可以在水中自由拍攝照片和影片，捕捉美麗的海底風景、游泳的動作以及快樂的時刻技巧，如水滴拍攝、水面倒影等，以獲得令人驚嘆的效果。
                  </p>
                </div>

                <div class="journey_intor_icon">
                  <i class="bi bi-clock"><p>25分鐘</p></i>
                  <i class="bi bi-geo-alt-fill"><p>台北海生館</p></i>
                  <i class="bi bi-coin"><p>$300/人</p></i>
                  <a class="btn">加入購物車</a>
                </div>
              </div>
            </li>
            <li id="journey3">
              <a href="" class="lightbox">
                <img class="intro_img" src="@/img/journey_banner1.jpg" alt="" />
              </a>
              <div class="journey_intro_content">
                <div class="journey_intro_main">
                  <img src="@/img/journey_intro_icon.svg" alt="" />
                  <h4>海生館專人導覽(預約制)</h4>
                  <p>
                    海生館專人導覽，讓你更深入了解海洋生物的奧秘！<br />透過預約專人導覽，你可以在專業的生物解說帶領下，深入了解各種海洋生物的特性及生態，更進一步瞭解大自然的神奇。
                  </p>
                </div>

                <div class="journey_intor_icon">
                  <i class="bi bi-clock"><p>120分鐘</p></i>
                  <i class="bi bi-geo-alt-fill"><p>台北海生館</p></i>
                  <i class="bi bi-coin"><p>$1200/時</p></i>
                  <a class="btn">加入購物車</a>
                </div>
              </div>
            </li>
            <li id="journey4">
              <a href="" class="lightbox">
                <img class="intro_img" src="@/img/journey_intro4.jpg" alt="" />
              </a>
              <div class="journey_intro_content">
                <div class="journey_intro_main">
                  <img src="@/img/journey_intro_icon.svg" alt="" />
                  <h4>海洋跳躍者：海豚秀</h4>
                  <p>
                    來到海生館，別錯過與海豚互動的機會！海豚秀是海生館最受歡迎的活動之一，每天都有多場表演，讓你可以近距離觀察這些聰明、可愛的海洋哺乳動物。<br />在表演中，你可以看到海豚們跳躍、翻轉、灑水等技巧動作，展現出它們非凡的運動天賦。
                  </p>
                </div>

                <div class="journey_intor_icon">
                  <i class="bi bi-clock"><p>30分鐘</p></i>
                  <i class="bi bi-geo-alt-fill"><p>台北海生館</p></i>
                  <i class="bi bi-coin"><p>$450/人</p></i>
                  <a class="btn">加入購物車</a>
                </div>
              </div>
            </li>
            <li id="journey5">
              <a href="" class="lightbox">
                <img class="intro_img" src="@/img/journey_intro5.jpg" alt="" />
              </a>
              <div class="journey_intro_content">
                <div class="journey_intro_main">
                  <img src="@/img/journey_intro_icon.svg" alt="" />
                  <h4>磷蝦小管家：餵魚體驗活動</h4>
                  <p>
                    將穿上特殊的衣物，跟隨專業的飼養員進入水族館中的觀賞魚缸，親手投放食物給魚群。<br />深入瞭解飼養員們餵養觀賞魚的技巧和磷蝦的生態知識，同時體驗到成為一名飼養員的感覺。
                  </p>
                </div>

                <div class="journey_intor_icon">
                  <i class="bi bi-clock"><p>30分鐘</p></i>
                  <i class="bi bi-geo-alt-fill"><p>台北海生館</p></i>
                  <i class="bi bi-coin"><p>$500/人</p></i>
                  <a class="btn">加入購物車</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <!-- 燈箱 -->
      <section class="light_box">
        <!-- 夜宿海生館 -->
        <div class="lightbox_overlay journey1">
          <div class="wrapper">
            <div class="lightbox_content">
              <!-- 區塊1 -->
              <div class="lightbox_block">
                <h4 class="accordion_header">夜宿海生館</h4>
                <ul>
                  <li>
                    <img src="@/img/journey_intro1.jpg" />
                  </li>
                  <li>
                    <h4>享受夜晚海生館的浪漫吧!</h4>
                    <p>
                      夜宿海生館是一個兩天一夜的活動，將帶您前往探索台灣水域區的豐富生態和文化。第一天，您將前往海洋博物館了解海洋文化和保育知識，隨後乘船前往藍洞探索秘境，觀察熱帶魚和珊瑚礁。
                      晚上，您將入住海生館，進行夜間探索、聆聽海洋生物的聲音，更有機會觀察到燈籠魚、海蜇等特殊生物。第二天，您將前往海洋保護區進行浮潛活動，近距離觀察海洋生態，並且參與海洋保
                      育行動。這個兩天一夜的行程充滿探索和學習的樂趣，讓您深入了解台灣水域區的獨特之處。
                    </p>
                    <RouterLink to="/overnight" class="btn" @click="rescroll"
                      >了解更多</RouterLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 關閉按鈕 -->
          <div class="lightbox_close">x</div>
        </div>

        <!-- 水中留影 -->
        <div class="lightbox_overlay journey2">
          <div class="wrapper">
            <div class="lightbox_content">
              <!-- 區塊1 -->
              <div class="lightbox_block">
                <h4 class="accordion_header">鯨鯊</h4>
                <ul>
                  <li><img src="@/img/journey_intro2.jpg" alt="" /></li>
                  <li>
                    <h4>快來體驗水中拍照的快感吧!</h4>
                    <p>
                      水中拍照是一種非常有趣的活動，可以在游泳池或海灘等水域進行。通過使用專業的防水相機或手機殼，您可以在水中自由拍攝照片和影片，捕捉美麗的海底風景、游泳的動作以及快樂的時刻。此外，您也可以嘗試各種有趣的拍攝
                      技巧，如水滴拍攝、水面倒影等，以獲得令人驚嘆的效果。無論您是單獨一人還是與朋友一起參與，水中拍攝都是一個令人愉悅和有意義的活動。記錄下美好的回憶
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 關閉按鈕 -->
          <div class="lightbox_close">x</div>
        </div>

        <!-- 海生館專人導覽(預約制) -->
        <div class="lightbox_overlay journey3">
          <div class="wrapper">
            <div class="lightbox_content">
              <!-- 區塊1 -->
              <div class="lightbox_block">
                <h4 class="accordion_header">海生館專人導覽(預約制)</h4>
                <ul>
                  <li><img src="@/img/journey_intro3.jpg" alt="" /></li>
                  <li>
                    <h4>由最專業的嚮導帶你悠遊海底世界!</h4>
                    <p>
                      海生館專人導覽，讓你更深入了解海洋生物的奧秘！透過預約專人導覽，你可以在專業的生物解說帶領下，深入了解各種海洋生物的特性及生態，更進一步瞭解大自然的神奇。導覽行程包括全區各展區的解說，包括熱帶雨林區、北極熊區、企鵝區、珊瑚區等等，每個展區都有不同的生物特性及環境特點，讓你全方位地探索海洋世界。而導覽行程中，也會安排互動體驗活動，如觸摸海星、跟蹤魟魚等等，讓你與海洋生物更親近。除此之外，專人導覽還可以針對你的需求，量身打造行程，讓你有更完美的旅遊體驗。海生館專人導覽，是一個讓你可以深入探索海洋生物、全面了解大自然的好去處。
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 關閉按鈕 -->
          <div class="lightbox_close">x</div>
        </div>

        <!-- 海洋跳躍者：海豚秀 -->
        <div class="lightbox_overlay journey4">
          <div class="wrapper">
            <div class="lightbox_content">
              <!-- 區塊1 -->
              <div class="lightbox_block">
                <h4 class="accordion_header">海洋跳躍者：海豚秀</h4>
                <ul>
                  <li><img src="@/img/journey_intro4.jpg" alt="" /></li>
                  <li>
                    <h4>一同來欣賞"海洋天使"的表演吧!</h4>
                    <p>
                      來到海生館，別錯過與海豚互動的機會！海豚秀是海生館最受歡迎的活動之一，每天都有多場表演，讓你可以近距離觀察這些聰明、可愛的海洋哺乳動物。在表演中，你可以看到海豚們跳躍、翻轉、灑水等技巧動作，展現
                      出它們非凡的運動天賦。而且，在表演中也會有互動環節，讓你與海豚一起參與遊戲和互動，讓整個表演更加生動有趣。此外，表演前和表演後，你還可以在觀賞台附近的區域跟海豚互動、拍照留念，完美地記錄下這難忘
                      的時刻。海豚秀，是一個讓你可以近距離接觸海豚、體驗其獨特魅力的好去處。
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 關閉按鈕 -->
          <div class="lightbox_close">x</div>
        </div>

        <!-- 磷蝦小管家：餵魚體驗活動 -->
        <div class="lightbox_overlay journey5">
          <div class="wrapper">
            <div class="lightbox_content">
              <!-- 區塊1 -->
              <div class="lightbox_block">
                <h4 class="accordion_header">磷蝦小管家：餵魚體驗活動</h4>
                <ul>
                  <li>
                    <img src="@/img/journey_intro5.jpg" alt="" />
                  </li>
                  <li>
                    <h4>快來親自體會磷蝦餵魚的樂趣吧!</h4>
                    <p>
                      在海生館，你可以參加「磷蝦小管家」活動，親身體驗磷蝦餵魚的樂趣！在活動中，你將穿上特殊的衣物，跟隨專業的飼養員進入水族館中的觀賞魚缸，親手投放食物給魚群。當磷蝦在餌料中出現時，你會感到一陣刺鼻的氣味，但
                      這不影響你享受這個與魚群互動的體驗。在活動中，你可以深入瞭解飼養員們餵養觀賞魚的技巧和磷蝦的生態知識，同時體驗到成為一名飼養員的感覺。
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

      <RouterLink to="/ticket">aaaaaa</RouterLink>
    </main>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import Header from "/src/components/Header.vue";
import Footer from "/src/components/Footer.vue";
import "bootstrap-icons/font/bootstrap-icons.css";
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
  });
  // $(".accordion_header").first().click();
});
//滾輪復原
const rescroll = function () {
  document.querySelector("body").style.overflow = "visible";
  window.scrollTo(0, 0);
};
// index_ad 跑馬燈
window.onload = function () {
  let box = document.querySelector(".journey_slider_box");
  let list = document.querySelector(".journey_slider_list");

  // 複製一份讓中間不間斷
  list.innerHTML += list.innerHTML;

  let left = 0;
  let time = 0;

  move();

  function move() {
    clearInterval(time);
    time = setInterval(() => {
      left -= 2;

      if (left === -(324 + 326 + 3 * 390 + 5 * 20)) {
        left = 0;
      }

      list.style.left = left + "px";
    }, 20);
  }

  box.addEventListener("mouseenter", () => {
    clearInterval(time);
  });

  box.addEventListener("mouseleave", () => {
    move();
  });
};
</script>

<style lang="scss" scoped>
.journey {
  main {
    .journey_banner_content {
      margin-top: 200px;

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
          top: 30%;
          right: 7%;
        }

        h1 {
          top: 30%;
          right: 15%;
        }

        h4 {
          top: 35%;
          right: 30%;
        }
      }
    }

    .journey_banner {
      position: relative;
      padding-bottom: 420px;

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
        padding-bottom: 460px;
        overflow-x: hidden;
        margin-top: -115px;
        .pic_1 {
          overflow-x: hidden;
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

  .journey_slider {
    display: flex;
    justify-content: center;
    align-items: center;
    // margin-top: 420px;
    .journey_slider_box {
      position: relative;
      width: 100%;
      height: 200px;
      overflow: hidden;

      .journey_slider_list {
        position: absolute;
        display: flex;
        gap: 20px;
        left: 0;
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
      margin-bottom: 420px;

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
                margin-top: 20px;
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
            display: none;
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
              order: 1;
              align-self: end;
              margin: -170px 0 0 180px;

              .intro_img {
                width: 85%;
                padding: 0;
              }
            }
            .journey_intro_content {
              order: 0;
              margin-top: 40px;

              .journey_intor_icon {
                flex-direction: column;
                align-items: start;
              }

              .btn {
                margin-right: 65%;
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
      padding: 120px 0;
      background: #f4f5f7;
      margin-bottom: 300px;
      margin-top: -500px;
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
                    margin-left: auto;
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
