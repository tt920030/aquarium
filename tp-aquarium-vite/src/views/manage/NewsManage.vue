<template>
  
    <!-- <div class="mb-3">
      <h3>行程管理</h3>
      <button>新增行程</button>
    </div> -->
    <manage-template :title="title" :forms="forms" :pageNow="pageNow"></manage-template>
 
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import axios from 'axios';

import ManageTemplate from "/src/components/ManageTemplate2.vue";
const title = reactive([
  "消息標題",
  "消息副標題",
  "發布日期",
  "修改",
  "刪除",
]);
const forms = reactive([]);

const pageNow = '消息';
const news = () => {
  axios.post('http://localhost/PHP/newsManage.php')	//使用get或post等取得路徑資料(php)

  .then((res) => {	//回傳後如何處理

    console.log(res.data);

    res.data.forEach(element => {
      forms.push([element["TITLE"], element["SUB_TITLE"], element["DATE"],element['ID']]);
    });

    // console.log(forms);

  }).catch(err => console.log(err))  //錯誤如何處理  
}

onMounted(() => {
  news();
});

</script>
<style lang="scss" scoped>

</style>