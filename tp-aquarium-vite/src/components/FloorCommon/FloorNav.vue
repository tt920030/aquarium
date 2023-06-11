<script setup>
import { reactive, ref } from "vue";
const props = defineProps({
  navData: {
    type: Array,
    required: true,
  },
  pageNow: {
    type: String,
    required: true,
  },
});
const navData = reactive(props.navData);
// 激活導覽列圖片
const pageNow = ref(props.pageNow);
</script>
<template>
  <!-- 樓層指南選單 -->
  <ul class="floor_nav">
    <li v-for="item in navData" :class="item.title === pageNow ? 'active' : ''">
      <RouterLink :to="item.to"><img :src="item.src" alt="" /></RouterLink>
      <h4 :class="item.title === pageNow ? 'active' : ''">
        {{ item.title }}
      </h4>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
// 樓層nav
.floor_nav {
  display: flex;
  justify-content: center;

  li {
    margin: 20px 30px;
    text-align: center;

    // RWD
    @include mobile() {
      margin: 15px 0;
      padding: 0 10px;
    }

    &.active::after {
      content: "";
      background-image: url("https://tibamef2e.com/thd101/g6/img/floor_nav_index.svg");
      background-repeat: no-repeat;
      display: block;
      width: 30px;
      height: 27px;
      position: relative;
      top: 9px;
      left: 36%;
    }

    a {
      // width: 100px;
      height: 82px;

      @include mobile() {
        height: 60px;
      }

      img {
        width: 70%;
        display: block;
        margin: auto;
      }
    }

    h4 {
      color: #97cbe0;
      &.active {
        color: #16355a;
      }
    }
  }
}
</style>
