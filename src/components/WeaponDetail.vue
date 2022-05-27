<template>
  <a-layout>
    <a-layout-content>
      <div class="background">
        <div class="wrapper">
          <a-row v-if="isSkinSelected == false && weapon" type="flex">
            <a-col :flex="4">
              <div class="slider">
                <div v-if="weapon.displayIcon" class="agent-img">
                  <img v-bind:src="weapon.displayIcon" alt="" />
                  <!-- <img
                    v-if="isSkinSelected"
                    v-bind:src="selectedSkin.displayIcon"
                    alt=""
                  /> -->
                  <div class="armorShape1"></div>
                  <div class="armorShape2"></div>
                </div>
                <i @click="sliderLeft" class="fa-solid fa-angle-left"></i>
                <div class="slider-wrapper">
                  <div
                    :key="skin.uuid"
                    v-for="skin in weapon.skins[sliderCount].chromas"
                    class="skins-slider"
                  >
                    <div
                      :style="{
                        'background-image': 'url(' + skin.swatch + ')',
                      }"
                      class="slider-box"
                      v-if="skin.swatch"
                      @mouseover="changeWeaponPhoto(skin)"
                    ></div>
                    <div
                      style="
                        background: rgba(250, 68, 84, 0.7);
                        border: 1px solid white;
                      "
                      class="slider-box"
                      v-else
                      @mouseover="changeWeaponPhoto(skin)"
                    ></div>
                  </div>
                </div>
                <i @click="sliderRight" class="fa-solid fa-angle-right"></i>
              </div>
            </a-col>
            <a-col :flex="2">
              <div class="agent-detail">
                <div class="role">
                  <div class="role-desc">
                    <h1>
                      {{ weapon.displayName }}
                    </h1>
                  </div>
                  <!-- <img v-bind:src="weapon.displayIcon" alt="" /> -->
                </div>
              </div>
            </a-col>
          </a-row>
          <a-row v-if="isSkinSelected" type="flex">
            <a-col :flex="4">
              <div class="slider">
                <div v-if="selectedSkinRef.displayIcon" class="agent-img">
                  <img v-bind:src="selectedSkinRef.displayIcon" alt="" />
                  <!-- <img
                    v-if="isSkinSelected"
                    v-bind:src="selectedSkin.displayIcon"
                    alt=""
                  /> -->
                  <div class="armorShape1"></div>
                  <div class="armorShape2"></div>
                </div>
                <i @click="sliderLeft" class="fa-solid fa-angle-left"></i>
                <div class="slider-wrapper">
                  <div
                    v-for="skin in weapon.skins[sliderCount].chromas"
                    :key="skin.uuid"
                    class="skins-slider"
                  >
                    <div
                      :style="{
                        'background-image': 'url(' + skin.swatch + ')',
                      }"
                      class="slider-box"
                      v-if="skin.swatch"
                      @mouseover="changeWeaponPhoto(skin)"
                    ></div>
                    <div
                      style="
                        background: rgba(250, 68, 84, 0.7);
                        border: 1px solid white;
                      "
                      class="slider-box"
                      v-else
                      @mouseover="changeWeaponPhoto(skin)"
                    ></div>
                  </div>
                </div>
                <i @click="sliderRight" class="fa-solid fa-angle-right"></i>
              </div>
            </a-col>
            <a-col :flex="2">
              <div class="agent-detail">
                <div class="role">
                  <div class="role-desc">
                    <h1>
                      {{
                        isSkinSelected
                          ? selectedSkin.displayName
                          : weapon.displayName
                      }}
                    </h1>
                  </div>
                  <!-- <img v-bind:src="weapon.displayIcon" alt="" /> -->
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useWeaponsStore } from "../store/weapons";
const main = useWeaponsStore();
const weapon = computed(() => main.getWeapon);
const selectedSkinRef = ref(weapon.value);
const sliderCount = ref(0);
const selectedSkin = computed({
  get: () => weapon.value,
  set: (value) => (selectedSkinRef.value = value),
});
const isSkinSelected = ref(false);
const changeWeaponPhoto = (weapon) => {
  selectedSkin.value = weapon;
  isSkinSelected.value = true;
};
const sliderLeft = () => {
  sliderCount.value += -1;
};
const sliderRight = () => {
  if (sliderCount.value < weapon.value.skins.length - 1) {
    console.log(selectedSkinRef);
    selectedSkin.value = weapon.value.skins[sliderCount.value+1];
    sliderCount.value += 1;
    isSkinSelected.value = true;
    console.log(selectedSkinRef.value);
  }
};
onMounted(() => {
  selectedSkinRef.value = weapon.value;

});
</script>

<style scoped lang='scss'>
.ant-layout {
  background: black !important;
}
.background {
  background-image: url("https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltbded518020183769/5eb26f5389bac8148a8006cc/agent-background-generic.JPG");
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.wrapper {
  width: 100vw;
  min-height: 100vh;
}
.ant-row {
  min-height: 100vh;
}
.ant-row .ant-col:nth-child(1) {
  width: 75vw !important;
}
.ant-row .ant-col:nth-child(2) {
  width: 25vw !important;
}
.agent-img {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 6;
  position: relative;
}
.agent-img img {
  height: 200px;
  filter: drop-shadow(1px 1px 100px rgba(250, 68, 84, 0.7));
  // transition: all 0.3s ease;
  animation: rotatingWeapon 1s infinite;
}

h1,
h3 {
  color: black !important;
  font-weight: 600 !important;
  text-shadow: 1px 1px 1px white;
}
h1 {
  font-size: 1.9em;
}
h3 {
  font-size: 1.3em;
}
p {
  font-size: 1.1em;
  line-height: 1.8em;
}
.agent-detail {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  background: #ddd9d2;
}
.role-desc {
  transform: rotate(270deg) translateX(-25px);
  font-size: 4rem;
  letter-spacing: 5px;
}
.role-desc h1 {
  font-family: "VALORANT" !important;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rotatingText 1s infinite;
}
.slider {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}
.slider-wrapper {
  flex: 1;
  transform: translateX(50px);
  width: 250px;
  max-height: 60px;
}
.slider-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
i {
  font-size: 35px;
  color: #ddd9d2;
  cursor: pointer;
  transition: all 0.3s ease;
}
.fa-angle-left {
  transform: translateX(-100px) translateY(45px);
}
.fa-angle-right {
  transform: translateX(200px) translateY(-50px);
}
i:hover {
  color: rgba(250, 68, 84, 1);
}
.skins-slider {
  width: 1500px !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
.armorShape1 {
  width: 20px;
  height: 20px;
  background: white;
  position: absolute;
  right: 40%;
  top: 65%;
  transition: all 0.3s ease;
  animation: rotatingAnimation 1.5s infinite;
  transform: rotate(3deg);
}
.armorShape2 {
  width: 1px;
  height: 50px;
  background: white;
  position: absolute;
  right: 45%;
  transform: rotate(-50deg);
  top: 59%;
}
.armorShape1:active {
  width: 100px;
  height: 100px;
  transform: translateX(50px) rotate(0);
  animation: none;
}
.skins-slider > * {
  background-size: contain;
  background-repeat: no-repeat;
}
.slider-box {
  width: 50px;
  height: 50px;
  margin: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.slider-box:hover {
  border-radius: 8px;
  transform: scale(1.2);
}
@keyframes rotatingAnimation {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotatingWeapon {
  0%{
    transform: translateY(-2px) translateX(-2px);
  }
   50%{
    transform: translateY(0px) translateX(0px);
  }
  100% {
    transform: translateY(-2px) translateX(-2px);
  }
}

</style>

