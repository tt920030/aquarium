<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
// const router = useRouter();
import { onMounted, reactive, ref } from "vue";
import CustomerService from "/src/components/CustomerService.vue";

const hide = ref(false);
const color2 = ref(false);

const openLogin = (n) => {
  // console.log(n );
  hide.value = n;
  // console.log(hide.value);
};

const color = (i) => {
  // console.log(i);
  color2.value = i;
};
</script>

<template>
  <!-- <router-link to="/"></router-link> -->
  <Header
    @openLogin="openLogin"
    @color="color"
    v-if="!$route.meta.hideHeader"
  ></Header>
  <CustomerService v-if="!$route.meta.hideHeader"></CustomerService>
  <RouterView />
  <Footer :color2="color2" v-if="!$route.meta.hideHeader"></Footer>
  <LogIn v-if="hide" @close="openLogin"></LogIn>
</template>

<style lang="scss">
@import "@/assets/sass/style.scss";
</style>
