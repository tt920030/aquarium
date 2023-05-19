<template>
    <div class="container">
        <img src="@/img/input_fork.svg" alt="" class="fork" @click="$emit('showPhoto')">
        <h4>請選擇頭貼</h4>
        <form method="post" action="" class="photo">
            <div class="list" v-for="(photo, index) in photos" :key="index" @click="chosePhoto($event)">
                <input type="radio" name="chose_photo" :id="index + 1" :value="index + 1">
                <label :for="index + 1" :class="currentIndex == (index + 1) ? '-on' : ''">
                    <img :src="photo" alt="">
                </label>

            </div>
            <button type="submit" class="btn1">
                <p>確認</p>
            </button>
        </form>

    </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["showPhoto"]);

const photos = ref([
    '../../src/img/member_photo1.png',
    "../../src/img/member_photo2.png",
    "../../src/img/member_photo3.png",
    "../../src/img/member_photo4.png",
    "../../src/img/member_photo5.png",
    "../../src/img/member_photo7.png",
    "../../src/img/member_photo6.png",
    "../../src/img/member_photo8.png",
    "../../src/img/member_photo9.png"
]);

const currentIndex = ref(1);

const chosePhoto = (e) => {
    currentIndex.value = e.target.closest("input").value;
}



</script>

<style lang="scss" scoped>
.container {
    width: 600px;
    border: 5px solid map-get($color, bgc2);
    border-radius: 15px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 100px;
    transform: translateX(-50%);


    h4 {
        text-align: center;
        padding-top: 30px;
    }

    .photo {
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        padding: 20px;
        justify-content: center;
        align-items: center;

        .list {
            width: 150px;
            height: 150px;
            padding: 10px;
            // border: 1px solid red;
            display: flex;
            justify-content: center;
            align-items: center;

            input {
                appearance: none;
                display: none;
            }

            label {
                // border: 1px solid blue;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    cursor: pointer;
                }
            }

            .-on {
                img {
                    border: 4px solid map-get($color , warning);
                    border-radius: 50%;
                }

            }

        }

        .btn1 {
            margin-top: 40px;

            p {}
        }
    }
}
</style>