<template>
  <div class="journey">
    <!-- 開場介紹圖 -->
    <floor-banner></floor-banner>
    <!-- 樓層指南選單 -->
    <floor-nav :navData="navData" :pageNow="pageNow"></floor-nav>
    <!-- 海生館活動區塊 -->
    <activity-section
      @openBox="openLightbox"
      :sectionData="sectionData"
    ></activity-section>
    <!-- 燈箱 -->
    <Lightbox
      v-if="lightboxIsOpen"
      :lightboxData="lightboxData"
      @closeBox="closeLightbox"
    ></Lightbox>
    <!-- RWD手風琴 -->
    <Acoordion :accordionData="lightboxData1"></Acoordion>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import FloorBanner from "/src/components/FloorCommon/FloorBanner.vue";
import FloorNav from "/src/components/FloorCommon/FloorNav.vue";
import ActivitySection from "/src/components/Park/ActivitySection.vue";
import Lightbox from "/src/components/FloorCommon/Lightbox.vue";
import Acoordion from "/src/components/FloorCommon/Accordion.vue";

// 傳遞屬性給FloorNav
const navData = reactive([
  {
    to: "/floor_introduction",
    src: "/src/img/floor_p1.svg",
    title: "樓層介紹",
  },
  {
    to: "/park_activity",
    src: "/src/img/floor_p2_active.svg",
    title: "館內活動",
  },
  { to: "/faq", src: "/src/img/floor_p3.svg", title: "常見問題" },
  { to: "/visit_information", src: "/src/img/floor_p4.svg", title: "參觀資訊" },
]);
const pageNow = ref("館內活動");

// 傳遞屬性給ActivityData
const sectionData = reactive([
  {
    id: "journey1",
    src: "/src/img/park_activity1.jpg",
    h4: "海底隧道漫步",
    p: "導覽員會帶領參觀者進入展館或戶外區域，介紹不同種類的海洋生物、牠們的生活習性、食物鏈、海洋保育等相關知識。這種活動讓人們能夠深入了解海洋世界，了解海洋生物的生存環境和保育現狀，提高對保護海洋環境的意識。",
    to: "/visit_information",
    iShow: "true",
    ip1: "兩天一夜",
    ip2: "台北海生館",
    ip3: "$2680/人",
  },
  {
    id: "journey2",
    src: "/src/img/park_activity2.jpg",
    h4: "海洋生物導覽",
    p: "導覽員會帶領參觀者進入展館或戶外區域，介紹不同種類的海洋生物、牠們的生活習性、食物鏈、海洋保育等相關知識。這種活動讓人們能夠深入了解海洋世界，了解海洋生物的生存環境和保育現狀，提高對保護海洋環境的意識。",
    to: "/visit_information",
  },
  {
    id: "journey3",
    src: "/src/img/park_activity3.jpg",
    h4: "海獅秀",
    p: "在這個活動中，訓練師會訓練海獅完成各種表演，例如跳躍、翻滾、平衡、接球等，以展示海獅的智慧和技能。這種活動不僅讓觀眾欣賞到海獅的可愛和聰明，還可以提高人們對海洋動物的認識和對保護海洋環境的意識。",
    to: "/visit_information",
  },
  {
    id: "journey4",
    src: "/src/img/park_activity4.jpg",
    h4: "海星觸摸",
    p: "觸摸海星活動是一種與海洋生物近距離互動的體驗，海星是一種生活在海洋中的奇特生物，牠們的身體扁平，呈星形，有著吸盤狀的足，能夠吸附在海洋中的礁石或其他物體上。通過觸摸海星活動，人們可以近距離觀察和感受這種奇特生物的外形和觸感，以及了解更多海星的生態和習性。",
    to: "/visit_information",
  },
  {
    id: "journey5",
    src: "/src/img/park_activity5.jpg",
    h4: "餵食海龜",
    p: "在海生館，你可以參加「餵食海龜體驗」活動，與海洋生物近距離互動。在活動中，你將有機會體驗親手餵食海龜的樂趣和刺激。你可以觀察這些可愛的海龜在水中游動，透過這個活動，你可以了解到關於海龜的一些基本知識。",
    to: "/visit_information",
  },
]);

// 決定燈箱是否開啟
const lightboxIsOpen = ref(null);
const lightboxData = reactive([]);
// 這個是要放點擊的那個資料嗎？
const lightboxData1 = reactive([
  {
    class: "journey1",
    title: "海底隧道漫步",
    src: "/src/img/park_activity1.jpg",
    h4: "由專業的嚮導為您解說海底世界",
    p: "導覽員會帶領參觀者進入展館或戶外區域，介紹不同種類的海洋生物、牠們的生活習性、食物鏈、海洋保育等相關知識。這種活動讓人們能夠深入了解海洋世界，了解海洋生物的生存環境和保育現狀，提高對保護海洋環境的意識。",
    section: true,
  },
  {
    class: "journey2",
    title: "海洋生物導覽",
    src: "/src/img/park_activity2.jpg",
    h4: "由專業的嚮導為您解說海底世界",
    p: "導覽員會帶領參觀者進入展館或戶外區域，介紹不同種類的海洋生物、牠們的生活習性、食物鏈、海洋保育等相關知識。這種活動讓人們能夠深入了解海洋世界，了解海洋生物的生存環境和保育現狀，提高對保護海洋環境的意識。",
    section: true,
  },
  {
    class: "journey3",
    title: "海獅秀",
    src: "/src/img/park_activity3.jpg",
    h4: "快來欣賞可愛海獅的表演吧!<",
    p: "在這個活動中，訓練師會訓練海獅完成各種表演，例如跳躍、翻滾、平衡、接球等，以展示海獅的智慧和技能。這種活動不僅讓觀眾欣賞到海獅的可愛和聰明，還可以提高人們對海洋動物的認識和對保護海洋環境的意識。",
    section: true,
  },
  {
    class: "journey4",
    title: "海星觸摸",
    src: "/src/img/park_activity4.jpg",
    h4: "感受海星神秘的觸感吧!",
    p: "導覽員會帶領參觀者進入展館或戶外區域，介紹不同種類的海洋生物、牠們的生活習性、食物鏈、海洋保育等相關知識。這種活動讓人們能夠深入了解海洋世界，了解海洋生物的生存環境和保育現狀，提高對保護海洋環境的意識。",
    section: true,
  },
  {
    class: "journey5",
    title: "餵食海龜",
    src: "/src/img/park_activity5.jpg",
    h4: "快來親自體會餵食海龜的樂趣吧!",
    p: "在海生館，你可以參加「餵食海龜體驗」活動，與海洋生物近距離互動。在活動中，你將有機會體驗親手餵食海龜的樂趣和刺激。你可以觀察這些可愛的海龜在水中游動，透過這個活動，你可以了解到關於海龜的一些基本知識，例如牠們的營養需求和生態環境。此外，在活動中，專業的飼養員會分享更多有關海龜的生態和保育知識，讓你更深入了解海洋生物的重要性和生態價值。",
    section: true,
  },
]);
// 決定傳甚麼值給燈箱
const openLightbox = (i) => {
  lightboxIsOpen.value = true;
  lightboxData.value = lightboxData1.filter((item) => item.class === i);
};

// 關閉燈箱
const closeLightbox = () => {
  lightboxIsOpen.value = false;
};
</script>

<style lang="scss" scoped>
.journey {
  // footer調整
  margin-bottom: 300px;
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
