<template>
  <div>
    <div>
      <pop-up class="hidden" />
    </div>
    <div id="updates" class="container">
      <Updates />
      <div id="update-gradient"></div>
    </div>
    <div id="main-content">
      <main-screen />
    </div>
  </div>
</template>

<script>
import PopUp from '../components/PopUp.vue'
import MainScreen from '../components/HomeContent.vue'
import Updates from '../components/Updates.vue'

export default {
    components: {
        PopUp,
        MainScreen,
        Updates
    },

}
</script>

<style scoped>
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