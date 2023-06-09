<template>
    
    
    <div class="profile wrapper ">
        <Photo v-if="show" @closePhoto="showPhoto()" :id="profileText.photo_id"></Photo>
        <div class="top">
            <div class="inner-left">
                <div class="photo-area">
                    <img :src="'../../../public/img/' + profileText.photo" alt="">
                </div>
                <button class="btn1" @click="showPhoto()">
                    <p>更換頭貼</p>

                </button>

            </div>
            <div class="inner-right">
                <div class="input">
                    <label for="email">email</label>
                    <input type="email" id="email" name="email" disabled="disabled" v-model.trim="profileText.email">
                </div>

            </div>
        </div>
        <div class="bottom">
            <form action="post" method="" class=""  @submit.prevent="onSubmit">
                <div class="input">
                    <label for="name">姓名</label>
                    <input type="text" id="name" name="name" :disabled="isButtonDisabled" :class="{ '-on' : !isButtonDisabled }" v-model.trim="profileText.name">
                    <div class="invalid-feedback">此欄位必填</div>
                </div>
                <div class="input">
                    <label for="sex">性別</label>
                    <input type="text" id="sex" name="sex" :disabled="isButtonDisabled" v-if="isButtonDisabled" v-model.trim="profileText.sex">
                    <select name="sex" id="sex" v-else  class="text" :class="{ '-on' : !isButtonDisabled }" v-model="profileText.sex">
                        <option value="null">請選擇</option>
                        <option value="0">女</option>
                        <option value="1">男</option>
                    </select>
                </div>
                <div class="input">
                    <label for="birthday">生日</label>
                    <input type="date" id="birthday" name="birthday" :disabled="isButtonDisabled" :class="{ '-on' : !isButtonDisabled }" v-model="profileText.birthday">
                </div>
                <div class="input">
                    <label for="phone">手機</label>
                    <input type="phone" id="phone" name="phone" :disabled="isButtonDisabled" :class="{ '-on' : !isButtonDisabled }" v-model.trim="profileText.phone">
                </div>
                <div class="input">
                    <label for="password">密碼</label>
                    <input :type="type" id="password" name="password" disabled v-model.trim="profileText.password">
                    <div class="invalid-feedback">此欄位必填</div>
                    <button class="change" v-if="!isButtonDisabled" @click="changePassword">修改</button>
                </div>
                <div class="input">
                    <label for="address">地址</label> 
                    <input type="text" id="address" name="address" :disabled="isButtonDisabled" :class="{ '-on' : !isButtonDisabled }" v-model.trim="profileText.address">
                </div>

                <div class="block">
                    <button type="button" class="btn1" @click="changeDisabled($event)">
                        <h4 v-if="isButtonDisabled">修改資料</h4>
                        <h4 v-else @click="changePofile($event)">確認修改</h4>
                    </button>

                </div>

            </form>
        </div>

    </div>
    
    <ChangePassword v-if="openPassword" @closePassword="changePassword"></ChangePassword>
</template>

<script setup>
import { onMounted, ref, defineEmits, reactive } from 'vue';
import { useCookies } from "vue3-cookies";
import Photo from '@/components/Photo.vue';
import "bootstrap";
import ChangePassword from '@/components/ChangePassword.vue';
import axios from 'axios';


const show = ref(false);

const isButtonDisabled = ref(true);

const openPassword = ref(false);

const type = ref("password");

const { cookies } = useCookies();

const profileText = reactive({
    email: "",
    name: "",
    sex: "",
    birthday: "",
    phone: "",
    password: "",
    address: "",
    photo: "",
    photo_id: ""
});

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

const id = cookies.get("id");

const getProfile = () => {

    let params = new URLSearchParams();
    params.append('id', id);

    axios.post('http://localhost/PHP/profile.php',params)
    .then((res) => {

        // console.log(res.data[0]);
        profileText.email = res.data[0].EMAIL;
        profileText.name = res.data[0].NAME;
        profileText.sex = res.data[0].SEX;
        profileText.birthday = res.data[0].BIRTHDAY;
        profileText.phone = res.data[0].PHONE;
        profileText.password = res.data[0].PASSWORD;
        profileText.address = res.data[0].ADDRESS;
        profileText.photo_id = res.data[0].PHOTO_ID;

        photo();
        
    }).catch(err => console.log(err))
}

const changePofile = () => {

    // console.log(id);
    // console.log(profileText.email);
    // console.log(profileText.name);
    // console.log(profileText.sex);
    // console.log(profileText.birthday);
    // console.log(profileText.phone);
    // console.log(profileText.address);
    
    let params = new URLSearchParams();
    params.append('id', id);
    params.append('email', profileText.email);
    params.append('password', profileText.password);
    params.append('name', profileText.name);
    params.append('sex', profileText.sex);
    params.append('birthday', profileText.birthday);
    params.append('phone', profileText.phone);
    params.append('address', profileText.address);

    axios.post('http://localhost/PHP/changeProfile.php',params)
    .then((res) => {

        // console.log(res.data[0].EMAIL);
        getProfile();
    }).catch(err => console.log(err))
}

const photo = () => {
    let params = new URLSearchParams();
    params.append('photo_id', profileText.photo_id);

    // console.log(profileText.photo_id);


    axios.post('http://localhost/PHP/photoName.php',params)
    .then((res) => {

        // console.log(res.data);
        profileText.photo = res.data[0].PHOTO;
        
    }).catch(err => console.log(err))
}

onMounted(() => {
    getProfile();
    
})




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