<template>
    <footer>
         <div class="footer-content">
             <a href="https://www.instagram.com/asppe.penedo/" target="_blank"><img src="@/assets/instagramIcon.svg" alt=""></a>
             <span>Site desenvolvido por <a href="https://github.com/Ol1veirx" target="_blank">Liedson Danúbio</a></span>
             <span>© Todos os Direitos Reservados - 2024</span>
         </div>
    </footer>
       
    

</template>

<script>
    export default {
        name: 'MyFooter',
    }
</script>

<style scoped>
    footer{
        padding: 25px;
        height: 100px;
    }

    .footer-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    footer img{
        width: 30px;
    }

    @media (max-width: 768px) {
        .footer-content{
            font-size: 13px;
        }
    }


</style>