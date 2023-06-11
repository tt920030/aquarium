import { createRouter, createWebHashHistory } from "vue-router";
import index from "../views/BackstageIndex.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "backstageindex",
      component: index,
      meta: { title: "台北海生館｜前後台選擇", hideHeader: true },
    },
    {
      path: "/index",
      name: "index",
      component: () => import("../views/Index.vue"),
      meta: { title: "台北海生館｜首頁" },
    },
    {
      path: "/member",
      name: "member",
      meta: { title: "台北海生館｜會員中心" },
      component: () => import("../views/Member.vue"),
      children: [
        {
          path: "profile",
          name: "profile",
          component: () => import("../views/member/Profile.vue"),
        },
        {
          path: "order",
          name: "order",
          component: () => import("../views/member/Order.vue"),
        },
        {
          path: "coupon",
          name: "coupon",
          component: () => import("../views/member/Coupon.vue"),
        },
        {
          path: "pet",
          name: "pet",
          component: () => import("../views/member/Pet.vue"),
        },
      ],
    },
    //後臺管理頁面
    {
      path: "/cms",
      name: "CMS",
      meta: { title: "台北海生館｜後台管理系統", hideHeader: true },
      component: () => import("../views/CMSindex.vue"),
      children: [
        {
          path: "news_change",
          name: "NewsChange",
          meta: { title: "後台管理系統｜修改消息" },
          component: () => import("../views/manage/NewsChange.vue"),
        },
        {
          path: "news_manage",
          name: "NewsManage",
          meta: { title: "後台管理系統｜消息管理" },
          component: () => import("../views/manage/NewsManage.vue"),
        },
        {
          path: "news_create", //自己取之後要連的路徑名稱
          name: "NewsCreate", //自己取
          meta: { title: "後台管理系統｜新增消息" },
          component: () => import("../views/manage/NewsCreate.vue"), //路徑連到剛剛建的vue檔
          // meta: { title: "新增消息" },
        },
        {
          path: "coupon_manage",
          name: "CouponManage",
          meta: { title: "後台管理系統｜折價卷管理" },
          component: () => import("../views/manage/CouponManage.vue"),
        },
        {
          path: "coupon_change",
          name: "CouponChange",
          meta: { title: "後台管理系統｜修改折價卷" },
          component: () => import("../views/manage/CouponChange.vue"),
        },
        {
          path: "coupon_create",
          name: "CouponCreate",
          meta: { title: "後台管理系統｜新增折價卷" },
          component: () => import("../views/manage/CouponCreate.vue"),
        },
        {
          path: "journey_manage",
          name: "JourneyManage",
          meta: { title: "後台管理系統｜行程管理" },
          component: () => import("../views/manage/JourneyManage.vue"),
        },
        {
          path: "journey_change",
          name: "JourneyChange",
          meta: { title: "後台管理系統｜修改行程" },
          component: () => import("../views/manage/JourneyChange.vue"),
        },
        {
          path: "journey_create",
          name: "JourneyCreate",
          meta: { title: "後台管理系統｜新增行程" },
          component: () => import("../views/manage/JourneyCreate.vue"),
        },
        {
          path: "product_manage",
          name: "ProductManage",
          meta: { title: "後台管理系統｜商品管理" },
          component: () => import("../views/manage/ProductManage.vue"),
        },
        {
          path: "product_change",
          name: "ProductChange",
          meta: { title: "後台管理系統｜修改商品" },
          component: () => import("../views/manage/ProductChange.vue"),
        },
        {
          path: "product_create",
          name: "ProductCreate",
          meta: { title: "後台管理系統｜新增商品" },
          component: () => import("../views/manage/ProductCreate.vue"),
        },
        {
          path: "customer_manage",
          name: "CustomerManage",
          meta: { title: "後台管理系統｜客服管理" },
          component: () => import("../views/manage/CustomerManage.vue"),
        },
        {
          path: "customer_change",
          name: "CustomerChange",
          meta: { title: "後台管理系統｜修改客服" },
          component: () => import("../views/manage/CustomerChange.vue"),
        },
        {
          path: "customer_create",
          name: "CustomerCreate",
          meta: { title: "後台管理系統｜新增客服" },
          component: () => import("../views/manage/CustomerCreate.vue"),
        },
      ],
    },

    {
      path: "/cart",
      name: "Cart",
      meta: { title: "台北海生館｜購物車" },
      component: () => import("../views/Cart.vue"),
    },
    {
      path: "/payment_success",
      name: "PaymentSuccess",
      meta: { title: "台北海生館｜購買成功" },
      component: () => import("../views/PaymentSuccess.vue"),
    },
    {
      path: "/game_index",
      name: "GameIndex",
      meta: { title: "台北海生館｜遊戲挑戰" },
      component: () => import("../views/GameIndex.vue"),
    },
    {
      path: "/game_choose",
      name: "GameChoose",
      meta: { title: "台北海生館｜遊戲大廳" },
      component: () => import("../views/game/GameChoose.vue"),
    },
    {
      path: "/game_quiz",
      name: "GameQuiz",
      // 把header和footer藏起來
      meta: { hideHeader: true, title: "台北海生館｜問答遊戲" },
      component: () => import("../views/game/GameQuiz.vue"),
    },
    // {
    //   path: "game_puzzle",
    //   name: "GamePuzzle",
    //   component: () => import("../views/game/GamePuzzle.vue"),
    // },
    {
      path: "/game_puzzle",
      name: "/GamePuzzle",
      meta: { hideHeader: true, title: "台北海生館｜拼圖遊戲" },
      component: () => import("../views/game/GamePuzzle.vue"),
    },

    {
      path: "/journey",
      name: "Journey",
      meta: { title: "台北海生館｜行程預約" },
      component: () => import("../views/Journey.vue"),
    },

    {
      path: "/overnight",
      name: "Overnight",
      meta: { title: "台北海生館｜行程介紹" },
      component: () => import("../views/Overnight.vue"),
    },

    {
      path: "/faq",
      name: "Faq",
      meta: { title: "台北海生館｜常見問題" },
      component: () => import("../views/Faq.vue"),
    },
    {
      path: "/stores",
      name: "Stores",
      meta: { title: "台北海生館｜網路商城" },
      component: () => import("../views/Stores.vue"),
    },
    {
      path: "/visit_information",
      name: "VisitInformation",
      meta: { title: "台北海生館｜參觀資訊" },
      component: () => import("../views/VisitInformation.vue"),
    },
    {
      path: "/testaaaa",
      name: "testaaaa",
      component: () => import("../views/testaaaa.vue"),
    },
    {
      path: "/about",
      name: "About",
      meta: { title: "台北海生館｜關於我們" },
      component: () => import("../views/About.vue"),
    },
    {
      path: "/floor_Introduction", //自己取之後要連的路徑名稱
      name: "FloorIntroduction", //自己取
      meta: { title: "台北海生館｜樓層介紹" },
      component: () => import("../views/FloorIntroduction.vue"), //路徑連到剛剛建的vue檔
    },
    {
      path: "/park_activity", //自己取之後要連的路徑名稱
      name: "ParkActivity", //自己取
      meta: { title: "台北海生館｜館內活動" },
      component: () => import("../views/ParkActivity.vue"), //路徑連到剛剛建的vue檔
    },
    {
      path: "/news",
      name: "News",
      meta: { title: "台北海生館｜最新消息" },
      component: () => import("../views/News.vue"),
    },
    {
      path: "/news/:news_pageid",
      name: "NewsPage",
      meta: { title: "台北海生館｜最新消息內頁" },
      component: () => import("../views/news/NewsPageid.vue"),
    },

    {
      path: "/ticket", //自己取之後連的路徑名稱
      name: "ticket", //自己取
      meta: { title: "台北海生館｜購票資訊" },
      component: () => import("../views/Ticket.vue"), //路徑連到剛剛建的vue檔
      //children是這個頁面的子頁面
    },
    {
      path: "/yearpass", //自己取之後連的路徑名稱
      name: "YearPass", //自己取
      meta: { title: "台北海生館｜年度通行證" },
      component: () => import("../views/ticket/Yearpass.vue"), //路徑連到剛剛建的vue檔
      //children是這個頁面的子頁面
    },
    {
      path: "/itinerary", //自己取之後連的路徑名稱
      name: "Itinerary", //自己取
      meta: { title: "台北海生館｜票券｜行程購買" },
      component: () => import("../views/Itinerary.vue"), //路徑連到剛剛建的vue檔
    },

    // {
    //   path: "/news_change", //自己取之後要連的路徑名稱
    //   name: "NewsChange", //自己取
    //   component: () => import("../views/NewsChange.vue"), //路徑連到剛剛建的vue檔
    //   meta: {title: "更改消息"},
    // },
    // {
    //   path: "/coupon_manage", //自己取之後要連的路徑名稱
    //   name: "CouponManage", //自己取
    //   component: () => import("../views/CouponManage.vue"), //路徑連到剛剛建的vue檔
    // },
    // {
    //   path: '/:id',
    //   name: 'userdata',
    //   component: import("../views/[id].vue")
    // },
    {
      path: "/product/:id",
      name: "Product/:id",
      component: () => import("../views/Product[id].vue"),
      meta: { title: "Product" },
    },
    {
      path: "/:pathMatch(.*)",
      name: "NotFound",
      meta: { title: "404 Not Found", hideHeader: true },
      component: import("../views/404.vue"),
    },

    // {
    //   path: "/coupon_manage", //自己取之後要連的路徑名稱
    //   name: "CouponManage", //自己取
    //   component: () => import("../views/CouponManage.vue"), //路徑連到剛剛建的vue檔
    // },
    // {
    //   path: "/journeyManage", //自己取之後要連的路徑名稱
    //   name: "Journey_Manage", //自己取
    //   meta: {title:'台北海生館後台｜行程管理'},
    //   component: () => import("../views/JourneyManage.vue"), //路徑連到剛剛建的vue檔
    // },
    // {
    //   path: "/journeyChange", //自己取之後要連的路徑名稱
    //   name: "Journey_Change", //自己取
    //   meta: {title:'台北海生館後台｜修改行程'},
    //   component: () => import("../views/JourneyChange.vue"), //路徑連到剛剛建的vue檔
    // },

    {
      path: "/backstage_index", //自己取之後要連的路徑名稱
      name: "BackstageIndex", //自己取
      meta: { hideHeader: true, title: "台北海生館｜前後台首頁" },
      component: () => import("../views/BackstageIndex.vue"), //路徑連到剛剛建的vue檔
    },
    {
      path: "/backstage_login", //自己取之後要連的路徑名稱
      name: "Backstagelogin", //自己取
      meta: { hideHeader: true, title: "台北海生館｜後台登入" },
      component: () => import("../views/Backstagelogin.vue"), //路徑連到剛剛建的vue檔
    },

    {
      path: "/axios", //自己取之後要連的路徑名稱
      name: "AxiosTest", //自己取
      component: () => import("../views/AxiosTest.vue"), //路徑連到剛剛建的vue檔
    },
  ],
});
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});
export default router;
