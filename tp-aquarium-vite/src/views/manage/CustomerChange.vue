<template>
  <ManageTemplate :news="news"></ManageTemplate>
  <div class="buttons">
    <button>刪除</button>
    <button>取消</button>
    <button>更改</button>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";

import ManageTemplate from "/src/components/ManageTemplate.vue";
const news = reactive([
  { id: "title", title: "問題編號", type: "text" },
  { id: "sub_title", title: "關鍵字", type: "text" },
  { id: "content", title: "回覆", type: "textarea" },
]);
</script>
<style lang="scss" scoped></style>
