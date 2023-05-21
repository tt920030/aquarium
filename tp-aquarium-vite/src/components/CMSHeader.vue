<template>
  <div class="cms">
    <!-- Header -->
    <header>
<<<<<<< HEAD
      <img class="logo" src="../img/cms_logo.svg" alt="" />
=======
      <img class="logo" src="@/img/cms_logo.svg" alt="" />
>>>>>>> anniesu
      <h2>後台管理系統</h2>

      <div class="profile">
        <h3>後台管理員</h3>
        <img src="" alt="" />
      </div>

      <a class="signOut" href="">
        <h3>登出</h3>
<<<<<<< HEAD
        <img src="../img/cms_logout.svg" alt="" />
      </a>
    </header>
    <!-- 選單列 -->
    <Aside>
=======
        <img src="@/img/cms_logout.svg" alt="" />
      </a>
    </header>
    <!-- 選單列 -->
    <aside>
>>>>>>> anniesu
      <a>
        <div class="news"></div>
        <h4>消息管理</h4>
      </a>
      <a>
        <div class="product"></div>
        <h4>商品管理</h4>
      </a>
      <a>
        <div class="journey"></div>
        <h4>行程管理</h4>
      </a>
      <a>
        <div class="coupon"></div>
        <h4>折價券管理</h4>
      </a>
      <a>
        <div class="customer"></div>
        <h4>客服</h4>
      </a>
<<<<<<< HEAD
    </Aside>
=======
    </aside>
>>>>>>> anniesu
  </div>
</template>
<script setup></script>
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
<<<<<<< HEAD
      img {
      }
=======
      // img {
      // }
>>>>>>> anniesu
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
      &:hover {
        background-color: map-get($color, text);
        cursor: pointer;
      }
      &:hover h4 {
        color: white;
      }
      &:hover .news {
<<<<<<< HEAD
        background-image: url(../img/cms_icon1_white.svg);
      }
      &:hover .product {
        background-image: url(../img/cms_icon2_white.svg);
      }
      &:hover .journey {
        background-image: url(../img/cms_icon3_white.svg);
      }
      &:hover .coupon {
        background-image: url(../img/cms_icon4_white.svg);
      }
      &:hover .customer {
        background-image: url(../img/cms_icon5_white.svg);
      }

      .news {
        background-image: url(../img/cms_icon1_blue.svg);
      }
      .product {
        background-image: url(../img/cms_icon2_blue.svg);
      }
      .journey {
        background-image: url(../img/cms_icon3_blue.svg);
      }
      .coupon {
        background-image: url(../img/cms_icon4_blue.svg);
      }
      .customer {
        background-image: url(../img/cms_icon5_blue.svg);
=======
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
>>>>>>> anniesu
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
