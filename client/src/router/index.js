import Vue from 'vue'
import VueRouter from 'vue-router'
import Public from '../views/Public.vue'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Saved from '../views/Saved.vue'
import Profile from '../views/Profile.vue'
import store from '@/store/store'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Public',
    component: Public
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/saved',
    name: 'Saved',
    component: Saved
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = store.state.token;

  if (authRequired && !loggedIn) {
    return next('/login');
  } else if (!authRequired && loggedIn) {
    return next('/home')
  }

  next();

})

export default router
