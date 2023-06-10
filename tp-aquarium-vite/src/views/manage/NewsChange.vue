<template>
  <ManageTemplate :news="news" :changeData="changeData"></ManageTemplate>
  <div class="buttons">
    <button>刪除</button>
    <button>取消</button>
    <button>更改</button>
  </div>
</template>

<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import { onMounted, reactive, ref } from "vue";

import ManageTemplate from "/src/components/ManageTemplate.vue";

// 接受模板2傳來的值
const $route = useRoute();
const changeData = reactive(JSON.parse($route.query.changeData));
// 傳值給模板1
const news = reactive([
  { id: "title", title: "消息標題", type: "text", data: changeData.TITLE },
  {
    id: "sub_title",
    title: "消息副標題",
    type: "text",
    data: changeData.SUB_TITLE,
  },
  {
    id: "content",
    title: "消息內容",
    type: "textarea",
    data: changeData.CONTENT,
  },
  {
    id: "picture",
    title: "消息主照片",
    type: "file",
  },
  { id: "picture1", title: "消息副照片", type: "file" },
  { id: "picture2", title: "消息副照片", type: "file" },
  {
    id: "release_date",
    title: "發布日期",
    type: "date",
    data: changeData.DATE,
  },
]);
</script>
<style lang="scss" scoped>
.buttons {
  display: flex;
  margin-left: 305px;
  margin-top: 30px;
  button {
    width: 129px;
    height: 42px;
    border: none;
    background-color: map-get($color, bgc1);
    margin-right: 20px;
  }
}
</style>
