<template>
  <div class="customer_service">
    <!-- 客服圖示 -->
    <img
      class="customer_service_photo"
      :src="photoSrc"
      @click="closeContent"
      alt=""
      ref="servicePhoto"
    />
    <!-- 客服對話框 -->
    <div class="customer_service_content" v-if="isVisible">
      <div class="close" @click="closeContent">
        <img src="/img/customer_service_close.svg" alt="" />
      </div>

      <div class="title">
        <h4>智能客服</h4>
      </div>
      <div class="messageList" ref="messageContainer">
        <!-- 客服回覆 -->
        <div class="answerDefault">
          <img src="/img/customer_service1.png" alt="" />
          <div class="messageWrapper">
            <p class="messageAnswer">
              您好～我是智能客服，請於下方點選您的問題，或是輸入於下方對話框
            </p>
          </div>
        </div>
        <!-- 問題選單 -->
        <div class="lists">
          <Carousel :items-to-show="1">
            <Slide :key="slide">
              <div class="listBox">
                <h4>常見問題</h4>
                <ul>
                  <li
                    @click="
                      questionNum = 1;
                      submitCommonQuestion();
                    "
                  >
                    <p>營業時間</p>
                  </li>
                  <li
                    @click="
                      questionNum = 2;
                      submitCommonQuestion();
                    "
                  >
                    <p>場館資訊</p>
                  </li>
                  <li
                    @click="
                      questionNum = 3;
                      submitCommonQuestion();
                    "
                  >
                    <p>交通資訊</p>
                  </li>
                  <li
                    @click="
                      questionNum = 4;
                      submitCommonQuestion();
                    "
                  >
                    <p>票價資訊</p>
                  </li>
                  <li
                    @click="
                      questionNum = 5;
                      submitCommonQuestion();
                    "
                  >
                    <p>相關行程</p>
                  </li>
                </ul>
              </div>
            </Slide>
            <Slide :key="slide">
              <div class="listBox">
                <h4>其他常見問題</h4>
                <ul>
                  <li><p>營業時間</p></li>
                  <li><p>場館資訊</p></li>
                  <li><p>交通資訊</p></li>
                  <li><p>票價資訊</p></li>
                  <li><p>相關行程</p></li>
                </ul>
              </div>
            </Slide>
            <template #addons>
              <navigation />
            </template>
          </Carousel>
        </div>
        <DialogBox
          v-for="message in sortedMessages"
          :key="message.id"
          :text="message.text"
          :isReply="message.isReply"
        >
        </DialogBox>
      </div>
      <!-- 用戶提問輸入框 -->
      <div class="questionInput">
        <form action="">
          <input
            type="text"
            placeholder="請於此輸入您的問題"
            v-model.trim="questionText"
          />
          <button class="send" @click.stop="submitQuestion"></button>
          <!-- <img src="../img/customer_service_send.svg" alt=""> -->
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import "vue3-carousel/dist/carousel.css";
import { ref, reactive, watch, computed, nextTick } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import DialogBox from "/src/components/DialogBox.vue";
import axios from "axios";

// 對話框關閉或開啟
const isVisible = ref(false);
// 客服圖案
const photoSrc = ref("/img/customer_service_2.svg");
//對話框內容
const questionText = ref("");
//問題及回覆
const messages = reactive([]);
//常見文題回覆
const commonQuestions = [
  "營業時間: 平日：9:00~17:00,假日：8:30~18:00",
  "場館資訊: 請參考場館資訊頁面。",
  "交通資訊: 本館提供停車場給來參訪的旅客，也歡迎多多利用大眾運輸工具。",
  "票價資訊: 本館分有日間票及星光票，另外提供團體票及年度通行方案，請參考購票資訊頁面。",
  "相關行程: 請參考行程推薦頁面。",
];
//常見問題代碼
const questionNum = ref(null);

const messageContainer = ref(null);

// 關閉&開啟對話框 ＆ 更換客服圖案
function closeContent() {
  isVisible.value = !isVisible.value;
  if (isVisible.value == true) {
    if (window.innerWidth > 414) {
      photoSrc.value = "/img/customer_service1.png";
    } else {
      photoSrc.value = "";
    }
  } else {
    photoSrc.value = "/img/customer_service_2.svg";
    localStorage.clear();
  }
}

