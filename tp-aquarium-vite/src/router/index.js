import { createRouter, createWebHistory } from 'vue-router';
import index from '../views/Index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/ticket',    //自己取之後連的路徑名稱
      name: 'ticket',		//自己取
      component: () => import('../views/Ticket.vue') //路徑連到剛剛建的vue檔
       //children是這個頁面的子頁面
      // children:[
      //   {
      //     path: 'yearpass',
      //     name: 'yearpass',
      //     component: ()=> import("../views/ticket/yearpass.vue")
           
      //   }
      // ]
    },
    // {
    //   path: '/:id', 
    //   name: 'userdata',
    //   component: import("../views/[id].vue")
    // },
    {
      path: '/:pathMatch(.*)', 
      name: 'NotFound',
      component: import("../views/404.vue")
    }
  ]
})

export default router
