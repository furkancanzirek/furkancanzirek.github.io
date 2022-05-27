<template>
  <a-layout>
    <a-layout-content>
      <div class="background">
        <div class="wrapper">
          <a-row v-if="props.selectedAgentDetail&&props.selectedAgentDetail.length>0" type="flex">
            <a-col :flex="4">
              <div class="agent-img">
                <img
                  v-bind:src="props.selectedAgentDetail[0].fullPortrait"
                  alt=""
                />
              </div>
            </a-col>
            <a-col :flex="2">
              <div class="agent-detail">
                <div class="role">
                  <div class="role-desc">
                    <h3>// ROLÜ</h3>
                    <h1>{{ props.selectedAgentDetail[0].role.displayName }}</h1>
                  </div>
                  <img
                    v-bind:src="props.selectedAgentDetail[0].role.displayIcon"
                    alt=""
                  />
                </div>
                <div class="story">
                  <h3>// AÇIKLAMA</h3>
                  <p>{{ props.selectedAgentDetail[0].description }}</p>
                </div>
                <div class="skill-detail">
                  <h3>
                    {{
                      props.selectedAgentDetail[0].abilities[
                        selectedSkill
                      ].displayName.toUpperCase()
                    }}
                  </h3>
                  <p>
                    {{
                      props.selectedAgentDetail[0].abilities[selectedSkill]
                        .description
                    }}
                  </p>
                </div>
                <div class="skills">
                  <div
                    class="skill"
                    @mouseenter="changeSelectedSkill(0)"
                    @mouseleave="changeSkillDetail(false)"
                  >
                    <img
                      v-bind:src="
                        props.selectedAgentDetail[0].abilities[0].displayIcon
                      "
                      alt=""
                    />
                  </div>
                  <div
                    class="skill"
                    @mouseenter="changeSelectedSkill(1)"
                    @mouseleave="changeSkillDetail(false)"
                  >
                    <img
                      v-bind:src="
                        props.selectedAgentDetail[0].abilities[1].displayIcon
                      "
                      alt=""
                    />
                  </div>
                  <div
                    class="skill"
                    @mouseenter="changeSelectedSkill(2)"
                    @mouseleave="changeSkillDetail(false)"
                  >
                    <img
                      v-bind:src="
                        props.selectedAgentDetail[0].abilities[2].displayIcon
                      "
                      alt=""
                    />
                  </div>
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
// import { inject } from 'vue'
// const selectedAgent =  inject('selectedAgent')
// if (selectedAgent) {
//     console.log();
// }
import { ref, onMounted } from "vue";
const props = defineProps(["selectedAgentDetail"]);
const selectedAgent=ref({})
const selectedSkill = ref(0);
const skillDetail = ref([]);
//doğrudan if ile propstan yazdırmayı da denedim load ile başka bir değişkene alıp öyle yüklemeyi de fakat routing ile çalışmadı 
const changeSelectedSkill = (skill) => {
  selectedSkill.value = skill;
  changeSkillDetail(true);
  console.log(selectedSkill);
};
const changeSkillDetail = (detailState) => {
  skillDetail.value = detailState;
  console.log(skillDetail);
};
// window.addEventListener("load", function(event) {
//     selectedAgent.value=props.selectedAgentDetail[0]
//     console.log("çalıştı");
//     console.log(selectedAgent);
//   });
  onMounted(()=>{
    console.log("girdi");
    setTimeout(()=>{
        selectedAgent.value=props.selectedAgentDetail
    })
  
    console.log("çalıştı");
     console.log(selectedAgent);
  })
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
.ant-row .ant-col:nth-child(2) {
  width: 25vw !important;
}
.agent-img {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.agent-img img {
  height: 700px;
  filter: drop-shadow(1px 1px 100px rgba(250, 68, 84, 0.7));
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

.skills {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  transform: translateY(-20px);
  position: relative;
}
.skills::before {
  position: absolute;
  content: "";
  left: -15%;
  background: #8b978f;
  width: 150%;
  height: 1px;
}
.skill-detail {
  width: 75%;
  border-radius: 10px;
  padding: 10px;
  min-height: 100px;
  flex: 1;
  transform: translateY(-25px);
  text-size-adjust: auto;
}
.skill-detail h3,
.skill-detail p {
  color: #fff !important;
  text-shadow: 1px 1px 4px black;
}
.skill {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 10px;
  text-align: center;
  height: 75px;
  width: 75px;
  border: 1px solid #0f1923;
  z-index: 1;
  background: #ddd9d2;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}
/* .skill:before{
    content: "";
    position: absolute;
    height: 100%;
    width: 120%;
    top: 0;
    transform: translateX(-100%) skew(-10deg);
    background: #ff4655;
      transition: all 0.5s ease;
} */
.skill:hover {
  background: #ff4655;
}
 .skill:hover{
  img{
      filter: brightness(1);
  opacity: 1;
  }
} 
/* Vue Kaynaklı sorun css + dan sonra düzgün çalışmıyor */
.skill img {
  height: 50px;
  width: 50px;
  margin-bottom: 15px;
  filter: brightness(0);
  opacity: 0.3;
  transition: all 0.5s ease;
}
.skill span {
  font-weight: 500 !important;
}

.role {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 75%;
}
.role img {
  height: 50px;
}
.story {
  flex: 1;
  width: 75%;
}

</style>

