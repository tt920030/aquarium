<template>
  <ManageTemplate :news="news" :updates="updates"></ManageTemplate>
  <div class="buttons">
    <button @click="updates++">更改</button>
    <button>取消</button>
  </div>
</template>

<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import ManageTemplate from "/src/components/ManageTemplate.vue";

// 修改
const updates = ref(false);

// 接受模板2傳來的值
const $route = useRoute();
const changeData = reactive(JSON.parse($route.query.changeData));
// console.log(changeData);
const news = reactive([
  { id: "ID", title: "折價券ID", type: "text", data: changeData.ID },
  { id: "NAME", title: "名稱", type: "text", data: changeData.NAME },
  {
    id: "SERIAL_NUMBER",
    title: "序號",
    type: "text",
    data: changeData.SERIAL_NUMBER,
  },
  { id: "DISCOUNT", title: "面額", type: "text", data: changeData.DISCOUNT },
  {
    id: "NEED_PRICE",
    title: "抵用門檻",
    type: "text",
    data: changeData.NEED_PRICE,
  },
  {
    id: "DURATION",
    title: "有效期限",
    type: "text",
    data: changeData.DURATION,
  },
]);
// 傳值到資料庫
const sendToDB = () => {};
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
