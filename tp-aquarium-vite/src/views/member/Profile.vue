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
                    <input type="text" id="name" name="name" :disabled="isButtonDisabled" value="王小明" class="text">
                    <div class="invalid-feedback">此欄位必填</div>
                </div>
                <div class="input">
                    <label for="sex">性別</label>
                    <input type="text" id="sex" name="sex" :disabled="isButtonDisabled" class="text">
                </div>
                <div class="input">
                    <label for="birthday">生日</label>
                    <input type="date" id="birthday" name="birthday" :disabled="isButtonDisabled" class="text">
                </div>
                <div class="input">
                    <label for="phone">手機</label>
                    <input type="phone" id="phone" name="phone" :disabled="isButtonDisabled" value="0912345678" class="text">
                </div>
                <div class="input">
                    <label for="password">密碼</label>
                    <input :type="type" id="password" name="password" value="Aa1234" disabled>
                    <div class="invalid-feedback">此欄位必填</div>
                    <button class="change" v-if="!isButtonDisabled" @click="changePassword">修改</button>
                </div>
                <div class="input">
                    <label for="address">地址</label>
                    <input type="text" id="address" name="address" :disabled="isButtonDisabled" class="text">
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
    <div class="mobile_info wrapper " >
        <div class="top">
            <div class="left">
                <div class="photo-area">
                    <img src="@/img/member_photo1.png" alt="">
                </div>
                <button class="btn1">
                    <p>更換頭貼</p>
                </button>
            </div>
            <div class="right">
                <div class="input">
                    <label for="email">email</label>
                    <input type="email" id="email" name="email" disabled="disabled">
                </div>

            </div>
        </div>
        <div class="bottom">
            <form action="post" method="" class="">
                <div class="input">
                    <label for="name">姓名</label>
                    <input type="text" id="name" name="name" disabled="disabled">
                    <div class="invalid-feedback">此欄位必填</div>
                </div>
                <div class="input">
                    <label for="sex">性別</label>
                    <input type="text" id="sex" name="sex" disabled="disabled">
                </div>
                <div class="input">
                    <label for="birthday">生日</label>
                    <input type="text" id="birthday" name="birthday" disabled="disabled">
                </div>
                <div class="input">
                    <label for="phone">手機</label>
                    <input type="phone" id="phone" name="phone" disabled="disabled">
                </div>
                <div class="input">
                    <label for="password">密碼</label>
                    <input type="password" id="password" name="password" disabled="disabled">
                    <div class="invalid-feedback">此欄位必填</div>
                </div>
                <div class="input">
                    <label for="address">地址</label>
                    <input type="text" id="address" name="address">
                </div>

                <div class="block">
                    <button type="submit" class="btn1">
                        <h4>修改資料</h4>
                    </button>

                </div>

            </form>
        </div>
    </div>
    

</template>

<script setup>
import { onMounted, ref, defineEmits } from 'vue';
import Photo from '../../components/Photo.vue';
import "bootstrap";

import $ from "jquery";


const show = ref(false);

const isButtonDisabled = ref(true);

const type = ref("password");

const emit = defineEmits(["showPassword"]);

const showPhoto = () => {

    show.value = !show.value;
}

const changeDisabled = (e) => {
    isButtonDisabled.value = !isButtonDisabled.value;
    isButtonDisabled.value? type.value = "password" : type.value = "text";
    
    $(".text").toggleClass("-on");

}




// 沒有反應?
const changePassword = () => {
    emit("showPassword", true);
    console.log("aaa");
}


</script>

<style lang="scss" scoped>
@import '../../assets/sass/page/member_mobile_info';
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
        display: none;
    }

    .top {
        display: flex;

        .inner-left {
            width: 50%;
            background-color: #fff;


            .photo-area {
                width: 240px;
                height: 240px;
                margin: 0 auto;
                margin-bottom: 55px;

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
            

            .input {
                margin-top: 100px;
                margin-left: 70px;
                width: 300px;

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

            .input {
                width: 320px;
                margin: 20px 0;
                position: relative;

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