import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: () => import('../views/HomeView.vue')
    }
  ]
})
// 路由拦截器
router.beforeEach((to, from) => {
  // 设置标题
  document.title = to.meta.title || import.meta.env.VITE_APP_MY_TITLE
})
export default router
