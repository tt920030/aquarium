<template>
    <div class="overnight_photo">
      <section class="wrapper">
        <h2>回味夜宿海生館<br/>體驗海洋奇妙，留下珍貴回憶</h2>
      </section>
      <div class="overnight_slider">
        <div class="overnight_slider_box" @mouseenter="enter" @mouseleave="leave">
          <div class="overnight_slider_list" :style="{left: left + 'px'}">
            <img v-for="image in images" :key="image.id" :src="image.src" alt="">
            <img v-for="image in images" :key="image.id" :src="image.src" alt="">
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";

onMounted(() => {
  move();
});

// overnight slider 跑馬燈
const left = ref(0);
const time = ref(null);
const images = reactive([
  { id: 1, src: "../../public/img/overnight_slide1.jpg" },
  { id: 2, src: "../../public/img/overnight_slide2.jpg" },
  { id: 3, src: "../../public/img/overnight_slide3.jpg" },
]);

const move = () => {
  clearInterval(time.value);
  time.value = setInterval(() => {
  left.value -= 2;

    if (left.value === -(3 * 685 + 3 * 30)) {
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
// overnight slide
  .overnight_photo {
    @include wrapper {
      h2 {
        text-align: center;
        margin-top: -175px;
        line-height: 1.6;

        @include mobile() {
          font-size: 18px;
        }
      }
    }

    .overnight_slider {
      display: flex;
      gap: 30px;
      margin-top: 80px;
      .overnight_slider_box {
        position: relative;
        width: 100%;
        height: 450px;
        overflow: hidden;

        .overnight_slider_list {
          position: absolute;
          display: flex;
          gap: 20px;
          left: 0;

          @include mobile() {
            margin-top: 40px;
          }
        }
      }
    }
  }

  @include wrapper {
    h1 {
      text-align: center;
      color: map-get($color, text);
      margin: 100px 0;

      @include mobile() {
        font-size: 18px;
        margin-bottom: 30px;
      }
    }
  }
</style>