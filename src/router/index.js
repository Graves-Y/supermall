import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: "",
    redirect:"/home",
    component:() => import("../views/home/Home")
  },
  {
    path: "/home",
    name: "Home",
    component:() => import("../views/home/Home")
  },
  {
    path: "/classfy",
    name: "Classfy",
    component: () =>
        import("../views/classfy/Classfy")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
        import("../views/profile/Profile")
  },
  {
    path: "/shopcar",
    name: "ShopCar",
    component: () =>
        import("../views/shopcar/ShopCar")
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
