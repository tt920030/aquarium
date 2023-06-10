<template>
  <table class="table table-bordered border-dark">
    <thead class="table-primary border-dark">
      <tr>
        <th scope="col" v-for="(title, index) in title" :key="index">
          {{ title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="form in forms" :key="form.a">
        <td v-for="item in form">{{ item }}</td>
        <td><button @click="goChange" :id="form.ID">修改</button></td>
        <td><button>刪除</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { onMounted, reactive, ref } from "vue";
const router = useRouter();
import Header from "/src/components/CMSHeader.vue";
// 引入bootstrap
import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// a =  a b = a
const props = defineProps(["title", "forms",'pageNow']);
const changePage  = ref('');
switch(props.pageNow){
case '消息':
changePage.value = "/cms/news_change";
break;
case '行程':
changePage.value = "/cms/journey_change";
break;
case '商品':
changePage.value = "/cms/product_change";
break;
case'客服':
changePage.value = "/cms/customer_change";
break;
case '折價券':
changePage.value = "/cms/coupon_change";
break;
}
// 修改跳轉
const goChange =() => {
  // console.log(props.pageNow);
  router.push(changePage.value);
}
</script>
<style lang="scss" scoped>
@import 'bootstrap/dist/css/bootstrap.min.css';
.row {
  margin-right: 0;
}
.row.justify-content-center {
  margin-left: -170px;
}
</style>