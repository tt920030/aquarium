<template>
    <Header></Header>
    <div class="member">
        <main>
            <div class="left">
                <div class="photo">
                    <img src="../img/member_photo1.png" alt="">
                </div>
                <p class="name">使用者姓名</p>
                <button class="btn1">
                    <p>年度會員</p>
                </button>

                <RouterLink to="/member/Profile">aaa</RouterLink>
                <RouterLink to="/member/Order">
                    <div class="list ">
                        <i class="fa-solid fa-folder-open"></i>
                        <p>我的訂單</p>
                    </div>
                </RouterLink>
                <RouterLink to="/member/Coupon">
                    <div class="list">
                        <i class="fa-solid fa-ticket"></i>
                        <p>我的折價券</p>
                    </div>
                </RouterLink>
                <RouterLink to="/member/Pet">
                    <div class="list -on">
                        <i class="fa-solid fa-fish"></i>
                        <p>虛擬寵物</p>
                    </div>
                </RouterLink>



            </div>
            <div class="right">


                <RouterView></RouterView>
                

            </div>
        </main>
    </div>

    <Footer></Footer>



</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";

</script>

<style lang="scss">
@import "../../src/assets/sass/page/member";

.btn1 {
    display: block;
    background: #fff61c;
    border-radius: 40px;
    text-align: center;
    padding: 10px 30px;
    transition: 0.5s;
    color: #16355a;
    cursor: pointer;
    border: 0;
    width: fit-content;
    margin: 0 auto;
}

.input {
    display: flex;
    flex-direction: column;

    label {
        font-size: 1.6rem;
        line-height: 1.6;
        letter-spacing: 0.1rem;
        margin-bottom: 5px;
    }

    input {
        appearance: none;
        border: 0px;
        border-bottom: 1px solid black;
        border-radius: 0;
        height: 30px;
        width: 100%;
        background-repeat: no-repeat;
        background-position: left 5px center;
        padding: 0 25px;

        &:focus {
            outline: 0;
            box-shadow: none;
            border-bottom: 1px solid black;
            background-color: white;

        }
    }

    margin-bottom: 20px;
}
</style>
