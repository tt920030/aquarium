<template>
  <Header></Header>
  <main>
    <div class="mb-3">
      <h3>折價券管理</h3>
      <button>新增折價券</button>
    </div>

    <table class="table table-bordered border-dark">
      <thead class="table-primary border-dark">
        <tr>
          <th scope="col">名稱</th>
          <th scope="col">序號</th>
          <th scope="col">面額</th>
          <th scope="col">折數</th>
          <th scope="col">抵用門檻</th>
          <th scope="col">有效期限</th>
          <th scope="col">修改</th>
          <th scope="col">刪除</th>
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
          <td><button>修改</button></td>
          <td>刪除</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import Header from "/src/components/CMSHeader.vue";
// 引入bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// a =  a b = a
const forms = reactive([
  {
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
  {
    a: "無敵折價券",
    a: "88888",
    c: 10000,
    d: 0.1,
    e: 10000,
    f: 30,
  },
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
</style>
