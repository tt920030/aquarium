<template>
    <Header></Header>
    <main>
      <div class="mb-3">
        <h3>行程管理</h3>
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
    { id: "ID", title: "行程ID", type: "text" },
    { id: "title", title: "行程名稱", type: "text" },
    { id: "time", title: "行程時間", type: "text" },
    { id: "area", title: "區域", type: "text" },
    { id: "startTime", title: "開始日期", type: "date" },
    { id: "endTime", title: "結束日期", type: "date" },
    { id: "ticketMoney", title: "票價", type: "text" },
    { id: "restriction", title: "數量限制", type: "number" },
    { id: "picture", title: "封面圖片", type: "file" },
    { id: "introduction", title: "活動介紹", type: "textarea" },
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
  