<template>
  
    <manage-template :title="title" :forms="forms"></manage-template>
    
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import ManageTemplate from "/src/components/ManageTemplate2.vue";
import axios from "axios";

const data = reactive([]);
onMounted(() => {
  let params = new URLSearchParams();  //建立PHP可接受的格式
    // params.append('data',data.value); //將搜尋值傳入params物件內
    axios.post('http://localhost/G6/getJourney.php') //使用get或post等取得路徑資料(php))				

    .then((res) => {			//回傳後如何處理
        res.data.forEach(element => {
          forms.push([
            element["ID"],
            element["NAME"],
            element["TIME"],
            element["PEOPLE"],
            element["CONTENT"],
          ]);
        });
        console.log(forms)
    }).catch(err => console.log(err))  //錯誤如何處理
});

const title = reactive([
  "行程ID",
  "行程名稱",
  "行程時間(hr)",
  "人數",
  "介紹",
  "修改",
  "刪除",
]);

const forms = reactive([]);

</script>

<style lang="scss" scoped>

</style>