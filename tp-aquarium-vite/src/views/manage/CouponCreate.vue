<template>
  
  <ManageTemplate :news="news" :creates="creates"></ManageTemplate>
  <div class="buttons">
    <button>取消</button>
    <button @click="creates++">新增</button>
  </div>

</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import ManageTemplate from "/src/components/ManageTemplate.vue";
import { onMounted, reactive, ref } from "vue";

import axios from "axios";
const creates = ref(false);
const news = reactive([
    
    { id: "name", title: "名稱", type: "text" },
    { id: "serial_number", title: "序號", type: "text" },
    { id: "deno", title: "面額", type: "text" },
    { id: "need_price", title: "抵用門檻", type: "text" },
    { id: "duration", title: "有效期限", type: "text" },
    
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
