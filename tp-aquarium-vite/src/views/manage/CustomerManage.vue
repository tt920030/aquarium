<template>
  <manage-template
    :title="title"
    :forms="forms"
    :pageNow="pageNow"
    :resData="resData"
  ></manage-template>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import ManageTemplate from "/src/components/ManageTemplate2.vue";
import axios from "axios";

onMounted(() => {
  axios
    .post(`${import.meta.env.VITE_API_URL}getCustomer.php`) //使用get或post等取得路徑資料(php))

    .then((res) => {
      // console.log(res.data); //回傳後如何處理
      res.data.forEach((element) => {
        forms.push([element["KEYWORDS"], element["ANSWER"], element["ID"]]);
      });
      resData.push(...res.data);
      console.log(resData);
    })
    .catch((err) => console.log(err)); //錯誤如何處理
});

const title = reactive(["關鍵字", "回覆", "問題編號", "修改", "刪除"]);
const forms = reactive([]);
const resData = reactive([]);
const pageNow = "客服";
</script>

<style lang="scss" scoped></style>
