<template>
<header>
    <nav>
        <div class="logo-container">
                <img src="@/assets/asppelogo.png" alt="logo" class="logo">
        </div>

        <div class="menu-toggle" @click="toggleMenu" v-if="isMobile">
          <img src="@/assets/menu-icon.svg" alt="">
        </div>

        <div class="header-container" v-show="isMenuOpen || !isMobile">
          <div class="centered-container">
            <router-link to="/" class="router-link">Início</router-link>
            <div class="results-link" @click="goToResultsPage">
              <span>Resultados</span>
            </div>
          </div>
      </div>
    </nav>
</header>
</template>

<script>

export default {
  name: 'MyHeader',
  data() {
    return {
      isMenuOpen: false,
      isMobile: false,
    };
  },
  mounted() {
    this.checkIsMobile();
    window.addEventListener('resize', this.checkIsMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkIsMobile);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    goToResultsPage() {
      this.$router.push('/resultados');
      this.isMenuOpen = false; // Feche o menu após clicar em um link (opcional)
    },
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 768; // Ajuste conforme necessário
    },
  },
};
</script>

<style scoped>

header {
background: linear-gradient(180deg, rgba(217,37,37,0.10547969187675066) 0%, rgba(242,242,242,1) 64%);
  color: white;
  padding: 10px;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-container {
  display: flex;
    justify-content: center;
  align-items: center;
  width: 100%; 
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 70px; 
  margin-right: 10px;
}

.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
    cursor: pointer;
    gap: 10px;
    color: #D92525;
    font-weight: bold;
}

.menu-toggle img {
  width: 40px;
}


@media (max-width: 768px) {
    nav{
        display: flex;
        gap: 20px;
        justify-content: space-between;
    }
    .logo-container img{
      width: 100px;
    }
    .header-container{
      /* display: none; */
      position: fixed;
      top: 11%;
      left: 70%;
      width: 100px;
      height: 100px;
      background-color: #044040; 
      z-index: 1000; 
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      border-radius: 8px; 
    }
    .header-container.show {
      display: block;
    }
    .centered-container{
      display: flex;
      flex-direction: column;
    }
}
</style>