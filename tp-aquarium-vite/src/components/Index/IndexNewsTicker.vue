<template>
  <div class="index_ad">
    <div class="index_ad_box" @mouseenter="enter" @mouseleave="leave">
      <div class="index_ad_list" :style="{ left: left + 'px' }">
        <img v-for="image in images" :key="image.id" :src="image.src" alt="" />
        <img v-for="image in images" :key="image.id" :src="image.src" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";

onMounted(() => {
  move();
});

// index_ad 跑馬燈
const time = ref(null);
const left = ref(0);
const images = reactive([
  { id: 1, src: "https://tibamef2e.com/thd101/g6/img/index_logo1.jpg" },
  { id: 2, src: "https://tibamef2e.com/thd101/g6/img/index_logo2.jpg" },
  { id: 3, src: "https://tibamef2e.com/thd101/g6/img/index_logo3.jpg" },
  { id: 4, src: "https://tibamef2e.com/thd101/g6/img/index_logo4.jpg" },
  { id: 5, src: "https://tibamef2e.com/thd101/g6/img/index_logo5.jpg" },
  { id: 6, src: "https://tibamef2e.com/thd101/g6/img/index_logo6.jpg" },
]);

const move = () => {
  clearInterval(time.value);
  time.value = setInterval(() => {
    left.value -= 2;

    if (left.value === -(6 * 200 + 6 * 20)) {
      left.value = 0;
    }
  }, 20);
};

const enter = () => {
  clearInterval(time.value);
};

const leave = () => {
  move();
};
</script>

<style lang="scss" scoped>
.index_ad {
  height: 200px;
  background-color: map-get($color, bgc2);
  max-width: 100%;
  margin: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 320px;

  .index_ad_box {
    position: relative;
    width: 70%;
    height: 80px;
    overflow: hidden;

    .index_ad_list {
      position: absolute;
      display: flex;
      gap: 20px;
      left: 0;

      img {
        border-radius: 10px;
        max-width: 600px;
        width: 200px;
        cursor: pointer;
      }

      // RWD
      @include mobile() {
        overflow-x: hidden;
      }
    }
  }
}
</style>
