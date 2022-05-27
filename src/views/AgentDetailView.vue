<template>
  <div>
    <AgentDetail 
      :selectedAgentDetail="selectedAgentDetail"
      :selectedAgent="selectedAgent"
    />
 
  </div>
</template>

<script setup>
import AgentDetail from "../components/AgentDetail.vue";
import { provide } from "vue";
import useRouter from "vue-router";
import router from "../router/index"
import { onMounted, ref } from "vue";
import { useAgentsStore } from "../store/agents";
const main = useAgentsStore();
let agents = ref([]);

const selectedAgentDetail = ref(null);
const selectedAgent = router.currentRoute._value.query.agent;
onMounted(async () => {
  if (main.$state.agents.length < 1) {
    agents.value = await main.fetchAgents();
  }
  // await main.fetchAgent("5f8d3a7f-467b-97f3-062c-13acf203c006")
  getSelectedAgentDetail();
});

const getSelectedAgentDetail = () => {
  selectedAgentDetail.value = agents.value.filter((agent) => {
    if (agent.displayName === selectedAgent.toUpperCase()) {
      selectedAgentDetail.value = agent;
      return true;
    }
  });
};
provide("selectedAgent", selectedAgentDetail);
</script>
