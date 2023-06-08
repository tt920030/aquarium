<template>
  <div class="index">
    <!-- index-video & index_intro -->
    <index-title></index-title>
    <!-- 連結到園區介紹按鈕 -->
    <index-button></index-button>
    <!-- 行程介紹 & 最新消息 -->
    <index-main></index-main>
    <!-- index_ad -->
    <index-newsticker></index-newsticker>
  </div>
</template>

<script setup>
import IndexTitle from "/src/components/Index/IndexTitle.vue";
import IndexButton from "/src/components/Index/IndexButton.vue";
import IndexMain from "/src/components/Index/IndexMain.vue";
import IndexNewsticker from "/src/components/Index/IndexNewsticker.vue";
</script>

<style lang="scss" scoped>
.index{
  
}

</style>


