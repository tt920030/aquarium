<template>
    <div class="pet wrapper">
        <h3>目前點數:&nbsp<span>2</span>點</h3>
        <p>-&nbsp每消費500元就可獲得1點</p>

        <form method="post" action="" class="area">
            <div class="fish -chose">
                <input type="radio" id="1" name="chose_pet" value="1" checked>
                <label for="1">
                    <div class="container">
                        <img src="../../img/member_pet1_on.png" alt="">
                    </div>

                    <p class="name">小丑魚</p>
                    <p class="point">1點</p>
                </label>

            </div>
            <div class="fish ">
                <input type="radio" id="2" name="chose_pet" value="2">
                <label for="2">
                    <div class="container">
                        <img src="../../img/member_pet2_off.png" alt="">
                    </div>

                    <p class="name">???</p>
                    <p class="point">5點</p>
                </label>

            </div>
            <div class="fish">
                <input type="radio" id="3" name="chose_pet" value="3">
                <label for="3">
                    <div class="container">
                        <img src="../../img/member_pet3_off.png" alt="">
                    </div>

                    <p class="name">???</p>
                    <p class="point">10點</p>
                </label>

            </div>
            <div class="fish">
                <input type="radio" id="4" name="chose_pet" value="4">
                <label for="4">
                    <div class="container">
                        <img src="../../img/member_pet4_off.png" alt="">
                    </div>

                    <p class="name">???</p>
                    <p class="point">15點</p>
                </label>

            </div>
            <div class="fish">
                <input type="radio" id="5" name="chose_pet" value="5">
                <label for="5">
                    <div class="container">
                        <img src="../../img/member_pet5_off.png" alt="">
                    </div>

                    <p class="name">???</p>
                    <p class="point">20點</p>
                </label>

            </div>
            <div class="fish">
                <input type="radio" id="6" name="chose_pet" value="6">
                <label for="6">
                    <div class="container">
                        <img src="../../img/member_pet6_off.png" alt="">
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

<style lang="scss" scoped></style>