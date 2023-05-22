<template>
  <Header></Header>
  <main>
    <div class="mb-3">
      <h3>折價券管理</h3>
      <button>新增折價券</button>
    </div>
    <ManageTemplate
      :title="title"
      :forms="forms"
      :formName="formName"
    ></ManageTemplate>
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

// 表單name
const formName = "coupon";

const title = reactive([
  "名稱",
  "序號",
  "面額",
  "折數",
  "抵用門檻",
  "有效期限",
  "修改",
  "刪除",
]);
let forms = reactive([
  ["無敵折價券", "88888", 10000, 0.1, 10000, 30],
  ["無敵折價券", "88888", 10000, 0.1, 10000, 30],
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