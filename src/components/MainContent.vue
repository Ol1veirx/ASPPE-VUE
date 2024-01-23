<template>
    <div class="main-content">
        <div class="main-paragraph">
            <h2>Sobre a ASPPE</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores laudantium deserunt reprehenderit odio ipsum ducimus iure, tempore aliquam, natus molestias in eius eligendi aspernatur. Enim deserunt omnis illum sed?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis quas fuga consequuntur excepturi, nam, earum neque natus error necessitatibus nisi eaque! Veniam tenetur tempore sapiente iure delectus. Explicabo, repudiandae ipsa.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod adipisci excepturi totam eos quas optio quibusdam reiciendis nulla, quo sunt, fugit atque sint praesentium ullam tempore repudiandae distinctio! Quam, ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur reiciendis, possimus eos ipsa iste ad omnis ipsam quo ea, cumque expedita amet modi ullam, laudantium nihil rem nam dolor.
            </p>
        </div>
         <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="@/assets/pescaa.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/assets/mainImg.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/assets/pescaa.jpg" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
</div>
</template>

<script>
    export default {
        name: 'MainContent',
};
</script>

<style scoped>
.main-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 70px;
    padding: 10px;
}

.main-paragraph {
    text-align: justify;
}

.main-paragraph h2 {
    text-align: center;
    padding-bottom: 10px;
}

.swiper-container {
    width: 100%;
    height: 100%;
    margin-top: 20px;
}

.swiper-slide {
    width: 100%;
    box-sizing: border-box;
    transition: transform 1s ease;
}
.swiper-slide img {
  height: auto;
  max-width: 100%;
    width: 450px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.main-images{
    margin-top: 20px;
}
@media (max-width: 768px) {
  .main-content {
    margin-top: 50px;
    padding: 15px;
  }

  .main-paragraph h2 {
    font-size: 1.5rem; 
  }

  .swiper-container {
    margin-top: 10px;
  }

  .swiper-slide img {
    width: 300px;
  }
}
@media (max-width: 767px) {
  .swiper-container {
    height: auto;
  }

  .swiper-slide img {
    width: 100%;
  }
}
</style>