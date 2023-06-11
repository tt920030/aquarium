<template>
  <div>
    <div class="product">
      <div class="banner">
        <h1>網路商城<br />STORES</h1>
      </div>
      <main>
        <div class="wrapper navigation">
          <p>網路商城 ></p>
          <p class="product_name" v-if="product">{{ product.NAME }}</p>
        </div>
        <div class="wrapper content">
          <div class="photo">
            <!-- 商品大圖 -->
            <img :src="firstImg" alt="" />
            <!-- 商品小圖 -->
            <div>
              <img
                v-for="(img, index) in imgs"
                :src="'/img/' + img"
                :key="index"
                :class="{ imgOn: currentImg == index }"
                alt=""
                @click="updateImgUrl(img, index)"
              />
            </div>
          </div>
          <div class="rightside">
            <!-- 商品資訊 -->
            <div class="product_info">
              <h3 class="product_name" v-if="product">{{ product.NAME }}</h3>
              <h4 class="product_price" v-if="product">
                NTD ${{ product.PRICE }}
              </h4>
              <p class="product_intro" v-if="product">{{ product.CONTENT }}</p>
            </div>
            <div class="numberBtn">
              <!-- 增加按鈕 -->
              <button class="substractBtn" @click="subCounter">-</button>
              <!-- 購買數量 -->
              <h4 class="number">{{ counter }}</h4>
              <!-- 減少按鈕 -->
              <button class="addBtn" @click="addCounter">+</button>
            </div>
            <a class="btn addToCartBtn" @click="addToCart">
              <h4>加入購物車</h4>
            </a>
          </div>
        </div>
        <div class="wrapper precaution">
          <!-- 購物須知 -->
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
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import Header from "/src/components/Header.vue";
import Footer from "/src/components/Footer.vue";
import {
  ref,
  reactive,
  onBeforeMount,
  computed,
  onMounted,
  nextTick,
} from "vue";
import axios from "axios";

const route = useRoute();
// 數量
let counter = ref(1);
// 預設tab
let currentTab = ref(0);
// 預設顯示內容
let contentShow = ref("滿NTD 1000即可享有免運");
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
const products = reactive([]);
const img1 = reactive([]);
const img2 = reactive([]);
const img3 = reactive([]);

//商品資訊
const data = reactive([]);
//照片路徑矩陣
let imgs = reactive([]);
//第一張照片路徑（給大圖預設值）
let firstImg = ref();
//
let product = ref(null);

onBeforeMount(() => {
  let params = new URLSearchParams(); //建立PHP可接受的格式
  params.append("data", data.value); //將搜尋值傳入params物件內
  axios
    .post(`${import.meta.env.VITE_API_URL}getProduct.php`) //使用get或post等取得路徑資料(php))

    .then((res) => {
      res.data.forEach((element, index) => {
        products.push(element);
        img1.push(element.PICTURE);
        img2.push(element.SUB_PICTURE1);
        img3.push(element.SUB_PICTURE2);
      });
      updateImg();
      getFirstImg();
      getProduct();
      //回傳後如何處理
    })
    .catch((err) => console.log(err)); //錯誤如何處理
});

//取出商品的照片組成矩陣
function updateImg() {
  imgs = [img1[route.params.id - 1]];
  if (img2[route.params.id - 1] != "") {
    imgs.push(img2[route.params.id - 1]);
  }
  if (img3[route.params.id - 1] != "") {
    imgs.push(img3[route.params.id - 1]);
  }
  return imgs;
}
//取出第一張照片，設為預設大圖
function getFirstImg() {
  firstImg = "/img/" + imgs[0];
  return firstImg;
}
//小圖換大圖，被點選的小圖更換樣式
function updateImgUrl(img, index) {
  firstImg = "/img/" + img;
  currentImg.value = index;
}
//取出商品資訊
function getProduct() {
  const foundProduct = products.find((object) => object.ID == route.params.id);
  product.value = foundProduct;
  return product;
}
// let product = computed(()=> products.find(object => object.ID == route.params.id))

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
//加入購物車
function addToCart(event) {
  event.preventDefault();
  const dataKey = "cartProduct";
  nextTick(() => {
    const data = {
      name: product.value.NAME,
      price: product.value.PRICE,
      amount: counter.value,
      img: "/img/" + imgs[0],
    };
    const list = JSON.parse(localStorage.getItem(dataKey)) || [];
    list.push(data);
    localStorage.setItem(dataKey, JSON.stringify(list));
    alert("加入成功，請至購物車查看!");
  });
}
</script>
<style lang="scss" scoped>
@import "../assets/sass/page/product";

h1 {
  font-size: 20px;
  color: black;
}
</style>
