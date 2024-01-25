<template>
  <div class="main-content">
    <div class="main-paragraph">
      <h2>Sobre a ASPPE</h2>
      <p>
        Tudo começou em 2002 através de um torneio entre amigos organizado pelo
        professor Maiúla. No ano seguinte, foi realizado o primeiro campeonato,
        sendo um sucesso! Em 2004, já com Dr. Valter e Costa Filho na direção,
        revezando-se entre si nos anos seguintes e com o apoio dos amigos Zé
        Fofinho, Dr. Ubiracy e outros ilustres pescadores, deram continuidade ao
        que se tornou uma tradição em nossa região - lembrando que já chegamos a
        contar com 33 equipes filiadas só na região, um sucesso.
      </p>
      <p>
        A partir de 2016, já com Fábio Araújo na direção, foi dada continuidade
        à tradição até 2017, quando em 2018 foi passado o “bastão” aos amigos
        Antônio Lima Bispo e David Firmino, duas referências e, junto com os
        demais citados acima, verdadeiros entusiastas deste esporte. Eles
        modernizaram o sistema de pontuação e colocação, como também premiações,
        elevando assim o patamar de competitividade do campeonato, apesar de uma
        pandemia à qual todos fomos afetados, mas mesmo assim, seguiram e
        continuaram com a tradição. Não podemos esquecer também do amigo Pita
        que, com luta e garra, foi nosso diretor.
      </p>
      <p>
        A atual temporada (2024) é encabeçada pelo nosso diretor Ledson Danúbio,
        o qual promete, com bastante empenho e afinco, dar continuidade a este
        grande campeonato e a esta linda história.
      </p>
      <p>
        Não poderíamos deixar de agradecer às personalidades que contribuíram e
        contribuem muito com a ASPPE, como: Prof. Maiúla, Costa Filho, Dr.
        Valter, Zé Fofinho, Dr. Ubiracy, Fábio Araújo, Pita, Antônio Lima Bispo
        e David Firmino; às pescadoras femininas Shirley Pereira, Denise Andrade
        e Jidelma Leite; aos pescadores mirins Thiago da Silva Pereira e Layla
        Gabriele, e a todas as equipes que, ao longo dos anos, participaram e
        abrilhantaram nossas competições, em especial Lambari, Vaza-Maré, Maré
        Cheia, Pescana, Peskbebe, Stebam, entre outros.
      </p>
    </div>
    <div class="img-content">
      <img src="@/assets/asppeLogoAzul2024.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContent",
};
</script>

<style scoped>
.main-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  padding: 25px;
  background-color: #0f1626;
}

.main-paragraph {
  text-align: justify;
}

.main-paragraph h2 {
  text-align: center;
  padding-bottom: 10px;
  color: #d92525;
  text-shadow: 1px 1px 9px black;
}
.main-paragraph p {
  color: white;
}
.img-content img {
  width: 700px;
}

@media (max-width: 768px) {
  .main-content {
    margin-top: 50px;
    padding: 15px;
    flex-direction: column;
  }

  .main-paragraph h2 {
    font-size: 1.8rem;
    margin-top: 10px;
  }
  .img-content img {
    width: 320px;
  }
}
</style>
