<template>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&family=Noto+Serif+TC:wght@400;700&display=swap"
        rel="stylesheet" />
   <header>

        
        <div class="content">
            <RouterLink to="/" class="logo" href=""><img src="src/img/logo-white.svg" alt=""></RouterLink>
            <nav>
                <ul class="icon">
                    <!-- <div class="weather">
                        <img src="" alt="" class="weather_img">
                        <p><span class="temp"></span></p>
                        <p><span class="rain"></span></p>
                    </div> -->
                    <i class="bi bi-list"></i>
                    <li><button type="button" id="circle" class="switch" @click="SwitchColor"><i class="bi bi-sun-fill"></i></button></li>
                    <li><button><p>EN</p></button></li>
                    <li><button><p>繁</p></button></li>
                    <li><a href=""><img class="icons" src="src/img/header.member.svg" alt=""></a></li>
                    <li><a href=""><img class="icons" src="src/img/header_cart.svg" alt=""></a></li>
                </ul>
                <ul class="menu">
                    <li v-for="item in navItems">
                        <RouterLink :to="item.link"> <p>{{item.name}}</p></RouterLink>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>>
    </header>
</template>

<script setup>
    import{ RouterLink, RouterView } from "vue-router";
    import { onMounted, reactive, ref } from "vue";

    const navItems = [ {name:"最新消息",link:"/news"}, {name:"園區介紹",link:"/floor_Introduction"}, {name:"購票資訊",link:"/ticket"}, {name:"行程預約",link:"/journey"}, {name:"參觀資訊",link:"/visit_information"}, {name:"網路商城",link:"/stores"}, {name:"小遊戲",link:"/game_index"} ];

  
    //         SwitchColor(){
    //             if(!flag){
    //             // bg.classList.add("color");
    //             circle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    //             // let icon = document.querySelector('i');
    //             // console.log(icon)

    //             circle.style.backgroundColor = 'lightgrey';
    //             // icon.style.color = 'black';
    //             }else{
    //                 // bg.classList.remove("color");
    //                 circle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    //                 circle.style.backgroundColor = 'white';
    //             }
    //         }
    //     }
    // })

    let circle = document.getElementById("circle");
    console.log(circle);
    // let bg = document.getElementById('bgc');

    let flag = false;


    // weather API ---------------------------------------------------
    // 指定DOM
    // let xhr = new XMLHttpRequest();
    // let img = document.querySelector(".weather_img");
    // let tem = document.querySelector('.temp');
    // let rain = document.querySelector(".rain");

    // tem.addEventListener('change', getWeather);

    // // 串接API
    // function getWeather(){
    //     xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-27C8451A-9958-4266-BF95-4D2E7E36A415', true);
    //     xhr.send(null);
    //     xhr.onload = function () {

    //         // 讀取JSON檔
    //         var dataObject = JSON.parse(xhr.responseText);
    //         // console.log(dataObject);

    //         // 查找溫度資料
    //         let temp = dataObject.records.location[14].weatherElement[3].elementValue;
    //         // console.log(temp);

    //         // 查找天氣型態資料
    //         let WeatherState = dataObject.records.location[14].weatherElement[20].elementValue;
    //         // console.log(WeatherState);

    //         // 加上溫度單位
    //         let tempList = temp + "°C";

    //         // 放入html中
    //         tem.textContent = tempList;
    //         rain.textContent = WeatherState;

    //         // 找出天氣描述的第一個字去換圖片
    //         let a = WeatherState.split(",")[0];

    //         switch (a){
    //             case "陰":
    //                 img.setAttribute('src', './img/OKYJ1L1-02.png');
    //                 break;
    //             case "晴":
    //                 img.setAttribute('src', './img/OKYJ1L1-03.png');
    //                 break;
    //             default:
    //                 img.setAttribute('src', './img/OKYJ1L1_weather elements.png');
    //                 break;
    //         }
    //     }
    // }
    // getWeather(); 

</script>

<style lang="scss" scoped>
    header {
        .content{
        width: 100%;
        height: 128px;
        background-color: #003f7cf2;
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        overflow-x: hidden;
        @include mobile{
            height: 80px;
        }
        

        .logo {
            flex: 0 0 115px;
            // .weather{
            //     display: flex;
            //     gap: 10px;

            //     .weather_img{
            //         width: 3%;
            //         align-self: center;
            //     }
            // }

            @include mobile{
                flex:0 0 75px;
            }
            img {
                width: 100%;
                margin-left: 30px;
                padding-top: 10px;
                @include mobile{
                    margin-left: 10px;
                    padding-top: 10px;
                }
            }
        }

        nav {
            display: flex;
            flex-direction: column;
         

            .icon {
                display: flex;
                flex-direction: row-reverse;
                margin-top: 20px;
                margin-right: 18px;
                li:nth-child(5){
                    margin-right: 0;
                }
                li:nth-child(6){
                    margin-right: 0;
                }
                @include mobile{
                    margin-right: 5px;
                }
                
                i{
                    display: none;
                    @include mobile{
                        display: block;
                        font-size: 30px;
                        font-weight: bold;
                        color: white;
                    }
                }

                li {
                    margin-right: 20px;

                    @include mobile{
                        margin-right: 10px;
                    }
                    button {
                        width: 28px;
                        height: 28px;
                        border-radius: 50%;
                        border-style: none;
                        border-color: #fff;
                        background-color: #C1EAFB;
                        color: #16355a;
                        
                        @include mobile{
                            height: 26px;
                            width: 26px;
                        }
                        p{
                            font-size: 0.1rem;
                        }
                    }
                    a{
                       .icons{
                        width: 60%;
                       
                       }
                    }
                    
                    #circle{

                        i{
                            display: block;
                        }

                    }
                }

            }

            .menu {
                display: flex;
                flex-direction: row;
                margin-top: 20px;
                @include mobile{
                    margin: 0;
                }

                li {
                    margin-right: 40px;
                    @include mobile{
                        height: 40px;
                        margin-right: 0px;
                    }

                    p {
                        font-size: 1.6rem;
                        color: white;
                        letter-spacing: 0.6rem;
                        position: relative;
                        transition: 0.5s;

                        @include mobile{
                            line-height: 40px;
                            text-align: center;
                        }

                    }
                    p:after {
                        content: "";
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 95%;
                        height: 2px;
                        background-color: #FFF;
                        transition: 0.3s;
                        transform: scale(0);
                    }
                    p:hover::after {
                        transform: scaleX(1);
                    }
                }
                @include mobile{
                    display: none;
                    flex-direction: column;
                    width: 100%;
                    position: fixed;        
                    background-color:#16355a;
                    /* js滑入效果 */
                    right:-500px;
                    top:60px;
                    z-index: 1;
                }
            }
        }
          
    }

    .ocean {
        height: 74px;
        width: 100%;
        position: absolute;
        top:128px;
        left: 0;
        right: 0;
        overflow-x: hidden;
        transform:scaleY(-1);
        z-index: 99999;
        @include mobile{
            top:80px;
            height: 46px;
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
          0% {transform: translateX(0);}
          50% {transform: translateX(-25%);}
          100% {transform: translateX(-50%);}
      }
    }
}


</style>