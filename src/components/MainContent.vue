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
         <div class="img-content">
            <img src="@/assets/asppeLogoAzul2024.png" alt="">
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
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    padding: 25px;
    background-color: #0F1626;

}

.main-paragraph {
    text-align: justify;
}

.main-paragraph h2 {
    text-align: center;
    padding-bottom: 10px;
    color: #F5F5F5;
    text-shadow: 1px 1px 9px black;
}
.main-paragraph p{
    color: #FF533D;
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
  .img-content img{
    width: 320px;
  }
  
  }

</style>