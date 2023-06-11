<script setup>
import { onMounted, reactive } from "vue";
import axios from "axios";
import Testh from "/src/components/Testh.vue";
// 測試
const testdata = reactive([]);
onMounted(() => {
  axios
    .get(`${import.meta.env.VITE_API_URL}Select.php`)
    // https://tibamef2e.com/thd101/g6/PHP/Select.php
    .then((res) => {
      testdata.push(...res.data);
    })
    .catch((err) => console.log(err));
});
// 測試

const props = defineProps({
  floorIntroData: {
    type: Array,
    required: true,
  },
});

const floorIntroData = reactive(props.floorIntroData);

const emits = defineEmits(["openBox"]);
// 燈箱點擊處理函式
const lightboxClickHandler = (e) => {
  e.preventDefault();
  let parentId = e.currentTarget.parentNode.getAttribute("id");
  emits("openBox", parentId);
};
</script>
<template>
  <section class="floor">
    <div class="wrapper">
      <h2>樓層指南</h2>
      <div class="floor_white">
        <div class="floor_img" v-for="(item, index) in floorIntroData">
          <p>{{ index + 1 }}<span>F</span></p>
          <img src="/img/floor_introduction_floor1.svg" alt="樓層圖" />
          <div
            v-for="item1 in item.animals"
            class="fp"
            :class="item1.class"
            :id="item1.id"
          >
            <a href="" class="lightbox" @click="lightboxClickHandler"
              ><img :src="item1.src" alt=""
            /></a>
          </div>
        </div>
      </div>
      <!-- 圖像說明 -->
      <div class="floor_white1">
        <ul>
          <li class="barrier">無障礙休息室</li>
          <li class="scope">水族範圍</li>
          <li class="lift">電梯</li>
          <li class="baby">親子空間</li>
          <li class="shop">海洋商城</li>
          <li class="toilet">洗手間</li>
          <li class="academy">海洋學院</li>
          <li class="cafe">咖啡館</li>
          <Testh :testdata="testdata"></Testh>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// 各樓層指南
.floor {
  background: #f4f5f7;

  // 圖像說明
  .floor_white1 {
    padding: 70px 50px 40px 142px;
    margin: 0 0 250px;
    background: #fff;
    border-radius: 28px;

    ul {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      li {
        width: 135px;
        margin-right: 20px;
        padding-left: 40px;
        margin-bottom: 30px;
        font-size: $p;
        line-height: 2;
      }
      li {
        width: 135px;
        margin-right: 20px;
        padding-left: 40px;
        margin-bottom: 30px;
        font-size: $p;
        line-height: 2;
      }

      // 各區塊設定
      .barrier {
        background: url("/img/floor_introduction_barrier_free_icon.svg")
          no-repeat 2px 50%;
        background-size: 25px 25px;
      }

      .scope {
        background: url("/img/floor_introduction_fish_icon.svg") no-repeat 2px
          50%;
        background-size: 25px 25px;
      }

      .lift {
        background: url("/img/floor_introduction_lift_icon.svg") no-repeat 2px
          50%;
        background-size: 25px 25px;
      }

      .baby {
        background: url("/img/floor_introduction_baby_icon.svg") no-repeat 2px
          50%;
        background-size: 30px 25px;
      }

      .shop {
        background: url("/img/floor_introduction_shop_icon.svg") no-repeat 2px
          50%;
        background-size: 25px 25px;
      }

      .toilet {
        background: url("/img/floor_introduction_toilet_icon.svg") no-repeat 2px
          50%;
        background-size: 25px 25px;
      }

      .academy {
        background: url("/img/floor_introduction_school_icon.svg") no-repeat 2px
          50%;
        background-size: 25px 25px;
      }

      .cafe {
        background: url("/img/floor_introduction_coffee_icon.svg") no-repeat 2px
          50%;
        background-size: 25px 25px;
      }
    }
  }
  @include mobile() {
    display: none;
  }

  @include wrapper {
    padding: 60px 0;

    h2 {
      margin: 0 0 35px;
      padding: 0 0 25px;
      width: 250px;
      font-size: 24px;
      line-height: 1.6;
      font-weight: bold;
      background: url("/img/floor_introduction_h2_line.svg") no-repeat left
        bottom;
      background-size: 250px 10px;
    }

    // 白色區塊
    .floor_white {
      padding: 140px 85px 55px;
      margin: 0 0 30px;
      background: #fff;
      border-radius: 28px;

      //   樓層對齊
      .floor_img {
        position: relative;
        margin: 0 0 125px;

        &:last-child {
          margin-bottom: 40px;
        }

        //   樓層文字
        p {
          position: absolute;
          left: -10px;
          top: -60px;
          font-size: 8.6rem;
        }

        span {
          font-size: 6rem;
        }

        // 樓層圖
        img {
          width: 100%;
          border-radius: 10px;
        }

        // 區塊共用
        .fp {
          position: absolute;
          width: 112px;
          height: 72px;
          animation: animalMove 3s infinite;

          a {
            &:hover {
              animation: shake 0.2s infinite linear alternate;
            }

            img {
              width: 112px;
              height: 72px;
            }
          }
        }

        // 區塊1
        .p1 {
          left: -29px;
          top: 142px;
        }

        // 區塊2
        .p2 {
          left: 131px;
          top: -100px;
        }

        // 區塊3
        .p3 {
          right: 285px;
          top: -100px;
        }

        // 區塊4
        .p4 {
          left: 322px;
          top: -100px;
        }

        // 區塊5
        .p5 {
          left: 406px;
          top: 95px;
        }

        // 區塊6
        .p6 {
          left: 552px;
          top: -10px;
        }
      }
    }
  }
}
// 動畫
@keyframes animalMove {
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }

  50% {
    transform: translate(0, 20px);
    opacity: 1;
  }

  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}

@keyframes shake {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(4px, 0);
  }

  100% {
    transform: translate(0, 0);
  }
}
</style>
