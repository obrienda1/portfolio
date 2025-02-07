<template>
  <router-link class="project-link" :to="{name: 'Bingo'}">Bingo</router-link>
  <router-link class="project-link" :to="{name: 'BrickBreak'}">Brick Break</router-link>
</template>

<script setup lang="ts">
const msg: string = 'hi';
</script>

<style>
.project-link {
  display: block;
}
</style>