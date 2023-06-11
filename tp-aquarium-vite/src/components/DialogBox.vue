<template>
  <div v-if="isReply" class="answer">
    <img src="/img/customer_service1.png" alt="" />
    <div class="messageWrapper">
      <p class="messageAnswer">{{ text }}</p>
    </div>
  </div>
  <div class="question" v-else>
    <div class="messageWrapper">
      <p class="messageQuestion">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  isReply: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.answer {
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
      position: relative;
    }
    ::before {
      content: url("/img/customer_service_message_a.svg");
      position: absolute;
      left: -5px;
      top: -11px;
      @include mobile {
        top: -8px;
      }
    }
  }
  ::before {
    content: none;
  }
}

.question {
  width: 80%;
  margin-left: 20%;
  height: fit-content;
  margin-bottom: 30px;
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  @include mobile {
    margin-left: auto;
    margin-right: 3%;
  }
  .messageWrapper {
    background-color: map-get($color, bgc1);
    border-radius: 10px;
    width: fit-content;
    height: fit-content;
    margin-right: 5%;
    @include mobile {
      margin: 0;
    }

    p {
      padding: 7px;
      position: relative;
    }
    ::before {
      content: url("/img/customer_service_message_q.svg");
      position: absolute;
      right: -5px;
      top: -11px;
      @include mobile {
        top: -6px;
      }
    }
  }
}
</style>
