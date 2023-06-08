<template>
  <div class="overnight">
    <!-- overnight banner -->
    <overnight-title></overnight-title>
    <!-- overnight circle -->
    <overnight-main></overnight-main>
    <!-- overnight 跑馬燈 -->
    <overnight-newsticker></overnight-newsticker>
    <!-- overnight notice -->
    <overnight-notice></overnight-notice>
  </div>
  <RouterView></RouterView>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import OvernightTitle from "/src/components/overnight/OvernightTitle.vue";
import OvernightMain from "/src/components/overnight/OvernightMain.vue";
import OvernightNewsticker from "/src/components/overnight/OvernightNewsticker.vue";
import OvernightNotice from "/src/components/overnight/OvernightNotice.vue";
</script>

<style lang="scss" scoped>
.overnight {

}
</style>
