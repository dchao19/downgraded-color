<template>
  <div id="app">
    <SVGFilters></SVGFilters>
    <router-view />
  </div>
</template>

<script>
import SVGFilters from "@/components/SVGFilters.vue";

export default {
  components: {
    SVGFilters
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700");

#app {
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>
