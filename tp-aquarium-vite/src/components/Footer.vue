<template>
  <footer>
        <img class="bg" src="src/img/header_bg2.png" alt="">
        <nav>
            <div class="left">
                <h4>台北海生館</h4>
                <p>台北市中正區杭州南路2023號</p>
                <p>電話：02202320230</p>
                <ul class="icon"></ul>
            </div>
            <div class="mid">
                <h4>關於海生館</h4>
                <a v-for="mid in mids" href="">
                    <p>{{ mid }}</p>
                </a>

            </div>
            <div class="right">
                <h4>營業項目</h4>
                <a v-for="right in rights"  href="">
                    <p>{{ right }}</p>
                </a>
            </div>
            <a class="logo" href=""><img src="src/img/logo-white.svg" alt=""></a>
        </nav>
    </footer>
</template>

<script setup>
    const mids = ["關於我們","參觀資訊","園區介紹"];
    const rights = ["購票資訊", "行程預約", "網路商城"];
</script>

<style lang="scss">
   footer {
    position: absolute;
    .bg {
        width: 100%;
        transform: rotate(180deg);
        display: block;
        margin-bottom: -80px;
        z-index: -1;
        position: relative;
        // vertical-align: bottom;
    }

    h4 {
        color: white;
        font-size: 18px;
    }

    p {
        color: white;
        font-size: 14px;
        line-height: 3rem;
    }

   

    nav {
        background-color: #16355a;
        display: flex;
        justify-content: space-between;
        height: 180px;

        // text-align:justify;
        .logo {
            img {
                width: 40%;
                z-index: 999;
            }
        }
    }
}
</style>