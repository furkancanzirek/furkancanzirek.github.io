import { defineStore } from "pinia";
import axios from 'axios'
export const useAgentsStore=defineStore('agents',{
    state:()=>({
        agents:[],
        selectedAgent:null
    }),
    getters:{
        getAgent(){
            return this.selectedWeapon
        }
    },
    actions:{
      async fetchAgents(){
       const data= await axios.get("https://valorant-api.com/v1/agents?language=tr-TR")
        this.agents=data.data.data
        return this.agents

        },
        async fetchAgent(id){
            const data=await axios.get(`https://valorant-api.com/v1/agents/${id}/?language=tr-TR`)
            this.selectedAgent=data.data.data
            return this.selectedAgent
        }
    }

})