<template>

    <h1>Experience the Wonder and Beauty of Nature</h1>
    <img src="../img/logo-black.svg" alt="">
    <!-- <div><a class="front" href=""><p>前台</p></a></div> -->
    <div><router-link to="/" class="front"><p>前台</p></router-link></div>
    <!-- <div><a class="back" href=""><p>後台</p></a></div> -->
    <div><router-link to="/backstagelogin" class="back"><p>後台</p></router-link></div>
    <h3>深藍海水緩緩地波動像一首悠揚的詩篇，彷彿穿越到另一個世界，
        這裡展示著各種美麗的海洋生物 ，讓人們感受到大自然的神奇與美妙</h3>
</template>

<script setup>
    import { RouterLink, RouterView } from "vue-router";
    import { onMounted, reactive, ref } from "vue";
</script>


<style lang="scss" scoped>
    h1{
        color: #16355a;
        margin-top: 100px;
        margin-left: 30px;
        font-size: 4.6rem;
        font-weight: 400; 
        letter-spacing: 0.3rem;

    }
    img{
        width: 20%;
        margin-left: 30px;
    }
    h3{
        font-family: Noto Serif TC;
        font-size: 2rem;
        letter-spacing: 0.3rem;
        width: 60%;
        line-height: 3.5rem;
        margin-top: 30px;
        margin-left: 30px;
    }
    a{
        font-size: 3rem;
        letter-spacing: 0.2rem;
        float: right;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        background-color: #CCF1F5;
        margin-right: 30px;
        
        display: flex;
        justify-content: center;
        align-items: center;
       
        }
        .front{
            background-color: #CCF1F5; 
            color: #16355a;
            position: absolute;
            right: 315px;
            top:250px;
            p{
                font-family: Noto Serif TC;
                font-size: 2.5rem;
            }
        }
        .back{
            background-color: #2B5F75;
            color: #fff;
            position: absolute;
            right: 120px;
            top:250px;
            p{
                font-family: Noto Serif TC;
                font-size:2.5rem ;
            }
        }
</style>