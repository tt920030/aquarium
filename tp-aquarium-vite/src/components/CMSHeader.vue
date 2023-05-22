<template>
  <div class="cms">
    <!-- Header -->
    <header>
      <img class="logo" src="@/img/cms_logo.svg" alt="" />
      <h2>後台管理系統</h2>

      <div class="profile">
        <h3>後台管理員</h3>
        <img src="" alt="" />
      </div>

      <a class="signOut" href="">
        <h3>登出</h3>
        <img src="@/img/cms_logout.svg" alt="" />
      </a>
    </header>
    <!-- 選單列 -->
    <aside>
      <RouterLink to="news_manage" @click="clicked='1';emitClicked()" :class="{click:clicked=='1'}">
        <div class="news"></div>
        <h4>消息管理</h4>
      </RouterLink>
     
      <RouterLink to="product_manage" @click="clicked='2';emitClicked()" :class="{click:clicked=='2'}">
        <div class="product"></div>
        <h4>商品管理</h4>
      </RouterLink>
      
      <RouterLink to="journey_manage" @click="clicked='3';emitClicked()" :class="{click:clicked=='3'}">
        <div class="journey"></div>
        <h4>行程管理</h4>
      </RouterLink>

      <RouterLink to="coupon_manage" @click="clicked='4';emitClicked()" :class="{click:clicked=='4'}">
        <div class="coupon"></div>
        <h4>折價券管理</h4>
      </RouterLink>
    
      <RouterLink to="coustomer_manage" @click="clicked='5';emitClicked()" :class="{click:clicked=='5'}">
        <div class="customer"></div>
        <h4>客服</h4>
      </RouterLink>
     
    </aside>
  </div>
</template>
<script setup>
import {ref, defineEmits} from 'vue';
import {RouterLink} from 'vue-router';
const clicked = ref('');
const emit = defineEmits(['clicked']);
const emitClicked = function(){
  emit("clicked",clicked.value);
}
</script>
<style lang="scss" scoped>
.cms {
  header {
    
    @include flex;
    width: 100%;
    height: 100px;
    align-items: center;
    background-color: map-get($color, text);

    .logo {
      position: absolute;
      left: 3%;
    }
    h2 {
      color: white;
      position: absolute;
      left: 10%;
    }

    .profile {
      position: absolute;
      right: 15%;
      @include flex;
      align-items: center;
      h3 {
        color: white;
        line-height: 50px;
        font-size: 2.4rem;
      }
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: white;
      }
    }

    .signOut {
      position: absolute;
      right: 5%;
      display: block;
      width: 100px;
      height: 50px;
      @include flex;
      h3 {
        color: white;
        line-height: 50px;
        font-size: 2.4rem;
      }
      // img {
      // }
    }
  }

  aside {
    position: absolute;
    // left: 5%;
    top: 20%;

    a {
      padding: 20px;
      height: 73px;
      background-color: map-get($color, bgc2);
      align-items: center;
      @include flex;
      transition: all 0.5s;
      &.click{
        background-color: map-get($color, text);
        cursor: pointer;
        h4 {
        color: white;
      }
      .news {
        background-image: url(@/img/cms_icon1_white.svg);
      }
      .product {
        background-image: url(@/img/cms_icon2_white.svg);
      }
      .journey {
        background-image: url(@/img/cms_icon3_white.svg);
      }
      .coupon {
        background-image: url(@/img/cms_icon4_white.svg);
      }
      .customer {
        background-image: url(@/img/cms_icon5_white.svg);
      }
      }
      &:hover {
        background-color: map-get($color, text);
        cursor: pointer;
        h4 {
        color: white;
      }
      }
     
      &:hover .news {
        background-image: url(@/img/cms_icon1_white.svg);
      }
      &:hover .product {
        background-image: url(@/img/cms_icon2_white.svg);
      }
      &:hover .journey {
        background-image: url(@/img/cms_icon3_white.svg);
      }
      &:hover .coupon {
        background-image: url(@/img/cms_icon4_white.svg);
      }
      &:hover .customer {
        background-image: url(@/img/cms_icon5_white.svg);
      }

      .news {
        background-image: url(@/img/cms_icon1_blue.svg);
      }
      .product {
        background-image: url(@/img/cms_icon2_blue.svg);
      }
      .journey {
        background-image: url(@/img/cms_icon3_blue.svg);
      }
      .coupon {
        background-image: url(@/img/cms_icon4_blue.svg);
      }
      .customer {
        background-image: url(@/img/cms_icon5_blue.svg);
      }

      div {
        width: 30px;
        height: 30px;
        background-repeat: no-repeat;
        background-position: center center;
      }
      h4 {
        text-align: center;
        color: map-get($color, text);
      }
    }
  }
}
</style>
