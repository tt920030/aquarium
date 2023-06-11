<template>
  <div
    v-for="(question, index) in questions"
    :key="question.id"
    class="question"
  >
    <div class="messageWrapper">
      <p class="messageQuestion">{{ question.name }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  questions: Array,
});
</script>

<style lang="scss" scoped>
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
      content: url(https://tibamef2e.com/thd101/g6/img/customer_service_message_q.svg);
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
