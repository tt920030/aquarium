<template>
    
    
    <div class="profile wrapper ">
        <Photo v-if="show" @closePhoto="showPhoto()" ></Photo>
        <div class="top">
            <div class="inner-left">
                <div class="photo-area">
                    <img src="@/img/member_photo1.png" alt="">
                </div>
                <button class="btn1" @click="showPhoto()">
                    <p>更換頭貼</p>

                </button>

            </div>
            <div class="inner-right">
                <div class="input">
                    <label for="email">email</label>
                    <input type="email" id="email" name="email" disabled="disabled" value="123@gmail.com">
                </div>

            </div>
        </div>
        <div class="bottom">
            <form action="post" method="" class=""  @submit.prevent="onSubmit">
                <div class="input">
                    <label for="name">姓名</label>
                    <input type="text" id="name" name="name" :disabled="isButtonDisabled" value="王小明" :class="{ '-on' : !isButtonDisabled }">
                    <div class="invalid-feedback">此欄位必填</div>
                </div>
                <div class="input">
                    <label for="sex">性別</label>
                    <input type="text" id="sex" name="sex" :disabled="isButtonDisabled" v-if="isButtonDisabled">
                    <select name="sex" id="sex" v-else  class="text" :class="{ '-on' : !isButtonDisabled }">
                        <option value="無">請選擇</option>
                        <option value="女">女</option>
                        <option value="男">男</option>
                    </select>
                </div>
                <div class="input">
                    <label for="birthday">生日</label>
                    <input type="date" id="birthday" name="birthday" :disabled="isButtonDisabled" :class="{ '-on' : !isButtonDisabled }">
                </div>
                <div class="input">
                    <label for="phone">手機</label>
                    <input type="phone" id="phone" name="phone" :disabled="isButtonDisabled" value="0912345678" :class="{ '-on' : !isButtonDisabled }">
                </div>
                <div class="input">
                    <label for="password">密碼</label>
                    <input :type="type" id="password" name="password" value="Aa1234" disabled>
                    <div class="invalid-feedback">此欄位必填</div>
                    <button class="change" v-if="!isButtonDisabled" @click="changePassword">修改</button>
                </div>
                <div class="input">
                    <label for="address">地址</label>
                    <input type="text" id="address" name="address" :disabled="isButtonDisabled" :class="{ '-on' : !isButtonDisabled }">
                </div>

                <div class="block">
                    <button type="submit" class="btn1" @click="changeDisabled($event)">
                        <h4 v-if="isButtonDisabled">修改資料</h4>
                        <h4 v-else>確認修改</h4>
                    </button>

                </div>

            </form>
        </div>

    </div>
    
    <ChangePassword v-if="openPassword" @closePassword="changePassword"></ChangePassword>
</template>

<script setup>
import { onMounted, ref, defineEmits } from 'vue';
import Photo from '@/components/Photo.vue';
import "bootstrap";
import ChangePassword from '@/components/ChangePassword.vue';

import $ from "jquery";


const show = ref(false);

const isButtonDisabled = ref(true);

const openPassword = ref(false);

const type = ref("password");

const emit = defineEmits(["showPassword"]);

const showPhoto = () => {

    show.value = !show.value;
}

const changeDisabled = (e) => {
    isButtonDisabled.value = !isButtonDisabled.value;
    isButtonDisabled.value? type.value = "password" : type.value = "text";
    
    // $(".text").toggleClass("-on");
    // console.log($(".text"));
    
}

const changePassword = () => {
    openPassword.value = !openPassword.value;
}


</script>

<style lang="scss" scoped>
@import "bootstrap/dist/css/bootstrap.min.css";

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

.profile {
    position: relative;
    @include mobile{
        margin-top: 150px;
        width: 100%;
        height: 1480px;
    }

    .top {
        display: flex;
        @include mobile{
        flex-direction: column;
        align-items: center;

        }

        .inner-left {
            width: 50%;
            background-color: #fff;

            @include mobile{
                width: 100%;
                padding-top: 40px;
            }


            .photo-area {
                width: 240px;
                height: 240px;
                margin: 0 auto;
                margin-bottom: 55px;
                @include mobile{
                    margin-bottom: 40px;
                }

                img {}
            }

            .btn1 {
                background-color: map-get($color, bgc2 );
                

                p {
                    margin: 0;
                }
            }
        }

        .inner-right {
            width: 50%;
            @include mobile{
                width: 90%;
            }
            

            .input {
                margin-top: 100px;
                margin-left: 70px;
                width: 300px;
                @include mobile{
                    margin: 30px auto 20px;
                    margin-top: 30px;
                    width: 100%;
                    
                }

                label {}

                

                
            }

        }
    }

    .bottom {


        form {
            margin: 0 auto;
            width: 800px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            @include mobile{
                width: 90%;
                flex-direction: column;
                align-items: center;
            }

            .input {
                width: 320px;
                margin: 20px 0;
                position: relative;
                @include mobile{
                    width: 100%;
                }

                .-on {
                    // border: 1px solid black;
                    background-color: map-get($color , bgc1 );
                }
                
                .change{
                    position: absolute;
                    top: 38%;
                    right: 0px;
                    background-color: map-get($color , bgc2 );
                    display: block;
                    border-radius: 40px;
                    text-align: center;
                    padding: 10px 30px;
                    transition: 0.5s;
                    font-family: "Noto Sans TC", sans-serif;
                    color: #16355a;
                    cursor: pointer;
                    border: 0;
                    width: fit-content;
                }
            }

            select{
                .-on {
                    // border: 1px solid black;
                    background-color: map-get($color , bgc1 );
                }
            }

            .block {
                width: 100%;

                .btn1 {
                    display: block;
                    width: fit-content;
                    margin: 0 auto;
                    margin-top: 50px;

                    h4 {
                        margin: 0;
                        font-family: "Noto Serif TC", serif;
                        font-size: 2rem;
                        letter-spacing: 0.2rem;
                    }
                }
            }

        }
    }

}
</style>