<template>
  <div>
    
    <p id="updates" v-for='update in reversedArray' v-bind:key='update.id'>{{ update }}</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            updateInterval: null
        }
    },
    created() {
        /*
        update the time every second
        this.timeInterval = settimeInterval(() => {
            this.time = Intl.DateTimeFormat(navigator.language, {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            }).format()
        }, 1000); 
        */
        this.updateInterval = setInterval(() => {
            if (this.$store.state.updates[this.$store.state.updates.length - 1] != 'Updated') {
                this.$store.commit('ADD_UPDATE', 'Updated');
            }
        }, 10000);
    },
    methods: {
        myTimer() {
            const d = new Date();
            return d.toLocaleTimeString();
        }
    }, 
    computed: {
        reversedArray() {
            return this.$store.state.updates.slice().reverse();
        }
    }
}
</script>

<style>

</style>