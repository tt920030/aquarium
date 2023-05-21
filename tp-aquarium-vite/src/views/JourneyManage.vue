<template>
  <Header></Header>
  <main>
    <div class="mb-3">
      <h3>行程管理</h3>
      <button>新增行程</button>
    </div>
    <ManageTemplate :title="title" :forms="forms"></ManageTemplate>
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import Header from "/src/components/CMSHeader.vue";
// 引入bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ManageTemplate from "/src/components/ManageTemplate2.vue";
const title = reactive([
  "行程ID",
  "行程名稱",
  "票價",
  "行程時間",
  "區域",
  "狀態",
  "修改",
  "刪除",
]);
const forms = reactive([
  ["123", "海生館專人導覽-全區(預約制)", 1200, 120, "台北海生館", "上架中"],
  ["1234", "海洋跳躍者：海豚秀", 450, 30, "台北海生館", "上架中"],
]);
</script>
<style lang="scss" scoped>
main {
  box-sizing: border-box;
  padding: 50px 20px 0 200px;
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