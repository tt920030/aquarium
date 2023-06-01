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
  "消息標題",
  "消息副標題",
  "發布日期",
  "修改",
  "刪除",
]);
const forms = reactive([
  ["企鵝館迎來新成員！小企鵝寶寶布布誕生了！", "保育人員細心照顧，企鵝寶寶健康成長中！", "2023.4.18"],
  ["企鵝館迎來新成員！小企鵝寶寶布布誕生了！", "保育人員細心照顧，企鵝寶寶健康成長中！", "2023.4.18"],
]);
</script>
<style lang="scss" scoped>

</style>