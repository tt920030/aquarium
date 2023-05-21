<template>
 

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
          <td><button>修改</button></td>
          <td>刪除</td>
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
import "bootstrap/dist/css/bootstrap.min.css";
// a =  a b = a
const props = defineProps(['title','forms'])
</script>
<style lang="scss" scoped>

  .row {
    margin-right: 0;
  }
  .row.justify-content-center {
    margin-left: -170px;
  }

</style>
