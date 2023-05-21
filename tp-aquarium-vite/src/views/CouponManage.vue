<template>
  <Header></Header>
  <main>
    <div class="mb-3">
      <h3>折價券管理</h3>
      <button>新增折價券</button>
    </div>
<<<<<<< HEAD
<!-- 
    <table class="table table-bordered border-dark">
      <thead class="table-primary border-dark">
        <tr>
          <th scope="col">{{ title.a }}</th>
          <th scope="col">{{ title.b }}</th>
          <th scope="col">{{ title.c }}</th>
          <th scope="col">{{ title.d }}</th>
          <th scope="col">{{ title.e }}</th>
          <th scope="col">{{ title.f }}</th>
          <th scope="col">{{ title.g }}</th>
          <th scope="col">{{ title.h }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="form in forms" :key="form.a">
          <td v-if="form.a">{{ form.a }}</td>
          <td v-if="form.b">{{ form.b }}</td>
          <td v-if="form.c">{{ form.c }}</td>
          <td v-if="form.d">{{ form.d }}</td>
          <td v-if="form.e">{{ form.e }}</td>
          <td v-if="form.f">{{ form.f }}</td>
          <td v-if="form.g">{{ form.g }}</td>
          <td v-if="form.h">{{ form.h }}</td>
        <tr v-for="form in forms" :key="form.a">
          <td v-if="form.a">{{ form.a }}</td>
          <td v-if="form.b">{{ form.b }}</td>
          <td v-if="form.c">{{ form.c }}</td>
          <td v-if="form.d">{{ form.d }}</td>
          <td v-if="form.e">{{ form.e }}</td>
          <td v-if="form.f">{{ form.f }}</td>
          <td v-if="form.g">{{ form.g }}</td>
          <td v-if="form.h">{{ form.h }}</td>
          <td><button>修改</button></td>
          <td>刪除</td>
        </tr>
      </tbody>
    </table> -->
    <ManageTemplate :title="title" :forms="forms"></ManageTemplate>
=======
    <ManageTemplate
      :title="title"
      :forms="forms"
      :formName="formName"
    ></ManageTemplate>
>>>>>>> anniesu
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import Header from "/src/components/CMSHeader.vue";
// 引入bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import ManageTemplate from '/src/components/ManageTemplate2.vue'
// a =  a b = a
const title = reactive(
  {
    a: "名稱",
    b: "序號",
    c: "面額",
    d: "折數",
    e: "抵用門檻",
    f: "有效期限",
    g: "修改",
    h: "刪除",
  },
);
const forms = reactive([
  {
    a: "無敵折價券",
    b: "88888",
    c: 10000,
    d: 0.1,
    e: 10000,
    f: 30,
    a: "無敵折價券",
    b: "88888",
    c: 10000,
    d: 0.1,
    e: 10000,
    f: 30,
  },
  {
    a: "無敵折價券",
    b: "88888",
    c: 10000,
    d: 0.1,
    e: 10000,
    f: 30,
    a: "無敵折價券",
    b: "88888",
    c: 10000,
    d: 0.1,
    e: 10000,
    f: 30,
  },
  {
    a: "無敵折價券",
    b: "88888",
    c: 10000,
    d: 0.1,
    e: 10000,
    f: 30,
  },
=======
import ManageTemplate from "/src/components/ManageTemplate2.vue";

// 表單name
const formName = "coupon";

const title = reactive([
  "名稱",
  "序號",
  "面額",
  "折數",
  "抵用門檻",
  "有效期限",
  "修改",
  "刪除",
]);
let forms = reactive([
  ["無敵折價券", "88888", 10000, 0.1, 10000, 30],
  ["無敵折價券", "88888", 10000, 0.1, 10000, 30],
>>>>>>> anniesu
]);
</script>
<style lang="scss" scoped>
main {
  box-sizing: border-box;
  padding: 50px 20px 0 200px;
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
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> anniesu
