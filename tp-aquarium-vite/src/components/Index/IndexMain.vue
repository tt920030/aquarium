<template>
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
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Virtual } from "swiper";
import "swiper/css";

// 活動行程
const journeyPage = reactive([
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
const newsPage = reactive([
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

</script>

<style lang="scss" scoped>
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


.index_path {
    margin-top: 100px;
    max-width: 80%;
    clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 61% 80%, 61% 100%, 0 100%);
    box-shadow: 10px 50px 50px black;
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
</style>
