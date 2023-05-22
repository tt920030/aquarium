import { createRouter, createWebHistory } from "vue-router";
import index from "../views/Index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: index,
      meta: {title:'台北海生館｜首頁'},
    },
    {
      path: "/member",
      name: "member",
      meta: { title: '會員中心' },
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
        }
        
      ]
    },
    {
      path: "/cms",
      name: "CMS",
      component: () => import("../views/CMSindex.vue"),
      children: [
        {
          path: "news_change",
          name: "NewsChange",
          component: () => import("../views/manage/NewsChange.vue")
        },
        {
          path: "news_manage",
          name: "NewsManage",
          component: () => import("../views/manage/NewsManage.vue")
        },
        {
          path: "coupon_manage",
          name: "CouponManage",
          component: () => import("../views/manage/CouponManage.vue")
        },
        {
          path: "journey_manage",
          name: "JourneyManage",
          component: () => import("../views/manage/JourneyManage.vue")
        },
        {
          path: "journey_change",
          name: "JourneyChange",
          component: () => import("../views/manage/JourneyChange.vue")
        }
      ]
    },

  
    {
      path: "/cart",
      name: "Cart",
      meta: { title: '購物車' },
      component: () => import("../views/Cart.vue"),
    },
    {
      path: "/game_index",
      name: "GameIndex",
      component: () => import("../views/GameIndex.vue"),
      children: [
        {
          path: "game_question",
          name: "GameQuestion",
          component: () => import("../views/game/GameQuestion.vue"),
        },
        {
          path: "game_puzzle",
          name: "GamePuzzle",
          component: () => import("../views/game/GamePuzzle.vue"),
        },
      ]

    },

    {
      path: "/journey",
      name: "Journey",
      meta: {title:'台北海生館｜行程預約'},
      component: () => import("../views/Journey.vue"),

    },

    {
      path: "/overnight",
      name: "Overnight",
      meta: {title:'台北海生館｜行程介紹'},
      component: () => import("../views/Overnight.vue")

    },

    {
      path: "/faq",
      name: "Faq",
      component: () => import("../views/Faq.vue"),
    },
    {
      path: "/product",
      name: "Product",
      component: () => import("../views/Product.vue"),
      meta: {title: "商品"},
    },
    {
      path: "/stores",
      name: "Stores",
      component: () => import("../views/Stores.vue"),
      meta: {title: "網路商城"},
    },
    {
      path: "/visit_information",
      name: "VisitInformation",
      component: () => import("../views/VisitInformation.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/floor_Introduction", //自己取之後要連的路徑名稱
      name: "FloorIntroduction", //自己取
      component: () => import("../views/FloorIntroduction.vue"), //路徑連到剛剛建的vue檔
    },
    {
      path: "/park_activity", //自己取之後要連的路徑名稱
      name: "ParkActivity", //自己取
      component: () => import("../views/ParkActivity.vue"), //路徑連到剛剛建的vue檔
    },
    {
      path: "/news",
      name: "News",
      meta: { title: '最新消息' },
      component: () => import("../views/News.vue"),

    },
    {
      path: "/news/news_page",
      name: "NewsPage",
      component: () => import("../views/news/NewsPage.vue"),
    },

    {
      path: "/ticket", //自己取之後連的路徑名稱
      name: "ticket", //自己取
      component: () => import("../views/Ticket.vue"), //路徑連到剛剛建的vue檔
      //children是這個頁面的子頁面
      meta: { title: "購票資訊" }
    },
    {
      path: "/yearpass", //自己取之後連的路徑名稱
    },
    {
      path: "/ticket/yearpass", //自己取之後連的路徑名稱
      name: "YearPass", //自己取
      component: () => import("../views/ticket/Yearpass.vue"), //路徑連到剛剛建的vue檔
      //children是這個頁面的子頁面
    },
    {
      path: "/itinerary", //自己取之後連的路徑名稱
      name: "Itinerary", //自己取
      meta: { title: "票券/行程購買" },
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
      path: "/:pathMatch(.*)",
      name: "NotFound",
      meta: { title: "404 Not Found" },
      component: import("../views/404.vue"),
    },
    {
      path: "/news_create", //自己取之後要連的路徑名稱
      name: "NewsCreate", //自己取
      component: () => import("../views/NewsCreate.vue"), //路徑連到剛剛建的vue檔
      meta: {title: "新增消息"},
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
      path: "/journeyCreate", //自己取之後要連的路徑名稱
      name: "Journey_Create", //自己取
      meta: {title:'台北海生館後台｜新增行程'},
      component: () => import("../views/JourneyCreate.vue"), //路徑連到剛剛建的vue檔
    },
    {
      path: "/backstage_index", //自己取之後要連的路徑名稱
      name: "BackstageIndex", //自己取
      component: () => import("../views/BackstageIndex.vue"), //路徑連到剛剛建的vue檔
    }]}
  );
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
});
export default router;


