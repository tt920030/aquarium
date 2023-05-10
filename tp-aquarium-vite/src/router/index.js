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
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      children:[
        {
          path: 'aaa',
          name: 'aaa',
          component: ()=> import("../views/about/a.vue")
        }
      ]
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
