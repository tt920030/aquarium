<template>
    <Header></Header>
    <div class="member">
        <main>
            <div class="left">
                <div class="photo">
                    <img src="@/img/member_photo1.png" alt="">
                </div>
                <p class="name">使用者姓名</p>
                <button class="btn1">
                    <p>年度會員</p>
                </button>

                <RouterLink to="/member/Profile">
                    <div class="list -on" @click="button(0)">
                        <img src="@/img/member_user.svg" alt="">
                        <p>我的資料</p>
                    </div>
                </RouterLink>
                <RouterLink to="/member/Order">
                    <div class="list " @click="button(1)">
                        <img src="@/img/member_order.svg" alt="">
                        <p>我的訂單</p>
                    </div>
                </RouterLink>
                <RouterLink to="/member/Coupon">
                    <div class="list" @click="button(2)">
                        <img src="@/img/member_coupon.svg" alt="">
                        <p>我的折價券</p>
                    </div>
                </RouterLink>
                <RouterLink to="/member/Pet">
                    <div class="list" @click="button(3)">
                        <img src="@/img/member_pet.svg" alt="">
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
import $ from "jquery";

const button = (i) => {

    $(document).find(".list").removeClass("-on");
    $(document).find(".list").eq(i).addClass("-on");
    // $(this).addClass("-on");
}

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
    font-family: "Noto Sans TC", sans-serif;
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

.fork {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
}
</style>
