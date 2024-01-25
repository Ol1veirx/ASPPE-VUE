<template>
  <footer>
    <div class="footer-content">
      <a href="https://www.instagram.com/asppe.penedo/" target="_blank"
        ><img src="@/assets/instagramIcon.svg" alt=""
      /></a>
      <span
        >Site desenvolvido por
        <a href="https://github.com/Ol1veirx" target="_blank"
          >Liedson Danúbio</a
        ></span
      >
      <p>© Todos os Direitos Reservados - 2024</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MyFooter",
};
</script>

<style scoped>
footer {
  padding: 10px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
}
.footer-content p {
  color: black;
}

footer img {
  width: 30px;
}

@media (max-width: 768px) {
  .footer-content {
    font-size: 13px;
  }
}
</style>
