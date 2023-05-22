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
    
            <div class="game_choose">
    
                <div class="choose">

                </div>
    
            </div>
    

        <Footer></Footer>
    </body>
    
    
    <RouterView></RouterView>
    
    </template>
    <script setup>  
    import{ RouterLink, RouterView } from "vue-router";
    import { onMounted, reactive, ref } from "vue";
    
    import Header from '/src/components/Header.vue';
    import Footer from '/src/components/Footer.vue';
    </script>
    <style lang="scss" scoped>
    @import "../../assets/sass/page/game_index"
    </style>