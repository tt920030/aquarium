<template>
  <div class="stores">
    <div class="banner">
      <h1>網路商城<br />STORES</h1>
    </div>
    <main>
      <!-- 導覽 -->
      <div class="wrapper navigation">
        <p>網路商城>所有商品</p>
      </div>
      <!-- 商品區塊 -->
      <div class="wrapper product_content">
        <!-- 商品篩選區塊 -->
        <div class="product_filter">
          <div>
            <ul>
              <li
                class="filterByAll"
                @click="
                  filterNumber = 1;
                  resetToShow();
                "
              >
                <h3>所有商品</h3>
              </li>
              <!-- <li class="filterByBest"><h3>熱門商品</h3></li> -->
              <li class="filterByAnimal">
                <h3 @click="toggleAnimal">依動物</h3>
                <ul v-show="animalIsDroppedDown">
                  <li
                    @click="
                      filterNumber = 2;
                      resetToShow();
                    "
                  >
                    <h4>企鵝</h4>
                  </li>
                  <li
                    @click="
                      filterNumber = 3;
                      resetToShow();
                    "
                  >
                    <h4>海豚</h4>
                  </li>
                  <li
                    @click="
                      filterNumber = 4;
                      resetToShow();
                    "
                  >
                    <h4>魚類</h4>
                  </li>
                  <li
                    @click="
                      filterNumber = 5;
                      resetToShow();
                    "
                  >
                    <h4>水母</h4>
                  </li>
                  <li
                    @click="
                      filterNumber = 6;
                      resetToShow();
                    "
                  >
                    <h4>其他</h4>
                  </li>
                </ul>
              </li>
              <li class="filterByType">
                <h3 @click="toggleType">依種類</h3>
                <ul v-show="typeIsDroppedDown">
                  <li
                    @click="
                      filterNumber = 7;
                      resetToShow();
                    "
                  >
                    <h4>玩偶</h4>
                  </li>
                  <li
                    @click="
                      filterNumber = 8;
                      resetToShow();
                    "
                  >
                    <h4>文具</h4>
                  </li>
                  <li
                    @click="
                      filterNumber = 10;
                      resetToShow();
                    "
                  >
                    <h4>食品</h4>
                  </li>
                  <li
                    @click="
                      filterNumber = 9;
                      resetToShow();
                    "
                  >
                    <h4>吊飾</h4>
                  </li>
                  <li
                    @click="
                      filterNumber = 11;
                      resetToShow();
                    "
                  >
                    <h4>其他</h4>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <!-- 商品列 -->
        <ul class="product_list">
          <ProductList
            :productInPage="productInPage"
            :filterNumber="filterNumber"
            :currentPage="currentPage"
          ></ProductList>
        </ul>
      </div>
      <!-- 頁碼 -->
      <div class="wrapper page_list">
        <ul>
          <Paginator
            :totalPage="totalPage"
            :currentPage="currentPage"
            @currentPage="handleCurrentPage"
          ></Paginator>
        </ul>
      </div>
    </main>
  </div>
  <CustomerService></CustomerService>
  <router-view></router-view>
