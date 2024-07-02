<template>
  <div>
    <div id="main-container" class="container">
      <div id="personal-info" class="container">
        <img src="../assets/Square.png" alt="" id="pfp"> 
        <div id="info" class="container">
          <h1 id="name">Dinda O'Brien</h1>
          <p>Nice to meet you!</p>
          <span id="links">Links placeholder (About, Projects, Github, LinkedIn)</span>
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
h1 {
  margin: 0px;
}
#main-container {
  width: 700px;
  border: 3px solid #4e4e4e;
  border-radius: 20px;
  padding: 20px;
}
#personal-info {
  display: flex;
  margin-bottom: 20px;
}
#info {
  flex-basis: 60%;
  border: 3px solid #4e4e4e;
  border-radius: 20px;
  margin-left: 10%;
  padding: 5px;
  justify-self: center;
}
#pfp {
  height: 150px;
  border-radius: 50%;
}
</style>