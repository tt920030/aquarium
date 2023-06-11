<template>
  <body class="game_choose">
    <Header></Header>

    <div class="top">
      <img src="https://tibamef2e.com/thd101/g6/img/game_photo.png" alt="" />
    </div>

    <div class="banner">
      <div class="content">
        <h1>海洋知識考驗</h1>
        <br />
        <p>挑戰看看你對於海洋的了解有多少吧！</p>
      </div>
      <div class="content_mask">
        <h1>海洋知識考驗</h1>
        <br />
        <p>挑戰看看你對於海洋的了解有多少吧！</p>
      </div>
    </div>

    <div class="game_choose_choose">
      <RouterLink to="/game_quiz">
        <div class="choose_quiz">
          <h2>問答遊戲</h2>
          <img
            src="https://tibamef2e.com/thd101/g6/img/game_choose_quiz.png"
            alt="Quiz Image"
          />
        </div>
      </RouterLink>

      <RouterLink to="/game_puzzle">
        <div class="choose_puzzle">
          <h2>拼圖遊戲</h2>
          <img
            src="https://tibamef2e.com/thd101/g6/img/game_choose_puzzle.png"
            alt="Puzzle Image"
          />
        </div>
      </RouterLink>
    </div>

    <Footer></Footer>
  </body>

  <!-- <RouterView></RouterView> -->
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";

import Header from "/src/components/Header.vue";
import Footer from "/src/components/Footer.vue";
</script>
<style lang="scss" scoped>
@import "../../assets/sass/page/game_choose";
</style>
