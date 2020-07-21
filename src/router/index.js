import Vue from "vue";
import VueRouter from "vue-router";
// import Store from '../store'
import Home from "../views/Home.vue";
import Laravel from "../views/Laravel.vue";
import View from "../views/View.vue";
import Edit from "../views/Edit.vue";
import Create from "../views/Create.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

// var ifNotAuthenticated = (to, from, next) => {
//   if (!Store.getters.isAuthenticated) {
//     next()
//     return
//   }
//   next('/')
// }
//
// var ifAuthenticated = (to, from, next) => {
//   if (Store.getters.isAuthenticated) {
//     next()
//     return
//   }
//   next('/login')
// }

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/create",
    name: "Create",
    component: Create
  },
  {
    path: "/laravel",
    name: "Laravel",
    component: Laravel
  },
  {
    path: "/view/:id",
    name: "View",
    component: View
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  // {
    // path: "/laravel",
    // name: "Laravel",
    // component: Laravel,
    // // children: [
    // //      { path: 'id', component: Id }
    // //   ]
    // // }
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.auth) && !loggedIn) {
    next('/login')
    return
  }
  next()
})

export default router;
