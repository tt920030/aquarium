<template>
    <body class=game_index>
        <Header></Header>

        <div class="top">
            <img src="../img/game_photo.png" alt="">
        </div>

        <div class="banner">
            <div class="content">
                <h1>海洋知識考驗</h1>
                <br>
                <p>挑戰看看你對於海洋的了解有多少吧！</p>
            </div>
            <div class="content_mask">
                <h1>海洋知識考驗</h1>
                <br>
                <p>挑戰看看你對於海洋的了解有多少吧！</p>
            </div>
        </div>

        <div class="game_index_rule">

            <div class="rule">
                <h2>遊戲規則</h2>
                <h3>1、遊戲內容分為拼圖關卡以及問答關卡<br>
                    2、拼圖關卡：共一關，可自行選擇拼圖數量<br>
                    3、問答關卡：共兩關，皆為選擇題<br>
                    4、通過關卡可獲得隨機商品折價券！
                </h3>

                <div class="game_index_button">
                    <a class="btn" href="_game_level.html">
                        <h3>我要挑戰</h3>
                    </a>
                    <RouterLink to="game_choose">
                        <h3>我要挑戰</h3>
                    </RouterLink>
                </div>
                <img src="../img/game_shark.png" alt="">
            </div>

        </div>





        <Footer></Footer>
    </body>


    <RouterView></RouterView>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";

import Header from '/src/components/Header.vue';
import Footer from '/src/components/Footer.vue';
</script>
<style lang="scss" scoped>
@import "../assets/sass/page/game_index"
</style>