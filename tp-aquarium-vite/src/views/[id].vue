<template>
  <h1>{{route.path}}</h1>
</template>

<script setup>
    import { useRoute } from "vue-router";
    const route = useRoute();
    console.log(route.path);
</script>

<style>

</style>