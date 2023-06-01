<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router';


// const router = useRouter();
import { onMounted, reactive, ref } from "vue";

const hide = ref(false);

const openLogin = (n) => {
  // console.log(n );
  hide.value = n;
  // console.log(hide.value);
};


</script>

<template>

  <!-- <router-link to="/"></router-link> -->
  <Header @openLogin="openLogin"></Header>
  <RouterView />
  <Footer></Footer>
  <LogIn v-if="hide" @close="openLogin"></LogIn>
</template>

<style lang="scss">

  @import "@/assets/sass/style.scss";
  
</style>



