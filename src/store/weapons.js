import { defineStore } from "pinia";
import axios from 'axios'
export const useWeaponsStore=defineStore('weapons',{
    state:()=>({
        weapons:[],
        selectedWeapon:null
    }),
    getters:{
        getWeapons(){
            return this.weapons
        },
        getWeapon(){
            return this.selectedWeapon
        }
    },
    actions:{
      async fetchWeapons(){
       const data= await axios.get("https://valorant-api.com/v1/weapons?language=tr-TR")
        this.weapons=data.data.data
        console.log(this.weapons);
        return this.weapons
    },
    async fetchWeapon(id){
        const data= await axios.get(`https://valorant-api.com/v1/weapons/${id}`)
         this.selectedWeapon=data.data.data
         return this.selectedWeapon
         }
     }

})