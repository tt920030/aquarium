<template>
    <div class="pet wrapper">
        <h3>目前點數:&nbsp<span>{{ memberData.point}}</span>點</h3>
        <p>-&nbsp每消費500元就可獲得1點</p>

        <form method="post" action="" class="area">
            <div class="fish" :class="{'-chose': item.id == memberData.chose_pet}" v-for="item in Pet" :key="item.id">
                <input type="radio" :id="item.id" name="chose_pet" :value="item.id" v-model="pet_id">
                {{ item }}
                {{ item.id }}

                {{memberData['pet' + item.id] === 1 }}
                <label >
                    <div class="container">
                        <img :src="'../../../public/img/' + item.on_picture" alt="">
                    </div>

                    <p class="name">{{ item.name }}</p>
                    <p class="point">{{ item.point }}點</p>
                </label>

            </div>
            <div class="button">
                <button type="submit" class="btn1">
                    <p>更換寵物</p>
                </button>
            </div> 

        </form>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, reactive , ref} from 'vue';
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

const Pet = reactive([]);

const id = cookies.get("id");

const pet_id = ref();

const memberData = reactive({
    pet1: "",
    pet2: "",
    pet3: "",
    pet4: "",
    pet5: "",
    pet6: "",
    point: "",
    chose_pet: ""
}); 

const getInfo = () => {

    axios.post(`${import.meta.env.VITE_API_URL}getInfo.php`)
    .then((res) => {

        // console.log(res.data);
        
        res.data.forEach(item => {
            Pet.push({
                id: item.ID,
                name: item.NAME,
                on_picture: item.ON_PICTURE,
                off_picture: item.OFF_PICTURE,
                point:item.POINT
            });
        });
        
    }).catch(err => console.log(err))
}

const getPet = () => {

    let params = new URLSearchParams();
    params.append('id', id);

    axios.post(`${import.meta.env.VITE_API_URL}profile.php`,params)
    .then((res) => {

        console.log(res.data);
        memberData.pet1 = res.data[0].PET1;
        memberData.pet2 = res.data[0].PET2;
        memberData.pet3 = res.data[0].PET3;
        memberData.pet4 = res.data[0].PET4;
        memberData.pet5 = res.data[0].PET5;
        memberData.pet6 = res.data[0].PET6;
        memberData.point = res.data[0].POINT;
        memberData.chose_pet = res.data[0].CHOSE_PET_ID;


        
    }).catch(err => console.log(err))
}

onMounted(() => {
    getInfo();
    getPet();
    console.log(memberData);
});
</script>

<style lang="scss" scoped>
@import '../../assets/sass/page/member_mobile_pet';

.pet {
    height: fit-content;
    @include mobile {

        width: 100%;
        height: 1270px;
        margin-top: 170px;
        margin-bottom: 30px;

    }




    

    h3 {
        text-align: left;
        margin-bottom: 10px;

        @include mobile {
            padding-left: 20px;
        }

        span {}
    }

    p {
        text-align: left;

        @include mobile{
            padding-left: 20px;
        }
    }

    .area {
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        @include mobile{
            width: 90%;
            margin: 0 auto;
            margin-top: 30px;
        }

        .fish {
            width: 30%;
            height: fit-content;
            margin-bottom: 50px;

            @include mobile{
                width: 50%;
            }

            input {
                appearance: none;
            }

            label {
                text-align: center;
                margin: 0 auto;
                display: block;

                .container {
                    width: 90%;
                    height: 250px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    @include mobile{
                        height: 150px;
                    }

                    img {
                        max-width: 90%;
                        max-height: 250px;

                        @include mobile{
                            max-height: 150px;
                        }

                    }

                }

                .name {
                    text-align: center;
                    margin-bottom: 20px;
                }

                .point {
                    text-align: center;
                }
            }
        }

        .-chose {
            background-image: url(@/img/member_bg.png);
            background-size: contain;
            background-position: center center;
            background-repeat: no-repeat;
        }

        .button {
            width: 100%;

            .btn1 {
                display: block;
                width: fit-content;
                border: 0px;
                margin: 0 auto;
                margin-top: 20px;


                p {
                    font-family: "Noto Sans TC", sans-serif;
                    margin: 0;

                    @include mobile{
                        padding: 0;
                    }
                }
            }
        }


    }
}
</style>