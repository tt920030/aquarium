<template>
    <Header></Header>
    <div class="news">
        <div class="banner">
            <h1>最新消息<br>NEWS</h1>
        </div>

        <main class="wrapper list">
            <ul>
                <RouterLink v-for="item in items.slice(9*(page.currentPage - 1) ,9*page.currentPage)" :to="{ path: '/news/news_page' }" :key="item.id">
                    <li>
                        <div class="container">
                            <img class="picture" :src="item.src" alt="">
                            <img class="wave" src="../img/news_bg.svg" alt="">
                        </div>
                        <div class="link_text">
                            <p class="time">{{ item.time }}</p>
                            <p class="title">{{ item.title }}</p>
                            <a href="">
                                <p>more</p>
                            </a>
                        </div>
                    </li>
                </RouterLink>

            </ul>
        </main>

        <Page :total-items="page.totalItems" :items-per-page="page.itemsPerPage" :current-page="page.currentPage" :key="page.currentPage" @current="next"></Page>

    </div>
    <Footer></Footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { computed, onMounted, reactive, ref } from 'vue';
import Page from "../components/Page.vue";


// 最新消息列表
const items = ref([
    {
        id: 1,
        src: "src/img/news_picture1-1.jpg",
        time: "2023.4.18",
        title: "企鵝館迎來新成員！小企鵝寶寶布布誕生了！保育人員細心照顧，企鵝寶寶健康成長中！"
    },
    {
        id: 2,
        src: "@/img/news_picture1-1.jpg",
        time: "2023.4.18",
        title: "企鵝館迎來新成員！小企鵝寶寶布布誕生了！保育人員細心照顧，企鵝寶寶健康成長中！"
    },
    {
        id: 3,
        src: "@/img/news_picture1-1.jpg",
        time: "2023.4.18",
        title: "企鵝館迎來新成員！小企鵝寶寶布布誕生了！保育人員細心照顧，企鵝寶寶健康成長中！"
    },
    {
        id: 4,
        src: "@/img/news_picture1-1.jpg",
        time: "2023.4.18",
        title: "企鵝館迎來新成員！小企鵝寶寶布布誕生了！保育人員細心照顧，企鵝寶寶健康成長中！"
    },
    {
        id: 5,
        src: "@/img/news_picture1-1.jpg",
        time: "2023.4.18",
        title: "企鵝館迎來新成員！小企鵝寶寶布布誕生了！保育人員細心照顧，企鵝寶寶健康成長中！"
    },
    {
        id: 6,
        src: "@/img/news_picture1-1.jpg",
        time: "2023.4.18",
        title: "企鵝館迎來新成員！小企鵝寶寶布布誕生了！保育人員細心照顧，企鵝寶寶健康成長中！"
    },
    {
        id: 7,
        src: "@/img/news_picture1-1.jpg",
        time: "2023.4.18",
        title: "企鵝館迎來新成員！小企鵝寶寶布布誕生了！保育人員細心照顧，企鵝寶寶健康成長中！"
    },
    {
        id: 8,
        src: "@/img/news_picture1-1.jpg",
        time: "2023.4.18",
        title: "企鵝館迎來新成員！小企鵝寶寶布布誕生了！保育人員細心照顧，企鵝寶寶健康成長中！"
    },
    {
        id: 9,
        src: "@/img/news_picture1-1.jpg",
        time: "2023.4.30",
        title: "企鵝館迎來新成員！小企鵝寶寶布布誕生了！保育人員細心照顧，企鵝寶寶健康成長中！"
    },
    {
        id: 10,
        src: "@/img/news_picture1-1.jpg",
        time: "2023.4.18",
        title: "企鵝館迎來新成員！小企鵝寶寶布布誕生了！保育人員細心照顧，企鵝寶寶健康成長中！"
    }
]);



// 頁數
const page = reactive({
    totalItems: items.value.length,
    itemsPerPage: 9,
    currentPage: 1
});

const next = (n) => {

    page.currentPage = n;

};

</script>

<style lang="scss" scoped>
@import "../../src/assets/sass/page/news";
</style>