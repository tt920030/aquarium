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
          <a href=""><img src="@/img/floor_p1.jpg" alt="" /> </a>
          <h4>樓層介紹</h4>
        </li>
        <li>
          <a href=""><img src="@/img/floor_p2_active.jpg" alt="" /> </a>
          <h4 class="h4_active">館內活動</h4>
        </li>
        <li>
          <a href=""><img src="@/img/floor_p3.jpg" alt="" /> </a>
          <h4>常見問題</h4>
        </li>
        <li>
          <a href=""><img src="@/img/floor_p4.jpg" alt="" /> </a>
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
                <img class="intro_img" src="@/img/park_activity1.jpg" alt="" />
              </a>

              <div class="journey_intro_content">
                <div class="journey_intro_main">
                  <img src="@/img/journey_intro_icon.svg" alt="" />
                  <h4>海底隧道漫步</h4>
                  <p>
                    在這種活動中，人們可以漫步在海生館的隧道，觀察各種海洋生物在身旁游泳的情景，感受置身於海底世界的奇妙體驗。透過這種活動，人們可以近距離觀察各種海洋生物，包括鯊魚、海龜、海星、珊瑚等，並且學習到關於海洋生物和海洋生態系統的知識。
                  </p>
                </div>

                <div class="journey_intor_icon">
                  <a class="btn">了解更多</a>
                </div>
              </div>
            </li>
            <li id="journey2">
              <a href="" class="lightbox">
                <img class="intro_img" src="@/img/park_activity2.jpg" alt="" />
              </a>
              <div class="journey_intro_content">
                <div class="journey_intro_main">
                  <img src="@/img/journey_intro_icon.svg" alt="" />
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
                <img class="intro_img" src="@/img/park_activity3.jpg" alt="" />
              </a>
              <div class="journey_intro_content">
                <div class="journey_intro_main">
                  <img src="@/img/journey_intro_icon.svg" alt="" />
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
                <img class="intro_img" src="@/img/park_activity4.jpg" alt="" />
              </a>
              <div class="journey_intro_content">
                <div class="journey_intro_main">
                  <img src="@/img/journey_intro_icon.svg" alt="" />
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
                <img class="intro_img" src="@/img/park_activity5.jpg" alt="" />
              </a>
              <div class="journey_intro_content">
                <div class="journey_intro_main">
                  <img src="@/img/journey_intro_icon.svg" alt="" />
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
                    <img src="@/img/park_activity1.jpg" />
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
                  <li><img src="@/img/park_activity2.jpg" alt="" /></li>
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
                  <li><img src="@/img/park_activity3.jpg" alt="" /></li>
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
                  <li><img src="@/img/park_activity4.jpg" alt="" /></li>
                  <li>
                    <h4>感受海星神秘的觸感吧!</h4>
                    <p>
                      觸摸海星活動是一種與海洋生物近距離互動的體驗，海星是一種生活在海洋中的奇特生物，牠們的身體扁平，呈星形，有著吸盤狀的足，能夠吸附在海洋中的礁石或其他物體上。通過觸摸海星活動，人們可以近距離觀察和感受這種奇特生物的外形和觸感，以及了解更多海星的生態和習性。
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
                  <li><img src="@/img/park_activity5.jpg" alt="" /></li>
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
      background-image: url("@/img/guided_tour_banner.jpg");
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
          background-image: url("@/img/floor_nav_index.jpg");
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
  }

  @include wrapper {
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