const reply = ref("");
//用戶提問送出
const submitQuestion = (e) => {
  const data = {
    question: questionText.value,
  };
  e.preventDefault();
  if (questionText.value.trim() !== "") {
    const message = {
      id: Date.now(),
      text: questionText.value,
      isReply: false,
    };
    messages.push(message);
    // scrollToBottom();
    questionText.value = "";
    axios
      .post(`${import.meta.env.VITE_API_URL}costumerRes.php`, data)
      .then((response) => {
        // 处理响应
        reply.value = response.data;
        const message = { id: Date.now(), text: reply.value, isReply: true };
        messages.push(message);
        nextTick(() => {
          const list = this.$refs.messageContainer;
          list.scroll({
            top: list.scrollHeight,
            behavior: "smooth",
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
};
//常見問題點選
const submitCommonQuestion = () => {
  const question = commonQuestions[questionNum.value - 1];

  if (question) {
    const message = { id: Date.now(), text: question, isReply: true };
    messages.push(message);
    scrollToBottom();
  }
};

const scrollToBottom = () => {
  if (messageContainer.value) {
    messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
  }
};

watch(messages, () => {
  scrollToBottom();
});

const sortedMessages = computed(() => {
  return messages.sort((a, b) => a.id - b.id);
});
</script>
<style lang="scss" scoped>
.customer_service {
  position: fixed;
  right: 2%;
  bottom: -5%;
  z-index: 998;
  @include mobile {
    width: 100%;
    right: -65%;
  }

  // 客服圖示
  .customer_service_photo {
    border-radius: 50%;
    width: 200px;
    position: relative;
    z-index: 5;
    @include mobile {
      width: 150px;
    }
    &:hover {
      cursor: pointer;
    }
  }
  // 客服對話框
  .customer_service_content {
    border: 1px solid lavender;
    width: 500px;
    // height: 603px;
    background-color: white;
    position: absolute;
    right: 147px;
    bottom: 80px;
    z-index: 1;
    border-radius: 10px;
    box-shadow: 5px 5px 5px #ccc;
    @include mobile {
      width: 98%;
      height: 650px;
      right: 66%;
      // bottom: 10px;
    }
    .close {
      position: absolute;
      right: 15px;
      top: 8px;
      width: 30px;
      height: 30px;
      &:hover {
        background-color: #dbd9d9;
        border-radius: 50%;
      }
      img {
        width: 30px;
        height: 30px;
        transition: all 0.3s;
      }
    }

    .title {
      height: 48px;
      width: 100%;
      right: 0;
      bottom: 0;
      background-color: map-get($color, bgc1);
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      h4 {
        line-height: 48px;
        text-align: center;
      }
    }
    // 對話內容區塊
    .messageList {
      width: 500px;
      height: 400px;
      padding-bottom: 70px;
      box-sizing: border-box;
      overflow-y: auto;
      @include mobile {
        width: 100%;
        height: 550px;
      }

      // 客服回覆
      .answerDefault {
        width: 80%;
        height: fit-content;
        margin-top: 30px;
        margin-left: 20px;
        // margin-right: 20%;
        margin-bottom: 30px;
        @include mobile {
          margin-left: 3%;
        }

        // 客服大頭貼
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #ccc;
        }

        // 回覆內容
        .messageWrapper {
          left: 50px;
          background-color: map-get($color, bgc1);
          border-radius: 10px;
          width: fit-content;
          height: fit-content;
          margin-left: 50px;
          p {
            padding: 7px;
          }
          ::before {
            content: url("/img/customer_service_message_a.svg");
            position: relative;
            left: -12px;
            top: -19px;
            @include mobile {
              top: -15px;
            }
          }
        }
        ::before {
          content: none;
        }
      }

      // 問題選單
      .lists {
        height: 207px;

        .listBox {
          width: 200px;
          text-align: center;
          h4 {
            display: block;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
            height: 35px;
            line-height: 35px;
            background-color: map-get($color, bgc2);
          }
          ul {
            li {
              background-color: map-get($color, bgc1);
              height: 30px;
              border-bottom: 1px solid #a19b9b;
              p {
                line-height: 30px;
              }
            }
            :hover {
              background-color: map-get($color, bgc2);
            }
            :last-child {
              border-bottom-left-radius: 10px;
              border-bottom-right-radius: 10px;
              border: none;
            }
          }
        }
      }
    }
    // 用戶提問輸入框
    .questionInput {
      width: 100%;
      position: absolute;
      bottom: 10px;
      align-items: center;
      margin: 0 auto;
      @include flex;
      @include mobile {
        width: 95%;
        margin: 0 2.5%;
        @include flex;
        justify-content: space-between;
      }
      form {
        width: 400px;
        @include flex;
        @include mobile {
          width: 100%;
        }
        input {
          width: 300px;
          height: 40px;
          background-color: map-get($color, bgc2);
          border: none;
          border-radius: 10px;
          text-indent: 10px;
          margin-left: 70px;
          @include mobile {
            width: 80%;
            margin: 0;
          }
        }
        .send {
          background-image: url("/img/customer_service_send.svg");
          background-size: cover;
          width: 40px;
          height: 40px;
          position: absolute;
          right: 70px;
          top: 0;
          z-index: 9999;
          background-color: white;
          border: none;
          &:hover {
            cursor: pointer;
          }
          @include mobile {
            width: 10%;
            right: 5px;
          }
        }
      }
    }
  }
}
</style>
