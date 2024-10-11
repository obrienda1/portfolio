<template>
  <div>
    <div id="main-container" class="container">
      <div id="personal-info" class="container">
        <img src="../assets/Square.png" alt="" id="pfp"> 
        <div id="info" class="container">
          <h1 id="name">Dinda O'Brien</h1>
          <h6 id="bonus-info">(she/her) <span id="pronunciation-guide"><span class="strikethrough">L</span>Dinda</span></h6>
          <p>Nice to meet you!</p>
          <p>If you're interested, check out some of the projects I've worked on, or feel free to hit the button while you rest</p>
          <span id="links">
            <router-link :to="{name: 'About'}">About</router-link> | 
            <router-link :to="{name: 'Projects'}">Projects</router-link> | 
            <a href="https://github.com/obrienda1">Github</a> | 
            <a href="https://www.linkedin.com/in/dinda-obrien/">LinkedIn</a>
          </span>
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

#bonus-info {
  margin-top: 1px;
  margin-bottom: 0px;
}

.strikethrough {
  text-decoration: line-through;
}

#main-container {
  width: 700px;
  border-radius: 20px;
  transition: border-color 0.25s;
  padding: 1.4em;
}

#personal-info {
  display: flex;
  margin-bottom: 20px;
}

#info {
  flex-basis: 60%;
  border: 1px solid #646cff;
  border-radius: 20px;
  background-color: #1a1a1a;
  margin-left: 10%;
  padding: 1.3em;
  justify-self: center;
  filter: drop-shadow(0 0 5px #9297ff)
}

#pfp {
  height: 150px;
  border-radius: 50%;
  filter: drop-shadow(0 0 5px #9297ff);
  align-self: center;
}
</style>