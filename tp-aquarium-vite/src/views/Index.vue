<template>
  <body class="index">
    <div class="index_logo_video">
      <video src="@/img/index_videosea.mp4" id="video_sea" width="100%" autoplay muted loop></video>
      <div class="index_logo_text">
        <h4>探索海洋奧秘</h4>
        <p>in Taipei Town</p>
        <img src="@/img/index_logo.svg" alt=""/>
      </div>
    </div>

    <div class="wrapper">
      <!-- 海生館介紹 -->
      <div class="intro_text">
        <h4>探索海洋奧秘展開驚奇之旅</h4>
        <h1>Taipei Aquarium</h1>
        <p>
          位於台灣北部的台北海生館是一個充滿驚奇和探索的地方，讓您感受到海洋的無限魅力。這裡是一個集科學、教育和娛樂於一體的海洋主題公園，展示了豐富多彩的海洋生物和海洋文化。台北海生館是一個適合全家大小和各種興趣愛好者的地方，無論您是海洋愛好者，還是想探索科學和文化的人，都能在這裡找到樂趣和啟發。
        </p>
      </div>
    </div>

    <!-- 連結到園區介紹按鈕 -->
    <div class="index_park_button_all">
      <ul>
        <li v-for="button in park_buttons" :key="button.eName">
          <RouterLink to="/floor_Introduction" ref="">
            <div class="house_icon">
              <img :src="button.src1" alt="" />
              <img :class="button.class" :src="button.src2" alt="" />
              <p>{{ button.cName }}</p>
            </div>
            <img :src="button.src3" alt="" />
          </RouterLink>
        </li>
      </ul>
    </div>

    <div class="index_bgc">
      <main class="wrapper">
        <!-- 活動行程 -->
        <div class="index_journey">
          <h2>活動行程</h2>
          <ul>
            <li v-for="index_journey in journeyPage" :key="index_journey.id">
              <div class="index_journey_content">
                <RouterLink to="/journey" href="">
                  <img :src="index_journey.src" alt="" />
                  <div class="index_journey_content_sub">
                    <h4>{{ index_journey.title }}</h4>
                    <p>{{ index_journey.content }}</p>
                  </div>
                </RouterLink>
              </div>
            </li>
          </ul>
        </div>

        <!-- 了解更多button -->
        <div class="index_button">
          <RouterLink to="/journey" class="btn">了解更多<i class="bi bi-chevron-right"></i></RouterLink>
        </div>
      </main>
    </div>

    <main class="index_news">
      <!-- 最新消息 -->
      <div class="wrapper">
        <h2>最新消息</h2>
          <ul>
            <swiper 
                    :slides-per-group="2"
                    :slides-per-view="2"
                    :space-between="20">
              <swiper-slide v-for="news in newsPage" :key="news.id">  
                <RouterLink to="/news/news_page">
                  <li>
                    <img :src="news.src" alt="" />
                    <div class="index_news_content">
                      <h3>{{ news.month }}</h3>
                      <h4>{{ news.title }}</h4>
                      <p>{{ news.content }}</p>
                    </div>
                  </li>
                </RouterLink>
              </swiper-slide>
            </swiper>
          </ul>

        <!-- 了解更多button -->
        <div class="index_button">
          <RouterLink to="/news" class="btn">了解更多<i class="bi bi-chevron-right"></i></RouterLink>
        </div>
      </div>
    </main>

    <!-- index_ad -->
    <div class="index_ad">
      <div class="index_ad_box">
        <div class="index_ad_list">
          <img src="@/img/index_logo1.jpg" alt="" />
          <img src="@/img/index_logo2.jpg" alt="" />
          <img src="@/img/index_logo3.jpg" alt="" />
          <img src="@/img/index_logo4.jpg" alt="" />
          <img src="@/img/index_logo5.jpg" alt="" />
          <img src="@/img/index_logo6.jpg" alt="" />
        </div>
      </div>
    </div>
  </body>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Virtual } from "swiper";
import "swiper/css";


onMounted(() => {
  videoNoStop();
  move();
});

// index video
const videoNoStop = function () {
  let video_sea = document.getElementById("video_sea");

  video_sea.addEventListener("timeupdate", function () {
    if (video_sea.currentTime >= video_sea.duration - 0.15) {
      video_sea.currentTime = 0.15;
    }
  });
};

const park_buttons = reactive([
  {
    a: "",
    src1: "/src/img/index_penguin.svg",
    class: "penguin_blue",
    src2: "/src/img/index_penguin_blue-01.svg",
    cName: "企鵝館",
    eName: "Penguin House",
    src3: "/src/img/index_button1.jpg",
  },
  {
    a: "",
    src1: "/src/img/index_jellyfish.svg",
    class: "jellyfish_blue",
    src2: "/src/img/index_jellyfish_blue-01.svg",
    cName: "水母館",
    eName: "JellyFish House",
    src3: "/src/img/index_button2.jpg",
  },
  {
    a: "",
    src1: "/src/img/index_dolphin.svg",
    class: "dolphin_blue",
    src2: "/src/img/index_dolphin_blue-01.svg",
    cName: "海豚館",
    eName: "Dolphin House",
    src3: "/src/img/index_button3.jpg",
  },
  {
    a: "",
    src1: "/src/img/index_sealion.svg",
    class: "sealion_blue",
    src2: "/src/img/index_sealion_blue-01.svg",
    cName: "海獅館",
    eName: "Sea Lion House",
    src3: "/src/img/index_button4.jpg",
  },
]);

