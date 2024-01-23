<template>
  <div id="app">
    <!-- <MyHeader /> -->
    <router-view />
    <!-- <MainContent /> -->
  </div>
</template>

<script>
// import MyHeader from './components/MyHeader.vue';
// import MainContent from './components/MainContent.vue';

export default {
  name: 'App',
  // components: {
  //   // MyHeader,
  //   // MainContent,
  // }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700&display=swap');
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: white;
  line-height: 1.6; /* Espaçamento entre linhas */
  letter-spacing: 0.02em
}
</style>