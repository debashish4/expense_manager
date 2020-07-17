import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import AddIncome from '../views/AddIncome.vue'
import AddExpense from '../views/AddExpense.vue'
import AllTransactions from '../views/AllTransactions.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: "/add-income",
    name: "AddIncome",
    component: AddIncome
  },

  {
    path: "/add-expense",
    name: "AddExpense",
    component: AddExpense
  },
  {
    path: "/all-transactions",
    name: "AllTransactions",
    component: AllTransactions
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
