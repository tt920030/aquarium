<template>
    <footer>

        <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>

        <div class="content">
            <nav>
                <div class="left">
                    <h4>台北海生館</h4>
                    <p>台北市中正區杭州南路2023號</p>
                    <p>電話：02202320230</p>
                    <ul class="icon"></ul>
                </div>
                <div class="mid">
                    <h4>關於海生館</h4>
                    <router-link :to="{path: mid.path}" v-for="mid in mids" :key="mid.id">
                        <p>{{ mid.content }}</p>
                    </router-link>
                    

                </div>
                <div class="right">
                    <h4>營業項目</h4>
                    <router-link :to="{path: right.path}" v-for="right in rights">
                        <p>{{ right.content }}</p>
                    </router-link>
                </div>
                <a class="logo" href=""><img src="/src/img/logo-white.svg" alt=""></a>
            </nav>
        </div>
    </footer>
    
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
const mids = reactive([{
    path: '/about',
    content: "關於我們"
}, {
    path: "/visit_information",
    content: "參觀資訊"
}, {
    path: "/floor_Introduction",
    content: "園區介紹"
}]);

const rights = reactive([{
    path: '/ticket',
    content: "購票資訊"
}, {
    path: "/journey",
    content: "行程預約"
}, {
    path: "/stores",
    content: "網路商城"
}]);


</script>

<style lang="scss">
footer {
    position: relative;

    // bottom: 0;

    .ocean {
        height: 75px;
        width: 100%;
        position: absolute;
        bottom: 180px;
        left: 0;
        right: 0;
        overflow-x: hidden;

        @include mobile {
            height: 72px;
        }


        .wave {
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%23003F7C'/%3E%3C/svg%3E");
            position: absolute;
            width: 200%;
            height: 100%;
            animation: wave 10s -3s linear infinite;
            transform: translate3d(0, 0, 0);
            opacity: 0.8;
        }

        .wave:nth-of-type(2) {
            bottom: 0;
            animation: wave 18s linear reverse infinite;
            opacity: 0.5;
        }

        .wave:nth-of-type(3) {
            bottom: 0;
            animation: wave 20s -1s linear infinite;
            opacity: 0.5;
        }

        @keyframes wave {
            0% {
                transform: translateX(0);
            }

            50% {
                transform: translateX(-25%);
            }

            100% {
                transform: translateX(-50%);
            }
        }
    }


    .content {
        background-color: #003f7cf2;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        h4 {
            color: white;
            font-size: 18px;
            margin-bottom: 10px;
        }

        p {
            color: white;
            font-size: 14px;
            line-height: 3rem;
        }



        nav {
            // background-color: #16355a;
            display: flex;
            justify-content: center;
            height: 180px;
            margin: 0 auto;

            @include mobile {
                position: relative;
            }

            div {
                margin: 40px 60px 0px 50px;

                @include mobile {
                    margin: 10px 30px 0px 20px;
                }

            }

            .left {
                h4 {
                    position: relative;
                }

                h4::after {
                    content: "";
                    width: 120%;
                    height: 1px;
                    background-color: #fff;
                    position: absolute;
                    left: 0px;
                    bottom: -10px;
                }

                .icon {
                    display: flex;
                    margin-top: 20px;

                    img {
                        width: 65%;
                    }
                }
            }

            .right {
                margin-right: 220px;
            }





            @include mobile {
                .mid {
                    display: none;
                }

                .right {
                    display: none;
                }
            }

            // text-align:justify;
            .logo {
                flex: 0 0 160px;

                img {
                    width: 100%;
                    z-index: 999;

                    @include mobile {
                        position: absolute;
                        right: 30px;
                        bottom: 50px;
                        width: 28%;
                    }
                }
            }
        }

    }
}
</style>