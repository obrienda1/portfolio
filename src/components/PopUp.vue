<template>
  <div id="event" class="eventPanel">
    <div class="eventTitle"></div>
    <div id="description"></div>
    <div id="buttons"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.eventPanel:before {
    background-color: #272823;
    opacity: 0.6;
    content: " ";
    height: 700px;
    left: -252px;
    position: absolute;
    top: -75px;
    width: 100%;
    z-index: -2;
}
.eventPanel {
    background: none repeat scroll 00 white;
    border: 2px solid transparent;
    left: 250px;
    padding: 20px;
    position: absolute;
    top: 90px;
    width: 335px;
    z-index:20;
}
.eventPanel::after {
    position: absolute;
    top: -2px;
    left: -2px;
    width: 100%;
    height: 100%;
    content: " ";
    border: 2px solid black;
    box-shadow: 5px 5px 5px #666666;
    z-index: -2;
}
</style>