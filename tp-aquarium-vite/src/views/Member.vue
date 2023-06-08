<template>

    <!-- 電腦版 -->
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

                <div class="manu">
                    <RouterLink to="/member/Profile" @showPassword="showPassword1(n)">
                    <div class="list" :class="{'-on': button === 1}" @click="button = 1">
                        <img src="@/img/member_user.svg" alt="">
                        <p>我的資料</p>
                    </div>
                </RouterLink>
                <RouterLink to="/member/Order">
                    <div class="list " :class="{'-on': button === 2}" @click="button = 2">
                        <img src="@/img/member_order.svg" alt="">
                        <p>我的訂單</p>
                    </div>
                </RouterLink>
                <RouterLink to="/member/Coupon">
                    <div class="list" :class="{'-on': button === 3}" @click="button = 3">
                        <img src="@/img/member_coupon.svg" alt="">
                        <p>我的折價券</p>
                    </div>
                </RouterLink>
                <RouterLink to="/member/Pet">
                    <div class="list" :class="{'-on': button === 4}" @click="button = 4">
                        <img src="@/img/member_pet.svg" alt="">
                        <p>虛擬寵物</p>
                    </div>
                </RouterLink>
                </div>
                


            </div>
            <div class="right_view">


                <RouterView></RouterView>


            </div>
        </main>
    </div>

    <Profile v-if="false" @showPassword="showPassword1"></Profile>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";

import Profile from "./member/Profile.vue";
import { onMounted, reactive, ref, watch } from "vue";


const password = ref(false);

const button = ref(1);


const showPassword1 = (n) => {
    // console.log(n);
    password.value = n;
    // console.log(password.value);
}






</script>

<style lang="scss">
@import "../../src/assets/sass/page/member";
// @import "../../src/assets/sass/page/member_mobile";

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
        height: 40px;
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

    select{
        // appearance: none;
        border: 0px;
        border-bottom: 1px solid black;
        border-radius: 0;
        height: 40px;
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
