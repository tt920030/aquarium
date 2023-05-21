<template>
  <div class="not-found">
    <h1>404<br>Not Found</h1>
    <video autoplay muted loop id="myVideo">
      <source src="/src/img/404_nemo.mp4" type="video/mp4">
    </video>
    <RouterLink to="/">click here go home</RouterLink>
  </div>
  <RouterView></RouterView>
</template>

<script setup>

import { RouterView, RouterLink } from 'vue-router';


</script>

<style lang="scss" scope>
div.not-found{
  height: 100vh;
  width: 100vw;
  background-color:none;

  h1 {
    top: 0;
    left: 0;
    position: fixed;
    z-index: 10;
    padding: 5vw 8vw;
    font-size: 8vw;
    line-height: 10vw;
    letter-spacing: 1vw;
  }

  a{
    top: 44vh;
    color: white;
    left: 0;
    position: fixed;
    z-index: 10;
    padding: 5vw 8vw;
    font-size: 5vw;
    font-weight: bold;
    line-height: 10vw;
    letter-spacing: .5vw;
    &:hover{
      color:map-get($color, bgc2 );
    }
  }
  #myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100vw;

}

}


</style>