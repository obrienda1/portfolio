<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import Clock from './components/Clock.vue'
import PopUp from './components/PopUp.vue'
import MainScreen from './components/Test-Project.vue'
import Updates from './components/Updates.vue'
</script>

<template>
  <!-- <clock /> -->
  <div id="panel" class="container main-container">
    
    <div>
      <pop-up class="hidden" />
    </div>
    <div id="updates" class="container">
      <Updates />
      <div id="update-gradient"></div>
    </div>
    <div id="main-content"><MainScreen /></div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
#updates {
  position: absolute;
  top: 40vh;
  left: 20px;
  height: 30%;
  overflow: hidden;
}
#update-gradient {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width:100%;
  background: linear-gradient(
    rgba(36, 36, 36, 0) 0%,
    rgb(36, 36, 36, 0.87) 87%
  );
}

</style>
