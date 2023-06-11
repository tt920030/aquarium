<template>
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
        <li v-for="item in sectionData" :id="item.ID">
          <a href="" class="lightbox" @click="lightboxClickHandler">
            <img
              class="intro_img"
              :src="'https://tibamef2e.com/thd101/g6/img/' + item.PICTURE"
              alt=""
            />
          </a>

          <div class="journey_intro_content">
            <div class="journey_intro_main">
              <img
                src="https://tibamef2e.com/thd101/g6/img/journey_intro_icon.svg"
                alt=""
              />
              <h4>{{ item.NAME }}</h4>
              <p>{{ item.CONTENT }}</p>
            </div>

            <div class="journey_intor_icon">
              <i class="bi bi-clock"
                ><p>{{ item.TIME }}小時</p></i
              >
              <i class="bi bi-geo-alt-fill"><p>台北海生館</p></i>
              <i class="bi bi-coin"
                ><p>${{ item.PRICE }}</p></i
              >
              <RouterLink class="btn" to="/itinerary">前往購票</RouterLink>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

// const data = reactive([]);
// const sectionData = reactive([]);

// onMounted(() => {
//   let params = new URLSearchParams();     //建立PHP可接受的格式
//         params.append('data',data.value); //將搜尋值傳入params物件內
//         axios.post('http://localhost/G6/getJourney.php') //使用get或post等取得路徑資料(php))

//         .then((res) => {			//回傳後如何處理
//             res.data.forEach(element => {
//                 sectionData.push(element);
//             });
//             console.log(sectionData)
//         }).catch(err => console.log(err))  //錯誤如何處理

// })

const props = defineProps({
  sectionData: {
    type: Array,
    required: true,
  },
});
const sectionData = reactive(props.sectionData);
// 不懂 ??(*´･д･)?

const emits = defineEmits(["openBox"]);
// 燈箱點擊處理函式
const lightboxClickHandler = (e) => {
  e.preventDefault();
  let parentId = e.currentTarget.parentNode.getAttribute("id");
  emits("openBox", parentId);
};

//滾輪復原
// const rescroll = function () {
//   document.querySelector("body").style.overflow = "visible";
//   window.scrollTo(0, 0);
// };
</script>

<style lang="scss" scoped>
@include wrapper {
  .journey_title {
    text-align: center;
    margin: 100px 0;

    h3 {
      font-size: 18px;
      margin-top: 10px;
    }
    @include mobile() {
      margin: 50px 0;
    }
  }

  .journey_info {
    margin-bottom: 20px;

    @include mobile() {
      text-align: center;
    }
  }

  .journey_intro {
    margin-bottom: 420px;
    @include mobile {
      margin-bottom: 0;
    }

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
  }
}
</style>