// 活動行程
const journeyPage =reactive([
  {
    id: 1,
    src: '../../public/img/index_journey1.jpg',
    title: '海洋跳躍者：海豚秀',
    content: '看到海豚們跳躍、翻轉，展現出它們非凡的運動天賦。',
  },
  {
    id: 2,
    src: '../../public/img/index_journey2.jpg',
    title: '水中留影',
    content: '在水中自由拍攝照片和影片，捕捉美麗的海底風景及快樂的時刻。',
  },
  {
    id: 3,
    src: '../../public/img/index_journey3.jpg',
    title: '磷蝦小管家：餵魚體驗活動',
    content: '跟隨專業的飼養員進入水族館中的觀賞魚缸，親手投放食物給魚群。',
  },
  {
    id: 4,
    src: '../../public/img/index_journey4.jpg',
    title: '只想和你做朋友:與水獺近距離接觸',
    content: '親手投放食物給水獺，觀察牠們的行為與習性。',
  },
]);

// 最新消息
const newsPage=reactive([
  {
    id: 1,
    src: '../../public/img/index_news1.jpg',
    month: '2023/04/17',
    title: '企鵝館迎來新成員！',
    content: '保育人員細心照顧，企鵝寶寶健康成長中！'
  },
  {
    id: 2,
    src: '../../public/img/index_news2.jpg',
    month: '2023/04/17',
    title: '台北水族館新開幕！',
    content: '各種海洋生物都在這，還有各項活動可以參與！'
  },
  {
    id: 3,
    src: '../../public/img/index_news2.jpg',
    month: '2023/04/17',
    title: '台北水族館新開幕！',
    content: '各種海洋生物都在這，還有各項活動可以參與！'
  },
]);



// index_ad 跑馬燈
const time = ref(null);
const left = ref(0);
const images = reactive([
  { id: 1, src: "../../public/img/index_logo1.jpg" },
  { id: 2, src: "../../public/img/index_logo2.jpg" },
  { id: 3, src: "../../public/img/index_logo3.jpg" },
  { id: 4, src: "../../public/img/index_logo4.jpg" },
  { id: 5, src: "../../public/img/index_logo5.jpg" },
  { id: 6, src: "../../public/img/index_logo6.jpg" },
]);

    let left = 0;
    let time;

    if (left.value === -(6 * 200 + 6 * 20)) {
      left.value = 0;
    }
  }, 20);
};

    box.addEventListener("mouseenter", () => {
      clearInterval(time);
    });

const leave = () => {
  move();
};

</script>

