<template>
  <div class="not-found">
    <div>
      <h1>404<br>Not Found</h1>
      <img src="/src/img/logo-white.svg" alt="">
      <RouterLink to="/">click here go home</RouterLink>

    </div>

    <video autoplay muted loop id="myVideo">
      <source src="/src/img/404_nemo.mp4" type="video/mp4">
    </video>

  </div>
  <RouterView></RouterView>
</template>

<script setup>

import { RouterView, RouterLink } from 'vue-router';


</script>

<style lang="scss" scope>
div.not-found {
  height: 100vh;
  width: 100vw;
  background-color: none;

  ::selection {
    background-color: rgba(76, 76, 76,.5);
   
    color: #ffffff;
  
  }

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

  img {
    width: 10vw;
    z-index: 10;
    top: 3vw;
    right: 3vw;
    position: fixed;
  }

  a {
    top: 28vw;
    color: white;
    left: 8vw;
    position: fixed;
    z-index: 10;

    font-size: 5vw;
    font-weight: bold;
    line-height: 10vw;
    letter-spacing: .5vw;

    &:hover {
      color: map-get($color,warning);
    }
  }

  #myVideo {
    position: fixed;
    left: 0;
    top: 0;

    width: 100vw;
    object-fit: cover;



  }


}</style>