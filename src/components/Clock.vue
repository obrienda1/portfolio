<template>
  <p id="time" v-bind:value="time">Local time: {{ myTimer() }}</p>
</template>

<script>
export default {
    data() {
        return {
            timeInterval: null,
            time: null,
        }
    },
    created() {
        this.timeInterval = setInterval(() => {this.time = this.myTimer()}, 1000);
    },
    methods: {
        myTimer() {
            const d = new Date();
            return d.toLocaleTimeString();
        }
    }
}
</script>

<style scoped>
p {
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    margin-left: auto; 
    margin-right: auto; 
    width: fit-content;
    border-radius: 8px;
    border: 1px solid #646cff;
    padding: 0.6em 1.2em;
    background-color: #1a1a1a;
    transition: border-color 0.25s;
}
</style>