import { createRouter, createWebHistory } from 'vue-router'
import WeaponsView from '../views/WeaponsView.vue'
import LoginView from '../views/LoginView.vue'
import AgentDetailView from '../views/AgentDetailView.vue'
import WeaponDetailView from '../views/WeaponDetailView.vue'
import { useAuthStore } from "../store/auth";
import { defineAsyncComponent } from 'vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: defineAsyncComponent(() => import("../views/AgentsView.vue")),
    meta:{
      needsAuth:true
    }
  },
  {
    path: '/agents',
    name: 'Agents',
    component: defineAsyncComponent(() => import("../views/AgentsView.vue")),
    meta:{
      needsAuth:true
    }
  },
  {
    path: '/weapons',
    name: 'Weapons',
    component: WeaponsView,
    meta:{
      needsAuth:true
    }
  },
  {
    path: '/agentdetail',
    name: 'AgentDetail',
    component: AgentDetailView,
    meta:{
      needsAuth:true
    }
  },
  {
    path: '/weapondetail/:id',
    name: 'WeaponDetail',
    component: WeaponDetailView,
    meta:{
      needsAuth:true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from)=>{
const main=useAuthStore()
if (localStorage.getItem('auth')==='true'/*&&main.$state.isLogged*/) {
  return
 
}
else if ((!main.$state.isLogged && to.name !== 'login')) {
  // redirect the user to the login page
  return { name: 'login' }
}

})
export default router
