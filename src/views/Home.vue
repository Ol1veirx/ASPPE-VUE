<template>
  <div id="home">
    <MyHeader />
    <FirstContent />
    <MainContent />
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import FirstContent from '@/components/FirstContent.vue';
import MainContent from '@/components/MainContent.vue';
import MyFooter from '@/components/Footer.vue';

export default {
  name: 'HomePage',
  components: {
    MyHeader,
    FirstContent,
    MainContent,
    MyFooter,
  },
};
</script>

<style>
/* Estilos específicos para a página Home, se necessário */
</style>