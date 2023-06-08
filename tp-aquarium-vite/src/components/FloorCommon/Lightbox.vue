<script setup>
import { reactive, ref, watch } from "vue";
const emits = defineEmits(["closeBox"]);
// 燈箱關閉處理函式
const lightboxCloseHandler = (e) => {
  e.stopPropagation(); //可以都寫currentTarget就能避免很多冒泡問題
  document.body.style.overflow = "visible";
  // 是指燈箱的scroll可以超出燈箱嗎？
  emits("closeBox");
};

// 燈箱疊加處理函式
const lightboxOverlayHandler = (e) => {
  emits("closeBox");
  document.body.style.overflow = "visible";
};

// 燈箱內容處理函式(防止事件冒泡)
const lightboxContentHandler = (e) => {
  e.stopPropagation();
};

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
  lightboxData: {
    type: Array,
    required: true,
  },
});
const lightboxData = reactive(props.lightboxData.value[0]);
// 不懂 ??(*´･д･)?

</script>
<template>
  <section class="light_box">
    <div
      class="lightbox_overlay"
      :class="lightboxData.class"
      @click="lightboxOverlayHandler"
    >
      <div class="wrapper">
        <div class="lightbox_content" @click="lightboxContentHandler">
          <!-- 區塊1 -->
          <div class="lightbox_block">
            <h4 class="accordion_header" @click="accordionHeaderHandler">
              {{ lightboxData.title }}
            </h4>
            <ul>
              <li><img :src="lightboxData.src" alt="" /></li>
              <li>
                <h4>{{ lightboxData.h4 }}</h4>
                <p>
                  {{ lightboxData.p }}
                </p>
              </li>
            </ul>
          </div>
          <!-- 區塊2 -->
          <div class="lightbox_block" v-if="lightboxData.section2">
            <h4 class="accordion_header" @click="accordionHeaderHandler">
              {{ lightboxData.h41 }}
            </h4>
            <ul>
              <li>
                <img
                  style="width: 360px"
                  class="intro_img"
                  :src="lightboxData.src1"
                  alt=""
                />
              </li>
              <li>
                <p>
                  {{ lightboxData.p1 }}
                </p>
                <RouterLink :to="lightboxData.to" class="btn"
                  >了解更多</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 關閉按鈕 -->
      <div class="lightbox_close" @click="lightboxCloseHandler">x</div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
//燈箱
.light_box {
  @include mobile() {
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

// 各別區塊調整
.seal .wrapper .lightbox_content .lightbox_block ul:last-child p {
  margin: 60px 0 0 0;
}
</style>
