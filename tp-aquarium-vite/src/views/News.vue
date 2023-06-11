<template>
  <div class="news">
    <div class="banner">
      <h1>最新消息<br />NEWS</h1>
    </div>

    <main class="wrapper list">
      <ul>
        <RouterLink
          v-for="item in items.slice(
            9 * (page.currentPage - 1),
            9 * page.currentPage
          )"
          :to="{ path: `/news/${item.id}` }"
          :key="item.id"
        >
          <!-- <a v-for="item in items.slice(page.itemsPerPage*(page.currentPage - 1) ,page.itemsPerPage*page.currentPage)" :key="item.id" > -->
          <li :data-id="item.id">
            <div class="container">
              <img class="picture" :src="`/img/${item.src}`" alt="" />
              <img class="wave" src="/img/news_bg.svg" alt="" />
            </div>
            <div class="link_text">
              <p class="time">{{ item.time }}</p>
              <p class="title">{{ item.title }}</p>
              <a href="">
                <p>more</p>
              </a>
            </div>
          </li>
          <!-- </a> -->
        </RouterLink>
      </ul>
    </main>

    <Page
      :total-items="items.length"
      :items-per-page="page.itemsPerPage"
      :current-page="page.currentPage"
      :key="page.currentPage"
      @current="next"
    ></Page>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { computed, onMounted, reactive, ref, onBeforeMount } from "vue";
import Page from "../components/Page.vue";
import axios from "axios";
import { useRouter } from "vue-router";

// 最新消息列表
const items = reactive([]);

const router = useRouter();

// 頁數
const page = reactive({
  // totalItems: items.length,
  itemsPerPage: 9,
  currentPage: 1,
});

const next = (n) => {
  page.currentPage = n;
};

const news = () => {
  axios
    .post(`${import.meta.env.VITE_API_URL}news.php`) //使用get或post等取得路徑資料(php)

    .then((res) => {
      //回傳後如何處理

      // console.log(res.data);

      res.data.forEach((element) => {
        items.push({
          id: element["ID"],
          src: element["PICTURE"],
          time: element["DATE"],
          title: element["TITLE"],
        });
      });

      // console.log(items);
    })
    .catch((err) => console.log(err)); //錯誤如何處理
};

onMounted(() => {
  news();
});
</script>

<style lang="scss" scoped>
@import "../../src/assets/sass/page/news";
</style>
