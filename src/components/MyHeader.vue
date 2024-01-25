<template>
  <header>
    <nav>
      <div class="logo-container">
        <img src="@/assets/aspee.jpg" alt="logo" class="logo" />
      </div>

      <!-- Mostra o ícone do menu apenas em dispositivos móveis -->
      <div class="menu-toggle" @click="toggleMenu" v-if="isMobile">
        <img src="@/assets/menu-icon.svg" alt="" />
      </div>

      <!-- Mostra os links diretamente em computadores -->
      <div class="header-links-computer" v-if="!isMobile">
        <router-link to="/" class="router-link-computer">
          <span>Início</span>
        </router-link>
        <router-link to="/resultados" class="router-link-computer">
          <span class="results-btn">Resultados</span>
        </router-link>
      </div>

      <!-- Mostra o menu quando for um dispositivo móvel e estiver aberto -->
      <div class="header-container" v-show="isMenuOpen && isMobile">
        <div class="centered-container">
          <router-link to="/" class="router-link">
            <span>Início</span>
          </router-link>
          <router-link to="/resultados" class="router-link">
            <span>Resultados</span>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      isMenuOpen: false,
      isMobile: false,
    };
  },
  mounted() {
    this.checkIsMobile();
    window.addEventListener("resize", this.checkIsMobile);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkIsMobile);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
  computed: {
    menuIcon() {
      return this.isMenuOpen ? "@/assets/close-icon.svg" : "@/assets/menu-icon.svg";
    }
  },
};
</script>

<style scoped>
#myheader {
  background-color: #f5f5f5;
}

header {
  background-color: #0f1626;
  filter: saturate(150%);
  border-bottom: 1px solid #ab987a;
  padding: 10px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-links-computer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 100%;
}
.router-link-computer{
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 17px;
}
.results-btn{
  background-color: #e6e6e5;
  color: #d92525;
  padding: 5px;
  border-radius: 4px;
}

.logo-container {
  display: flex;
  align-items: start;

}

.logo-container img {
  border-radius: 45%;
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
  gap: 60px;
  color: #d92525;
  font-weight: 500;
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.397);
}

.router-link {
  text-decoration: none;
  color: white;
}

.results-link {
  background-color: #e6e6e5;
  box-shadow: 1px 1px 2px rgb(107, 107, 107);
  border: none;
  padding: 6px;
  border-radius: 3px;
}

.menu-toggle img {
  width: 40px;
}

@media (max-width: 768px) {
  header {
    padding: 6px;
  }
  nav {
    display: flex;
    gap: 2px;
    justify-content: space-between;
  }
  .results-link {
    background-color: transparent;
    box-shadow: none;
    border: none;
    padding: 0;
    border-radius: 0;
  }
  .logo-container img {
    width: 60px;
    border-radius: 45%;
  }
  .header-container {
    width: 100%;
    height: auto;
    padding: 4px;
    background-color: #0f1626;
    border: 1px solid #ab987a;
    z-index: 1000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 0 0 8px 8px;
    position: relative; 
  }
  .header-container.show {
    display: block;
  }
  .centered-container {
    display: flex;
    flex-direction: row;
    gap: 14px;
  }
  .results-link span {
    color: #d92525;
  }
}
</style>
