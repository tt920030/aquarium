<template>
  <Header></Header>
  <main>
    <div class="mb-3">
      <h3>消息管理</h3>
    </div>

    <ManageTemplate :news="news"></ManageTemplate>
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import Header from "/src/components/CMSHeader.vue";
// 引入bootstrap
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import ManageTemplate from '/src/components/ManageTemplate.vue';
const news = reactive([
  { id: "title", title: "消息標題", type: "text" },
  { id: "sub_title", title: "消息副標題", type: "text" },
  { id: "content", title: "消息內容", type: "textarea" },
  { id: "picture", title: "消息主照片", type: "file" },
  { id: "picture1", title: "消息副照片", type: "file" },
  { id: "picture2", title: "消息副照片", type: "file" },
  { id: "release_date", title: "發布日期", type: "date" },
]);
</script>
<style lang="scss" scoped>
main {
  box-sizing: border-box;
  padding: 50px 0 0 200px;
  h3 {
    padding-bottom: 10px;
    margin-bottom: 30px;
    border-bottom: 1px solid black;
  }
  .row {
    margin-right: 0;
  }
  .row.justify-content-center {
    margin-left: -170px;
  }
}
</style>
