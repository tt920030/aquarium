<template>
  
    <!-- <div class="mb-3">
      <h3>行程管理</h3>
      <button>新增行程</button>
    </div> -->
    <ManageTemplate :title="title" :forms="forms"></ManageTemplate>
 
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";

import ManageTemplate from "/src/components/ManageTemplate2.vue";
const title = reactive([
  "問題編號",
  "關鍵字",
  "回覆",

  "修改",
  "刪除",
]);
const forms = reactive([
  ["1","營業時間","AM9:00~PM21:00"],
  ["2","地點","台北市中正區善導寺捷運站"],
]);
</script>
<style lang="scss" scoped>

</style>