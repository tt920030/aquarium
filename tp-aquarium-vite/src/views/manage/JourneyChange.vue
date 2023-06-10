<template>
   
  <ManageTemplate :news="news"></ManageTemplate>
  <div class="buttons">
    <button>取消</button>
    <button>刪除</button> 
  </div>

</template>
  
<script setup>

  import { onMounted, reactive, ref } from "vue";
  import ManageTemplate from '/src/components/ManageTemplate.vue';
  import axios from "axios";

  const news = reactive([
    { id: "ID", title: "行程ID", type: "text" },
    { id: "title", title: "行程名稱", type: "text" },
    { id: "time", title: "行程時間", type: "text" },
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
    .buttons{
          display: flex;
          margin-left: 305px;
          margin-top: 30px;
          button{
              width: 129px;
              height: 42px;
              border:none;
              background-color: map-get($color, bgc1 );
              margin-right: 20px;
          }
      }
  }
</style>
  