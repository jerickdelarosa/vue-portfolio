import { createRouter, createWebHistory } from 'vue-router'


/* NAVIGATION */
import MainNav from '@/components/navigation/MainNav.vue'
/* COMPONENTS */
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        navigation: MainNav,
      },
      meta: {
        title: 'Jerick Dela Rosa',
      }
    },
    {
      path: '/section',
      name: 'section',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SectionView.vue'),
      meta: {
        title: 'Section',
      }
    }
  ],
  
})

router.beforeEach((to, from ,next) => {
  document.title = `${to.meta.title} | Online Portfolio`

  next()

})

export default router
