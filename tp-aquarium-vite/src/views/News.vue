<template>
    <Header></Header>
    <div class="news">
        <div class="banner">
            <h1>最新消息<br>NEWS</h1>
        </div>

        <main class="wrapper list">
            <ul>
                <RouterLink to="/news/news_page">
                    <li>
                        <div class="container">
                            <img class="picture" src="../img/news_picture1-1.jpg" alt="">
                            <img class="wave" src="../img/news_bg.svg" alt="">
                        </div>
                        <div class="link_text">
                            <p class="time">2023.4.18</p>
                            <p class="title">企鵝館迎來新成員！小企鵝寶寶布布誕生了！保育人員細心照顧，企鵝寶寶健康成長中！</p>
                            <a href="">
                                <p>more</p>
                            </a>
                        </div>
                    </li>
                </RouterLink>
                

                <li>
                    <div class="container">
                        <img class="picture" src="../img/news_picture2-1.jpg" alt="">
                        <img class="wave" src="../img/news_bg.svg" alt="">
                    </div>
                    <div class="link_text">
                        <p class="time">2023.4.18</p>
                        <p class="title">企鵝館迎來新成員！小企鵝寶寶布布誕生了！保育人員細心照顧，企鵝寶寶健康成長中！</p>
                        <a href="">
                            <p>more</p>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="container">
                        <img class="picture" src="../img/news_picture3-1.jpg" alt="">
                        <img class="wave" src="../img/news_bg.svg" alt="">
                    </div>
                    <div class="link_text">
                        <p class="time">2023.4.18</p>
                        <p class="title">企鵝館迎來新成員！小企鵝寶寶布布誕生了！保育人員細心照顧，企鵝寶寶健康成長中！</p>
                        <a href="">
                            <p>more</p>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="container">
                        <img class="picture" src="../img/about_link1.jpg" alt="">
                        <img class="wave" src="../img/news_bg.svg" alt="">
                    </div>
                    <div class="link_text">
                        <p class="time">2023.4.18</p>
                        <p class="title">企鵝館迎來新成員！小企鵝寶寶布布誕生了！保育人員細心照顧，企鵝寶寶健康成長中！</p>
                        <a href="">
                            <p>more</p>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="container">
                        <img class="picture" src="../img/about_link1.jpg" alt="">
                        <img class="wave" src="../img/news_bg.svg" alt="">
                    </div>
                    <div class="link_text">
                        <p class="time">2023.4.18</p>
                        <p class="title">企鵝館迎來新成員！小企鵝寶寶布布誕生了！保育人員細心照顧，企鵝寶寶健康成長中！</p>
                        <a href="">
                            <p>more</p>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="container">
                        <img class="picture" src="../img/about_link1.jpg" alt="">
                        <img class="wave" src="../img/news_bg.svg" alt="">
                    </div>
                    <div class="link_text">
                        <p class="time">2023.4.18</p>
                        <p class="title">企鵝館迎來新成員！小企鵝寶寶布布誕生了！保育人員細心照顧，企鵝寶寶健康成長中！</p>
                        <a href="">
                            <p>more</p>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="container">
                        <img class="picture" src="../img/about_link1.jpg" alt="">
                        <img class="wave" src="../img/news_bg.svg" alt="">
                    </div>
                    <div class="link_text">
                        <p class="time">2023.4.18</p>
                        <p class="title">企鵝館迎來新成員！小企鵝寶寶布布誕生了！保育人員細心照顧，企鵝寶寶健康成長中！</p>
                        <a href="">
                            <p>more</p>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="container">
                        <img class="picture" src="../img/news_picture1-3.jpg" alt="">
                        <img class="wave" src="../img/news_bg.svg" alt="">
                    </div>
                    <div class="link_text">
                        <p class="time">2023.4.18</p>
                        <p class="title">企鵝館迎來新成員！小企鵝寶寶布布誕生了！保育人員細心照顧，企鵝寶寶健康成長中！</p>
                        <a href="">
                            <p>more</p>
                        </a>
                    </div>
                </li>
            </ul>
        </main>

        <ul class="page">
            <li>
                <img src="../img/news_left.svg" alt="">
                <p>PREV</p>
            </li>
            <li class="num">
                <p>1</p>
            </li>
            <li class="num -on">
                <p>2</p>
            </li>
            <li>
                <p>NEXT</p>
                <img src="../img/news_right.svg" alt="">
            </li>
        </ul>
    </div>
    <Footer></Footer>
    <RouterView></RouterView>
</template>

<script setup>
import NewsPage from './news/NewsPage.vue';
</script>

<style lang="scss" scoped>
@import "../../src/assets/sass/page/news";
</style>