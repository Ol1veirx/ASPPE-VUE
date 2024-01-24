<template>
    <div id="results2024">
        <MyHeader />
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVs-ATbg6HqE80pJGCZPQ2Z_vimLIQcYIHQ9ko_MnzVtESIxp2lFwPDg1R8cBE92yXWxApfM4dvlDd/pubhtml?widget=true&amp;headers=false"></iframe>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';


export default {
  name: 'Results2024Page',
  components: {
    MyHeader,
  },
};
</script>

<style>
    #results2024 {
        background-color: white;
        height: 100vh;        
    }
    iframe{
        margin-top: 20px;
        width: 350px;
        height: 500px;
        border: 1px solid #AB987A;
        border-radius: 8px;
    }
    @media screen and (min-width: 1024px) {
        iframe{
            width: 827px;
            height: 600px;
        }

  
}
</style>