<template>
  <Navbar v-if="isLoggedLocalStorage || main.$state.isLogged" />
  <router-view v-slot="{ Component }" :key="$route.fullPath">
    <transition name="fade" mode="out-in" >
      <component :is="Component" :key="router.currentRoute._value.name" />
    </transition>
  </router-view>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Navbar from "./components/Navbar.vue";
import { useAuthStore } from "./store/auth";
import AgentView from "./views/AgentsView.vue";
import LoginView from "./views/LoginView.vue";
import WeaponsView from "./views/WeaponsView.vue";
import router from "./router/index";
const main = useAuthStore();
console.log(main.$state.isLogged);
window.addEventListener('load',()=>{
const isLoggedLocalStorage = localStorage.getItem("auth") === "true";
})
const currentView = ref(null);

</script>
<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

</style>
