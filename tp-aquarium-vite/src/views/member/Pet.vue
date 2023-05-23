<template>
    <div class="pet wrapper">
        <h3>目前點數:&nbsp<span>2</span>點</h3>
        <p>-&nbsp每消費500元就可獲得1點</p>

        <form method="post" action="" class="area">
            <div class="fish -chose">
                <input type="radio" id="1" name="chose_pet" value="1" checked>
                <label for="1">
                    <div class="container">
                        <img src="@/img/member_pet1_on.png" alt="">
                    </div>

                    <p class="name">小丑魚</p>
                    <p class="point">1點</p>
                </label>

            </div>
            <div class="fish ">
                <input type="radio" id="2" name="chose_pet" value="2">
                <label for="2">
                    <div class="container">
                        <img src="@/img/member_pet2_off.png" alt="">
                    </div>

                    <p class="name">???</p>
                    <p class="point">5點</p>
                </label>

            </div>
            <div class="fish">
                <input type="radio" id="3" name="chose_pet" value="3">
                <label for="3">
                    <div class="container">
                        <img src="@/img/member_pet3_off.png" alt="">
                    </div>

                    <p class="name">???</p>
                    <p class="point">10點</p>
                </label>

            </div>
            <div class="fish">
                <input type="radio" id="4" name="chose_pet" value="4">
                <label for="4">
                    <div class="container">
                        <img src="@/img/member_pet4_off.png" alt="">
                    </div>

                    <p class="name">???</p>
                    <p class="point">15點</p>
                </label>

            </div>
            <div class="fish">
                <input type="radio" id="5" name="chose_pet" value="5">
                <label for="5">
                    <div class="container">
                        <img src="@/img/member_pet5_off.png" alt="">
                    </div>

                    <p class="name">???</p>
                    <p class="point">20點</p>
                </label>

            </div>
            <div class="fish">
                <input type="radio" id="6" name="chose_pet" value="6">
                <label for="6">
                    <div class="container">
                        <img src="@/img/member_pet6_off.png" alt="">
                    </div>

                    <p class="name">???</p>
                    <p class="point">25點</p>
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