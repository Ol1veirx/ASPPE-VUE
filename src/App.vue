<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700&display=swap");
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: #f5f5f5;
  line-height: 1.6; 
  letter-spacing: 0.02em;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
