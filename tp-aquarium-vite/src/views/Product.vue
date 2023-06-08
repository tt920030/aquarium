<template>
  <div class="product">
    <div class="banner">
      <h1>網路商城<br />STORES</h1>
    </div>
    <main>
      <div class="wrapper navigation">
        <p>網路商城 ></p>
        <a href=""
          ><p class="product_name">{{ data.name }}</p></a
        >
      </div>
      <div class="wrapper content">
        <div class="photo">
          <img :src="imgUrl" alt="" />
          <div>
            <img
              v-for="(img, index) in data.imgs"
              :src="img"
              :key="index"
              :class="{ imgOn: currentImg == index }"
              alt=""
              @click="
                imgUrl = img;
                currentImg = index;
              "
            />
          </div>
        </div>
        <div class="rightside">
          <div class="product_info">
            <h3 class="product_name">{{ data.name }}</h3>
            <h4 class="product_price">NTD ${{ data.price }}</h4>
            <p class="product_intro">{{ data.intro }}</p>
          </div>
          <div class="numberBtn">
            <!-- 增加按鈕 -->
            <button class="substractBtn" @click="subCounter">-</button>
            <!-- 購買數量 -->
            <h4 class="number">{{ counter }}</h4>
            <!-- 減少按鈕 -->
            <button class="addBtn" @click="addCounter">+</button>
          </div>
          <a class="btn addToCartBtn">
            <h4>加入購物車</h4>
          </a>
        </div>
      </div>
      <div class="wrapper precaution">
        <!-- <button @click="clickHandle">借看一下</button> -->
        <div class="precautionTitle">
          <button
            type="button"
            v-for="tab in tabs"
            :key="tab.id"
            @click="
              currentTab = tab.id;
              clickHandle();
            "
            :class="{ btnOn: currentTab == tab.id }"
          >
            {{ tab.title }}
          </button>
          <span></span>
        </div>
        <div>
          <p>{{ contentShow }}</p>
        </div>
      </div>
    </main>
  </div>
  <CustomerService></CustomerService>
  <router-view></router-view>
</template>
<script setup>
import Header from "/src/components/Header.vue";
import Footer from "/src/components/Footer.vue";
import CustomerService from "/src/components/CustomerService.vue";
import { ref, reactive } from "vue";
import src1 from "@/img/product_1_1.jpg";
import src2 from "@/img/product_1_2.jpg";
import src3 from "@/img/product_1_3.jpg";

// 數量
let counter = ref(1);
// 預設tab
let currentTab = ref(0);
// 預設顯示內容
let contentShow = ref("滿NTD 1000即可享有免運");
// 大圖src
let imgUrl = src1;
// 預設大圖
let currentImg = ref(0);

// 購買須知內容
const tabs = reactive([
  {
    id: 0,
    title: "免運標準",
    content: "滿NTD 1000即可享有免運",
  },
  {
    id: 1,
    title: "付款方式",
    content: "信用卡/第三方支付",
  },
  {
    id: 2,
    title: "出貨時間",
    content: "將於付款完成後，5-7個工作天寄出",
  },
  {
    id: 3,
    title: "退換貨須知",
    content:
      "商品到貨享十天猶豫期之權益（注意！猶豫期非試用期），辦理退貨商品必須是全新狀態且包裝完整，商品一經拆封，等同商品價值已受損，僅能以福利品出售，若需退換貨，我方須收取價值損失之費用(回復原狀、整新費)，請先確認商品正確、外觀可接受，再行使用，以免影響您的權利。",
  },
]);

//商品資訊
const data = reactive({
  name: "企鵝娃娃",
  price: 500,
  intro:
    "企鵝絨毛娃娃的外觀可愛，經典的設計包括黑白相間的身體和圓滾滾的身材，令人難以抗拒。面料使用高品質的絨毛製成，手感柔軟舒適。",
  imgs: [src1, src2, src3],
});

//切換顯示內容
function clickHandle() {
  contentShow.value = tabs[currentTab.value].content;
}

// 增加數量
function addCounter() {
  if (counter.value >= 1 && counter.value < 10) {
    counter.value++;
  }
}
// 減少數量
function subCounter() {
  if (counter.value > 1 && counter.value <= 10) {
    counter.value--;
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/sass/page/product";
</style>
