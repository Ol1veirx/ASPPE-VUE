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
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(image, index) in imageList" :key="index">
                    <img :src="require(`@/${image}`)" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/swiper-bundle.css';
    export default {
        name: 'MainContent',
        data() {
        return {
        imageList: [
            'assets/mainImg.jpg',
            'assets/pescaa.jpg',
            'assets/mainImg.jpg',
            'assets/pescaa.jpg',
            'assets/mainImg.jpg',
        ],
        };
    },
    mounted() {
        this.initSwiper();
        this.startImageCarousel();
    },
    methods: {
        initSwiper() {
        this.swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: this.imageList.length > 1,
            speed: 1000, 
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        });
        },
        startImageCarousel() {
        setInterval(() => {
            // Troque para o próximo slide
            this.swiper.slideNext();
        }, 5000);
        },
    },
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
    height: auto;
    margin-top: 20px;
}

.swiper-slide {
    width: 100%;
    box-sizing: border-box;
    transition: transform 1s ease;
}
.swiper-slide img {
  height: auto;
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
</style>