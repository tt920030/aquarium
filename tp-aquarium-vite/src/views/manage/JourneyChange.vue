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
  { id: "ID", title: "行程ID", type: "text", data: changeData.ID },
  { id: "title", title: "行程名稱", type: "text", data: changeData.NAME },
  { id: "time", title: "行程時間", type: "text", data: changeData.TIME },
  { id: "ticketMoney", title: "票價", type: "text", data: changeData.PRICE },
  {
    id: "restriction",
    title: "數量限制",
    type: "number",
    data: changeData.PEOPLE,
  },
  { id: "picture", title: "封面圖片", type: "file" },
  {
    id: "introduction",
    title: "活動介紹",
    type: "textarea",
    data: changeData.CONTENT,
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
}
</style>
