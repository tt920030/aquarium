<template>
   
      <ManageTemplate :news="news"></ManageTemplate>
 
  </template>
  
  <script setup>
 
  import { onMounted, reactive, ref } from "vue";

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
  
  </style>
  