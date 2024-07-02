<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import Clock from './components/Clock.vue'
import PopUp from './components/PopUp.vue'
import MainScreen from './components/HomeContent.vue'
import Updates from './components/Updates.vue'
</script>

<template>
  <header class="app-header" v-on:click="$router.push({name: 'HomeView'})">

  </header>
  <!-- <clock /> -->
  <main>
    
    <!-- <div>
      <pop-up class="hidden" />
    </div>
    <div id="updates" class="container">
      <Updates />
      <div id="update-gradient"></div>
    </div>
    <div id="main-content">
      <MainScreen />
    </div> -->
    <router-view />
  </main>
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


</style>
