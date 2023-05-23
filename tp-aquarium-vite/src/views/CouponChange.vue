<template>
  <Header></Header>
  <main>
    <div class="mb-3">
      <h3>消息管理</h3>
    </div>
    <ManageTemplate :news="news" :buttons="buttons"></ManageTemplate>
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import Header from "/src/components/CMSHeader.vue";
// 引入bootstrap
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import ManageTemplate from "/src/components/ManageTemplate.vue";
const news = reactive([
  { id: "title", title: "名稱", type: "text" },
  { id: "number", title: "序號", type: "text" },
  { id: "value", title: "面額", type: "text" },
  { id: "discount", title: "折數", type: "text" },
  { id: "threshold", title: "抵用門檻", type: "text" },
  { id: "expire", title: "有效期限", type: "text" },
]);
const buttons = reactive(["刪除", "取消", "更改"]);
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
