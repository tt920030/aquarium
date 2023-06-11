<template>
  <li v-for="(product, index) in productInPage" :key="product">
    <RouterLink :to="'/product/' + product.ID" class="product_info">
      <div class="imgWrapper">
        <img
          :src="'https://tibamef2e.com/thd101/g6/img/' + product.PICTURE"
          alt=""
        />
      </div>
      <p class="product_name" ref="productName">{{ product.NAME }}</p>
      <p class="product_price" ref="productPrice">NTD ${{ product.PRICE }}</p>
      <button
        @click="addToCart($event, index)"
        href=""
        class="btn addToCartBtn"
      >
        加入購物車 <i class="fa-solid fa-chevron-right"></i>
      </button>
    </RouterLink>
  </li>

  <RouterView></RouterView>
</template>
<script setup>
import {
  reactive,
  defineEmits,
  defineProps,
  watch,
  onMounted,
  onBeforeMount,
  ref,
  toRef,
} from "vue";

const props = defineProps(["productInPage", "currentPage", "filterNumber"]);
let productInPage = reactive(props.productInPage);

watch(
  () => props.productInPage,
  (newVal) => {
    productInPage = [...newVal];
  }
);

function addToCart(event, index) {
  event.preventDefault();

  const product = productInPage[index];
  const dataKey = "cartProduct";
  const data = {
    name: product.NAME,
    price: product.PRICE,
    amount: 1,
    img: "https://tibamef2e.com/thd101/g6/img/" + product.PICTURE,
  };
  const list = JSON.parse(localStorage.getItem(dataKey)) || [];
  list.push(data);
  localStorage.setItem(dataKey, JSON.stringify(list));
  alert("加入成功，請至購物車查看!");
}
</script>
<style lang="scss" scoped>
li {
  width: 272px;
  height: 369px;
  background-color: map-get($color, bgc1);
  margin-bottom: 85px;
  margin-right: 28px;
  &:hover {
    opacity: 0.7;
  }
  @include mobile {
    width: 312px;
    margin: 0 calc(50% - 156px);
    margin-bottom: 50px;
  }
  .product_info {
    box-sizing: border-box;
    width: 100%;
    height: 369px;

    .imgWrapper {
      width: 240px;
      height: 210px;
      margin-left: 16px;
      margin-top: 16px;
      @include mobile {
        margin-left: 36px;
        margin-right: 36px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    p {
      margin-left: 18px;
      @include mobile {
        margin-left: 36px;
      }
    }
    .product_name {
      margin-top: 20px;
    }

    .addToCartBtn {
      margin: 10px 64px 0;
      @include mobile {
        margin-left: 90px;
      }
    }
  }
}
</style>
