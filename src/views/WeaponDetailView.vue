<template>
  <div>
    <WeaponDetail 
    />
 
  </div>
</template>

<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import WeaponDetail from "../components/WeaponDetail.vue";
import {useWeaponsStore} from '../store/weapons'

const main=useWeaponsStore()
const selectedWeapon=computed(()=>main.getWeapon)
const route=useRoute()

onMounted(()=>{
    main.fetchWeapon(route.params.id)
})



</script>
