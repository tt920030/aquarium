<template>
  <Header @clicked="importClicked($event)"></Header>
  <main class="cms">
    <div v-if="clicked > 0" class="mb-3">
      <h3>{{ clicked ? manages[clicked].name : "" }}</h3>
      <button>
        <RouterLink :to="clicked ? manages[clicked].create : ''">{{
          clicked ? manages[clicked].active1 : ""
        }}</RouterLink>
      </button>
    </div>
    <div v-if="!clicked">
      <h3>請點選左方連結使用各項資料管理</h3>
    </div>
    <RouterView></RouterView>
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref, watch } from "vue";
import Header from "/src/components/CMSHeader.vue";
import "bootstrap";
const clicked = ref("");
const importClicked = (e) => {
  clicked.value = e;
};
const manages = [
  { name: "請選擇管理項目" },
  { name: "消息管理", create: "news_create", active1: "新增消息" },
  { name: "商品管理", create: "product_create", active1: "新增商品" },
  { name: "行程管理", create: "journey_create", active1: "新增行程" },
  { name: "折價券管理", create: "coupon_create", active1: "新增折價券" },
  { name: "客服", create: "customer_create", active1: "新增客服" },
];
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
onMounted(() => {
  const savedClicked = localStorage.getItem("clicked");
  if (savedClicked) {
    clicked.value = savedClicked;
  }
});
import ManageTemplate from "/src/components/ManageTemplate.vue";
import ManageTemplate2 from "/src/components/ManageTemplate2.vue";
import { faPersonWalkingWithCane } from "@fortawesome/free-solid-svg-icons";
</script>
<style lang="scss" scoped>
@import "bootstrap/dist/css/bootstrap.min.css";

main.cms {
  box-sizing: border-box;
  padding: 50px 40px 0 200px;

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

  a {
    text-decoration: none;
  }
}
</style>
