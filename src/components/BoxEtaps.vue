<template>
  <div class="link-box" @click="redirectToPage">
    <div class="img-box">
        <slot name="image"></slot>
    </div>
    <div class="details-box">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'BoxEtaps',
  methods: {
    redirectToPage() {
      this.$router.push('/resultados2024');
    }
  }
};
</script>

<style scoped>

.link-box {
  background-color: #044040;
  width: 400px;
  height: 150px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 8px;
  box-shadow: 1px 1px 6px black;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

@media (max-width: 768px) {
  .link-box{
      width: 320px;
  }
}
</style>