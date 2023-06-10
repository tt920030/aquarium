<template>
    <div class="journey_slider">
        <div class="journey_slider_box" @mouseenter="enter" @mouseleave="leave">
        <div class="journey_slider_list" :style="{left: left + 'px'}">
            <img v-for="image in images" :key="image.id" :src="image.src" alt="">
            <img v-for="image in images" :key="image.id" :src="image.src" alt="">
        </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";

// journey 跑馬燈
const left = ref(0);
const time = ref(null);
const images = reactive([
  { id: 1, src: "../../public/img/journey_slide1.jpg" },
  { id: 2, src: "../../public/img/journey_slide2.jpg" },
  { id: 3, src: "../../public/img/journey_slide3.jpg" },
  { id: 4, src: "../../public/img/journey_slide4.jpg" },
  { id: 5, src: "../../public/img/journey_slide5.jpg" },
]);

const move = () => {
  clearInterval(time.value);
  time.value = setInterval(() => {
  left.value -= 2;

    if (left.value === -(324 + 326 + 3 * 390 + 5 * 20)) {
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

onMounted(() => {
  move();
});

</script>

<style lang="scss" scoped>
.journey_slider {
    display: flex;
    justify-content: center;
    align-items: center;
    .journey_slider_box {
      position: relative;
      width: 100%;
      height: 200px;
      overflow: hidden;

      .journey_slider_list {
        position: absolute;
        display: flex;
        gap: 20px;
        left: 0;
      }
    }
    @include mobile(){
      margin-top: -80px;
    }
}
</style>