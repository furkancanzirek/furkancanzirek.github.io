<template>
<div class="container">
  <video preload="true" autoplay  muted="" loop="" playsinline="" poster="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0a5e500502aabd25/61d908728aabbf6426b75298/Disruption_VAL_DESKTOP_POSTER_1730X720.jpg" data-testid="homepage-hero-video"><source src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7f806cb08ad5d99f/61d908612e109d6c649d3b87/Disruption_VAL_DESKTOP_1730x720.mp4" type="video/mp4"></video>
    <LoginForm />
</div>

</template>
<script setup>
import LoginForm from "../components/LoginForm.vue"
</script>

<style scoped>
*{
      overflow: hidden !important;
}

.container{
  display: flex;
  background: #0f1923;
  justify-content: center;
  align-items: center;
  height: 100vh;
      overflow: hidden !important;
  
}
video{
  height: 100vh;
  width: 100vw;
  position: absolute;
  opacity: 0.8;
    overflow: hidden !important;

}

</style>