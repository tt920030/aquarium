<template>
  <ManageTemplate :news="news"></ManageTemplate>
  <div class="buttons">
    <button>取消</button>
    <button>更改</button>
    <button>刪除</button>
  </div>
</template>

<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import ManageTemplate from "/src/components/ManageTemplate.vue";

// 接受模板2傳來的值
const $route = useRoute();
const changeData = reactive(JSON.parse($route.query.changeData));
// console.log($route.query.changeData);
// 資料處理
const typeTrans = (data) => {
  switch (data) {
    case 1:
      return "玩偶";
    case 2:
      return "文具";
    case 3:
      return "吊飾";
    case 4:
      return "食品";
    case 5:
      return "其他";
    default:
      return "";
  }
};

const animalTrans = (data) => {
  switch (data) {
    case 1:
      return "企鵝";
    case 2:
      return "海豚";
    case 3:
      return "魚類";
    case 4:
      return "水母";
    case 5:
      return "其他";
    default:
      return "";
  }
};

const type = typeTrans(changeData.TYPE_ID);
const animal = animalTrans(changeData.ANIMAL_ID);
// 傳值給模板1
const news = reactive([
  {
    id: "PRODUCT_ID",
    title: "商品編號",
    type: "text",
    data: changeData.PRODUCT_ID,
  },
  {
    id: "ID",
    title: "商品名稱",
    type: "text",
    data: changeData.NAME,
  },
  {
    id: "PRICE",
    title: "價格",
    type: "text",
    data: changeData.PRICE,
  },
  {
    id: "INVENTORY",
    title: "庫存數量",
    type: "text",
    data: changeData.INVENTORY,
  },
  {
    id: "ANIMAl_ID",
    title: "動物分類",
    type: "text",
    data: animal,
  },
  {
    id: "TYPE_ID",
    title: "種類分類",
    type: "text",
    data: type,
  },
  {
    id: "CONTENT",
    title: "商品敘述",
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
    cursor: pointer;
  }
}
</style>