<style lang="scss" scoped>
.index {
  .index_logo_video {
    position: relative;

    .index_logo_text {
      h4 {
        position: absolute;
        z-index: 999;
        top: 35%;
        left: 50.3%;
        transform: translate(-50%, -50%);
        color: white;
        letter-spacing: 7px;
        font-size: 14px;
      }

      p {
        position: absolute;
        z-index: 999;
        top: 61%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        letter-spacing: 3px;
      }

      &::after {
        position: absolute;
        z-index: 999;
        content: "";
        top: 64%;
        left: 44.5%;
        width: 11%;
        height: 0.3%;
        background-color: white;
      }

      img {
        z-index: 999;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 180px;
        transform: translate(-50%, -50%);
      }

      @include mobile() {
        &::after {
          left: 35%;
          width: 30%;
        }

        img {
          width: 150px;
        }
      }
    }

    @include mobile() {
      overflow-x: hidden;

      #video_sea {
        width: 1200px;
      }
    }
  }

  @include wrapper {
    // 海生館介紹
    .intro_text {
      text-align: center;
      margin-top: 100px;

      h4 {
        margin-bottom: 30px;
        letter-spacing: 10px;
      }

      h1 {
        font-family: Noto Sans TC;
        color: map-get($color, text);
        font-weight: 400;
        margin-bottom: 30px;
        letter-spacing: 12px;
      }

      p {
        margin: 0 auto;
        max-width: 600px;
        width: 50%;
      }

      @include mobile() {
        h4 {
          letter-spacing: 5px;
        }

        p {
          width: 70%;
        }
      }
    }
  }

  /* 連結到園區介紹按鈕 */
  .index_park_button_all {
    ul {
      margin-top: 100px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;

      li {
        width: 45%;
        position: relative;
        overflow: hidden;
        border-radius: 10px;

        &::before {
          position: absolute;
          content: "";
          background-image: linear-gradient(
            0deg,
            rgb(4, 12, 44) 70%,
            rgba(4, 12, 44, 0.848) 100%
          );
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        a {
          display: flex;
          /* 做一次垂直對齊消除空隙 */
          transition: all 0.5s ease;

          .house_icon {
            position: absolute;
            color: white;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 9999;

            &::after {
              opacity: 0;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              content: "";
              width: 250px;
              height: 250px;
              background-color: white;
              border-radius: 50%;
              transition: all 0.5s ease;
              z-index: -5;

              @include mobile() {
                width: 200px;
                height: 200px;
              }
            }

            img {
              width: 100px;
              margin-bottom: 10px;
              opacity: 1;
            }

            .penguin_blue,
            .jellyfish_blue,
            .dolphin_blue,
            .sealion_blue {
              display: none;
            }

            p {
              text-align: center;
              margin-left: -10px;
            }
          }

          img {
            width: 100%;
            transform: scale(1, 1);
            opacity: 0.8;
          }

          &:hover {
            transform: scale(1.1, 1.1);
          }

          &:hover img {
            opacity: 0.7;
          }

          &:hover .house_icon::after {
            opacity: 1;
          }

          &:hover .house_icon img {
            display: none;
          }

          &:hover .house_icon .penguin_blue {
            display: block;
            opacity: 1;
          }

          &:hover .house_icon .jellyfish_blue {
            display: block;
            opacity: 1;
          }

          &:hover .house_icon .dolphin_blue {
            display: block;
            opacity: 1;
          }

          &:hover .house_icon .sealion_blue {
            display: block;
            opacity: 1;
          }

          &:hover .house_icon p {
            color: map-get($color, text);
          }
        }
      }
    }

    /* RWD */
    @include mobile() {
      ul {
        li {
          width: 90%;

          a {
            width: 100%;
          }
        }
      }
    }
  }

  .index_bgc {
    background-color: #f1f1f1;
    margin-top: 100px;

    @include wrapper {
      // 活動行程
      .index_journey {
        margin-top: 100px;
        text-align: center;

        h2 {
          margin-bottom: 50px;
          padding-top: 70px;
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;

          li {
            width: 40%;

            .index_journey_content {
              background-color: white;
              border-radius: 20px;

              a {
                display: flex;
                align-items: center;
                justify-content: space-between;

                img {
                  width: 40%;
                  padding: 20px;
                  border-radius: 30px;
                }

                .index_journey_content_sub {
                  text-align: left;
                  align-self: center;
                  padding-right: 10px;

                  h4 {
                    font-size: 16px;
                    line-height: 1.6;
                  }

                  p {
                    font-size: 12px;
                    margin-top: 5px;
                  }
                }
              }
            }

            // RWD
            @include mobile() {
              width: 85%;

              .index_journey_content {
                a {
                  .index_journey_content_sub {
                    p {
                      margin-top: 10px;
                    }
                  }
                }
              }
            }
          }
        }
      }

      .index_button {
        padding-bottom: 70px;

        .btn {
          display: block;
          width: fit-content;
          margin: 50px auto 0;
        }
      }
    }
  }

  .index_colorblock {
    // background-color: map-get($color, bgc2);

    .index_path {
      margin-top: 100px;
      max-width: 80%;
      clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 61% 80%, 61% 100%, 0 100%);
      box-shadow: 10px 50px 50px black;
    }
  }

  .index_news {
    @include wrapper {
      h2 {
        margin-top: 100px;
        text-align: center;
      }

      ul {
        margin-top: 50px;
        .column{
          transform: rotate(0deg);
        }
      }

      li {
        position: relative;
        display: flex;

        &::before {
          position: absolute;
          content: "";
          width: 100%;
          border: 1px dashed map-get($color, text);
        }

        &:last-child::after {
          position: absolute;
          content: "";
          width: 100%;
          border: 1px dashed map-get($color, text);
          bottom: 0;
        }

        img {
          margin: 30px;
          border-radius: 10px;
        }

        .index_news_content {
          align-self: center;

          h3 {
            font-family: Noto Sans TC;
            font-size: 12px;
            margin-bottom: 20px;
            letter-spacing: 1px;
          }

          h4 {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 8px;
          }

          // RWD
          @include mobile() {
            p {
              width: 80%;
            }
          }
        }

        // RWD
        @include mobile() {
          img {
            width: 30%;
            margin: 20px;
          }

          &::before {
            width: 90%;
            margin-left: 20px;
          }

          &:last-child::after {
            width: 90%;
            margin-left: 20px;
          }
        }
      }
    }

    .btn {
      display: block;
      width: fit-content;
      margin: 50px auto 0;
    }
  }

  .index_ad {
    height: 200px;
    background-color: map-get($color, bgc2);
    max-width: 100%;
    margin: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 320px;

    .index_ad_box {
      position: relative;
      width: 70%;
      height: 80px;
      overflow: hidden;

      .index_ad_list {
        position: absolute;
        display: flex;
        gap: 20px;
        left: 0;

        img {
          border-radius: 10px;
          max-width: 600px;
          width: 200px;
          cursor: pointer;
        }

        // RWD
        @include mobile() {
          overflow-x: hidden;
        }
      }
    }
  }
}
</style>