</template>
<script setup>
import CustomerService from "/src/components/CustomerService.vue";
import ProductList from "../components/ProductList.vue";
import Paginator from "../components/Paginator.vue";
import { reactive, ref, defineEmits } from "vue";
// 篩選種類
const filterNumber = ref(1);
//所有商品
const products = reactive([
  {
    id: 1,
    name: "企鵝娃娃",
    price: 500,
    intro:
      "企鵝絨毛娃娃的外觀可愛，經典的設計包括黑白相間的身體和圓滾滾的身材，令人難以抗拒。面料使用高品質的絨毛製成，手感柔軟舒適。",
    img: "src/img/product_1_1.jpg",
    animal: 1,
    type: 1,
  },
  {
    id: 2,
    name: "海豹絨毛娃娃",
    price: 400,
    intro: "可愛的海豹絨毛娃娃為館內的人氣熱賣款！喜歡海豹的你千萬不要錯過了",
    img: "src/img/product_2_1.jpg",
    animal: 5,
    type: 1,
  },
  {
    id: 3,
    name: "鯨魚娃娃",
    price: 500,
    intro: "此款鯨魚娃娃為特殊涼感材質所製成，最適合炎熱的夏天抱著玩耍",
    img: "src/img/product_3_1.png",
    animal: 3,
    type: 1,
  },
  {
    id: 4,
    name: "海洋生物文具組",
    price: 300,
    intro: "內有鯊魚筆記本及魚類圖案的3色原字筆",
    img: "src/img/product_4_1.png",
    animal: 5,
    type: 2,
  },
  {
    id: 5,
    name: "企鵝筆記本",
    price: 120,
    intro: "可愛的企鵝筆記本，有空白和格線內頁，不同的使用情境都能完美符合！",
    img: "src/img/product_5_1.jpg",
    animal: 1,
    type: 2,
  },
  {
    id: 6,
    name: "海洋圖案資料夾",
    price: 200,
    intro: "A4大小的海洋圖案資料夾，為海生館款獨家款！不要錯過！",
    img: "src/img/product_6_1.jpg",
    animal: 5,
    type: 2,
  },
  {
    id: 7,
    name: "水母鑰匙圈",
    price: 150,
    intro: "特殊材質的水母鑰匙圈在晚上會發光！完美重現水族館內的人氣水母缸",
    img: "src/img/product_7_1.jpg",
    animal: 4,
    type: 3,
  },
  {
    id: 8,
    name: "海豚鑰匙圈",
    price: 150,
    intro: "此款鑰匙圈為陶瓷材質",
    img: "src/img/product_8_1.jpg",
    animal: 2,
    type: 3,
  },
  {
    id: 9,
    name: "魟魚絨毛吊飾",
    price: 180,
    intro: "Ｑ版魟魚造型絨毛吊飾為館內的人氣商品之一！",
    img: "src/img/product_9_1.jpg",
    animal: 3,
    type: 3,
  },
  {
    id: 10,
    name: "海洋生物造型餅乾",
    price: 300,
    intro: "款造型餅乾為牛奶口味，主打健康無負擔的餅乾，適合所有小朋友食用！",
    img: "src/img/product_10_1.jpg",
    animal: 5,
    type: 4,
  },
  {
    id: 11,
    name: "海洋圖案滑鼠墊",
    price: 200,
    intro: "繽紛的海洋圖案滑鼠墊為海生館獨家款！",
    img: "src/img/product_11_1.jpg",
    animal: 5,
    type: 5,
  },
]);

//符合條件的商品
let productToShow = reactive(products);
//每頁顯示九個商品，符合條件的商品有幾頁
let totalPage = ref(Math.ceil(productToShow.length / 9));
// 在目前頁面要顯示的商品
let productInPage = reactive(products.slice(0, 9));
// 目前在第幾頁
const currentPage = ref(1);
const typeIsDroppedDown = ref(null);
const animalIsDroppedDown = ref(null);

if (window.innerWidth > 414) {
  typeIsDroppedDown.value = true;
  animalIsDroppedDown.value = true;
} else {
  typeIsDroppedDown.value = false;
  animalIsDroppedDown.value = false;
}

//頁碼切換
const handleCurrentPage = (page) => {
  currentPage.value = page;
  productInPage = productToShow.slice(
    (currentPage.value - 1) * 9,
    currentPage.value * 9
  );
};

//重新渲染商品列
const resetToShow = () => {
  currentPage.value = 1;
  switch (filterNumber.value) {
    case 1:
      productToShow = products;
      break;
    case 2:
      productToShow = products.filter((product) => product.animal == 1);
      break;
    case 3:
      productToShow = products.filter((product) => product.animal == 2);
      break;
    case 4:
      productToShow = products.filter((product) => product.animal == 3);
      break;
    case 5:
      productToShow = products.filter((product) => product.animal == 4);
      break;
    case 6:
      productToShow = products.filter((product) => product.animal == 5);
      break;
    case 7:
      productToShow = products.filter((product) => product.type == 1);
      break;
    case 8:
      productToShow = products.filter((product) => product.type == 2);
      break;
    case 9:
      productToShow = products.filter((product) => product.type == 3);
      break;
    case 10:
      productToShow = products.filter((product) => product.type == 4);
      break;
    case 11:
      productToShow = products.filter((product) => product.type == 5);
      break;
  }
  totalPage = Math.ceil(productToShow.length / 9);
  productInPage = productToShow.slice(
    (currentPage.value - 1) * 9,
    currentPage.value * 9
  );
  if (window.innerWidth < 415) {
    typeIsDroppedDown.value = false;
    animalIsDroppedDown.value = false;
  }
};

//
const toggleType = () => {
  if (window.innerWidth < 415) {
    typeIsDroppedDown.value = !typeIsDroppedDown.value;
    if (animalIsDroppedDown.value == true) {
      animalIsDroppedDown.value = !animalIsDroppedDown.value;
    }
  } else {
    typeIsDroppedDown.value = true;
    animalIsDroppedDown.value = true;
  }
};
const toggleAnimal = () => {
  if (window.innerWidth < 415) {
    animalIsDroppedDown.value = !animalIsDroppedDown.value;
    if (typeIsDroppedDown.value == true) {
      typeIsDroppedDown.value = !typeIsDroppedDown.value;
    }
  } else {
    typeIsDroppedDown.value = true;
    animalIsDroppedDown.value = true;
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/sass/page/stores";
</style>
