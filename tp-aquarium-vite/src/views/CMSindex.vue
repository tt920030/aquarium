<template>
  <Header @clicked="importClicked($event)"></Header>
  <main>
    <div class="mb-3">
      <h3>{{ clicked?manages[clicked].name:'' }}</h3>
      <button>
        <RouterLink :to="clicked?manages[clicked].change:''">{{clicked?manages[clicked].active1:''}}</RouterLink>

      </button>
    </div>
    <RouterView></RouterView>

  </main>
</template>
  
<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import Header from "/src/components/CMSHeader.vue";
import 'bootstrap';
const clicked = ref('');
const importClicked= (e)=>{
  clicked.value= e;
}
const manages=[{},{name:'消息管理',change:'news_change',active1:'新增消息'},{name:'商品管理',active1:'新增商品'},{name:'行程管理',active1:'新增行程'},{name:'折價券管理',active1:'新增折價券'},{name:'客服',active1:'新增客服'}]
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

import ManageTemplate from "/src/components/ManageTemplate.vue";
import ManageTemplate2 from "/src/components/ManageTemplate2.vue";

</script>
<style lang="scss" scoped>
@import 'bootstrap/dist/css/bootstrap.min.css';

main {
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
}</style>
  