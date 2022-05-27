<template>
  <a-col :span="6">
    <router-link :to="{name: 'AgentDetail', query: { agent: agent.displayName.toLowerCase() } }" >
    <div
      class="image"
      :style="{ 'background-image': 'url(' + agent.background + ')' }"
    >
      <img v-bind:src="agent.bustPortrait" alt="" />
    </div>
    <div class="card-bottom">
      <div class="title">
        <h1>{{ agent.displayName }}</h1>
      </div>
      <div class="role">
        <img src="" alt="" />
        <h3>{{ agent.displayName == "SOVA" ? "Öncü" : agent.role.displayName }}</h3>
      </div>
      <div class="skills">
        <img v-bind:src="agent.abilities[0].displayIcon" alt="" />
        <img v-bind:src="agent.abilities[1].displayIcon" alt="" />
        <img v-bind:src="agent.abilities[2].displayIcon" alt="" />
      </div>
    </div>
     </router-link>
  </a-col>
</template>

<script>
export default {
  props: {
    agent: Object,
  },
  setup(props) {
    console.log(props.agent);
  },
};
</script>
<style scoped>
.ant-col {
  height: 500px;
  margin: 40px;
  cursor: pointer;
}

.image {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 350px;

}
.image:hover {
  animation: shakeImage 1s infinite;
}
.image img {
  height: 100%;
  filter: drop-shadow(10px 10px 8px #000);
}
.card-bottom {
  width: 100%;
  background: #dc3d4b
;
  flex-direction: column;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.title {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(5px);
}

.title h1,
.role h3 {
  transform: translateY(5px);
  font-weight: 600;
  color: #fff;
}
.role {
  flex: 1;
  background: #364966;
  width: 100%;
  display: flex;
  justify-content: center;
}
.skills {
  flex: 3;
  padding: 10px;
}
.skills img {
  height: 40px;
  margin-right: 15px;
}

.ant-col:nth-child(even) {
}

@keyframes shakeImage {
  0% {
    background-color: #fa747f;
  }
  10% {
    background-color: #f52334;
  }
  20% {
    background-color: #fa747f;
  }
  50% {
    background-color: transparent;
  }
  100% {
    background-color: transparent;
  }
}
</style>