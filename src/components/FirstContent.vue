<template>
  <div class="hero-content">
    <div class="left-content">
      <h1>ASPPE</h1>
      <h2>Associação Penedense de Pesca Esportiva</h2>
    </div>
    <div class="right-content">
      <img src="@/assets/firstImg.jpeg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstContent",
};
</script>

<style scoped>
.hero-content {
  filter: saturate(150%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 600px;
}

.left-content h1 {
  font-size: 160px;
  color: #ff533d;
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.473);
}
.left-content h2 {
  color: #ff533d;
  font-size: 20px;
  font-weight: 200px;
}

.right-content img {
  width: 700px;
  height: 500px;
  border-radius: 20px 5px 20px 5px;
  box-shadow: 2px 2px 12px #ab987a;
}
@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    height: 450px;
    margin-top: 65px;
    position: static;
  }

  .left-content h1 {
    font-size: 80px;
  }
  .left-content h2 {
    font-size: 14px;
  }

  .right-content img {
    width: 320px;
    height: 250px;
    margin-top: 15px;
    border-radius: 4px;
  }
}
</style>
