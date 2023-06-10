<template>
  <ManageTemplate :news="news"></ManageTemplate>
  <div class="buttons">
    <button>取消</button>
    <button @click.prevent="sendDb">新增</button>
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import ManageTemplate from "/src/components/ManageTemplate.vue";
import axios from "axios";
const news = reactive([
  {
    id: "PRODUCT_ID",
    title: "商品編號",
    type: "text",
  },
  {
    id: "ID",
    title: "商品名稱",
    type: "text",
  },
  {
    id: "PRICE",
    title: "價格",
    type: "text",
  },
  {
    id: "INVENTORY",
    title: "庫存數量",
    type: "text",
  },
  {
    id: "ANIMAl_ID",
    title: "動物分類",
    type: "text",
  },
  {
    id: "TYPE_ID",
    title: "種類分類",
    type: "text",
  },
  {
    id: "CONTENT",
    title: "商品敘述",
    type: "textarea",
  },
  {
    id: "picture",
    title: "消息主照片",
    type: "file",
  },
  { id: "picture1", title: "消息副照片", type: "file" },
  { id: "picture2", title: "消息副照片", type: "file" },
]);
// 送到資料庫
const sendDb = () => {};
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
