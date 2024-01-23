<template>
  <div id="home">
    <MyHeader />
    <MainContent />
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';  
import MainContent from '@/components/MainContent.vue';  

export default {
  name: 'HomePage',
  components: {
    MyHeader,
    MainContent,
  },
};
</script>

<style>
/* Estilos específicos para a página Home, se necessário */
</style>