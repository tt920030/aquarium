<template>
  <Header></Header>
  <main>
    <div class="mb-3">
      <h3>消息管理</h3>
      <button>新增消息</button>
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
const formName = "news";

const title = reactive([
  "消息標題",
  "消息副標題",
  "發布日期",
  "修改",
  "刪除",

]);
let forms = reactive([
  ["企鵝館迎來新成員！小企鵝寶寶布布誕生了！", "保育人員細心照顧，企鵝寶寶健康成長中！", "2023.4.18"],

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
