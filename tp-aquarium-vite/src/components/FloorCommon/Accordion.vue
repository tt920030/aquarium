<script setup>
import { reactive, ref, watch } from "vue";
// 手風琴標題處理函式
const accordionHeaderHandler = (e) => {
  e.target.classList.toggle("active");
  e.target.nextElementSibling.style.display = e.target.classList.contains(
    "active"
  )
    ? "block"
    : "none";
};

const props = defineProps({
  accordionData: {
    type: Array,
    required: true,
  },
});
const accordionData = reactive(props.accordionData);
</script>
<template>
  <section class="light_box">
    <div
      class="lightbox_overlay"
      :class="item.class"
      v-for="item in accordionData"
    >
      <div class="wrapper">
        <div class="lightbox_content">
          <!-- 區塊1 -->
          <div class="lightbox_block">
            <h4 class="accordion_header" @click="accordionHeaderHandler">
              {{ item.title }}
            </h4>
            <ul>
              <li><img :src="item.src" alt="" /></li>
              <li>
                <h4>{{ item.h4 }}</h4>
                <p>
                  {{ item.p }}
                </p>
              </li>
            </ul>
          </div>
          <!-- 區塊2 -->
          <div class="lightbox_block" v-if="item.section2">
            <h4 class="accordion_header" @click="accordionHeaderHandler">
              {{ item.h41 }}
            </h4>
            <ul>
              <li>
                <img
                  style="width: 360px"
                  class="intro_img"
                  :src="item.src1"
                  alt=""
                />
              </li>
              <li>
                <p>
                  {{ item.p1 }}
                </p>
                <RouterLink :to="item.to" class="btn">了解更多</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
//燈箱
.light_box {
  display: none;
  @include mobile() {
    display: block;
    padding-top: 50px;
    background: #f4f5f7;
  }

  .lightbox_overlay {
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
  }
}
</style>
