<template>
  <div id="results">
    <MyHeader />
    <BoxEtaps>
        <template #image >
             <img class="box-img" src="@/assets/asppeEtapa2024.png" alt="">
        </template>
        <h2>Resultados</h2>
        <span> x </span>
        <p>Etapa 2024</p>
    </BoxEtaps>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import BoxEtaps from '@/components/BoxEtaps.vue'    

export default {
  name: 'ResultsPage',
  components: {
    MyHeader,
    BoxEtaps,
  },
};
</script>

<style>
    #results {
        background-color: white;
        height: 100vh;
        
    }
    .box-img{
        width: 200px;
        margin-left: -40px;
    }
    h2{
        font-size: 18px;
        color: white;
    }
    p{
        color: #D92525;
    }
    
</style>