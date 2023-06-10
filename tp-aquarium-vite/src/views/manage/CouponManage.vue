<template>
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
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";

// 引入bootstrap

import ManageTemplate from "/src/components/ManageTemplate2.vue";
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
const forms = reactive([
  ["無敵折價券", "88888", 10000, 0.1, 10000, 30],
  ["無敵折價券", "88888", 10000, 0.1, 10000, 30],
]);
</script>
<style lang="scss" scoped></style>
