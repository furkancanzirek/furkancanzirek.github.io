import { defineStore } from "pinia";

export const useAuthStore=defineStore('auth',{
    state:()=>({
        isLogged:false
    }),
    actions:{
     login(){
            this.isLogged=true
            localStorage.setItem('auth', true)
        },
         logout(){
            this.isLogged=false
        }
    }

})
