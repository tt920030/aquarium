<template>
    <div class="profile wrapper ">
        <div class="top">
            <div class="inner-left">
                <div class="photo-area">
                    <img src="../../img/member_photo1.png" alt="">
                </div>
                <button class="btn1" @click="showPhoto()">
                    <p>更換頭貼</p>
                </button>
            </div>
            <div class="inner-right">
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
                    <!-- <div class="invalid-feedback">此欄位必填</div> -->
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
                    <!-- <div class="invalid-feedback">此欄位必填</div> -->
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
        <!-- <component :is="showPhoto"></component> -->
        <Photo v-if="show"></Photo>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Photo from '../../components/Photo.vue';

// const emit = defineEmits(["showPhoto"]);

let show = ref(false)
// let show = false;

const showPhoto = () => {
    if (show.value === true) {
        // console.log(true);
        // // console.log(close);
        show.value = false;

    } else {
        console.log(false);
        console.log(show);
        show.value = true;
    }
}





</script>

<style lang="scss" scoped>
.profile {

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

                p {}
            }
        }

        .inner-right {
            width: 50%;

            .input {
                margin-top: 100px;
                margin-left: 70px;
                width: 300px;

                label {}

                #email {}
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