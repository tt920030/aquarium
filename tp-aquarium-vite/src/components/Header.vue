<template>
   <header>
        <a class="logo" href=""><img src="src/img/logo-white.svg" alt=""></a>
        <nav>
            <ul class="icon">
                <li><span></span><button><img src="src/img/header_sun.svg" alt="">
                    </button></li>
                <li><button>EN</button></li>
                <li><button>繁</button></li>
                <li><a href=""><i class="bi bi-person-fill"></i></a></li>
                <li><a href=""><i class="bi bi-cart-fill"></i></a></li>
            </ul>
            <ul  class="menu">
                <li v-for="item in navItems"><a href="">
                        <p>{{item}}</p>
                    </a>
                </li>
            </ul>
        </nav>
    </header>

</template>

<script setup>
    const navItems = [ "最新消息", "園區介紹", "購票資訊", "行程預約", "參觀資訊", "網路商城", "小遊戲" ]
</script>

<style lang="scss" scoped>
    header {
    width: 100%;
    height: 192px;
    // background-image: url(../../img/header_bg1.png);
    background-image: url(../src/img/header_bg2.png);
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;
    // position: sticky;
    top: 0;
    left: 0;
    z-index: 999;

    .logo {
        img {
            width: 30%;
            margin-left: 30px;
        }
    }

    nav {
        display: flex;
        flex-direction: column;

        .icon {
            display: flex;
            flex-direction: row-reverse;
            margin-top: 20px;
            margin-right: 20px;

            li {
                margin-right: 20px;

                // span{
                //     width: 50px;
                //     height: 35px;
                //     background-color: white;
                // }
                button {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    border-style: none;
                    border-color: #ccf1f5;
                    background-color: #ccf1f5;
                    color: #16355a;
                }

                .icon{
                    i{
                        font-size: 25px;
                        color: #ccf1f5;
                    }

                }

                
            }
        }

        .menu {
            display: flex;
            flex-direction: row;
            margin-top: 20px;

            li {
                margin-right: 40px;

                p {
                    color: white;

                }
            }
        }
    }
}


</style>