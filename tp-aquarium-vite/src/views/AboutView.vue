<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <nav><router-link to="/about/aaa">aaa</router-link></nav>
  <RouterView/>
</template>

<script setup>
	import{ RouterLink, RouterView } from "vue-router";
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
