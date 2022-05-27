<script>
import { defineComponent, onMounted, ref } from "vue";
import WeaponCard from "../components/WeaponCard.vue";
import { useWeaponsStore } from "../store/weapons";
export default {
  components: {
    WeaponCard,
  },
  setup() {
    const main = useWeaponsStore();
    let weapons = ref([]);
    const audio = ref(null);
    let playAudio = () => {
      setTimeout(() => {
        audio.value.play();
      }, 1000);
    };
    onMounted(async () => {
      weapons.value = await main.fetchWeapons();
      playAudio()
      
    });
    return {
      weapons,
      audio,
      // playAudio,
    };
  },
};
</script>

<template>
  <audio ref="audio" loop>
    <!-- <source src="../../public/theme.mp3" type="audio/mpeg" /> -->
  </audio>
  <div @click="playAudio" class="agents">
    <div class="background">
      <div class="main">
        <a-row>
          <template :key="weapon.id" v-for="weapon in weapons">
            <WeaponCard :weapon="weapon" />
          </template>
        </a-row>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* FONT TÜRÜ DEĞİŞTİRİLECEK breach açılınca flash patlasın*/

body {
  background: #0f1923;
}
.agents {
  min-height: 100vh;
  background: #0f1923;
}
.background {
  background-image: url("https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltbded518020183769/5eb26f5389bac8148a8006cc/agent-background-generic.JPG");
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.main {
  width: 75vw;
}
.ant-row {
  margin-top: 50px;
  justify-content: center;
}
</style>