<script setup>
import { reactive } from "vue";
const props = defineProps({
  mainData: {
    type: Array,
    required: true,
  },
});
const mainData = reactive(props.mainData);
</script>
<template>
  <main>
    <section class="wrapper">
      <!-- 標題 -->
      <div class="title">
        <h2>館內人氣王</h2>
      </div>
      <!-- 中間區塊 -->
      <ul>
        <li v-for="item in mainData">
          <img :src="item.src" :alt="item.alt" />
          <h4>{{ item.title }}</h4>
          <p v-html="item.content"></p>
        </li>
      </ul>
    </section>
  </main>
</template>
<style lang="scss" scoped>
// 主內容
main {
  background-image: url("https://tibamef2e.com/thd101/g6/img/floor_introduction_bgi.jpg");

  @include wrapper {
    max-width: 1100px;

    // 標題
    .title {
      width: 410px;
      height: 191px;
      margin: 0 auto;
      background-image: url("https://tibamef2e.com/thd101/g6/img/floor_introduction_title.svg");
      overflow: hidden;

      h2 {
        position: relative;
        top: 104px;
        left: 129px;
        color: #26450c;
        font-weight: bold;
      }
    }

    // 圖片排列
    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 0 0 200px;

      // RWD
      @include mobile {
        flex-direction: column;
        padding: 0 0 70px;
      }

      li {
        flex: 0 0 50%;
        margin-top: 25px;

        img {
          display: block;
          width: 70%;
          margin: auto;
        }

        h4 {
          text-align: center;
          margin-top: -20px;
        }

        p {
          text-align: center;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
