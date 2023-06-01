<template>
  <div @click="aa" v-for="item in data" :key="item.ID">
    {{ item }}
  </div>
</template>
<script setup>
import { onMounted, reactive, ref, watch, computed } from "vue";
// 接受父元件傳值
const props = defineProps({
  testdata: {
    type: Array,
    require: true,
  },
});
const KEYWORDS = "日間票";
// 改資料
const data = computed(() => {
  return props.testdata.filter((item) => {
    return item.NAME.includes(KEYWORDS) && item.ID % 2 == 0;
  });
});
</script>
