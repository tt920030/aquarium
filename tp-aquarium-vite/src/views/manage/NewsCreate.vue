<template>
    <main>
        <!-- <div class="mb-3">
            <h3>消息管理</h3>
        </div> -->
        <ManageTemplate :news="news"></ManageTemplate>
        <div class="buttons">
            <button>取消</button>
            <button>新增</button>
        </div>
    </main>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";


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
  .buttons{
        display: flex;
        margin-left: 305px;
        margin-top: 30px;
        button{
            width: 129px;
            height: 42px;
            border:none;
            background-color: map-get($color, bgc1 );
            margin-right: 20px;
        }
    }
}
</style>


