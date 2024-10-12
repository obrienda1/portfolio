<script setup>
</script>

<template>
  <header class="app-header" v-on:click="$router.push({name: 'HomeView'})">

  </header>
  <main>
    <router-view />
  </main>
  <footer v-if="this.$route.path != '/portfolio'">
    <router-link :to="{name: 'HomeView'}">Home Page</router-link> |
    <span v-if="this.$route.path != '/about'"><router-link :to="{name: 'About'}">About</router-link> | </span>
    <span v-if="this.$route.path != '/projects'"><router-link :to="{name: 'Projects'}">Projects</router-link> | </span>
    <span><a href="https://github.com/obrienda1" target="_blank">Github</a> | </span>
    <span><a href="https://www.linkedin.com/in/dinda-obrien/" target="_blank">LinkedIn</a></span>
  </footer>
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

main {
  margin-bottom: 2rem;
  height: fit-content;
  overflow: auto;
  flex: 1;
}

footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  font-size: smaller;
  margin: 0 auto;
  background-color: #242424ce;
}


</style>
