<template>
  <div>
    <div id="main-container" class="container">
      <div id="personal-info" class="container">
        <img src="../assets/Square.png" alt="" id="pfp"> 
        <div id="info" class="container">
          <h1 id="name">Dinda O'Brien</h1>
        </div>
      </div>
      <div id="btn-container" class="container">
        <button id="updateBtn" @click="update">Press here</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    update() {
      this.$store.commit('ADD_UPDATE', 'Hello!');
    }
  }
}
</script>

<style scoped>
#main-container {
  width: 700px;
}
#personal-info {
  display: flex;
}
#info {
  flex-basis: 100%;
}
#pfp {
  height: 150px;
  border-radius: 50%;
}
</style>