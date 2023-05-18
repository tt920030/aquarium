import { createRouter, createWebHistory } from "vue-router";
import index from "../views/Index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: index,
    },
    {
      path: "/member",
      name: "member",
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
      path: "/member",
      name: "Member",
      component: () => import("../views/Member.vue"),
    },

    {
      path: "/cart",
      name: "Cart",
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
      component: () => import("../views/Journey.vue"),
      children: [
        {
          path: "overnight",
          name: "Overnight",
          component: () => import("../views/journey/Overnight.vue"),
        },
      ],
    },

    {
      path: "/overnight",
      name: "Overnight",
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
    },
    {
      path: "/stores",
      name: "Stores",
      component: () => import("../views/Stores.vue"),
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
      component: () => import("../views/News.vue"),
      children: [
        {
          path: "news_page",
          name: "NewsPage",
          component: () => import("../views/news/NewsPage.vue"),
        },
      ],
    },

    {
      path: "/ticket", //自己取之後連的路徑名稱
      name: "ticket", //自己取
      component: () => import("../views/Ticket.vue"), //路徑連到剛剛建的vue檔
      //children是這個頁面的子頁面
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
      component: () => import("../views/Itinerary.vue"), //路徑連到剛剛建的vue檔
    },
    // {
    //   path: '/:id',
    //   name: 'userdata',
    //   component: import("../views/[id].vue")
    // },
    {
      path: "/:pathMatch(.*)",
      name: "NotFound",
      component: import("../views/404.vue"),
    },
    {
      path: "/news_manage", //自己取之後要連的路徑名稱
      name: "NewsManage", //自己取
      component: () => import("../views/NewsManage.vue"), //路徑連到剛剛建的vue檔
    },
    {
      path: "/coupon_manage", //自己取之後要連的路徑名稱
      name: "CouponManage", //自己取
      component: () => import("../views/CouponManage.vue"), //路徑連到剛剛建的vue檔
    },
  ],
});

export default router;