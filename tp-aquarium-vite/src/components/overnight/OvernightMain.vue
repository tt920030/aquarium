<template>
  <div class="overnight_circle_bgc">
    <section class="wrapper">
      <div
        v-for="circle in circlePage"
        :key="circle.id"
        class="overnight_circle_content"
      >
        <img :src="circle.src" alt="" />
        <div class="overnight_circle_content_text">
          <div class="overnight_circle_content_text_inside">
            <h3>{{ circle.title }}</h3>
            <span
              ><p class="p_hight">{{ circle.month }}</p></span
            >
          </div>
          <h4>{{ circle.content }}</h4>
          <p class="p_sub">{{ circle.text }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from "vue";

// 夜宿海生館介紹文內容
const circlePage = reactive([
  {
    id: 1,
    src: "https://tibamef2e.com/thd101/g6/img/overnight_circle1.png",
    title: "世界水域區(兩天一夜)",
    month: "1-12月",
    content: "觀賞海底奇景，體驗海洋生態",
    text: "世界水域區更設有專業的生物解說，讓你更了解這些神奇的海洋生物的特性及生態，開啟對自然的新視野。除了觀賞海洋生物，你還可以參加各種水上活動，如划艇、帆船等等，全面感受大海的魅力。此外，豐富多彩的活動，如夜間星空觀賞、海邊營火派對等，讓你的假期充滿無限的樂趣。",
  },
  {
    id: 2,
    src: "https://tibamef2e.com/thd101/g6/img/overnight_circle2.png",
    title: "台灣水域區(兩天一夜)",
    month: "3-6月",
    content: "觀賞海底奇景，體驗海洋生態",
    text: "第一天：前往海洋博物館了解海洋文化和保育知識，隨後乘船前往藍洞探索秘境，觀察熱帶魚和珊瑚礁。晚上入住海生館，進行夜間探索、聆聽海洋生物的聲音，更有機會觀察到燈籠魚、海蜇等特殊生物。第二天：前往海洋保護區進行浮潛活動，近距離觀察海洋生態，並且參與海洋保育行動。這個兩天一夜的行程充滿探索和學習的樂趣，讓您深入了解台灣水域區的獨特之處。",
  },
  {
    id: 3,
    src: "https://tibamef2e.com/thd101/g6/img/overnight_circle3.png",
    title: "觀賞珊瑚(兩天一夜)",
    month: "7-9月",
    content: "觀賞海底奇景，體驗海洋生態",
    text: "第一天：您將前往海生館夜宿，體驗夜間探索，聆聽海洋生物的聲音，甚至有機會看到燈籠魚等特殊生物。接著，您將前往珊瑚區進行浮潛活動，近距離觀察五彩繽紛的珊瑚和不同種類的熱帶魚。",
  },
  {
    id: 4,
    src: "https://tibamef2e.com/thd101/g6/img/overnight_circle4.png",
    title: "蟹逅(兩天一夜)",
    month: "10-12月",
    content: "觀賞海底奇景，體驗海洋生態",
    text: "在這兩天一夜的旅程中，你可以享用豐盛的海鮮美食，品嚐鮮味十足的螃蟹料理，並且探索海洋生物的神秘世界。晚上入住海生館，進行夜間探索、聆聽海洋生物的聲音，更有機會觀察到燈籠魚、海蜇等特殊生物。第二天：前往海洋保護區進行浮潛活動，近距離觀察海洋生態，並且參與海洋保育行動。這個兩天一夜的行程充滿探索和學習的樂趣，讓您深入了解台灣水域區的獨特之處。",
  },
]);
</script>

<style lang="scss" scoped>
.overnight_circle_bgc {
  background-image: url("https://tibamef2e.com/thd101/g6/img/overnight_bgc.jpg");
  width: 100%;
  height: 3097px;
  background-repeat: no-repeat;
  padding-top: 300px;
  margin-top: -200px;

  @include wrapper {
    .overnight_circle_content:nth-child(even) {
      img {
        order: 2;
      }
    }

    .overnight_circle_content {
      display: flex;
      align-items: center;
      margin-bottom: 200px;
      gap: 50px;

      .overnight_circle_content_text {
        color: white;
        text-align: left;

        .overnight_circle_content_text_inside {
          position: relative;
          display: flex;
          justify-content: space-between;
          color: white;

          &::after {
            position: absolute;
            content: "";
            width: 100%;
            height: 5%;
            background-color: white;
            top: 100px;
          }

          span {
            background-color: white;
            width: 80px;
            height: 30px;
            text-align: center;
            border-radius: 50px;
            line-height: 30px;

            p {
              color: map-get($color, text);
            }

            @include mobile() {
              .p_hight {
                line-height: 2;
              }
            }
          }
        }

        h4 {
          margin-top: 20px;
        }

        .p_sub {
          margin-top: 50px;
        }
      }

      @include mobile() {
        flex-direction: column;

        img {
          width: 60%;
        }
      }
    }

    @include mobile() {
      .overnight_circle_content:nth-child(even) {
        img {
          order: 0;
        }
      }

      .overnight_circle_content {
        padding-top: 530px;
        margin-top: -600px;

        .overnight_circle_content_text {
          width: 90%;
        }
      }
    }
  }
}
</style>
