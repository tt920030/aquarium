<template>
 
  
    <ManageTemplate :title="title" :forms="forms"></ManageTemplate>

</template>

<script setup>

import { onMounted, reactive, ref } from "vue";

// 引入bootstrap

import ManageTemplate from "/src/components/ManageTemplate2.vue";
const title = reactive([
  "商品編號",
  "商品名稱",
  "動物分類",
  "種類分類",
  "價格",
  "庫存數量",
  "修改",
  "刪除",
]);
const forms = reactive([
  ["1", "企鵝娃娃", "企鵝", "玩偶", 500, 30],
  ["2", "海報絨毛娃娃", "其他", "玩偶", 400, 30],
]);
</script>
<style lang="scss" scoped>

</style>
