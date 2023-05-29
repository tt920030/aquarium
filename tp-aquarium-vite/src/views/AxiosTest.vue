<template>
    <div>
        搜尋帳號:<input name="account" type="text" v-model="account">
        回傳結果: {{ data }}
    </div>
</template>

<script setup>
import axios from 'axios';
import { watch } from 'vue';
import { ref } from 'vue';
const data = ref(); //最終取得資料
const account = ref();// 綁定input v-model 
const getData = function () {		//取得資料函式
    let params = new URLSearchParams();     //建立PHP可接受的格式
    params.append('account',account.value); //將搜尋值傳入params物件內
    axios.post('http://localhost/AJAX/jQuery/API.php', //使用get或post等取得路徑資料(php)
       params	
    )				

        .then((res) => {			//回傳後如何處理
          
            console.log(res.data);
            data.value = res.data;

        }).catch(err => console.log(err))  //錯誤如何處理

};

watch(() => account.value, (newVal) => {
    getData();
})

</script>

<style lang="scss" scoped></style>