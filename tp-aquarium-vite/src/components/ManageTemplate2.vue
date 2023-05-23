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
        <td><button>修改</button></td>
        <td><button>刪除</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import Header from "/src/components/CMSHeader.vue";
// 引入bootstrap
import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// a =  a b = a
const props = defineProps(["title", "forms"]);
</script>
<style lang="scss" scoped>
@import "bootstrap/dist/css/bootstrap.min.css";
.row {
  margin-right: 0;
}
.row.justify-content-center {
  margin-left: -170px;
}
</style>