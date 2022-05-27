<template>
  <a-col :span="8">
    <router-link :to="`/weapondetail/${weapon.uuid}`">
    <div class="image">
      <img v-bind:src="weapon.displayIcon" alt="" />
    </div>
    <div class="card-bottom">
      <div class="title">
        <h1>{{ weapon.displayName }}</h1>
      </div>
      <div class="features-wrapper">
        <div v-if="weapon.shopData" class="cost">
        <h3 >Fiyat:
         {{ weapon.shopData.cost!=null? weapon.shopData.cost:" "  }} 
         <!-- Veri Gelmesine Rağmen shopdata'dan kullanılan tüm verilerde null hatası döndürüyor ve ekrana veriyi yazıyor -->  
        </h3>
        </div>
        <div v-if="weapon.weaponStats" class="more-features">
            <h2>Mermi Sayısı: {{weapon.weaponStats.magazineSize}}</h2>

        </div>
         <div v-if="weapon.weaponStats" class="more-features2">
  
            <h2><i class="fa-solid fa-head-side-virus"></i> Kafa Hasarı: {{weapon.weaponStats.damageRanges[0].headDamage}}</h2>
             <h2> <i class="fa-solid fa-child"></i> Gövde Hasarı: {{weapon.weaponStats.damageRanges[0].bodyDamage}}</h2>
              <h2> <i class="fa-solid fa-paw"></i> Bacak Hasarı: {{weapon.weaponStats.damageRanges[0].legDamage}}</h2>
        </div>
      </div>
    </div>
    
    </router-link>
  </a-col>
</template>

<script>
export default {
  props: {
    weapon: Object,
  },
  setup(props) {
    console.log(props.weapon);
  },
};


</script>
<style scoped lang='scss'>
.ant-col {
  height: 300px;
  margin: 70px;
  cursor: pointer;
}

.image {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 100px;
   margin-bottom: 20px;
}
.image:hover {
 
  
}
.image:hover{
  img{
      animation: shakeImage 1s infinite;
  }
}
.image img {
  height: 100%;

}
.image img:hover{
      filter: drop-shadow(1px 5px 5px rgba(250, 68, 84, 0.7));
      transition: all 0.5s ease;
}
.card-bottom {
  width: 100%;
  background: #dc3d4b;
  flex-direction: column;
  height: 225px;
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
  letter-spacing: 1.5px;
}

.title h1,
.features-wrapper h3,h2 {
  transform: translateY(5px);
  font-weight: 600;
  color: #fff;
}
.features-wrapper {
  flex: 1;
  background: rgba(250, 68, 84, 0.7);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}
.cost{
  background: #364966;
  width: 100%;
  display: flex;
  justify-content: center;
}
.features-wrapper h3 {
  font-size: 1.5em;
}
.features-wrapper h2 {
  font-size: 1.1em;
  width: 100%;
  text-align: center;
}
.more-features{
  flex: 1;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
width: 100%;
}
.more-features2{
  flex: 1;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
  background: #364966;
  width: 100%;

}
.more-features2 h2{
 width: 100%;
  text-align: center;

}
.more-features2 i {

  color: #dc3d4b;
}

.ant-col:nth-child(even) {
}

@keyframes shakeImage {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-2px, 2px);
  }

  40% {
    transform: translate(-2px, -2px);
  }

  60% {
    transform: translate(2px, 2px);
  }

  80% {
    transform: translate(2px, -2px);
  }

  100% {
    transform: translate(0);
  }
}
</style>